"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
      className="section relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900 text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.07] bg-grid-soft bg-grid-32 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] rounded-full bg-accent-400/15 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-3 text-white"
          >
            Loved by students &{" "}
            <span className="text-accent-300">parents</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-brand-100/80"
          >
            Real reviews from our 500+ student family in Anisabad, Patna.
          </motion.p>
        </div>

        {/* Featured slider */}
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="relative h-[280px] sm:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 rounded-3xl bg-white/[0.04] ring-1 ring-white/15 backdrop-blur p-6 sm:p-9"
              >
                <Quote className="w-9 h-9 text-accent-300/80" />
                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-brand-50">
                  "{reviews[index].text}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span
                    className={`grid place-items-center w-12 h-12 rounded-full font-bold bg-gradient-to-br ${reviews[index].color} text-white shadow-card`}
                  >
                    {reviews[index].initials}
                  </span>
                  <div>
                    <p className="font-display font-semibold">
                      {reviews[index].name}
                    </p>
                    <p className="text-xs text-brand-100/70">
                      {reviews[index].role}
                    </p>
                  </div>
                  <div className="ml-auto flex">
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

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-accent-400"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini review grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 hover:ring-accent-300/40 hover:bg-white/[0.07] p-5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid place-items-center w-9 h-9 rounded-full text-xs font-bold bg-gradient-to-br ${r.color} text-white`}
                >
                  {r.initials}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-[11px] text-brand-100/60">{r.role}</p>
                </div>
              </div>
              <div className="mt-3 flex">
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
              <p className="mt-3 text-sm text-brand-100/85 line-clamp-4">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
