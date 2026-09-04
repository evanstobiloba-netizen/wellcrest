# WellCrest Health — WordPress Theme

A classic (non-block) WordPress theme that recreates the WellCrest Health React single-page app as a CMS-driven site. Content for the specialty services and locations is provided via theme data arrays, so pages only need to be created with the correct slugs and templates; site-wide contact/footer/hero details are editable via the Customizer.

## Requirements

- WordPress 5.8+ (tested with 6.x)
- PHP 7.4+

## Installation

1. Copy this `wellcrest` folder to `wp-content/themes/`, or upload the `wellcrest.zip` via **Appearance → Themes → Add New → Upload Theme**.
2. Activate the theme under **Appearance → Themes**.

## Setting the front page

The home page is built from `front-page.php` and does **not** require a page. To make it the site home:

- **Settings → Reading → Your homepage displays**: choose **A static page**, set **Homepage** to *— Select —* (blank) or create any page; `front-page.php` takes priority automatically.

## Required pages & slugs

Create each page (Pages → Add New) and set the **slug** exactly as shown. Slug → template:

| Page / slug        | Template (Page Attributes)        |
| ------------------ | --------------------------------- |
| Home               | *(front-page.php, automatic)*     |
| `/about`           | `default` (uses `page-about.php`) |
| `/services`        | `default` (`page-services.php`)   |
| `/locations`       | `default` (`page-locations.php`)  |
| `/contact`         | `default` (`page-contact.php`)    |
| `/articles`        | `default` (uses `index.php`)      |
| `/preceptorship`   | `default` (`page-preceptorship.php`) |
| `/sexual-health`   | `default` (`page-sexual-health.php`) |

### Specialty (sexual health) sub-pages

Create each page with the matching slug and assign the **Sexual Health Detail** template. Content is pulled automatically from `wellcrest_sexual_health_pages()` in `functions.php`.

| Page / slug                      | Template |
| -------------------------------- | -------- |
| `/sexual-health/assessment`      | Sexual Health Detail |
| `/sexual-health/individual-therapy` | Sexual Health Detail |
| `/sexual-health/education`       | Sexual Health Detail |
| `/sexual-health/coordination`    | Sexual Health Detail |

### Location sub-pages

Create each page with the matching slug and assign the **Location Detail** template.

| Page / slug           | Template      |
| --------------------- | ------------- |
| `/locations/georgia`  | Location Detail |
| `/locations/arizona`  | Location Detail |
| `/locations/maryland` | Location Detail |

## Menus

Register & assign in **Appearance → Menus**:

- `primary` — main header navigation (with drop-downs; assign sub-items as children).
- `footer` — footer column.
- `footer_regions` — "Regions" footer column.
- `footer_company` — "Company" footer column.

## Customizer

**Appearance → Customize** exposes:

- **Contact** — phone (default `470-481-2034`), fax, email, address, and social URLs (LinkedIn, Facebook, Instagram).
- **Home Page** — hero badge, title, subtitle, primary/secondary button labels; doctor photo (defaults to `assets/img/dr-faminu.jpg`); hero stats.
- **Footer** — footer description and copyright text.

## Forms

- **Contact form** (`/contact`) POSTs to `admin-post.php` and emails via `wp_mail` (see `wellcrest_handle_contact_form()` in `functions.php`).
- **Preceptorship form** (`/preceptorship`) POSTs to `admin-post.php`; on success the browser is redirected to `/preceptorship?wellcrest_precept=success`, which shows the confirmation.
- **Newsletter** input is front-end only (visual); wire it to your ESP if needed.

## Calendly

Calendly URLs are defined as the constants `WELLCREST_INITIAL_URL` and `WELLCREST_FOLLOWUP_URL` (defaults set in `functions.php`) and exposed to `assets/js/main.js` via `wp_add_inline_script`. Edit them there or in the Customizer if exposed.

## Theme data

- `wellcrest_services()` — services cards.
- `wellcrest_locations()` — location cards.
- `wellcrest_hero_stats()` — hero statistics.
- `wellcrest_why_features()` / `wellcrest_why_stats()` — Why section.
- `wellcrest_sexual_health_pages()` — sexual health detail content.
- `wellcrest_location_details()` — location detail content.

Icons are available via `wellcrest_icon()` / `wellcrest_icon_e()` (see `inc/icons.php`).

## Assets

- `assets/css/main.css` — all styling (mirrors the original Tailwind design; no build step).
- `assets/js/main.js` — scroll header, mobile menu, drop-downs, Calendly modal, newsletter.
- `assets/img/logos/` — insurance partner logos used by the home marquee.

## Development

There is no build step. Edit `main.css` / `main.js` directly and they are enqueued automatically. For the "Optimized" Calendly badge, ensure the constants are HTTPS Calendly URLs and the domain is whitelisted in the Calendly account.
