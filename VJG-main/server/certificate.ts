import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Intern, Certificate } from "@shared/schema";

// Resolve the directory of this file in a way that works in both ESM (dev via tsx)
// and CJS (production bundle from esbuild). In CJS, __dirname is provided
// natively and import.meta.url is empty.
const here =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));
const SIG_DIR = path.resolve(here, "assets", "signatures");
const PUBLIC_IMG_DIR = path.resolve(here, "..", "client", "public", "images");

/**
 * Try to load a signature image (PNG or JPG).
 * Looks first in server/assets/signatures/, then in client/public/images/.
 * For the "authorized" signature, also tries the special Vasanthi-Sig file.
 */
async function loadSignatureImage(
  doc: PDFDocument,
  baseName: string,
): Promise<{ img: any; width: number; height: number } | null> {
  const names = [
    `${baseName}.png`,
    `${baseName}.PNG`,
    `${baseName}.jpg`,
    `${baseName}.jpeg`,
  ];
  // Special-case mappings for known signatures shipped in client/public/images.
  if (baseName === "authorized") {
    names.push("Vasanthi-Sig.png.png", "Vasanthi-Sig.png", "vasanthi-sig.png");
  }
  const dirs = [SIG_DIR, PUBLIC_IMG_DIR];
  for (const dir of dirs) {
    for (const file of names) {
      const full = path.join(dir, file);
      if (!fs.existsSync(full)) continue;
      try {
        const bytes = fs.readFileSync(full);
        const lower = file.toLowerCase();
        const img =
          lower.endsWith(".png") || lower.endsWith(".png.png")
            ? await doc.embedPng(bytes)
            : await doc.embedJpg(bytes);
        return { img, width: img.width, height: img.height };
      } catch (e) {
        console.warn(`[cert] failed to embed signature ${full}:`, e);
      }
    }
  }
  return null;
}

const fmtDate = (d: Date | string) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export interface CertContext {
  intern: Intern;
  certificate: Certificate;
  verificationUrl: string;
}

/**
 * Build a premium A4 landscape PDF certificate.
 * Returns a Uint8Array suitable for streaming or saving.
 */
