import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

export function getMailer() {
  if (transporter) return transporter;
  const port = Number(process.env.SMTP_PORT || 465);
  // 465 → implicit TLS (secure:true). 587 → STARTTLS (secure:false).
  const secure =
    process.env.SMTP_SECURE != null
      ? process.env.SMTP_SECURE === "true"
      : port === 465;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.in",
    port,
    secure,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  return transporter;
}

interface SendCertEmailOpts {
  to: string;
  internName: string;
  domain: string;
  verificationUrl: string;
  certificateId: string;
  pdfBuffer: Buffer;
}

export async function sendCertificateEmail(opts: SendCertEmailOpts) {
  const mailer = getMailer();
  const html = certificateEmailTemplate({
    internName: opts.internName,
    domain: opts.domain,
    verificationUrl: opts.verificationUrl,
    certificateId: opts.certificateId,
  });

  return mailer.sendMail({
    from: `"Varchas Labs" <${process.env.SMTP_EMAIL}>`,
    to: opts.to,
    subject: "Your Internship Certificate - Varchas Labs Pvt Ltd",
    html,
    attachments: [
      {
        filename: `${opts.certificateId}.pdf`,
        content: opts.pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  });
}

function certificateEmailTemplate(p: {
  internName: string;
  domain: string;
  verificationUrl: string;
  certificateId: string;
}) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f6fa;padding:32px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:#0d1d45;padding:24px 28px;color:#fff;">
        <h1 style="margin:0;font-size:20px;letter-spacing:.5px;">VARCHAS LABS PVT LTD</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#c8cde0;">Engineering Excellence</p>
      </div>
      <div style="padding:28px;color:#1f2937;line-height:1.6;">
        <h2 style="margin:0 0 12px;color:#0d1d45;">Congratulations, ${escapeHtml(p.internName)}!</h2>
        <p>We are delighted to issue your <strong>Internship Certificate</strong> for successfully completing the internship in <strong>${escapeHtml(p.domain)}</strong> at Varchas Labs Pvt Ltd.</p>
        <p>Your certificate is attached to this email as a PDF. You can also verify it any time using the link below:</p>
        <p style="margin:22px 0;">
          <a href="${p.verificationUrl}" style="background:#0d1d45;color:#fff;padding:12px 22px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:600;">Verify Certificate</a>
        </p>
        <p style="font-size:13px;color:#6b7280;">Certificate ID: <strong>${escapeHtml(p.certificateId)}</strong></p>
        <p>We wish you the very best in your future endeavors.</p>
        <p style="margin-top:24px;">Warm regards,<br/><strong>Team Varchas Labs</strong></p>
      </div>
      <div style="background:#f9fafb;padding:14px 28px;font-size:12px;color:#6b7280;text-align:center;">
        © ${new Date().getFullYear()} Varchas Labs Pvt Ltd  •  www.varchaslabs.com
      </div>
    </div>
  </div>`;
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
