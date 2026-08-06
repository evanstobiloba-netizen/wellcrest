# WellCrest Health — Website

Official website for **WellCrest Health**, a mental health & comprehensive wellness practice serving patients **in-person in Georgia** and via **telehealth in Georgia, Arizona, and Maryland**.

## Overview

WellCrest Health provides compassionate, convenient, and affordable mental health services. The site is a single-page application (SPA) built with **React 18 + Vite**, styled with **Tailwind CSS**, and uses **Supabase** as the CMS/content backend so website content can be edited without touching code.

### Key facts

| | |
|---|---|
| Founder / Lead Provider | Dr. Oladunni Faminu — DNP, PMHNP, FNP |
| In-person office | 7910 Mall Ring Road Suite 200, Stonecrest, GA 30038 |
| Phone | 470-481-2034 |
| Email | info@wellcresttherapy.com |
| Hours | Mon–Fri 8:00 AM – 5:00 PM (Sat by appointment, Sun closed) |

## Tech Stack

- **React 18** + **React Router 6** — UI and client-side routing
- **Vite 4** — build tool / dev server (port **5173**, `strictPort: true`)
- **Tailwind CSS 3** + PostCSS + Autoprefixer — styling (`brand: #0066FF`, `brand-teal: #2AB7A6`, `brand-navy: #0A2540`)
- **Framer Motion** — scroll/entrance animations
- **Supabase** — content management backend (single `content` row with a `data` JSON column), with **localStorage** caching + realtime subscription
- **Calendly** — appointment booking (embedded widget via modal)
- **Headless UI** — accessible UI primitives
- **lucide-react** — icons
- **Vercel** — deployment (SPA rewrites in `vercel.json`)

## Getting Started

### Prerequisites

- Node.js 18+ (tested on v24)
- npm

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173` (hosted on the network via `--host`).

### Build for production

```bash
npm run build        # outputs to dist/
npm run preview      # preview the production build on port 5173
```

### Lint

```bash
npx eslint src --ext .js,.jsx
```

## Project Structure

```
wellcrest/
├── index.html                  # HTML entry point, Inter font, meta tags
├── vite.config.js              # Vite config (port 5173, dist output)
├── tailwind.config.js          # Tailwind theme (brand colors, Inter font)
├── postcss.config.js           # Tailwind + Autoprefixer
├── eslint.config.js            # Flat ESLint config (React hooks + refresh)
├── vercel.json                 # SPA rewrites for Vercel deployment
├── public/                     # Static assets (logo, favicon, Dr. Faminu photo)
└── src/
    ├── main.jsx                # App bootstrap + route definitions
    ├── supabase.js             # Supabase client + content helpers (default content, fetch/save/subscribe)
    ├── context/
    │   └── ContentContext.jsx  # Global content store (localStorage + Supabase sync)
    ├── components/             # Reusable UI components
    │   ├── Navbar.jsx          # Sticky navbar with Services/Locations dropdowns
    │   ├── CalendlyModal.jsx   # Calendly booking modal + provider (used app-wide)
    │   ├── BookAppointmentButton.jsx
    │   ├── DoctorBio.jsx       # Dr. Oladunni Faminu bio section
    │   ├── Hero.jsx            # Legacy hero (unused — Home defines its own)
    │   ├── Logo.jsx
    │   ├── Newsletter.jsx      # Newsletter signup (UI only)
    │   ├── ServiceCard.jsx
    │   ├── CTASection.jsx
    │   └── CalendlyWidget.jsx  # Legacy standalone Calendly widget
    ├── pages/                  # Route-level pages (Home, About, Services, Locations, Articles, Contact, Admin, ...)
    ├── sections/               # Homepage sections (Services, Locations, Why, Genesight, Testimonials, Footer, ...)
    ├── data/                   # Blog post data (blogPosts.json + .js)
    └── styles/tailwind.css     # Tailwind directives + component classes (btn-primary, page-section)
