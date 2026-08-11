import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";

// Below-the-fold sections are code-split so the initial bundle stays small.
const About = lazy(() => import("@/sections/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("@/sections/Services").then((m) => ({ default: m.Services })));
const TechStack = lazy(() => import("@/sections/TechStack").then((m) => ({ default: m.TechStack })));
const Portfolio = lazy(() => import("@/sections/Portfolio").then((m) => ({ default: m.Portfolio })));
const Testimonials = lazy(() =>
  import("@/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const Process = lazy(() => import("@/sections/Process").then((m) => ({ default: m.Process })));
const FAQ = lazy(() => import("@/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/sections/Contact").then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return (
    <div className="flex h-64 items-center justify-center" aria-hidden="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Services />
          <TechStack />
          <Portfolio />
          {/* <Testimonials /> */}
          <Process />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
