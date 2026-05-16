import { insertInquirySchema } from "./schema";

export const api = {
  inquiries: {
    create: {
      path: "/api/inquiries",
      input: insertInquirySchema,
    },
    list: {
      path: "/api/inquiries",
    },
  },
} as const;
