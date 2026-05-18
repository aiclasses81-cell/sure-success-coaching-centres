"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    alt: "Students attentively learning in a classroom",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Mathematics on chalkboard",
  },
  {
    src: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&w=900&q=80",
    alt: "Teacher explaining science concept",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
    alt: "Students taking notes",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    alt: "Group study session",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    alt: "Modern classroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=900&q=80",
    alt: "Books and laptop on desk",
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
    alt: "Student writing exam",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? 0 : (i - 1 + images.length) % images.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const next = () =>
    setActive((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () =>
    setActive((i) =>
      i === null ? 0 : (i - 1 + images.length) % images.length
    );

  return (
    <section id="gallery" className="section bg-slate-50/70">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Campus Gallery
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
            className="mt-4 text-slate-600"
          >
            Bright, focused and well-equipped spaces designed for serious
            learning.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden bg-slate-200 shadow-soft ring-1 ring-slate-100 ${
                img.span ?? ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute right-3 top-3 grid place-items-center w-9 h-9 rounded-full bg-white/90 text-brand-700 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <Maximize2 className="w-4 h-4" />
              </span>
              <span className="absolute left-4 bottom-4 right-4 text-left text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-sm grid place-items-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
              }}
            >
              <X className="w-5 h-5" />
            </button>
            <button
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={images[active].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden shadow-card"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <p className="absolute left-5 bottom-5 text-white text-sm bg-black/40 px-3 py-1.5 rounded-full">
                {images[active].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
