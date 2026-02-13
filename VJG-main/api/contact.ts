import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  const mailText = `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Message:
${message}
`;

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      subject: "New Contact Form Submission",
      text: mailText,
      replyTo: email,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}