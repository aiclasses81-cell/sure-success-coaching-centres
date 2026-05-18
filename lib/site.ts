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
 * Brand logo path.
 *
 * The repository ships with a faithful vector recreation of the institute
 * logo at `/logo.svg` (lotus + book + wings + ribbon). To use a raster PNG
 * instead, drop your file at `public/logo.png` and change this to
 * `"/logo.png"`. Both formats are handled by `<Image />` automatically.
 */
export const logoSrc = "/logo.svg";

/**
 * Centralized image paths for institute photos.
 *
 * To swap a placeholder for the real photo, drop the JPG into
 * `public/gallery/` (e.g. `classroom-boys.jpg`) and replace the
 * `-placeholder.svg` ending with `.jpg` in the path below.
 */
export const media = {
  classroomBoys: "/gallery/classroom-boys-placeholder.svg",
  classroomCoed: "/gallery/classroom-coed-placeholder.svg",
  director: "/gallery/director-placeholder.svg",
  foundationBatch: "/gallery/foundation-batch-placeholder.svg",
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
