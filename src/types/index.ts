import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type SubmissionState = "idle" | "submitting" | "success" | "error";

export interface ContactRequestPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_type: string;
  budget: string;
  timeline: string;
  message: string;
}
