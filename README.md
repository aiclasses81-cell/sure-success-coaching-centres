# Sure Success Coaching Centre — Website

A modern, mobile-first website for **Sure Success Coaching Centre**, Anisabad, Patna — built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, **TypeScript** and **Lucide** icons.

## Features

- Sticky, blurred, scroll-aware **Navbar** with mobile drawer
- Animated **Hero** with gradient headline, trust strip and floating cards
- **About**, **Courses** (6 program cards), **Why Choose Us** (8 icon cards)
- **Gallery** with bento layout + full keyboard-accessible **Lightbox**
- Auto-rotating **Testimonials** carousel + grid (uses the supplied 4 reviews verbatim)
- Animated **Stats** counters (500+, 87+, 95%, 10+)
- **Contact** section with Google Maps embed + Inquiry form that opens **WhatsApp** with the message pre-filled
- Floating **WhatsApp** button + **Scroll-to-top** button
- SEO: metadata, OpenGraph, Twitter, JSON-LD `EducationalOrganization` schema, `robots`, theme-color
- Blue + white theme with yellow accent, Poppins (display) + Inter (body) fonts
- Soft animations on scroll via Framer Motion `whileInView`

## Tech Stack

- Next.js `14.2.x`, React `18`, TypeScript `5`
- Tailwind CSS `3.4` (custom `brand.*` blue + `accent.*` yellow palette)
- Framer Motion `11`, Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To build for production:

```bash
npm run build
npm run start
```

## Configure your details

All contact info / phone / address / social links live in **one place**:

```
lib/site.ts
```

Edit `siteConfig` to update phones, address, WhatsApp, email and social URLs across the whole site.

## Project Structure

```
app/
  layout.tsx          # Fonts, SEO, JSON-LD, global chrome (Navbar/Footer/FAB)
  page.tsx            # Composes the home page
  globals.css         # Tailwind + design tokens + button/card classes
components/
  Logo.tsx
  Navbar.tsx
  Footer.tsx
  ScrollToTop.tsx
  WhatsAppButton.tsx
  sections/
    Hero.tsx
    Stats.tsx
    About.tsx
    Courses.tsx
    WhyChooseUs.tsx
    Gallery.tsx
    Testimonials.tsx
    Contact.tsx
lib/
  site.ts             # All site-wide content / contact details
public/
  favicon.svg
tailwind.config.ts
next.config.mjs
```

## Notes on Images

The site currently references high-quality classroom / study photos from Unsplash (already allowlisted in `next.config.mjs`). To use the institute's own photos:

1. Drop images into `public/gallery/` (e.g. `public/gallery/classroom-1.jpg`).
2. Replace the `src` values in `components/sections/Gallery.tsx`, `Hero.tsx` and `About.tsx` with `/gallery/your-file.jpg`.

## Form Backend (optional)

The inquiry form currently opens WhatsApp with a pre-filled message — zero backend required. To also persist or email enquiries, swap `onSubmit` in `components/sections/Contact.tsx` to call a Next.js Route Handler (e.g. `app/api/enquire/route.ts`) that sends an email via Resend / Nodemailer or pushes to a Google Sheet.

## License

Proprietary — © Sure Success Coaching Centre.
