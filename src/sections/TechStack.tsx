import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/content";

export function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I reach for, and know well enough to push"
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/70 bg-card px-4 py-8 text-center dark:border-slate-800 dark:bg-card-dark"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:from-accent/10 group-hover:to-secondary/10 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="font-display text-lg font-bold text-ink transition-colors group-hover:text-accent dark:text-white">
                {tech
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <span className="relative text-sm font-medium text-muted dark:text-muted-dark">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
