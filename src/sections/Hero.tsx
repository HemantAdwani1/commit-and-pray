import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

const MOCKUP_BLOCKS = [
  { width: "70%", tone: "bg-accent/70" },
  { width: "45%", tone: "bg-secondary/60" },
  { width: "85%", tone: "bg-slate-300 dark:bg-slate-600" },
  { width: "60%", tone: "bg-slate-200 dark:bg-slate-700" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background: grid pattern + soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-16 h-96 w-96 animate-float rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-[28rem] w-[28rem] animate-float rounded-full bg-secondary/20 blur-3xl [animation-delay:1.5s]"
        aria-hidden="true"
      />

      <div className="container-content relative grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left: headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-card px-4 py-1.5 text-xs font-medium text-ink dark:border-slate-700 dark:bg-card-dark dark:text-white"
          >
            <Sparkles size={14} className="text-accent" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl"
          >
            Websites, designed
            <br />
            with <span className="text-gradient">precision</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-muted dark:text-muted-dark"
          >
            I'm {SITE.name}, a freelance website designer and frontend
            developer. {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="#contact" size="lg">
              Start a project
              <ArrowRight size={18} />
            </ButtonLink>
            {/* <ButtonLink href="#portfolio" variant="ghost" size="lg">
              View my work
            </ButtonLink> */}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-white"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: floating browser mockup, tilts toward cursor */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative hidden [perspective:1200px] lg:block"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl border border-slate-200/70 bg-surface/90 p-3 shadow-soft-lg backdrop-blur dark:border-slate-700 dark:bg-card-dark/90"
          >
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-2 pb-3 dark:border-slate-800">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <div className="ml-3 h-5 flex-1 rounded-full bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="space-y-4 p-5">
              <div className="h-8 w-2/3 rounded-lg bg-primary/90 dark:bg-white/90" />
              {MOCKUP_BLOCKS.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                  style={{ width: block.width, transformOrigin: "left" }}
                  className={`h-3 rounded-full ${block.tone}`}
                />
              ))}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating badge card */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -bottom-6 -left-8 animate-float rounded-xl border border-slate-200/70 bg-surface p-4 shadow-soft-lg dark:border-slate-700 dark:bg-card-dark"
          >
            <p className="text-2xl font-bold text-ink dark:text-white">98</p>
            <p className="text-xs text-muted dark:text-muted-dark">Lighthouse score</p>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted dark:text-muted-dark"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
