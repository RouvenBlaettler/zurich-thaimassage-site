# zurich-thaimassage-site

## What this is
A rebuild of [gesundheits-thaimassage.ch](https://www.gesundheits-thaimassage.ch) — a real Thai massage studio in Zürich (Seefeld). Goal: match the old site's content and functionality, then go beyond it with **online payment, SEO, and a better design**. This is also a learning project — favor clear, understandable code over clever abstractions, and keep the reasoning behind non-obvious decisions documented (here or in commit messages), not just the decision itself.

## Current state (2026-08-24)
- **Phase 1 (discovery) is done.** The old site has been fully audited — content, functionality, and screenshots of every page — under `Documents/old-website-audit/`.
- **The real build hasn't started.** `fullstack/` is a bare connectivity scaffold: an Express backend with a single health-check route, and a static HTML/CSS/JS frontend with a "check backend" test button. None of it is production UI — don't extend it as if it were the real site without first deciding the actual stack (see Open decisions below).
- Two design directions were prototyped in v0.dev and linked from `Documents/figma-designs/figma-board.md` (a minimalist-luxury look and a traditional-Thai look) — no final pick recorded yet.
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
**Current scaffold:** vanilla HTML/CSS/JS frontend (served via `python3 -m http.server`), Express (ESM) backend with `cors`. No database, no auth, no payment integration yet.

**Proposed for the real build — not yet decided, confirm before committing:**
- Frontend: React/Next.js (matches what the v0.dev prototypes output) rather than continuing vanilla JS
- Backend: Express or Next.js API routes
- DB for bookings/availability: Postgres or SQLite
- Payment: Stripe (supports Twint in CH) or a Swiss-specific PSP like Datatrans

## Dev setup
```bash
git pull

cd fullstack/backend
npm install
npm start                        # http://localhost:4000

cd fullstack/frontend
python3 -m http.server 3000      # http://localhost:3000, calls the backend above
```

## Repo map
- `Documents/old-website-audit/` — `content.md`, `functionalities.md`, `screenshots/` — audit of the live old site; source of truth for what to preserve
- `Documents/figma-designs/figma-board.md` — v0.dev prototype links (design direction candidates, no final pick yet)
- `Documents/architecture.md` — empty, fill in once the stack below is decided
- `Documents/roadmap.txt` — Phase 1 only so far; Phase 2 (actual build) not yet planned
- `fullstack/backend`, `fullstack/frontend` — current connectivity scaffold, not the real site

## Open decisions (resolve before large build-out)
- Final tech stack: React/Next.js vs. continuing with the current vanilla scaffold
- Payment provider: Stripe (Twint support) vs. Datatrans vs. other
- Where booking/availability data lives (DB choice)
- Confirm actual session durations behind the 3 price tiers with the business owner
- Which v0.dev design direction to commit to (or a third option)
- Cookie consent requirement
