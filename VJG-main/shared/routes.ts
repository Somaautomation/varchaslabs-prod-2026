import { insertInquirySchema } from "./schema";

export type { InsertInquiry } from "./schema";

export const api = {
  inquiries: {
    create: {
      method: "POST",
      path: "/api/inquiries",
      input: insertInquirySchema,
    },
    list: {
      method: "GET",
      path: "/api/inquiries",
    },
  },
} as const;
