import {
  Layout,
  Rocket,
  Building2,
  ShoppingCart,
  Briefcase,
  LayoutDashboard,
  RefreshCw,
  Search,
  Gauge,
  Smartphone,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Project,
  Testimonial,
  ProcessStep,
  FaqItem,
} from "@/types";


export const SITE = {
  name: "Hemant Adwani",
  role: "Freelance Website Designer & Frontend Developer",
  email: "hemant.adwani22@gmail.com",
  location: "Remote — working with clients worldwide",
  tagline:
    "I design and build fast, elegant websites that turn visitors into customers.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: Linkedin,
  },
  // { label: "Twitter", href: "https://twitter.com/alexmorgan", icon: Twitter },
  { label: "Email", href: "mailto:hemant.adwani22@gmail.com", icon: Mail },
];

export const SERVICES: Service[] = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Custom, brand-driven designs that feel considered from the hero to the footer — not assembled from a template.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "High-conversion landing pages built to turn campaign traffic into signups, demos, and sales.",
  },
  {
    icon: Building2,
    title: "Business Websites",
    description:
      "Professional multi-page sites that give small and mid-size businesses credibility online.",
  },
  // {
  //   icon: ShoppingCart,
  //   title: "E-Commerce",
  //   description:
  //     "Storefronts focused on fast checkout flows, clear product presentation, and mobile conversion.",
  // },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description:
      "Distinctive portfolio sites for designers, agencies, and creators that showcase work without noise.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard UI",
    description:
      "Clean, data-dense interface design for internal tools and SaaS products that stays usable at scale.",
  },
  // {
  //   icon: RefreshCw,
  //   title: "Website Redesign",
  //   description:
  //     "Modernizing dated sites — improving structure, visual hierarchy, and performance without losing SEO equity.",
  // },
  // {
  //   icon: Search,
  //   title: "SEO Optimization",
  //   description:
  //     "Technical and on-page SEO foundations: semantic markup, metadata, sitemaps, and structured data.",
  // },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Faster load times through code splitting, image optimization, and disciplined bundle size budgets.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Interfaces tested from 320px phones to 4K displays, with no shortcuts on tablet or landscape layouts.",
  },
];

export const TECH_STACK = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Supabase",
  "Git",
  "GitHub",
  "Figma",
];

