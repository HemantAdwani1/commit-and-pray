# Alex Morgan — Portfolio

A production-ready, static one-page portfolio for a freelance website
designer, built with React 19, TypeScript, Vite, Tailwind CSS, and Framer
Motion. The contact form writes directly to Supabase — there is no custom
backend server.

> **Using this as your own portfolio?** The name, bio, projects, and
> testimonials in `src/lib/content.ts` are placeholder content for a
> fictional designer. Replace them with your own before deploying — see
> [Customizing content](#customizing-content) below.

## Tech stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion,
  React Hook Form, Zod, Lucide icons
- **Backend:** Supabase (Postgres + Row Level Security) — no custom server
- **Hosting:** GitHub Pages, deployed via GitHub Actions

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase project values
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Available scripts

| Script            | What it does                                  |
| ------------------ | ---------------------------------------------- |
| `npm run dev`       | Start the local dev server with hot reload     |
| `npm run build`     | Type-check and build for production into `dist/` |
| `npm run preview`   | Preview the production build locally           |
| `npm run lint`      | Run ESLint                                      |

## Setting up Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** and run the migration in
   `supabase/migrations/0001_create_contact_requests.sql`. This creates the
   `contact_requests` table with Row Level Security enabled and an
   insert-only policy for the public `anon` role.
3. Go to **Project Settings → API** and copy the **Project URL** and the
   **anon public** key (never the `service_role` key) into `.env.local`:

   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

4. To view submitted messages, use the **Table Editor** in the Supabase
   dashboard (authenticated as the project owner), or build an authenticated
   admin view — the anon key used by this site cannot read rows back, by
   design.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys automatically on
every push to `main`.

1. **Set the base path.** Open `vite.config.ts` and set `REPO_NAME` to your
   GitHub repository's name (e.g. if your repo is
   `github.com/you/portfolio`, `REPO_NAME` should be `"portfolio"`).
2. **Add repository secrets.** In your GitHub repo, go to **Settings →
   Secrets and variables → Actions** and add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. **Enable Pages.** Go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
4. **Push to `main`.** The workflow builds the site and publishes `dist/`
   automatically. Your site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

If you're deploying to a custom domain instead of a `/<repo-name>/`
subpath, set `REPO_NAME` to an empty string in `vite.config.ts` (so
`base` resolves to `/`) and add a `CNAME` file to `public/`.

See `DEPLOYMENT.md` for a manual (non-Actions) deployment path and a
troubleshooting checklist.

## Customizing content

All editable copy lives in one file: `src/lib/content.ts` — name, bio,
services, tech stack, projects, testimonials, process steps, FAQs, and
social links. Colors and fonts are design tokens in `tailwind.config.js`.
SEO metadata (title, description, Open Graph, JSON-LD) lives in
`index.html`.

## Project structure

```
public/               Static assets: favicon, robots.txt, sitemap.xml, manifest
src/
  components/
    ui/                Reusable primitives (Button, Card, Reveal, SectionHeading)
    Navbar.tsx          Sticky nav with scroll-spy + mobile menu
    Footer.tsx
    ThemeToggle.tsx
  sections/             One file per page section (Hero, About, Services, ...)
  hooks/                useTheme, useActiveSection, useCountUp
  lib/
    content.ts           All editable site copy/data
    schema.ts             Zod validation schema for the contact form
    supabase.ts            Supabase client (anon key only)
    utils.ts                 Class helper, sanitization, spam-cooldown helpers
  types/                 Shared TypeScript types
supabase/migrations/     SQL migration(s) — run in the Supabase SQL editor
.github/workflows/       GitHub Actions deploy workflow
```

## Security notes

- Only the Supabase **anon** key is ever present in the frontend bundle.
  It is restricted to `INSERT`-only access by the Row Level Security
  policy in the SQL migration — it cannot read, update, or delete data.
- The contact form includes a hidden honeypot field, a client-side
  submission cooldown, and matching `check` constraints in the database
  as a second line of defense if the API is ever called directly.
- All environment variables are read from `.env.local` (git-ignored) or
  from GitHub Actions secrets — never hard-coded.

## Performance & accessibility

- Below-the-fold sections are code-split with `React.lazy` to keep the
  initial bundle small.
- Images use `loading="lazy"` and explicit `width`/`height` to avoid
  layout shift.
- Semantic landmarks, visible focus states, and `aria-*` attributes are
  used throughout; animations respect `prefers-reduced-motion`.
- Run `npm run build && npm run preview`, then audit with Lighthouse in
  Chrome DevTools before deploying.

## License

Use this template freely for your own portfolio.
