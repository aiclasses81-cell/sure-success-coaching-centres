import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

const courses = [
  "VI-VIII Foundation",
  "IX-X CBSE",
  "XI-XII Science",
  "IIT-JEE Preparation",
  "NEET Preparation",
];

export default function Footer() {
  return (
    <footer className="relative mt-12 text-brand-50 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900">
      <div
        className="absolute inset-0 opacity-[0.07] bg-grid-soft bg-grid-32 pointer-events-none"
        aria-hidden
      />
      <div className="container relative pt-16 pb-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-brand-100/80 leading-relaxed">
            A trusted coaching institute in Anisabad, Patna - empowering
            students with concept-based learning, regular tests and personal
            mentorship for CBSE, IIT-JEE & NEET success.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
              { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
              { icon: Youtube, href: siteConfig.socials.youtube, label: "YouTube" },
              { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent-400 hover:text-brand-900 transition-all hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-brand-100/80 hover:text-accent-300 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Our Courses
          </h4>
          <ul className="space-y-2.5 text-sm">
            {courses.map((c) => (
              <li key={c}>
                <a
                  href="#courses"
                  className="text-brand-100/80 hover:text-accent-300 transition-colors"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
              <span className="text-brand-100/85">{siteConfig.address}</span>
            </li>
            {siteConfig.phones.map((p) => (
              <li key={p} className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
                <a
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="text-brand-100/85 hover:text-white"
                >
                  {p}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-100/85 hover:text-white break-all"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container relative">
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row gap-2 sm:justify-between text-xs text-brand-100/70">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>
            Designed with care for students of Anisabad, Patna.
          </span>
        </div>
      </div>
    </footer>
  );
}
