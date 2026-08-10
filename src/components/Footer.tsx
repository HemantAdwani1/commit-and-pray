import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-surface dark:border-slate-800 dark:bg-surface-dark">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <a
            href="#home"
            className="font-display text-lg font-bold text-ink dark:text-white"
          >
            {SITE.name}
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted dark:text-muted-dark">
            {SITE.tagline}
          </p>
          <ul className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-white"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink dark:text-white">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink dark:text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted dark:text-muted-dark">
            <li>{SITE.location}</li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1 transition-colors hover:text-accent"
              >
                {SITE.email}
                <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 dark:border-slate-800">
        <div className="container-content flex flex-col items-center justify-between gap-3 text-xs text-muted dark:text-muted-dark sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Designed &amp; built by {SITE.name}.</p>
        </div>
      </div>
    </footer>
  );
}
