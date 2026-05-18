"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Smile, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Students" },
  { icon: Star, value: 87, suffix: "+", label: "5-Star Reviews" },
  { icon: Smile, value: 95, suffix: "%", label: "Satisfaction Rate" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Excellence" },
];

function Counter({
  to,
  suffix = "",
  duration = 1800,
  start,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, start]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative -mt-1">
      <div className="container">
        <div
          ref={ref}
          className="relative -mt-12 lg:-mt-16 rounded-3xl bg-white shadow-card ring-1 ring-slate-100 px-6 sm:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <span
            className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"
            aria-hidden
          />
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center sm:text-left flex sm:items-center sm:gap-4 flex-col sm:flex-row"
            >
              <span className="mx-auto sm:mx-0 grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 text-white shadow-card">
                <s.icon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-none">
                  <Counter to={s.value} suffix={s.suffix} start={inView} />
                </p>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
