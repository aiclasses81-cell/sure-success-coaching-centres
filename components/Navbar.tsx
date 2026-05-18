"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-soft border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      {/* announcement bar */}
      <div
        className={`hidden md:block bg-brand-900 text-brand-50 text-xs transition-all ${
          scrolled ? "max-h-0 overflow-hidden py-0" : "py-2"
        }`}
      >
        <div className="container flex items-center justify-between">
          <span>
            Admissions Open 2026 - Foundation, CBSE, IIT-JEE & NEET Batches
          </span>
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-accent-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> {siteConfig.phones[0]} ·{" "}
            {siteConfig.phones[1]}
          </a>
        </div>
      </div>

      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <Logo />

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-xs"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <ul className="container py-4 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-700 font-medium"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                  className="btn-primary w-full"
                >
                  <Phone className="w-4 h-4" /> {siteConfig.phones[0]}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
