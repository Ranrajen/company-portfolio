# Outpro.India — Corporate Website

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production: `npm run build` (output goes to `dist/`).

## What was actually broken

1. **`Navbar.jsx` and `Footer.jsx` didn't exist.** `App.jsx` imported both, so the app
   failed to build at all — that's almost certainly why "the alignment" looked broken;
   nothing was rendering correctly without a working layout shell. Both are now in
   `src/components/layout/`.

2. **Two competing page sets.** `Home.jsx` vs `HomePage.jsx`, and `ServicesSection.jsx` vs
   `ServicesGrid.jsx` did the same job with different styling systems. Kept `Home.jsx` +
   `ServicesSection.jsx` (the ones matching the brand theme) and dropped the duplicates.

3. **Only one route existed.** `App.jsx` only had `/`. About, Services, Portfolio, and
   Contact pages existed as files but were never wired into the router. All routes are
   now registered, plus a `/services/:slug` detail route and a 404 page.

4. **Half the pages called a backend that doesn't exist.** `AboutPage`, `ServicesPage`,
   `ServiceDetailPage`, and `PortfolioPage` all fetched from `http://localhost:5000/api/...`.
   With no backend running, every fetch failed silently and rendered empty grids. They now
   read from `src/data/company.js` directly. `src/lib/api.js` is still there (and used by
   the contact form) so wiring in a real backend later is just setting `VITE_API_BASE_URL`.

5. **Two different design systems fighting each other.** Some pages used the custom brand
   classes (`container-custom`, `section-padding`, `glass-card`, `gradient-text`,
   `brand-crimson`), others used plain Tailwind defaults (`red-600`, `gray-900`, `max-w-7xl`).
   Mixing the two is what made spacing and colors look inconsistent page-to-page. Everything
   now uses the one brand system defined in `index.css`.

6. **`Button.jsx` dropped `onClick` (and any other prop) for the `to`/`href` variants** —
   only the plain `<button>` branch spread `...props`. Fixed so all three variants behave
   the same.

7. **Duplicate padding fights.** `GlassCard` and `Card` added Tailwind's `p-8`/`rounded-2xl`
   on top of `.glass-card`, which already sets its own padding/radius in CSS — two rules for
   the same property is exactly how you get inconsistent card spacing. Removed the duplicates.

8. **Contact form had the wrong industry's services** (BPO, Finance & Accounting, HR — looks
   copied from a different template) instead of Outpro.India's actual sports/event services.
   Now pulled dynamically from `servicesData`.

9. **Missing route-change scroll reset, missing 404 page, a stray literal `2` left after an
   `export default` statement, and cards in a grid that didn't stretch to equal height** were
   all small but visible polish issues — all fixed.

## Project structure

```
src/
  main.jsx, App.jsx, index.css
  data/company.js        — all site content lives here for now
  lib/api.js              — backend client (only used by the contact form today)
  lib/utils.js
  components/
    layout/   Navbar, Footer, BackgroundLayer
    ui/       Button, Card, GlassCard, SectionHeader, ContactForm
    sections/ HeroSection, ServicesSection, PortfolioSection,
              MetricsSection, TestimonialsSection, CtaSection
  pages/      Home, AboutPage, ServicesPage, ServiceDetailPage,
              PortfolioPage, ContactPage, NotFoundPage
```

## Scaling later (per the brief)

- **Blogs / Careers / Partner Program**: add new folders under `pages/`, new entries in
  `navLinks`/`footerLinks` in `company.js`, and new `<Route>`s in `App.jsx`. The layout
  (Navbar/Footer/BackgroundLayer) doesn't need to change.
- **Real backend**: implement the endpoints already stubbed in `src/lib/api.js`
  (`/services`, `/portfolio`, `/contacts`, etc.), set `VITE_API_BASE_URL` in a `.env` file,
  and swap the static imports in each page for the matching `api.getX()` call.
- **CMS-driven content**: since every page already reads from `company.js`, swapping that
  file's exports for data fetched from a CMS is a contained change.
