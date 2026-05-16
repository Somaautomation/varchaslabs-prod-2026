import type { Express } from "express";
import { z } from "zod";
import crypto from "crypto";
import multer from "multer";
import Papa from "papaparse";
import archiver from "archiver";
import { storage } from "./storage";
import {
  requireAdmin,
  signToken,
  comparePassword,
  type AuthedRequest,
} from "./auth";
import {
  adminLoginSchema,
  insertInternSchema,
  updateInternSchema,
} from "@shared/schema";
import { generateCertificatePdf } from "./certificate";
import { sendCertificateEmail } from "./mailer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/** Lightweight in-memory rate limiter (per IP). */
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
function loginRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 10;
  const rec = loginAttempts.get(ip);
  if (!rec || rec.resetAt < now) {
    loginAttempts.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  rec.count += 1;
  return rec.count <= max;
}

function publicBaseUrl(req: any) {
  return (
    process.env.PUBLIC_BASE_URL ||
    `${req.protocol}://${req.get("host")}`
  ).replace(/\/$/, "");
}

function makeCertificateId() {
  const year = new Date().getFullYear();
  const rand = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `VLABS-${year}-${rand}`;
}

async function buildAndStoreCertificate(internId: number, baseUrl: string) {
  const intern = await storage.getInternById(internId);
  if (!intern) throw new Error("Intern not found");

  let cert = await storage.getCertificateByInternId(internId);
  if (!cert) {
    const certificateId = makeCertificateId();
    const verificationToken = crypto.randomBytes(16).toString("hex");
    cert = await storage.createCertificate({
      certificateId,
      internId: intern.id,
      verificationToken,
      status: "valid",
    });
  }

  const verificationUrl = `${baseUrl}/verify/${cert.certificateId}`;
  const pdfBytes = await generateCertificatePdf({
    intern,
    certificate: cert,
    verificationUrl,
  });
  return { intern, cert, verificationUrl, pdfBuffer: Buffer.from(pdfBytes) };
}

