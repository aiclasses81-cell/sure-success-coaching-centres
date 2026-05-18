"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { media } from "@/lib/site";

const pillars = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    desc: "Subject specialists with proven CBSE, JEE & NEET teaching experience.",
  },
  {
    icon: Target,
    title: "Concept-Based Learning",
    desc: "Strong fundamentals first - then problem solving, speed and accuracy.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Tests",
    desc: "Weekly tests, monthly mock exams and detailed performance analysis.",
  },
  {
    icon: ShieldCheck,
    title: "Disciplined Environment",
    desc: "Calm, focused classrooms with personal mentorship for every student.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        {/* Director / image collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[460px] sm:h-[520px]">
            <div className="relative col-span-3 row-span-4 rounded-3xl overflow-hidden shadow-card">
              <Image
                src={media.director}
                alt="Director of Sure Success Coaching Centre at his office desk"
                fill
                sizes="(max-width: 1024px) 60vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-soft">
              <Image
                src={media.classroomCoed}
                alt="Co-ed CBSE batch writing a class test at Sure Success"
                fill
                sizes="(max-width: 1024px) 40vw, 16vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-soft">
              <Image
                src={media.foundationBatch}
                alt="Foundation batch students of Sure Success Coaching Centre"
                fill
                sizes="(max-width: 1024px) 40vw, 16vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-3 row-span-2 rounded-3xl overflow-hidden shadow-soft">
              <Image
                src={media.classroomBoys}
                alt="Senior batch students at Sure Success Coaching Centre, Anisabad Patna"
                fill
                sizes="(max-width: 1024px) 60vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Director caption */}
          <div className="mt-5 flex items-center gap-3 bg-white card p-4 max-w-xs ml-auto -mt-12 relative z-10">
            <div className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-700 text-white shadow-card">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-900 text-sm">
                Director's Note
              </p>
              <p className="text-xs text-slate-500">
                10+ years guiding students
              </p>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            About Sure Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-3"
          >
            A coaching home where{" "}
            <span className="gradient-text">students grow with confidence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-slate-600 leading-relaxed"
          >
            Located in the heart of Anisabad, Patna, Sure Success Coaching
            Centre has been shaping young minds for over a decade. We focus on
            building strong fundamentals through a blend of experienced
            teachers, structured curriculum, regular assessments and a warm,
            disciplined environment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-slate-600 leading-relaxed"
          >
            From foundation classes (VI-VIII) to board exams (IX-XII) and
            competitive exams like IIT-JEE & NEET, every student receives the
            personal attention they deserve to convert hard work into real
            results.
          </motion.p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="card card-hover p-5 flex gap-4"
              >
                <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700">
                  <p.icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
