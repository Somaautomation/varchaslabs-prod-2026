import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "../shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";
import { registerInternshipRoutes } from "./internshipRoutes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);

      // ✅ Save to database (existing logic untouched)
      const inquiry = await storage.createInquiry(input);

      // ✅ Send Email (NEW ADDITION — does not affect DB logic)
      const transporter = nodemailer.createTransport({
        host: "smtp.zoho.in",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL,
        subject: `New Inquiry from ${input.name}`,
        replyTo: input.email,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Phone:</strong> ${input.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });

      // ✅ Return original response
      res.status(201).json(inquiry);

    } catch (err) {
      console.error(err);

      if (err instanceof z.ZodError) {
  console.log("ZOD ERROR:", err.errors);
  res.status(400).json({ errors: err.errors });
  return;
}

      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Internship Certificate Management System
  registerInternshipRoutes(app);

  return httpServer;
}
