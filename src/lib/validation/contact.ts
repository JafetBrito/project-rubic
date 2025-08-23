// src/lib/validation/contact.ts
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  subject: z.string().max(140).optional(),
  message: z.string().min(10).max(4000),
  company: z.string().optional(), // honeypot
});

export type ContactInput = z.infer<typeof ContactSchema>;
