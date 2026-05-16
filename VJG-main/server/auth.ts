import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { admins } from "@shared/schema";
import { eq } from "drizzle-orm";

const JWT_SECRET = process.env.JWT_SECRET || "change-me-in-env";
const JWT_EXPIRES_IN = "12h";

export interface AuthedRequest extends Request {
  admin?: { id: number; email: string; name: string; role: string };
}

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function requireAdmin(
  req: AuthedRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const token = header.slice(7);
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

    const [admin] = await db
      .select()
      .from(admins)
      .where(eq(admins.id, decoded.id))
      .limit(1);

    if (!admin) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }

    req.admin = {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    };
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

/**
 * Seed default admin if no admin exists. Reads creds from env:
 *   SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD, SEED_ADMIN_NAME
 */
export async function ensureSeedAdmin() {
  const existing = await db.select().from(admins).limit(1);
  if (existing.length > 0) return;

  const email = process.env.SEED_ADMIN_EMAIL || "admin@varchaslabs.com";
  const password = process.env.SEED_ADMIN_PASSWORD || "Admin@12345";
  const name = process.env.SEED_ADMIN_NAME || "Varchas Admin";

  const passwordHash = await hashPassword(password);
  await db.insert(admins).values({ email, passwordHash, name, role: "admin" });

  // eslint-disable-next-line no-console
  console.log(`[auth] Seeded default admin: ${email}`);
}
