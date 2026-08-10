import type { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// See Button.tsx for why these are omitted: Framer Motion's motion.div
// redefines these DOM event handlers with different signatures than
// React's native HTMLAttributes, which otherwise fails to type-check
// when spreading props onto a motion component.
type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onTransitionEnd";

interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingHandlers> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "rounded-2xl border border-slate-200/70 bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg dark:border-slate-800 dark:bg-card-dark",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
