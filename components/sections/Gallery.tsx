"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
} from "lucide-react";
import SmartImage from "@/components/SmartImage";
import { galleryImages } from "@/lib/site";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const close = () => setActive(null);
  const next = () =>
    setActive((i) =>
      i === null ? 0 : (i + 1) % galleryImages.length
    );
  const prev = () =>
    setActive((i) =>
      i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length
    );

  // Keyboard nav + scroll lock when lightbox open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Touch / swipe gestures inside lightbox
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  return (
    <section
      id="gallery"
      className="section relative bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            <Camera className="w-3.5 h-3.5" /> Campus Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-3"
          >
            A glimpse inside our{" "}
            <span className="gradient-text">classrooms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-600 text-base sm:text-lg"
          >
            Bright, focused spaces designed for serious learning. Tap any image
            for a full-screen view.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              aria-label={`Open ${img.caption}`}
              className={`group relative rounded-3xl overflow-hidden bg-brand-900 shadow-soft ring-1 ring-slate-200/70 hover:ring-accent-300/60 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-300/50 transition-all ${
                img.span ?? ""
              }`}
            >
              <SmartImage
                src={img.src}
                fallbackSrc={img.fallback}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* gradient + caption overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <span
                aria-hidden
                className="absolute inset-0 ring-inset ring-1 ring-white/0 group-hover:ring-white/20 rounded-3xl transition-all"
              />
              {/* Hover icon */}
              <span className="absolute right-3 top-3 grid place-items-center w-10 h-10 rounded-full bg-white/95 text-brand-700 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </span>
              {/* Number chip */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 group-hover:text-accent-300 transition-colors">
                <span className="w-5 h-0.5 bg-current rounded-full" />
                0{i + 1}
              </span>
              {/* Caption */}
              <span className="absolute left-4 right-4 bottom-4 text-left text-white">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Sure Success
                </span>
                <span className="block font-display font-semibold text-base sm:text-lg mt-0.5 transition-transform duration-500 group-hover:-translate-y-0.5">
                  {img.caption}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ============ Lightbox ============ */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-md grid place-items-center p-4 sm:p-6"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[active].caption}
          >
            {/* Top bar */}
            <div
              className="absolute top-0 inset-x-0 flex items-center justify-between p-4 sm:p-5 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                <Camera className="w-3.5 h-3.5 text-accent-300" />
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </span>
              <button
                className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
                onClick={close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev / Next */}
            <button
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={galleryImages[active].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <SmartImage
                src={galleryImages[active].src}
                fallbackSrc={galleryImages[active].fallback}
                alt={galleryImages[active].alt}
                fill
                sizes="100vw"
                className="object-contain object-center bg-slate-900"
                priority
              />
              {/* Caption pill */}
              <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
                <div className="rounded-2xl bg-black/55 backdrop-blur-md px-4 py-3 text-white max-w-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-300">
                    Sure Success Coaching Centre
                  </p>
                  <p className="font-display font-semibold text-sm sm:text-base mt-0.5">
                    {galleryImages[active].caption}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom dots */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-accent-300"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
