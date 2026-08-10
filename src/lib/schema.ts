import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, "Company name is too long")
    .optional()
    .or(z.literal("")),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a little more — at least 20 characters")
    .max(2000, "Message is too long"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms to continue",
  }),
  // Honeypot: real users never see or fill this field. Any value here
  // means the submission came from a bot and is silently rejected.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const PROJECT_TYPES = [
  "Website Design",
  "Landing Page",
  "Business Website",
  "E-Commerce",
  "Portfolio Website",
  "Dashboard UI",
  "Website Redesign",
  "Other",
];

export const BUDGET_RANGES = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export const TIMELINES = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Just exploring",
];
