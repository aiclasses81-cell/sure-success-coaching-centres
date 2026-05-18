export const siteConfig = {
  name: "Sure Success Coaching Centre",
  shortName: "Sure Success",
  tagline: "Building Strong Concepts & Bright Futures",
  description:
    "Sure Success Coaching Centre is a trusted institute in Anisabad, Patna offering CBSE (VI-XII), Foundation, IIT-JEE and NEET coaching with experienced teachers, regular tests and concept-based learning.",
  address: "Opp. CISF Building, Hanuman Chowk, Anisabad, Patna, Bihar 800002",
  shortAddress: "Anisabad, Patna, Bihar",
  phones: ["+91 9709921669", "+91 8603459448"],
  whatsapp: "919709921669",
  email: "info@suresuccesscoaching.in",
  rating: 4.5,
  reviewsCount: 87,
  mapsEmbed:
    "https://www.google.com/maps?q=Hanuman+Chowk+Anisabad+Patna&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Hanuman+Chowk+Anisabad+Patna",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
};

/**
 * Brand logo path. Single source of truth for navbar, footer, favicon
 * and JSON-LD/OpenGraph metadata. Drop a `public/logo.png` and change
 * this to `"/logo.png"` to switch to a raster file.
 */
export const logoSrc = "/logo.svg";

/**
 * ============================================================================
 *                         GALLERY PHOTOS (drop-in)
 * ============================================================================
 *
 * Each entry has TWO paths:
 *   - `src`        primary path (your real JPG, e.g. /gallery/classroom-1.jpg)
 *   - `fallback`   used if `src` 404s (a branded SVG placeholder ships with
 *                  the repo, so the site never renders broken images)
 *
 * To use the institute's actual photos:
 *   1. Save your JPGs into `public/gallery/` using these exact filenames:
 *        classroom-1.jpg   ...   classroom-6.jpg
 *      (PNG or WebP also works — just rename the `src` field to .png/.webp.)
 *   2. That's it. The page picks them up on next request — zero TS edits.
 *
 * Set `featured: true` on the photo you want as the Hero background.
 */
export type GalleryImage = {
  src: string;
  fallback: string;
  alt: string;
  caption: string;
  /** Optional bento-grid sizing override (Tailwind classes) */
  span?: string;
  /** If true, this image is also used as the Hero background */
  featured?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/classroom-1.jpg",
    fallback: "/gallery/classroom-1-placeholder.svg",
    alt: "Senior batch students at Sure Success Coaching Centre writing a class test",
    caption: "Senior Batch · CBSE Board Test",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    src: "/gallery/classroom-2.jpg",
    fallback: "/gallery/classroom-2-placeholder.svg",
    alt: "Co-ed CBSE batch in navy SSCC polos during a written test",
    caption: "Co-ed CBSE Batch",
  },
  {
    src: "/gallery/classroom-3.jpg",
    fallback: "/gallery/classroom-3-placeholder.svg",
    alt: "Director of Sure Success Coaching Centre at his office",
    caption: "Director's Office",
  },
  {
    src: "/gallery/classroom-4.jpg",
    fallback: "/gallery/classroom-4-placeholder.svg",
    alt: "Foundation batch students at Sure Success Coaching Centre",
    caption: "Foundation Batch",
    span: "lg:col-span-2",
  },
  {
    src: "/gallery/classroom-5.jpg",
    fallback: "/gallery/classroom-5-placeholder.svg",
    alt: "Class IX-X session at Sure Success Coaching Centre",
    caption: "Class IX-X · CBSE",
  },
  {
    src: "/gallery/classroom-6.jpg",
    fallback: "/gallery/classroom-6-placeholder.svg",
    alt: "Test prep session at Sure Success Coaching Centre, Anisabad Patna",
    caption: "Test Prep Session",
  },
];

/** Hero background = the first featured image, or the first image overall. */
export const heroBackground =
  galleryImages.find((g) => g.featured) ?? galleryImages[0];

/** Convenience aliases used by Hero/About sections (kept stable for back-compat) */
export const media = {
  classroomBoys: galleryImages[0],
  classroomCoed: galleryImages[1],
  director: galleryImages[2],
  foundationBatch: galleryImages[3],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];
