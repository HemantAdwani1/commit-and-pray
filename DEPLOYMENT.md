# Deployment guide

## Recommended: GitHub Actions (automatic)

Already configured in `.github/workflows/deploy.yml`. See the "Deploying to
GitHub Pages" section of `README.md` for the full setup. Once configured,
every push to `main` rebuilds and republishes the site — no local build
step required.

## Alternative: manual deploy with `gh-pages`

If you'd rather deploy from your machine instead of using Actions:

```bash
npm install -D gh-pages
```

Add to `package.json` `"scripts"`:

```json
"deploy": "npm run build && npx gh-pages -d dist"
```

Then, with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` set in
`.env.local`:

```bash
npm run deploy
```

This pushes the contents of `dist/` to a `gh-pages` branch. In your
repository's **Settings → Pages**, set **Source** to the `gh-pages`
branch (`/root`).

## Checklist before your first deploy

- [ ] `REPO_NAME` in `vite.config.ts` matches your GitHub repo name exactly
- [ ] `supabase/migrations/0001_create_contact_requests.sql` has been run
      in your Supabase project's SQL editor
- [ ] `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set — as GitHub
      Actions secrets (automatic path) or in `.env.local` (manual path)
- [ ] `index.html` metadata (canonical URL, Open Graph URL/image, JSON-LD
      `url`/`sameAs`) points to your real domain, not the placeholder
      `alexmorgan.design`
- [ ] `public/sitemap.xml` and `public/robots.txt` reference your real
      domain
- [ ] `npm run build` completes with no errors locally

## Common issues

**Blank page after deploying, assets 404.**
The `base` path in `vite.config.ts` doesn't match your repo name. It must
be `/<repo-name>/` for a project site (`username.github.io/repo-name`), or
`/` if you're using a custom domain or a `username.github.io` root repo.

**Contact form shows "not connected yet."**
`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` weren't available at build
time. Vite inlines env vars during `npm run build`, so they must be set
as GitHub Actions secrets (or in `.env.local` for a manual build) *before*
building — setting them after the fact requires a rebuild.

**Form submits but nothing shows up in Supabase.**
Confirm the migration ran successfully (check **Table Editor** for the
`contact_requests` table) and that the RLS insert policy exists (**Authentication
→ Policies**, or re-run the `create policy` statement from the migration).

**404 on direct navigation to a route other than `/`.**
This site is intentionally a single page with anchor-link navigation
(`#about`, `#contact`, etc.), so there are no separate routes to 404 on.
If you add React Router routes later, add a `404.html` that redirects to
`index.html` for GitHub Pages SPA support.
