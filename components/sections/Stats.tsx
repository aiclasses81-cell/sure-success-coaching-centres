"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Smile, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Students",
    accent: "from-brand-600 to-brand-900",
  },
  {
    icon: Star,
    value: 87,
    suffix: "+",
    label: "5-Star Reviews",
    accent: "from-amber-400 to-amber-600",
  },
  {
    icon: Smile,
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
    accent: "from-rose-500 to-rose-700",
  },
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
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
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
          className="relative -mt-14 lg:-mt-20 rounded-[2rem] overflow-hidden"
        >
          {/* Card surface */}
          <div className="relative bg-white shadow-2xl shadow-brand-950/20 ring-1 ring-slate-100 px-6 sm:px-10 py-10 sm:py-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Top gradient line */}
            <span
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"
              aria-hidden
            />
            {/* Faint grid */}
            <span
              className="absolute inset-0 bg-grid-soft bg-grid-32 opacity-[0.04] pointer-events-none"
              aria-hidden
            />

            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative text-center sm:text-left flex sm:items-center sm:gap-5 flex-col sm:flex-row group"
              >
                <span
                  className={`mx-auto sm:mx-0 grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-transform`}
                >
                  <s.icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-none tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} start={inView} />
                  </p>
                  <p className="mt-2 text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-[0.16em]">
                    {s.label}
                  </p>
                </div>

                {/* Vertical divider on desktop */}
                {i < stats.length - 1 && (
                  <span
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
