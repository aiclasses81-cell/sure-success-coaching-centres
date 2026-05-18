"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
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

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-soft border-b border-slate-200/70"
          : "bg-transparent"
      }`}
    >
      {/* ============ Top utility bar (hidden when scrolled) ============ */}
      <div
        className={`hidden md:block bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 text-brand-50 text-xs transition-all duration-500 ${
          scrolled ? "max-h-0 overflow-hidden py-0 opacity-0" : "py-2 opacity-100"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-accent-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Admissions Open · Session 2026
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-brand-100/80">
              <MapPin className="w-3.5 h-3.5" /> {siteConfig.shortAddress}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-accent-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> {siteConfig.phones[0]}
            </a>
            <span className="text-brand-100/30">·</span>
            <a
              href={`tel:${siteConfig.phones[1].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-accent-300 transition-colors"
            >
              {siteConfig.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* ============ Main row ============ */}
      <nav
        className={`container flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 lg:h-[68px]" : "h-16 lg:h-20"
        }`}
      >
        <Logo size={scrolled ? "sm" : "md"} />

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  scrolled ? "text-slate-700 hover:text-brand-700" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${
                    scrolled ? "bg-brand-600" : "bg-accent-400"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className={`hidden sm:inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold px-5 py-2.5 transition-all ${
              scrolled
                ? "bg-brand-700 text-white shadow-soft hover:bg-brand-800 hover:-translate-y-0.5"
                : "bg-accent-400 text-brand-900 shadow-soft hover:bg-accent-300"
            }`}
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/15"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ============ Mobile drawer ============ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 top-16 bg-slate-950/40 backdrop-blur-sm"
            />
            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden relative overflow-hidden bg-white border-t border-slate-200 shadow-card"
            >
              <ul className="container py-4 flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-slate-700 hover:bg-brand-50 hover:text-brand-700 font-medium transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-brand-400 group-hover:text-brand-600 tabular-nums">
                          0{i + 1}
                        </span>
                        {l.label}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                  className="mt-3 grid grid-cols-2 gap-2"
                >
                  <a
                    href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 text-white px-4 py-3 text-sm font-semibold shadow-soft hover:bg-brand-800 transition"
                    onClick={() => setOpen(false)}
                  >
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-3 text-sm font-semibold shadow-soft hover:bg-emerald-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                  className="mt-2 px-2 text-xs text-slate-500 leading-relaxed"
                >
                  <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-brand-600" />
                  {siteConfig.address}
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
