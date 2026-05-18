"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Users, Award, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-hero-pattern"
    >
      {/* decorative grid */}
      <div className="absolute inset-0 bg-grid-soft bg-grid-32 opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="section-eyebrow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            #1 Coaching Institute in Anisabad, Patna
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 font-display font-extrabold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 leading-[1.05]"
          >
            Building <span className="gradient-text">Strong Concepts</span>
            <br className="hidden sm:block" /> & Bright{" "}
            <span className="relative inline-block">
              Futures
              <svg
                viewBox="0 0 220 14"
                className="absolute left-0 -bottom-2 w-full"
                aria-hidden
              >
                <path
                  d="M2 8 C 60 -2, 160 -2, 218 8"
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
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Trusted coaching institute in Anisabad, Patna for{" "}
            <strong className="text-slate-800">CBSE (VI-XII)</strong>,{" "}
            <strong className="text-slate-800">IIT-JEE</strong> &{" "}
            <strong className="text-slate-800">NEET</strong> preparation. Concept
            clarity, regular tests and personal mentorship - everything a
            student needs to succeed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="btn-outline"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i <= 4
                        ? "fill-accent-400 text-accent-400"
                        : "fill-accent-400/60 text-accent-400/60"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-slate-900">4.5</span>
                <span className="text-slate-500"> · {siteConfig.reviewsCount} Reviews</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="w-5 h-5 text-brand-700" />
              <span>
                <span className="font-bold text-slate-900">500+</span> Happy
                Students
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Award className="w-5 h-5 text-brand-700" />
              <span>
                <span className="font-bold text-slate-900">10+ Yrs</span>{" "}
                Experience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80"
              alt="Students in classroom at Sure Success Coaching Centre"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-300">
                  Live Batch
                </p>
                <p className="font-display font-bold text-lg">
                  Class IX-X · CBSE
                </p>
              </div>
              <span className="grid place-items-center w-12 h-12 rounded-full bg-accent-400 text-brand-900 shadow-card">
                <BookOpen className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden sm:flex absolute -left-6 lg:-left-10 bottom-10 items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-card ring-1 ring-slate-100"
          >
            <div className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700">
              <Star className="w-5 h-5 fill-emerald-700" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Top Result</p>
              <p className="font-bold text-slate-900 text-sm">
                95% Satisfaction
              </p>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden sm:block absolute -right-4 lg:-right-8 top-10 bg-brand-900 text-white px-4 py-3 rounded-2xl shadow-card animate-float-slow"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-300">
              Admissions
            </p>
            <p className="font-display font-bold">Open 2026</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
