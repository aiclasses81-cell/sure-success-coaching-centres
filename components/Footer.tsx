import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

const courses = [
  "VI-VIII Foundation",
  "IX-X CBSE",
  "XI-XII Science",
  "IIT-JEE Preparation",
  "NEET Preparation",
];

const socials = [
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.socials.youtube, label: "YouTube" },
  { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 text-brand-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-950" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] bg-grid-soft bg-grid-32"
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-brand-500/20 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full bg-accent-400/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container relative pt-16 sm:pt-20">
        {/* ============ Top CTA card ============ */}
        <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 ring-1 ring-white/10 shadow-2xl shadow-brand-950/40 px-6 sm:px-10 py-8 sm:py-10 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-300 bg-white/10 ring-1 ring-white/15 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Limited Seats · Session 2026
            </span>
            <h3 className="mt-4 font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Ready to start your journey to success?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-brand-100/80 max-w-xl">
              Visit our centre in Anisabad, Patna or book a free counselling
              call - we&apos;ll help you choose the right batch.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-400 text-brand-900 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-accent-400/30 hover:bg-accent-300 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/15 transition-all"
            >
              Book Counselling <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ============ Main footer grid ============ */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-brand-100/75 leading-relaxed max-w-sm">
              A trusted coaching institute in Anisabad, Patna - empowering
              students with concept-based learning, regular tests and personal
              mentorship for CBSE, IIT-JEE & NEET success.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 rounded-full bg-white/[0.06] ring-1 ring-white/10 hover:bg-accent-400 hover:ring-accent-400 hover:text-brand-900 transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-[0.18em]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-brand-100/75 hover:text-accent-300 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-100/30 group-hover:bg-accent-300 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-[0.18em]">
              Our Courses
            </h4>
            <ul className="space-y-2.5 text-sm">
              {courses.map((c) => (
                <li key={c}>
                  <a
                    href="#courses"
                    className="inline-flex items-center gap-1.5 text-brand-100/75 hover:text-accent-300 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-100/30 group-hover:bg-accent-300 transition-colors" />
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-[0.18em]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
                <span className="text-brand-100/80 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              {siteConfig.phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="text-brand-100/80 hover:text-white transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-100/80 hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent-300" />
                <span className="text-brand-100/80">
                  Mon - Sat · 7 AM - 9 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============ Bottom bar ============ */}
        <div className="mt-14 border-t border-white/10 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-brand-100/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Send className="w-3.5 h-3.5 text-accent-300" />
            Designed with care for students of Anisabad, Patna.
          </p>
        </div>
      </div>
    </footer>
  );
}
