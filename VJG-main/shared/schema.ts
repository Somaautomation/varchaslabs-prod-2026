import {
  pgTable,
  text,
  serial,
  timestamp,
  boolean,
  integer,
  date,
  jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/* ---------------- Inquiries (existing) ---------------- */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

/* ---------------- Admins ---------------- */
export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  role: text("role").notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Admin = typeof admins.$inferSelect;
export type InsertAdmin = typeof admins.$inferInsert;

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

/* ---------------- Interns ---------------- */
export const interns = pgTable("interns", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  internshipId: text("internship_id").notNull().unique(),
  domain: text("domain").notNull(),
  college: text("college"),
  projectName: text("project_name"),
  mentorName: text("mentor_name"),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  performanceRating: text("performance_rating"),
  completionStatus: text("completion_status").notNull().default("in_progress"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertInternSchema = createInsertSchema(interns, {
  email: z.string().email(),
  startDate: z.string(),
  endDate: z.string(),
}).omit({ id: true, createdAt: true, updatedAt: true });

export const updateInternSchema = insertInternSchema.partial();

export type Intern = typeof interns.$inferSelect;
export type InsertIntern = z.infer<typeof insertInternSchema>;

/* ---------------- Certificates ---------------- */
export const certificates = pgTable("certificates", {
  id: serial("id").primaryKey(),
  certificateId: text("certificate_id").notNull().unique(),
  internId: integer("intern_id")
    .notNull()
    .references(() => interns.id, { onDelete: "cascade" }),
  verificationToken: text("verification_token").notNull(),
  pdfPath: text("pdf_path"),
  qrCode: text("qr_code"),
  emailSent: boolean("email_sent").notNull().default(false),
  emailSentAt: timestamp("email_sent_at"),
  status: text("status").notNull().default("valid"),
  expiresAt: timestamp("expires_at"),
  issuedAt: timestamp("issued_at").defaultNow(),
});

export type Certificate = typeof certificates.$inferSelect;
export type InsertCertificate = typeof certificates.$inferInsert;

/* ---------------- Activity Logs ---------------- */
export const activityLogs = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  adminId: integer("admin_id").references(() => admins.id, {
    onDelete: "set null",
  }),
  action: text("action").notNull(),
  entityType: text("entity_type"),
  entityId: text("entity_id"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type ActivityLog = typeof activityLogs.$inferSelect;
export type InsertActivityLog = typeof activityLogs.$inferInsert;

