import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  visaType: z.string().min(1),
  destination: z.string().min(1),
  message: z.string().min(1),
  locale: z.string().optional().default("en"),
  source: z.string().optional().default("contact_form")
});

export const bookingSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  visaType: z.string().min(1),
  destination: z.string().min(1),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  timezone: z.string().min(1),
  notes: z.string().optional().default("")
});
