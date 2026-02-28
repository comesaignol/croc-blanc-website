# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (run before deploying)
npm run lint     # ESLint check
npm run start    # Start production server locally
```

No test suite is configured. Run `npm run build` to catch type errors and build issues before deploying.

## Architecture

**Next.js 15 App Router** (React 19) — all routes live under `src/app/`, all shared components under `src/components/`.

### Routing structure
- `src/app/layout.tsx` — root layout wrapping every page with `<Navigation>` and `<Footer>`
- `src/app/page.tsx` — homepage: assembles section components sequentially (Hero → Values → Services → Technology → Team → Journey → Testimonials → BlogPreview → ContactMap)
- Inner pages (`/soins`, `/technologies`, `/equipe`, `/conseils`, `/contact`, `/mentions-legales`, `/politique-confidentialite`) each have their own `page.tsx`

### Design system
Defined in two files — **do not duplicate styles inline** when a utility exists:

- `src/app/globals.css` — custom component classes: `.btn-primary`, `.btn-gold`, `.btn-outline`, `.section-label`, `.section-title`, `.container-site`, `.gold-line`, `.gold-line-center`
- `tailwind.config.ts` — custom color tokens: `navy` / `navy-light` / `navy-dark`, `gold` / `gold-light` / `gold-dark`, `ivory` / `ivory-dark`, `muted`
- Font variables: `--font-playfair` (serif, headings) and `--font-inter` (sans, body) injected via `next/font/google` in `layout.tsx`

### Images
Remote images from `images.unsplash.com` are allowed via `next.config.mjs`. Always use `next/image` (`<Image>`) for all images. The logo is at `public/logo.jpeg`.

### Security headers
Configured in both `next.config.mjs` (applied at runtime) and `vercel.json` (applied at CDN level). The CSP allows `unsafe-inline` for scripts and styles (required by Next.js). Adding new external domains for fonts, scripts, or images requires updating the CSP `img-src` / `font-src` / `script-src` directives in both files.

## Key conventions

- `robots` is set to `noindex/nofollow` on `mentions-legales` and `politique-confidentialite` pages (correct). `public/robots.txt` now allows all crawlers — Sitemap URL must be updated to the real domain before going live
- Placeholder contact info throughout (`04 XX XX XX XX`, `XX Rue [À compléter]`) must be replaced by the client
- The project is in French; keep all user-facing copy in French
