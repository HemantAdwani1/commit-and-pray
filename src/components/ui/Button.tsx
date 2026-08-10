import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

// Framer Motion redefines several DOM event handlers (drag/animation/
// transition callbacks) with different signatures than React's built-in
// HTML attribute types. Omitting them here avoids a type conflict when
// spreading native button/anchor props onto motion.button / motion.a.
type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onTransitionEnd";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow hover:bg-accent-hover",
  secondary:
    "bg-primary text-white hover:bg-slate-800 dark:bg-white dark:text-primary dark:hover:bg-slate-200",
  ghost:
    "bg-transparent text-ink dark:text-white border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
);
Button.displayName = "Button";

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => (
    <motion.a
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.a>
  )
);
ButtonLink.displayName = "ButtonLink";
