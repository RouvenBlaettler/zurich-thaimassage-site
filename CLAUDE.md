# zurich-thaimassage-site

## What this is
A rebuild of [gesundheits-thaimassage.ch](https://www.gesundheits-thaimassage.ch) — a real Thai massage studio in Zürich (Seefeld). Goal: match the old site's content and functionality, then go beyond it with **online payment, SEO, and a better design**. This is also a learning project — favor clear, understandable code over clever abstractions, and keep the reasoning behind non-obvious decisions documented (here or in commit messages), not just the decision itself.

## Current state (2026-08-25)
- **Phase 1 (discovery) is done.** The old site has been fully audited — content, functionality, and screenshots of every page — under `Documents/old-website-audit/`.
- **Frontend build has started.** `fullstack/frontend` is now a real Vite + React app with 4 routed pages (Home, Angebot, Über uns, Jetzt Buchen) styled in a bold gold/burgundy Thai look, built from the old site's screenshots as visual reference (not the v0.dev figma prototypes — those were explicitly not used). This is design/UI only: no booking logic, no payment, no backend wiring yet — the Angebot page's service filter and the Jetzt Buchen calendar are locally-interactive but don't persist or submit anywhere, and the contact form doesn't send. `fullstack/backend` is still the original bare Express health-check scaffold, untouched.
- The v0.dev prototypes linked from `Documents/figma-designs/figma-board.md` were considered and explicitly rejected as the visual direction in favor of the old site's own gold/burgundy identity — treat that link as historical, not a live option.
- `Documents/architecture.md` and `Documents/roadmap.txt` (Phase 2+) are still empty/unwritten.

## Business reference (source of truth: old site audit)
- **Gesundheits-Thaimassage Seefeld** — Münchhaldenstrasse 7, 8008 Zürich — +41 78 690 43 99 — Mo–Sa 10:30–21:00
- Services, each with 3 pricing tiers (likely 30/60/90 min, **unconfirmed** — ask the owner):
  | Service | Price |
  |---|---|
  | Klassische Massage | CHF 70 / 120 / 170 |
  | Traditionelle Thai-Massage | CHF 70 / 120 / 170 |
  | Aroma- und Ölmassage | CHF 70 / 120 / 170 |
  | Hot-Stone | CHF 139 / 189 (2 tiers) |
- Full copy (hero text, About Us, testimonials, contact form fields) → `Documents/old-website-audit/content.md`
- Full functionality/UX notes (nav behavior, booking flow, filters, open questions) → `Documents/old-website-audit/functionalities.md`
- Screenshots of every old page → `Documents/old-website-audit/screenshots/`

Treat these audit files as ground truth for "what must be preserved" — don't invent content or prices; if something's missing or ambiguous, it's flagged in `functionalities.md` as a question for the real business owner.

## MVP scope

**Must-have (parity with old site + the 3 stated improvements):**
1. Home / Angebot (services + pricing, filterable by category) / Über uns — German, matching old site's IA
2. Booking flow: calendar + time-slot picker, tied to a chosen service and price tier
3. **Online payment** integrated into booking (new — old site had no payment step). Switzerland strongly expects **Twint**; card payment as a fallback.
4. Contact form: Vorname, Nachname, E-Mail* , Telefonnummer, Nachricht* — with a working submit path (email owner and/or store it)
5. Embedded Google Maps pinned to the business address
6. Responsive, mobile-first layout (old site was Wix desktop-first)
7. **SEO basics**: per-page meta tags/titles, semantic HTML, `sitemap.xml`, `robots.txt`, LocalBusiness structured data, fast load (old Wix site was heavy — screenshots alone total tens of MB)
8. Testimonials section

**Later / Phase 2+:**
- Admin view for the owner to manage bookings/availability
- Booking confirmation email/SMS + reminders
- Multi-language (old site was German-only)
- Cookie consent banner (verify if legally required for this setup under Swiss/GDPR rules)
- Analytics

## Tech stack
**Frontend (decided):** React 18 + Vite + React Router, plain CSS per component (no CSS-in-JS, no Tailwind) — kept simple and readable on purpose since this is a learning project. Design tokens (colors, fonts, spacing) live in `fullstack/frontend/src/index.css`. No component library — a small hand-built inline SVG icon set (`src/components/icons.jsx`) instead of an icon package or stock photography.

**Backend:** still the original Express (ESM) scaffold with `cors` and a single health-check route — not yet wired to the new frontend. No database, no auth, no payment integration yet.

**Still open — confirm before committing:**
- Backend for the real build: continue with Express, or move to Next.js API routes
- DB for bookings/availability: Postgres or SQLite
- Payment: Stripe (supports Twint in CH) or a Swiss-specific PSP like Datatrans

## Dev setup
```bash
git pull

cd fullstack/backend
npm install
npm start                        # http://localhost:4000

cd fullstack/frontend
npm install
npm run dev                      # http://localhost:3000 (Vite)
```

## Repo map
- `Documents/old-website-audit/` — `content.md`, `functionalities.md`, `screenshots/` — audit of the live old site; source of truth for what to preserve
- `Documents/figma-designs/figma-board.md` — v0.dev prototype links (design direction candidates, no final pick yet)
- `Documents/architecture.md` — empty, fill in once the stack below is decided
- `Documents/roadmap.txt` — Phase 1 only so far; Phase 2 (actual build) not yet planned
- `fullstack/backend` — original Express connectivity scaffold, not yet wired to the real frontend
- `fullstack/frontend` — real React/Vite frontend (Home, Angebot, Über uns, Jetzt Buchen); design/UI only, no booking or payment logic yet

## Open decisions (resolve before large build-out)
- Backend framework for the real build: Express vs. Next.js API routes
- Payment provider: Stripe (Twint support) vs. Datatrans vs. other
- Where booking/availability data lives (DB choice)
- Confirm actual session durations behind the 3 price tiers with the business owner
- Cookie consent requirement
