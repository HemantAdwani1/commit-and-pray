import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "./ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/80 shadow-soft backdrop-blur-lg dark:bg-surface-dark/80"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-content flex h-16 items-center justify-between sm:h-20"
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink dark:text-white"
        >
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-ink/80 hover:text-ink dark:text-slate-300 dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <ButtonLink href="#contact" size="md" className="hidden lg:inline-flex">
            Start a project
          </ButtonLink>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink dark:border-slate-700 dark:text-white lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-surface dark:border-slate-800 dark:bg-surface-dark lg:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-card dark:text-white dark:hover:bg-card-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between px-3">
                <span className="text-sm font-medium text-muted dark:text-muted-dark">
                  Theme
                </span>
                <ThemeToggle />
              </li>
              <li className="px-3 pt-2">
                <ButtonLink
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full"
                >
                  Start a project
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