export async function generateCertificatePdf(
  ctx: CertContext,
): Promise<Uint8Array> {
  const { intern, certificate, verificationUrl } = ctx;

  const doc = await PDFDocument.create();
  // A4 landscape (842 x 595 pt)
  const page = doc.addPage([842, 595]);
  const { width, height } = page.getSize();

  const fontReg = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  // Brand palette
  const navy = rgb(0.05, 0.11, 0.27);
  const gold = rgb(0.83, 0.66, 0.22);
  const ink = rgb(0.13, 0.16, 0.22);
  const muted = rgb(0.45, 0.48, 0.55);
  const soft = rgb(0.97, 0.97, 0.99);

  // Background
  page.drawRectangle({ x: 0, y: 0, width, height, color: soft });

  // Outer border
  page.drawRectangle({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    borderColor: navy,
    borderWidth: 2,
  });
  // Inner gold accent border
  page.drawRectangle({
    x: 30,
    y: 30,
    width: width - 60,
    height: height - 60,
    borderColor: gold,
    borderWidth: 1,
  });

  // Top header band
  page.drawRectangle({
    x: 30,
    y: height - 110,
    width: width - 60,
    height: 80,
    color: navy,
  });

  // Brand text
  page.drawText("VARCHAS LABS PVT LTD", {
    x: 60,
    y: height - 70,
    size: 22,
    font: fontSerif,
    color: rgb(1, 1, 1),
  });
  page.drawText("Engineering Excellence  •  www.varchaslabs.com", {
    x: 60,
    y: height - 92,
    size: 10,
    font: fontReg,
    color: rgb(0.85, 0.85, 0.9),
  });

  // Logo (top-right) — falls back to gold seal if file missing
  const logoPath = path.resolve(
    __dirname,
    "..",
    "client",
    "public",
    "images",
    "logo.png",
  );
  let logoDrawn = false;
  if (fs.existsSync(logoPath)) {
    try {
      const logoBytes = fs.readFileSync(logoPath);
      const logoImg = await doc.embedPng(logoBytes);
      const maxLogo = 64;
      const scale = Math.min(maxLogo / logoImg.width, maxLogo / logoImg.height);
      const lw = logoImg.width * scale;
      const lh = logoImg.height * scale;
      page.drawImage(logoImg, {
        x: width - 60 - lw,
        y: height - 70 - lh / 2,
        width: lw,
        height: lh,
      });
      logoDrawn = true;
    } catch (e) {
      console.warn("[cert] failed to embed logo:", e);
    }
  }
  if (!logoDrawn) {
    page.drawCircle({
      x: width - 80,
      y: height - 70,
      size: 28,
      color: gold,
    });
    page.drawText("SEAL", {
      x: width - 95,
      y: height - 74,
      size: 9,
      font: fontBold,
      color: navy,
    });
  }

  // Title
  const title = "Certificate of Internship";
  const titleSize = 32;
  const titleWidth = fontSerif.widthOfTextAtSize(title, titleSize);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y: height - 170,
    size: titleSize,
    font: fontSerif,
    color: navy,
  });

  const subtitle = "This certificate is proudly presented to";
  const subSize = 12;
  const subWidth = fontReg.widthOfTextAtSize(subtitle, subSize);
  page.drawText(subtitle, {
    x: (width - subWidth) / 2,
    y: height - 200,
    size: subSize,
    font: fontItalic,
    color: muted,
  });

  // Intern name
  const name = intern.fullName;
  const nameSize = 30;
  const nameWidth = fontBold.widthOfTextAtSize(name, nameSize);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y: height - 240,
    size: nameSize,
    font: fontBold,
    color: ink,
  });

  // Underline
  page.drawLine({
    start: { x: (width - nameWidth) / 2 - 20, y: height - 250 },
    end: { x: (width - nameWidth) / 2 + nameWidth + 20, y: height - 250 },
    thickness: 1,
    color: gold,
  });

  // Body text
  const body =
    `has successfully completed the internship in ${intern.domain} at Varchas Labs Pvt Ltd ` +
    `from ${fmtDate(intern.startDate)} to ${fmtDate(intern.endDate)}.` +
    (intern.projectName
      ? ` During this period, the intern worked on "${intern.projectName}" and demonstrated`
      : " The intern demonstrated") +
    " dedication, professionalism, and technical skills.";

  drawWrappedText(page, body, {
    x: 90,
    y: height - 290,
    maxWidth: width - 180,
    lineHeight: 18,
    font: fontReg,
    size: 12,
    color: ink,
  });

  // Signature blocks
  const sigY = 110;
  const sigBoxW = 170; // width between line endpoints
  const sigBoxH = 40;  // max height for signature image above the line

  // Helper to draw a signature image scaled to fit inside the signature box
  const drawSig = (
    sig: { img: any; width: number; height: number } | null,
    lineStartX: number,
  ) => {
    if (!sig) return;
    const scale = Math.min(sigBoxW / sig.width, sigBoxH / sig.height);
    const drawW = sig.width * scale;
    const drawH = sig.height * scale;
    page.drawImage(sig.img, {
      x: lineStartX + (sigBoxW - drawW) / 2,
      y: sigY + 4,
      width: drawW,
      height: drawH,
    });
  };

  // Load signature images (optional). Place PNGs at:
  //   server/assets/signatures/authorized.png
  //   server/assets/signatures/mentor.png  (generic fallback)
  //   server/assets/signatures/<mentor-name-slug>.png  (per-mentor override)
  const mentorSlug = (intern.mentorName || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const authorizedSig = await loadSignatureImage(doc, "authorized");
  const mentorSig =
    (mentorSlug && (await loadSignatureImage(doc, mentorSlug))) ||
    (await loadSignatureImage(doc, "mentor"));

  // Left signature
  drawSig(authorizedSig, 100);
  page.drawLine({
    start: { x: 100, y: sigY },
    end: { x: 270, y: sigY },
    thickness: 1,
    color: ink,
  });
  page.drawText("Vasanthi P R", {
    x: 145,
    y: sigY - 14,
    size: 11,
    font: fontBold,
    color: ink,
  });
  page.drawText("Authorized Signatory, Varchas Labs Pvt Ltd", {
    x: 100,
    y: sigY - 28,
    size: 9,
    font: fontReg,
    color: muted,
  });

  // Right signature (mentor)
  drawSig(mentorSig, width - 270);
  page.drawLine({
    start: { x: width - 270, y: sigY },
    end: { x: width - 100, y: sigY },
    thickness: 1,
    color: ink,
  });
  page.drawText(intern.mentorName || "Mentor", {
    x: width - 250,
    y: sigY - 14,
    size: 10,
    font: fontBold,
    color: ink,
  });
  page.drawText("Mentor", {
    x: width - 200,
    y: sigY - 28,
    size: 9,
    font: fontReg,
    color: muted,
  });

  // QR code
  const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
    margin: 1,
    width: 220,
  });
  const qrBytes = Buffer.from(qrDataUrl.split(",")[1], "base64");
  const qrImg = await doc.embedPng(qrBytes);
  const qrSize = 90;
  page.drawImage(qrImg, {
    x: width / 2 - qrSize / 2,
    y: 60,
    width: qrSize,
    height: qrSize,
  });
  const verifyLabel = "Scan to verify";
  const vlW = fontReg.widthOfTextAtSize(verifyLabel, 9);
  page.drawText(verifyLabel, {
    x: width / 2 - vlW / 2,
    y: 50,
    size: 9,
    font: fontReg,
    color: muted,
  });

  // Footer: certificate ID + issue date
  page.drawText(`Certificate ID: ${certificate.certificateId}`, {
    x: 60,
    y: 45,
    size: 9,
    font: fontBold,
    color: ink,
  });
  page.drawText(
    `Issued: ${fmtDate(certificate.issuedAt || new Date())}    Internship ID: ${intern.internshipId}`,
    { x: 60, y: 32, size: 8, font: fontReg, color: muted },
  );

  // Watermark
  page.drawText("VARCHAS LABS", {
    x: 200,
    y: 280,
    size: 60,
    font: fontSerif,
    color: rgb(0.93, 0.93, 0.95),
    rotate: degrees(20),
    opacity: 0.4,
  });

  return await doc.save();
}

interface WrapOpts {
  x: number;
  y: number;
  maxWidth: number;
  lineHeight: number;
  font: any;
  size: number;
  color: any;
}

function drawWrappedText(page: any, text: string, opts: WrapOpts) {
  const words = text.split(/\s+/);
  let line = "";
  let y = opts.y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    const w = opts.font.widthOfTextAtSize(test, opts.size);
    if (w > opts.maxWidth) {
      page.drawText(line, {
        x: opts.x,
        y,
        size: opts.size,
        font: opts.font,
        color: opts.color,
      });
      line = word;
      y -= opts.lineHeight;
    } else {
      line = test;
    }
  }
  if (line) {
    page.drawText(line, {
      x: opts.x,
      y,
      size: opts.size,
      font: opts.font,
      color: opts.color,
    });
  }
}
