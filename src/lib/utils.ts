type ClassValue = string | number | null | undefined | false;

/** Lightweight class name joiner (no external dependency required). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Strips characters that have no legitimate place in plain-text form input
 * and could be used for markup/script injection if ever rendered as HTML.
 * Supabase + Postgres parameterized inserts already prevent SQL injection;
 * this guards against stored-XSS if this data is later rendered in an
 * admin dashboard.
 */
export function sanitizeText(value: string): string {
  return value
    .replace(/</g, "")
    .replace(/>/g, "")
    .trim();
}

const COOLDOWN_KEY = "contact_form_last_submit";
const COOLDOWN_MS = 60_000; // one submission per minute per browser

/** Returns milliseconds remaining before another submission is allowed, or 0. */
export function getSubmissionCooldownRemaining(): number {
  try {
    const last = window.localStorage.getItem(COOLDOWN_KEY);
    if (!last) return 0;
    const elapsed = Date.now() - Number(last);
    return elapsed >= COOLDOWN_MS ? 0 : COOLDOWN_MS - elapsed;
  } catch {
    return 0;
  }
}

export function markSubmissionTimestamp(): void {
  try {
    window.localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch {
    // localStorage unavailable (e.g. private browsing) — cooldown is
    // best-effort client-side UX, not a security boundary, so ignore.
  }
}
