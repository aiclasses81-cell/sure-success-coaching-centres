"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

type Review = {
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
  color: string;
};

const reviews: Review[] = [
  {
    name: "Aarav Sharma",
    role: "Class XII Student",
    initials: "AS",
    rating: 5,
    text: "Sure Success is the best coaching centre for building strong concepts and achieving great results. Highly dedicated teachers and excellent teaching methods.",
    color: "from-brand-600 to-brand-900",
  },
  {
    name: "Priya Kumari",
    role: "CBSE Class X",
    initials: "PK",
    rating: 5,
    text: "Best coaching in Anisabad Patna for class 3 to 12. Very helpful teachers.",
    color: "from-rose-500 to-rose-800",
  },
  {
    name: "Rohan Verma",
    role: "Foundation Batch",
    initials: "RV",
    rating: 4,
    text: "Very helpful and kind teachers are present here.",
    color: "from-emerald-500 to-emerald-800",
  },
  {
    name: "Ananya Singh",
    role: "JEE Aspirant",
    initials: "AS",
    rating: 5,
    text: "I am also a student of this coaching. All the teachers are very helpful.",
    color: "from-amber-500 to-orange-700",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-950" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07] bg-grid-soft bg-grid-32 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-24 w-[32rem] h-[32rem] rounded-full bg-accent-400/15 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        {/* ============ Header ============ */}
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300 bg-white/10 ring-1 ring-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Loved by 500+ Students
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-4 text-white"
          >
            What our students &amp;{" "}
            <span className="text-accent-300">parents say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-brand-100/80 text-base sm:text-lg"
          >
            Real reviews from our student family in Anisabad, Patna.
          </motion.p>
        </div>

        {/* ============ Featured slider ============ */}
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="relative rounded-[2rem] bg-white/[0.05] ring-1 ring-white/15 backdrop-blur-xl shadow-2xl shadow-brand-950/40 p-6 sm:p-10 lg:p-12 min-h-[300px]">
            {/* Decorative giant quote */}
            <Quote
              className="absolute right-6 top-6 w-24 h-24 sm:w-32 sm:h-32 text-white/[0.05]"
              aria-hidden
            />

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-accent-300">
                    <Quote className="w-7 h-7" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                      Verified Student
                    </span>
                  </div>

                  <p className="mt-5 text-lg sm:text-xl lg:text-2xl leading-relaxed text-brand-50 font-display font-medium text-balance">
                    &ldquo;{reviews[index].text}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <span
                      className={`grid place-items-center w-14 h-14 rounded-2xl font-bold bg-gradient-to-br ${reviews[index].color} text-white shadow-lg ring-2 ring-white/20`}
                    >
                      {reviews[index].initials}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-base">
                        {reviews[index].name}
                      </p>
                      <p className="text-xs text-brand-100/70">
                        {reviews[index].role}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < reviews[index].rating
                              ? "fill-accent-400 text-accent-400"
                              : "text-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors ring-1 ring-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-10 bg-accent-300"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next review"
              className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors ring-1 ring-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============ Mini review grid ============ */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <motion.button
              type="button"
              key={r.name}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`group relative text-left rounded-2xl p-5 transition-all duration-300 ring-1 ${
                i === index
                  ? "bg-white/[0.1] ring-accent-300/60 shadow-2xl shadow-accent-400/10"
                  : "bg-white/[0.04] ring-white/10 hover:bg-white/[0.08] hover:ring-accent-300/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid place-items-center w-10 h-10 rounded-xl text-xs font-bold bg-gradient-to-br ${r.color} text-white shadow ring-1 ring-white/20`}
                >
                  {r.initials}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-[11px] text-brand-100/65">{r.role}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${
                      j < r.rating
                        ? "fill-accent-400 text-accent-400"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-brand-100/80 line-clamp-4 leading-relaxed">
                {r.text}
              </p>

              {/* Active indicator */}
              {i === index && (
                <span className="absolute right-3 top-3 w-2 h-2 rounded-full bg-accent-300 animate-pulse" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
