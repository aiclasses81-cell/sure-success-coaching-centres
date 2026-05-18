"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Atom,
  Dna,
  BookOpenCheck,
  Rocket,
  GraduationCap,
} from "lucide-react";

type Course = {
  title: string;
  tag: string;
  description: string;
  duration: string;
  icon: React.ElementType;
  features: string[];
  highlight?: boolean;
  accent: string;
};

const courses: Course[] = [
  {
    title: "VI - VIII Foundation",
    tag: "Foundation",
    description:
      "Build a rock-solid base in Maths, Science & English with Olympiad-friendly teaching.",
    duration: "1 Year Program",
    icon: Sparkles,
    accent: "from-sky-500 to-brand-700",
    features: [
      "NCERT + Olympiad pattern",
      "Activity-based learning",
      "Weekly assignments",
      "Parent-teacher meetings",
    ],
  },
  {
    title: "IX - X CBSE",
    tag: "Board Special",
    description:
      "Special focus batch for CBSE Class 9 & 10 board success and concept building.",
    duration: "Full Academic Year",
    icon: BookOpenCheck,
    accent: "from-brand-600 to-brand-900",
    highlight: true,
    features: [
      "Full CBSE syllabus coverage",
      "Sample papers & PYQs",
      "Doubt clearing sessions",
      "Monthly mock tests",
    ],
  },
  {
    title: "XI - XII Science",
    tag: "Senior Secondary",
    description:
      "Mastery of Physics, Chemistry, Maths & Biology aligned with board + competitive exams.",
    duration: "2 Year Program",
    icon: GraduationCap,
    accent: "from-indigo-600 to-brand-800",
    features: [
      "Board + JEE/NEET integrated",
      "Topic-wise tests",
      "Detailed performance reports",
      "Career counselling",
    ],
  },
  {
    title: "IIT-JEE Preparation",
    tag: "Engineering",
    description:
      "Crack JEE Main & Advanced with rigorous problem-solving and conceptual depth.",
    duration: "1 / 2 Year Course",
    icon: Atom,
    accent: "from-blue-600 to-indigo-800",
    features: [
      "PCM by experts",
      "Daily practice problems",
      "All India test series",
      "Previous year analysis",
    ],
  },
  {
    title: "NEET Preparation",
    tag: "Medical",
    description:
      "Targeted NEET coaching with strong Biology, Chemistry & Physics foundation.",
    duration: "1 / 2 Year Course",
    icon: Dna,
    accent: "from-rose-600 to-rose-900",
    features: [
      "NCERT-focused Biology",
      "Concept + MCQ drills",
      "AIIMS-style mocks",
      "Personal mentor",
    ],
  },
  {
    title: "Crash & Revision",
    tag: "Short Term",
    description:
      "Rapid revision, top formulae, smart strategies for board and entrance toppers.",
    duration: "60 - 90 Days",
    icon: Rocket,
    accent: "from-amber-500 to-orange-700",
    features: [
      "High-yield chapters",
      "Speed test series",
      "Smart shortcuts",
      "Last-mile mentorship",
    ],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section bg-slate-50/70 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Our Courses
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-3"
          >
            Programs designed for{" "}
            <span className="gradient-text">every milestone</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-600"
          >
            From early foundation to medical & engineering entrances - choose
            the program that matches your goal.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative card card-hover p-6 sm:p-7 flex flex-col ${
                c.highlight ? "ring-2 ring-accent-300" : ""
              }`}
            >
              {c.highlight && (
                <span className="absolute -top-3 right-5 inline-flex items-center gap-1 bg-accent-400 text-brand-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-soft">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}

              <div
                className={`inline-flex w-12 h-12 rounded-2xl text-white items-center justify-center bg-gradient-to-br ${c.accent} shadow-card`}
              >
                <c.icon className="w-6 h-6" />
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                {c.tag}
              </p>
              <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
                {c.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {c.description}
              </p>

              <ul className="mt-5 space-y-2">
                {c.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" /> {c.duration}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 group"
                >
                  Enquire
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
