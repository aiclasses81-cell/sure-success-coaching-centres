"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Star,
  Users,
  Award,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { siteConfig, heroBackground } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] flex items-center pt-28 lg:pt-32 pb-20 overflow-hidden"
    >
      {/* ============ Background image ============ */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBackground.src}
          alt={heroBackground.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover scale-105 motion-safe:animate-[heroZoom_30s_ease-in-out_infinite_alternate]"
        />
        {/* Layered dark gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-brand-700/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
        {/* Subtle grid + radial spotlight */}
        <div className="absolute inset-0 bg-grid-soft bg-grid-32 opacity-[0.08]" />
        <div className="absolute -top-1/3 -right-1/4 w-[60%] aspect-square rounded-full bg-brand-500/30 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[55%] aspect-square rounded-full bg-accent-400/15 blur-[140px] mix-blend-screen" />
      </div>

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        {/* ============ Copy ============ */}
        <div className="lg:col-span-7 text-white">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-accent-300 bg-white/10 ring-1 ring-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5" />
            #1 Coaching Institute in Anisabad, Patna
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display font-extrabold tracking-tight text-balance text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
              Strong Concepts
            </span>
            <br className="hidden sm:block" /> & Bright{" "}
            <span className="relative inline-block">
              Futures
              <svg
                viewBox="0 0 240 14"
                aria-hidden
                className="absolute left-0 -bottom-2 w-full"
              >
                <path
                  d="M2 8 C 60 -2, 180 -2, 238 8"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-base sm:text-lg lg:text-xl text-brand-50/80 leading-relaxed"
          >
            Trusted coaching institute in Anisabad, Patna for{" "}
            <strong className="text-white">CBSE (VI-XII)</strong>,{" "}
            <strong className="text-white">IIT-JEE</strong> &{" "}
            <strong className="text-white">NEET</strong>. Concept clarity,
            regular tests and personal mentorship — everything a student needs
            to succeed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-accent text-sm sm:text-base">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="btn-glass text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </motion.div>

          {/* ============ Trust strip ============ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
          >
            {[
              { icon: Star, value: "4.5", label: `${siteConfig.reviewsCount} Reviews`, highlight: true },
              { icon: Users, value: "500+", label: "Students" },
              { icon: Award, value: "10+", label: "Years" },
              { icon: Trophy, value: "95%", label: "Satisfaction" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-md px-4 py-3.5 hover:bg-white/[0.1] hover:ring-accent-300/40 transition-all"
              >
                <item.icon
                  className={`w-4 h-4 ${
                    item.highlight ? "text-accent-300 fill-accent-300" : "text-accent-200/80"
                  }`}
                />
                <p className="mt-1.5 font-display font-extrabold text-2xl text-white leading-none">
                  {item.value}
                </p>
                <p className="text-[11px] text-brand-100/70 mt-1 uppercase tracking-wider font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============ Visual side card ============ */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block relative"
        >
          {/* Glass admissions card */}
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/15 backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 p-1">
            <div className="rounded-[1.85rem] bg-gradient-to-br from-brand-900/70 to-brand-950/85 p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300 bg-accent-400/10 ring-1 ring-accent-300/30 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  Admissions Open
                </span>
                <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">
                  Session 2026
                </span>
              </div>

              <h3 className="mt-5 font-display font-bold text-2xl text-white">
                Limited Seats per Batch
              </h3>
              <p className="mt-1.5 text-sm text-brand-100/75">
                Small batches · Personal mentor · Regular tests
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  { tag: "Foundation", desc: "Class VI · VII · VIII" },
                  { tag: "CBSE Board", desc: "Class IX · X · XI · XII" },
                  { tag: "Competitive", desc: "IIT-JEE · NEET" },
                ].map((b) => (
                  <li
                    key={b.tag}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-3.5 py-2.5"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent-400 text-brand-900">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{b.tag}</p>
                      <p className="text-[11px] text-brand-100/65">{b.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-100/40" />
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-accent-400 text-brand-900 hover:bg-accent-300 transition shadow-lg shadow-accent-400/30"
              >
                Book a Free Counselling <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Floating rating bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-6 -top-6 bg-white rounded-2xl shadow-2xl shadow-brand-950/40 px-4 py-3 flex items-center gap-3 ring-1 ring-slate-100"
          >
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 text-brand-900 shadow-inner">
              <Star className="w-5 h-5 fill-brand-900" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                Google Rating
              </p>
              <p className="font-display font-extrabold text-slate-900 leading-none mt-0.5">
                4.5 / 5
              </p>
            </div>
          </motion.div>

          {/* Floating teacher count chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="absolute -right-4 bottom-12 bg-brand-900 text-white rounded-2xl shadow-2xl shadow-brand-950/50 px-4 py-3 ring-1 ring-white/10 animate-float-slow"
          >
            <p className="text-[10px] uppercase tracking-wider text-accent-300 font-semibold">
              Faculty
            </p>
            <p className="font-display font-extrabold leading-none mt-0.5">
              Experienced Teachers
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll to next section"
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-8 flex-col items-center gap-2 text-brand-100/60 hover:text-accent-300 transition-colors"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
