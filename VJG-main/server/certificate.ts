import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import QRCode from "qrcode";
import type { Intern, Certificate } from "@shared/schema";

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

  // Gold seal placeholder (top-right)
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
  // Left signature
  page.drawLine({
    start: { x: 100, y: sigY },
    end: { x: 270, y: sigY },
    thickness: 1,
    color: ink,
  });
  page.drawText("Authorized Signatory", {
    x: 130,
    y: sigY - 14,
    size: 10,
    font: fontBold,
    color: ink,
  });
  page.drawText("Varchas Labs Pvt Ltd", {
    x: 132,
    y: sigY - 28,
    size: 9,
    font: fontReg,
    color: muted,
  });

  // Right signature (mentor)
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