export function registerInternshipRoutes(app: Express) {
  /* ---------------- AUTH ---------------- */
  app.post("/api/admin/auth/login", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      if (!loginRateLimit(ip)) {
        res.status(429).json({ message: "Too many attempts. Try again later." });
        return;
      }
      const { email, password } = adminLoginSchema.parse(req.body);
      const admin = await storage.getAdminByEmail(email);
      if (!admin) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }
      const ok = await comparePassword(password, admin.passwordHash);
      if (!ok) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }
      const token = signToken({ id: admin.id, email: admin.email });
      await storage.logActivity({
        adminId: admin.id,
        action: "admin.login",
        entityType: "admin",
        entityId: String(admin.id),
      });
      res.json({
        token,
        admin: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", errors: err.errors });
        return;
      }
      console.error(err);
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.get("/api/admin/auth/me", requireAdmin, (req: AuthedRequest, res) => {
    res.json({ admin: req.admin });
  });

  /* ---------------- DASHBOARD ---------------- */
  app.get(
    "/api/admin/dashboard/stats",
    requireAdmin,
    async (_req: AuthedRequest, res) => {
      const [totalInterns, totalCerts, completed, inProgress, recent] =
        await Promise.all([
          storage.countInterns(),
          storage.countCertificates(),
          storage.countInternsByStatus("completed"),
          storage.countInternsByStatus("in_progress"),
          storage.listActivity(15),
        ]);
      res.json({
        totalInterns,
        totalCertificates: totalCerts,
        pendingCertificates: Math.max(0, completed - totalCerts),
        completedInterns: completed,
        inProgressInterns: inProgress,
        recentActivity: recent,
      });
    },
  );

  /* ---------------- INTERNS CRUD ---------------- */
  app.get("/api/admin/interns", requireAdmin, async (req, res) => {
    const { search, status, domain, page, pageSize } = req.query;
    const result = await storage.listInterns({
      search: search as string | undefined,
      status: status as string | undefined,
      domain: domain as string | undefined,
      page: page ? Number(page) : 1,
      pageSize: pageSize ? Number(pageSize) : 20,
    });
    res.json(result);
  });

  app.get("/api/admin/interns/:id", requireAdmin, async (req, res) => {
    const intern = await storage.getInternById(Number(req.params.id));
    if (!intern) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(intern);
  });

  app.post(
    "/api/admin/interns",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      try {
        const data = insertInternSchema.parse(req.body);
        const intern = await storage.createIntern(data);
        await storage.logActivity({
          adminId: req.admin!.id,
          action: "intern.create",
          entityType: "intern",
          entityId: String(intern.id),
          metadata: { internshipId: intern.internshipId },
        });
        res.status(201).json(intern);
      } catch (err: any) {
        if (err instanceof z.ZodError) {
          res.status(400).json({ message: "Invalid input", errors: err.errors });
          return;
        }
        res.status(500).json({ message: err.message || "Failed" });
      }
    },
  );

  app.patch(
    "/api/admin/interns/:id",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      try {
        const data = updateInternSchema.parse(req.body);
        const intern = await storage.updateIntern(Number(req.params.id), data);
        if (!intern) {
          res.status(404).json({ message: "Not found" });
          return;
        }
        await storage.logActivity({
          adminId: req.admin!.id,
          action: "intern.update",
          entityType: "intern",
          entityId: String(intern.id),
        });
        res.json(intern);
      } catch (err: any) {
        if (err instanceof z.ZodError) {
          res.status(400).json({ message: "Invalid input", errors: err.errors });
          return;
        }
        res.status(500).json({ message: err.message || "Failed" });
      }
    },
  );

  app.delete(
    "/api/admin/interns/:id",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      const id = Number(req.params.id);
      const ok = await storage.deleteIntern(id);
      if (!ok) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      await storage.logActivity({
        adminId: req.admin!.id,
        action: "intern.delete",
        entityType: "intern",
        entityId: String(id),
      });
      res.json({ success: true });
    },
  );

  /* ---------- Bulk CSV upload ---------- */
  app.post(
    "/api/admin/interns/bulk-upload",
    requireAdmin,
    upload.single("file"),
    async (req: AuthedRequest, res) => {
      try {
        if (!req.file) {
          res.status(400).json({ message: "No file uploaded" });
          return;
        }
        const text = req.file.buffer.toString("utf8");
        const parsed = Papa.parse<Record<string, string>>(text, {
          header: true,
          skipEmptyLines: true,
        });

        const created: any[] = [];
        const errors: any[] = [];
        for (const [i, row] of parsed.data.entries()) {
          try {
            const mapped = {
              fullName: row.fullName || row.full_name || row["Full Name"],
              email: row.email || row.Email,
              phone: row.phone || row.Phone || undefined,
              internshipId:
                row.internshipId ||
                row.internship_id ||
                row["Internship ID"] ||
                `VL-INT-${Date.now()}-${i}`,
              domain: row.domain || row.Domain,
              college: row.college || row.College || undefined,
              projectName:
                row.projectName || row.project_name || row["Project Name"] || undefined,
              mentorName:
                row.mentorName || row.mentor_name || row["Mentor Name"] || undefined,
              startDate: row.startDate || row.start_date || row["Start Date"],
              endDate: row.endDate || row.end_date || row["End Date"],
              performanceRating:
                row.performanceRating ||
                row.performance_rating ||
                row["Performance Rating"] ||
                undefined,
              completionStatus:
                row.completionStatus ||
                row.completion_status ||
                row["Completion Status"] ||
                "in_progress",
            };
            const validated = insertInternSchema.parse(mapped);
            const intern = await storage.createIntern(validated);
            created.push(intern);
          } catch (e: any) {
            errors.push({ row: i + 1, error: e.message || String(e) });
          }
        }

        await storage.logActivity({
          adminId: req.admin!.id,
          action: "intern.bulk_upload",
          metadata: { created: created.length, errors: errors.length },
        });

        res.json({ created: created.length, errors });
      } catch (err: any) {
        res.status(500).json({ message: err.message || "Bulk upload failed" });
      }
    },
  );

  /* ---------- Export interns CSV ---------- */
  app.get(
    "/api/admin/interns/export/csv",
    requireAdmin,
    async (_req: AuthedRequest, res) => {
      const { rows } = await storage.listInterns({ page: 1, pageSize: 10000 });
      const csv = Papa.unparse(rows);
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="interns-${Date.now()}.csv"`,
      );
      res.send(csv);
    },
  );

  /* ---------------- CERTIFICATES ---------------- */
  app.get(
    "/api/admin/certificates",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      const { page, pageSize } = req.query;
      const result = await storage.listCertificates({
        page: page ? Number(page) : 1,
        pageSize: pageSize ? Number(pageSize) : 20,
      });
      res.json(result);
    },
  );

  /** Generate (and re-generate) a certificate for one intern. */
  app.post(
    "/api/admin/certificates/generate/:internId",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      try {
        const internId = Number(req.params.internId);
        const baseUrl = publicBaseUrl(req);
        const built = await buildAndStoreCertificate(internId, baseUrl);

        await storage.logActivity({
          adminId: req.admin!.id,
          action: "certificate.generate",
          entityType: "certificate",
          entityId: built.cert.certificateId,
        });

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${built.cert.certificateId}.pdf"`,
        );
        res.send(built.pdfBuffer);
      } catch (err: any) {
        res.status(500).json({ message: err.message || "Failed to generate" });
      }
    },
  );

  /** Email certificate to the intern (generates if missing). */
  app.post(
    "/api/admin/certificates/send/:internId",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      try {
        const internId = Number(req.params.internId);
        const baseUrl = publicBaseUrl(req);
        const built = await buildAndStoreCertificate(internId, baseUrl);

        await sendCertificateEmail({
          to: built.intern.email,
          internName: built.intern.fullName,
          domain: built.intern.domain,
          verificationUrl: built.verificationUrl,
          certificateId: built.cert.certificateId,
          pdfBuffer: built.pdfBuffer,
        });

        await storage.updateCertificate(built.cert.id, {
          emailSent: true,
          emailSentAt: new Date(),
        });
        await storage.logActivity({
          adminId: req.admin!.id,
          action: "certificate.email",
          entityType: "certificate",
          entityId: built.cert.certificateId,
        });

        res.json({ success: true, certificateId: built.cert.certificateId });
      } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message || "Failed to send email" });
      }
    },
  );

  /** Bulk generate ZIP of certificates for given intern IDs. */
  app.post(
    "/api/admin/certificates/bulk-zip",
    requireAdmin,
    async (req: AuthedRequest, res) => {
      try {
        const schema = z.object({ internIds: z.array(z.number()).min(1) });
        const { internIds } = schema.parse(req.body);
        const baseUrl = publicBaseUrl(req);

        res.setHeader("Content-Type", "application/zip");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="certificates-${Date.now()}.zip"`,
        );

        const archive = archiver("zip", { zlib: { level: 9 } });
        archive.pipe(res);

        for (const id of internIds) {
          try {
            const built = await buildAndStoreCertificate(id, baseUrl);
            archive.append(built.pdfBuffer, {
              name: `${built.cert.certificateId}-${built.intern.fullName.replace(/\s+/g, "_")}.pdf`,
            });
          } catch (e) {
            console.error("bulk-zip skip", id, e);
          }
        }

        await storage.logActivity({
          adminId: req.admin!.id,
          action: "certificate.bulk_zip",
          metadata: { count: internIds.length },
        });

        await archive.finalize();
      } catch (err: any) {
        if (!res.headersSent) {
          res.status(500).json({ message: err.message || "Failed" });
        }
      }
    },
  );

  /* ---------------- PUBLIC VERIFICATION ---------------- */
  app.get("/api/verify/:certificateId", async (req, res) => {
    const cert = await storage.getCertificateByCertId(req.params.certificateId);
    if (!cert) {
      res.status(404).json({ valid: false, message: "Certificate not found" });
      return;
    }
    const intern = await storage.getInternById(cert.internId);
    if (!intern) {
      res.status(404).json({ valid: false, message: "Intern not found" });
      return;
    }
    const expired = cert.expiresAt && new Date(cert.expiresAt) < new Date();
    const valid = cert.status === "valid" && !expired;

    res.json({
      valid,
      certificate: {
        certificateId: cert.certificateId,
        issuedAt: cert.issuedAt,
        status: valid ? "Valid" : expired ? "Expired" : cert.status,
        expiresAt: cert.expiresAt,
      },
      intern: {
        fullName: intern.fullName,
        domain: intern.domain,
        projectName: intern.projectName,
        startDate: intern.startDate,
        endDate: intern.endDate,
        internshipId: intern.internshipId,
        college: intern.college,
      },
    });
  });
}
