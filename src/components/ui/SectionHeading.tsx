import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted dark:text-muted-dark">
          {description}
        </p>
      )}
    </motion.div>
  );
}
