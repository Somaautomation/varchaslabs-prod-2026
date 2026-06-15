import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    // Sensible defaults so the function works even if only the credentials
    // are set in the Vercel project.
    const host = process.env.SMTP_HOST || "smtp.zoho.in";
    const port = Number(process.env.SMTP_PORT || 587);
    // Accept multiple env-name conventions: SMTP_EMAIL/SMTP_PASSWORD (docs),
    // SMTP_USER/SMTP_PASS (common Vercel template), or ZOHO_USER/ZOHO_PASS
    // (what this project happens to use in production).
    const user =
      process.env.SMTP_EMAIL ||
      process.env.SMTP_USER ||
      process.env.ZOHO_USER;
    const pass =
      process.env.SMTP_PASSWORD ||
      process.env.SMTP_PASS ||
      process.env.ZOHO_PASS;
    const to = process.env.RECEIVER_EMAIL || user;

    if (!host || !user || !pass || !to) {
      console.error("[contact] missing SMTP env vars", {
        hasHost: !!host,
        hasUser: !!user,
        hasPass: !!pass,
        hasTo: !!to,
      });
      return res.status(500).json({ message: "Email not configured" });
    }

    // 465 -> implicit TLS, 587 -> STARTTLS. SMTP_SECURE can override.
    const secure =
      process.env.SMTP_SECURE === "true"
        ? true
        : process.env.SMTP_SECURE === "false"
          ? false
          : port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to,
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error: any) {
    // Surface SMTP error details into Vercel logs without leaking to client.
    console.error("[contact] sendMail failed", {
      code: error?.code,
      responseCode: error?.responseCode,
      command: error?.command,
      response: error?.response,
      message: error?.message,
    });
    return res.status(500).json({ message: "Email failed" });
  }
}
