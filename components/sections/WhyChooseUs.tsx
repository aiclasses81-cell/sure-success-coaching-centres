"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  ClipboardList,
  UsersRound,
  HeartHandshake,
  Lightbulb,
  Wallet,
  Smile,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Teachers",
    desc: "Faculty with deep subject knowledge & real classroom expertise.",
  },
  {
    icon: ClipboardList,
    title: "Regular Tests",
    desc: "Weekly & monthly assessments to track every student's progress.",
  },
  {
    icon: UsersRound,
    title: "Small Batch Size",
    desc: "Limited students per batch for focused, distraction-free learning.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    desc: "One-on-one mentoring to address every doubt and weakness.",
  },
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    desc: "We teach the 'why' before the 'how' - so concepts truly stick.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    desc: "Premium quality coaching at fees families can comfortably afford.",
  },
  {
    icon: Smile,
    title: "Friendly Environment",
    desc: "A warm, supportive classroom culture students actually enjoy.",
  },
  {
    icon: Trophy,
    title: "Result Oriented",
    desc: "Disciplined teaching focused on real, measurable results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section relative overflow-hidden">
      <div
        className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-brand-100/60 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-accent-100 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-3"
          >
            Everything your child needs to{" "}
            <span className="gradient-text">truly succeed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-600"
          >
            Eight reasons families across Anisabad, Patna trust Sure Success
            year after year.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative card card-hover p-5 sm:p-6 text-center sm:text-left"
            >
              <div className="mx-auto sm:mx-0 grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 group-hover:from-brand-700 group-hover:to-brand-900 group-hover:text-white transition-all">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
              <span className="absolute right-4 top-4 text-[10px] font-bold text-brand-200 group-hover:text-brand-400 transition-colors">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