```

## Routes

| Path | Page | Notes |
| --- | --- | --- |
| `/` | Home | Hero + Services + Locations + Why + Genesight + Newsletter |
| `/about` | About | Mission, Dr. Faminu bio, why-choose-us |
| `/services` | Services | Service category listing |
| `/services/mental-health` | ServiceDetail | All mental health services list |
| `/services/mental-health/:serviceId` | ServiceDetailPage | Individual condition page (depression, anxiety, bipolar, adhd, ptsd, insomnia, stress) |
| `/locations` | Locations | GA / AZ / MD cards + insurance accepted |
| `/locations/:location` | LocationDetail | Per-state details, hours, services, features |
| `/articles` | Articles | Blog post grid (from CMS content) |
| `/articles/detail?id=:id` | BlogDetail | Individual blog post |
| `/contact` | Contact | Contact form (UI only) + contact info + emergency notice |
| `/preceptorship` | Preceptorship | Clinical training page with NP preceptorship application form |
| `/admin` | Admin | Password-protected content editor (see Environment Variables) |
| `*` | Home | Fallback |

## Content Management (Supabase)

Website content (hero copy, services, locations, contact info, blog posts, newsletters) is **not hardcoded** — it lives in Supabase and is editable from the **Admin panel** at `/admin`.

How it works:

1. **`src/supabase.js`** exposes `defaultContent`, `fetchContent()`, `saveContent()`, and `subscribeToContent()`. The default content also embeds the blog posts from `src/data/blogPosts.json`.
2. **`ContentContext.jsx`** renders immediately from `localStorage`, then silently syncs from Supabase in the background, and subscribes to realtime changes so edits propagate live.
3. **Admin** (`src/pages/Admin.jsx`) lets you edit Hero, Services, Locations, Contact, Blog Posts, and Newsletters. A **"Sync All Content to Live"** button pushes the current state to Supabase.

### Environment Variables

Copy `.env.example` to `.env` and set your values. The file is gitignored.

| Variable | Description |
| --- | --- |
| `VITE_ADMIN_PASSWORD` | Password for the content editor at `/admin` |

> Note: the admin password is checked client-side, so anyone with the source can read it. For a truly secure admin area, move authentication to a server or hosted auth service. Treat the value as a soft gate, not a hard security boundary.

### Supabase setup (if starting fresh)

- Create a Supabase project and a `content` table with columns `id` (text) and `data` (jsonb), primary key on `id`.
- Insert one row: `id = 'main'`, `data` = your content object.
- Replace the hardcoded `supabaseUrl` / `supabaseKey` in `src/supabase.js` with your project's values.
- Enable realtime on the `content` table for live sync.

> The Supabase URL and **anon** key in `src/supabase.js` are safe to keep in the bundle — the anon key is a public, client-side credential. Never use a `service_role` key in client code.

## Deployment

The project is configured for **Vercel**:

```bash
npm run build
vercel deploy --prod
```

`vercel.json` rewrites all routes to `index.html` so client-side routing works in production.

## Notes / Known Issues

- The **contact form** and **newsletter signup** are UI-only (they log to the console / set a local success state) — no backend email capture is wired up yet.
- Some Tailwind arbitrary-value classnames are written as literal strings (e.g. `text-[brand-navy]`, `bg-[brand-navy]/10`, `text-brand-navy`) which Tailwind does not generate; these appear in `About.jsx`, `Articles.jsx`, `Contact.jsx`, and `ServiceDetail.jsx`. The surrounding hex fallbacks (e.g. `text-[#0A2540]`) render correctly, so the impact is limited.
- Several sections/pages are legacy or unused (e.g. `components/Hero.jsx`, `CalendlyWidget.jsx`, `sections/Insurance.jsx`, `sections/Providers.jsx`, `sections/Testimonials.jsx`, `pages/ServiceAcuteCare.jsx`, `ServiceChronicDisease.jsx`, `ServicePreventiveCare.jsx`) and can be cleaned up.
- Blog post data is duplicated between `src/data/blogPosts.js` and `src/data/blogPosts.json`; only the `.json` is currently imported by `supabase.js`.

## License

Private project — © 2025 WellCrest Health. All rights reserved.