export const PROJECTS: Project[] = [
  {
    id: "courtyard-cafe",
    title: "Courtyard Cafe",
    description:
      "A modern, responsive cafe website designed to showcase the menu and brand. Features include interactive menus, gallery, location, opening hours and Whatsapp Integration",
    image: "/commit-and-pray/courtyard-cafe.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl:  "/commit-and-pray/courtyard-cafe.html",
    githubUrl: "https://hemantadwani1.github.io/commit-and-pray",
    featured: true,
  },
  // {
  //   id: "verdant-goods",
  //   title: "Verdant Goods",
  //   description:
  //     "E-commerce storefront for a sustainable home goods brand, built with a sub-2s load time and streamlined checkout.",
  //   image:
  //     "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
  //   tags: ["React", "Supabase", "Tailwind CSS"],
  //   liveUrl: "https://example.com/verdant-goods",
  //   githubUrl: "https://github.com/alexmorgan/verdant-goods",
  //   featured: true,
  // },
  // {
  //   id: "atlas-analytics",
  //   title: "Atlas Analytics",
  //   description:
  //     "A dashboard UI for a B2B analytics product — dense data tables, saved views, and accessible chart components.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-a5c8b7ba9b0c?q=80&w=1200&auto=format&fit=crop",
  //   tags: ["React", "TypeScript", "Recharts"],
  //   liveUrl: "https://example.com/atlas-analytics",
  //   githubUrl: "https://github.com/alexmorgan/atlas-analytics",
  // },
  // {
  //   id: "field-notes-studio",
  //   title: "Field Notes Studio",
  //   description:
  //     "Portfolio site for a photography studio, built around large-format imagery with careful lazy-loading.",
  //   image:
  //     "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop",
  //   tags: ["React", "Framer Motion"],
  //   liveUrl: "https://example.com/field-notes-studio",
  //   githubUrl: "https://github.com/alexmorgan/field-notes-studio",
  // },
  // {
  //   id: "harbor-clinic",
  //   title: "Harbor Clinic",
  //   description:
  //     "Website redesign for a healthcare practice, prioritizing accessibility, appointment booking, and local SEO.",
  //   image:
  //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  //   tags: ["React", "SEO", "Accessibility"],
  //   liveUrl: "https://example.com/harbor-clinic",
  //   githubUrl: "https://github.com/alexmorgan/harbor-clinic",
  // },
  // {
  //   id: "loop-collective",
  //   title: "Loop Collective",
  //   description:
  //     "Landing page for a product launch campaign that drove a measurable lift in waitlist signups.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  //   tags: ["React", "Landing Page", "A/B Testing"],
  //   liveUrl: "https://example.com/loop-collective",
  //   githubUrl: "https://github.com/alexmorgan/loop-collective",
  // },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "Founder",
    company: "Northwind Finance",
    quote:
      "Alex rebuilt our site in six weeks and our demo requests doubled the following quarter. The handoff was clean and the code is easy for our team to extend.",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Webb",
    role: "Co-founder",
    company: "Verdant Goods",
    quote:
      "Every round of feedback was turned around fast, and the final site felt genuinely custom rather than templated. Checkout conversion improved right away.",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Nair",
    role: "Product Lead",
    company: "Atlas Analytics",
    quote:
      "Our dashboard went from cluttered to genuinely usable. Alex asked sharp questions about our data before designing a single screen.",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
  },
  {
    id: "t4",
    name: "Daniel Reyes",
    role: "Owner",
    company: "Harbor Clinic",
    quote:
      "Patient bookings from the website nearly tripled after the redesign. Alex also caught accessibility issues our old agency never mentioned.",
    avatar: "https://i.pravatar.cc/120?img=68",
    rating: 5,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "A focused call to understand your business, audience, and goals for the site — and to confirm scope and timeline.",
  },
  {
    step: "02",
    title: "Research",
    description:
      "Reviewing competitors, brand assets, and analytics to ground design decisions in evidence, not guesswork.",
  },
  {
    step: "03",
    title: "Wireframing",
    description:
      "Low-fidelity layouts that settle information hierarchy and user flow before any visual design begins.",
  },
  {
    step: "04",
    title: "Design",
    description:
      "High-fidelity design in Figma, with a documented design system so the site stays consistent as it grows.",
  },
  {
    step: "05",
    title: "Development",
    description:
      "Building with React, TypeScript, and Tailwind — semantic, accessible, and performance-budgeted from the start.",
  },
  {
    step: "06",
    title: "Testing",
    description:
      "Cross-browser and cross-device QA, accessibility checks, and Lighthouse audits before anything ships.",
  },
  {
    step: "07",
    title: "Deployment",
    description:
      "Launching to production with monitoring in place, plus a walkthrough so you're never locked out of your own site.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most landing pages take 1–2 weeks, and full multi-page websites take 4–8 weeks depending on scope, content readiness, and revision rounds.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Design, development, responsive testing, basic SEO setup, and a 30-day post-launch support window are included in every project quote.",
  },
  {
    question: "Do you write the content and copy?",
    answer:
      "I can draft initial copy as part of the design process, but the strongest results come from a light collaboration — you know your customers best.",
  },
  {
    question: "Will I be able to update the site myself afterward?",
    answer:
      "Yes. Depending on the project we'll use a CMS, a simple content layer, or clear documentation so your team isn't dependent on me for every change.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Optional monthly retainers are available for updates, monitoring, and small feature additions after the initial 30-day support window ends.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A completed project brief, any existing brand assets, and a single point of contact for feedback — I'll handle the rest and keep you updated weekly.",
  },
];
