import {
  inquiries,
  admins,
  interns,
  certificates,
  activityLogs,
  type InsertInquiry,
  type Inquiry,
  type Admin,
  type Intern,
  type InsertIntern,
  type Certificate,
  type InsertCertificate,
  type ActivityLog,
  type InsertActivityLog,
} from "@shared/schema";
import { db } from "./db";
import { and, desc, eq, ilike, or, sql } from "drizzle-orm";

export const storage = {
  /* ---------------- Inquiries ---------------- */
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  },

  /* ---------------- Admins ---------------- */
  async getAdminByEmail(email: string): Promise<Admin | undefined> {
    const [row] = await db.select().from(admins).where(eq(admins.email, email)).limit(1);
    return row;
  },

  /* ---------------- Interns ---------------- */
  async listInterns(params: {
    search?: string;
    status?: string;
    domain?: string;
    page?: number;
    pageSize?: number;
  }): Promise<{ rows: Intern[]; total: number }> {
    const page = Math.max(1, params.page ?? 1);
    const pageSize = Math.min(100, Math.max(1, params.pageSize ?? 20));

    const conditions: any[] = [];
    if (params.search) {
      const q = `%${params.search}%`;
      conditions.push(
        or(
          ilike(interns.fullName, q),
          ilike(interns.email, q),
          ilike(interns.internshipId, q),
          ilike(interns.domain, q),
        ),
      );
    }
    if (params.status) conditions.push(eq(interns.completionStatus, params.status));
    if (params.domain) conditions.push(eq(interns.domain, params.domain));

    const where = conditions.length ? and(...conditions) : undefined;

    const rows = await db
      .select()
      .from(interns)
      .where(where as any)
      .orderBy(desc(interns.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(interns)
      .where(where as any);

    return { rows, total: count };
  },

  async getInternById(id: number): Promise<Intern | undefined> {
    const [row] = await db.select().from(interns).where(eq(interns.id, id)).limit(1);
    return row;
  },

  async getInternByInternshipId(internshipId: string): Promise<Intern | undefined> {
    const [row] = await db
      .select()
      .from(interns)
      .where(eq(interns.internshipId, internshipId))
      .limit(1);
    return row;
  },

  async createIntern(input: InsertIntern): Promise<Intern> {
    const [row] = await db.insert(interns).values(input as any).returning();
    return row;
  },

  async updateIntern(id: number, input: Partial<InsertIntern>): Promise<Intern | undefined> {
    const [row] = await db
      .update(interns)
      .set({ ...(input as any), updatedAt: new Date() })
      .where(eq(interns.id, id))
      .returning();
    return row;
  },

  async deleteIntern(id: number): Promise<boolean> {
    const result = await db.delete(interns).where(eq(interns.id, id)).returning();
    return result.length > 0;
  },

  async countInterns(): Promise<number> {
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(interns);
    return count;
  },

  async countInternsByStatus(status: string): Promise<number> {
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(interns)
      .where(eq(interns.completionStatus, status));
    return count;
  },

  /* ---------------- Certificates ---------------- */
  async createCertificate(input: InsertCertificate): Promise<Certificate> {
    const [row] = await db.insert(certificates).values(input).returning();
    return row;
  },

  async updateCertificate(
    id: number,
    input: Partial<InsertCertificate>,
  ): Promise<Certificate | undefined> {
    const [row] = await db
      .update(certificates)
      .set(input)
      .where(eq(certificates.id, id))
      .returning();
    return row;
  },

  async getCertificateById(id: number): Promise<Certificate | undefined> {
    const [row] = await db
      .select()
      .from(certificates)
      .where(eq(certificates.id, id))
      .limit(1);
    return row;
  },

  async getCertificateByCertId(certId: string): Promise<Certificate | undefined> {
    const [row] = await db
      .select()
      .from(certificates)
      .where(eq(certificates.certificateId, certId))
      .limit(1);
    return row;
  },

  async getCertificateByInternId(internId: number): Promise<Certificate | undefined> {
    const [row] = await db
      .select()
      .from(certificates)
      .where(eq(certificates.internId, internId))
      .limit(1);
    return row;
  },

  async listCertificates(params: { page?: number; pageSize?: number }) {
    const page = Math.max(1, params.page ?? 1);
    const pageSize = Math.min(100, Math.max(1, params.pageSize ?? 20));

    const rows = await db
      .select({ cert: certificates, intern: interns })
      .from(certificates)
      .leftJoin(interns, eq(certificates.internId, interns.id))
      .orderBy(desc(certificates.issuedAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(certificates);

    return { rows, total: count };
  },

  async countCertificates(): Promise<number> {
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(certificates);
    return count;
  },

  /* ---------------- Activity Logs ---------------- */
  async logActivity(input: InsertActivityLog): Promise<ActivityLog> {
    const [row] = await db.insert(activityLogs).values(input).returning();
    return row;
  },

  async listActivity(limit = 20): Promise<ActivityLog[]> {
    return db
      .select()
      .from(activityLogs)
      .orderBy(desc(activityLogs.createdAt))
      .limit(limit);
  },
};

export type Storage = typeof storage;

