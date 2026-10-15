# T&M Synergy Limited — website

Next.js 16 (App Router) + Tailwind CSS v4. Every page is prerendered as static HTML.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

`npm run dev` and `npm run build` first run `scripts/fetch-images.mjs`, which copies the photos from the current tmsynergy.com into `public/images` (only once; existing files are skipped).

## Images

All photos are served from `public/images` with descriptive file names, so they load fast (Next.js serves AVIF/WebP at the right size) and don't depend on the old server.

- **Automatic:** `npm run fetch-images` (also runs before `dev` and `build`) downloads them from the current site and Unsplash.
- **Manual:** if the download is blocked or the old site is offline, copy the files from the current site's `assets/img/` folder into `public/images/` using the names in `scripts/image-map.json` (left = new name, right = original path).
- **No broken images:** each photo tries, in order, the local file, its original location, then a free Unsplash photo of the same subject (`fallback` in `src/lib/site.ts`). Client and partner logos have no stand-in; a logo that can't load is hidden, and the whole strip is hidden if none load.

### Stock photos (Unsplash License: free for commercial use, no attribution required)

| Used for | Photo |
| --- | --- |
| ICT: server room (main ICT photo) | [Server room with network cabinets](https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4) |
| ICT: computer hardware | [Person installing graphics card](https://unsplash.com/photos/person-installing-graphics-card-in-computer-sMKUYIasyDM) — JESHOOTS.COM |
| ICT: network cable | [Blue UTP cord](https://unsplash.com/photos/blue-utp-cord-40XgDxBfYXM) — Jordan Harrison |
| Fallback: plant automation | [Control room](https://unsplash.com/photos/a-control-room-with-multiple-monitors-and-lights-EZTbB6p2cYk) — Albert Sukhanov |
| Fallback: power / substations | [Transformer in substation](https://unsplash.com/photos/electrical-transformer-in-power-substation-VuR4oHZ3ucc) — American Public Power Association |
| Fallback: electrical panels | [Switch box with circuit breakers](https://unsplash.com/photos/electrical-switch-box-with-circuit-breakers-kK7uPfb2YWU) — Markus Spiske; [White circuit breakers](https://unsplash.com/photos/white-circuit-breakers-oj1zW_PNI4k) — Mark Kats; [Electrician testing panel](https://unsplash.com/photos/electrician-testing-electrical-panel-with-multimeter-PkHf7BUWbtk) |
| Fallback: oil & gas | [Oil refinery](https://unsplash.com/photos/a-large-industrial-plant-with-pipes-and-pipes-TEG-70TAgf4); [Plant with red and white pipes](https://unsplash.com/photos/a-factory-with-a-lot-of-red-and-white-pipes-76yzygeNLT0) — Christian Harb; [Pump jack at sunset](https://unsplash.com/photos/oil-pump-jack-silhouette-against-red-sunset-GrmwVnVSSdU) — Zbynek Burival |
| Fallback: safety | [Rack of hard hats](https://unsplash.com/photos/a-rack-filled-with-lots-of-yellow-hard-hats-wp81DxKUd1E); [Hard hats and safety vests](https://unsplash.com/photos/hard-hats-and-safety-vests-wjHdeYmI-XU) — Tanya Paquet |

## Clients and partners carousel

`src/components/LogoWall.tsx`: a CSS-only scrolling strip (clients scroll left, partners right). It pauses on hover, stops and wraps for visitors with "reduce motion" switched on, and keeps every logo in the HTML once for search engines.

## Content

All page copy comes from the current tmsynergy.com website: the hero, background, vision, mission, objectives, services, products, lists, FAQ and contact details. Nothing has been added that the current site doesn't say. Headings and meta titles/descriptions only rearrange the site's own terms for search.

Left out on purpose because the current site has no content for them:
- **Careers page:** the old FAQ promised one, so that FAQ question was removed.
- **Blog / insights articles.**
- **Case studies.** The Projects page shows the site's photos grouped by the section they appeared in.
- **Client and partner names.** The site shows logos only, so alt text is "T&M Synergy client logo". Add real names in `src/lib/site.ts` once confirmed.
- **Counter figures** (Clients / Projects / Years / Awards had no numbers on the site).

Personal Facebook and Instagram links and the broken `@TitoLatjor` link were removed; the LinkedIn link is kept.

| What | File |
| --- | --- |
| Company name, address, phone, email, links, images, alt text and fallback photos | `src/lib/site.ts` |
| Homepage FAQ | `src/lib/site.ts` → `homeFaqs` |
| Service pages | `src/lib/services.ts` |
| Image file-name map | `scripts/image-map.json` |

## Pages

`/` · `/services` · `/services/plant-automation` · `/services/power-distribution` · `/services/electrical-instrumentation` · `/services/metering-testing-measurement` · `/services/ict` · `/products/safety-equipment` · `/projects` · `/about` · `/contact`

## SEO implemented

| Audit finding | Implemented |
| --- | --- |
| One page for everything | 11 indexable pages, one per service area |
| Title "T&M Synergy Limited™ - Index" | Unique keyword-led titles, all ≤ 60 characters |
| Empty meta description | Unique descriptions, 137–157 characters |
| No H1 | Exactly one H1 per page |
| Images without alt text | Alt text on every image; descriptive file names |
| No robots.txt / sitemap | `/robots.txt`, `/sitemap.xml` (with image entries) |
| `/`, `/index.html`, `www.` duplicates | Canonical tags + permanent redirects |
| No structured data | Organization + LocalBusiness + WebSite, Service per service page, FAQPage on home, About/Contact/Collection pages. No breadcrumbs |
| Heavy images | Next.js image optimisation, lazy-loading, priority hero |
| Map slowing the homepage | Map on the Contact page only, lazy-loaded |
| Empty counters, `#` links | Removed or replaced with real pages |
| FAQ promising missing pages | Contact form and Projects page exist; careers question removed |
| Inconsistent address | One source of truth in `site.ts` |
| Social sharing | Open Graph/Twitter tags + generated brand image |
| Fonts | Open Sans, Raleway and Poppins kept, self-hosted |

## Contact form

The form opens the visitor's email app with the inquiry filled in (no backend needed). To receive submissions directly, connect Formspree, Resend or similar in `src/components/ContactForm.tsx`.

## After launch

1. Verify the domain in Google Search Console, set `NEXT_PUBLIC_GSC_VERIFICATION`, redeploy and submit `/sitemap.xml`.
2. Match the Google Business Profile name, address and phone to the site.
3. Replace `src/app/icon.svg` (simple T&M monogram) with the official logo mark if preferred.
