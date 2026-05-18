"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const classOptions = [
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI - Science",
  "Class XII - Science",
  "IIT-JEE",
  "NEET",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    classFor: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp pre-filled with the message; user can later wire to backend/email
    const text = encodeURIComponent(
      `New Enquiry from website:\n\nName: ${form.name}\nPhone: ${form.phone}\nClass: ${form.classFor}\nMessage: ${form.message}`
    );
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${text}`,
      "_blank",
      "noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title mt-3"
          >
            Ready to begin your{" "}
            <span className="gradient-text">success story</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-600"
          >
            Talk to our counsellor today, visit our centre, or send us a quick
            enquiry.
          </motion.p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="card p-6">
              <h3 className="font-display font-semibold text-slate-900 text-lg">
                Reach our centre
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600 mt-0.5">
                      {siteConfig.address}
                    </p>
                    <a
                      href={siteConfig.mapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900"
                    >
                      Get Directions →
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Call Us</p>
                    <div className="mt-0.5 flex flex-wrap gap-x-3 gap-y-1">
                      {siteConfig.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="text-slate-600 hover:text-brand-700"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-slate-600 hover:text-brand-700 break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Open Hours</p>
                    <p className="text-slate-600 mt-0.5">
                      Mon - Sat · 7:00 AM to 9:00 PM
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden ring-1 ring-slate-100 shadow-soft aspect-[4/3]">
              <iframe
                src={siteConfig.mapsEmbed}
                title="Sure Success Coaching Centre Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 text-white p-1.5 shadow-card">
              <div className="rounded-[1.4rem] bg-white/[0.04] backdrop-blur p-6 sm:p-8">
                <h3 className="font-display font-bold text-2xl">
                  Send an enquiry
                </h3>
                <p className="text-sm text-brand-100/80 mt-1">
                  Fill the form - our team will reach out within a few hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-300/40 p-6 text-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-300 mx-auto" />
                    <p className="mt-2 font-display font-semibold text-lg">
                      Thank you, {form.name || "student"}!
                    </p>
                    <p className="text-sm text-brand-100/85 mt-1">
                      Your enquiry is on its way. We've also opened WhatsApp for
                      faster connect.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          phone: "",
                          classFor: "",
                          message: "",
                        });
                      }}
                      className="mt-4 text-xs font-semibold text-accent-300 hover:text-accent-200"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="mt-6 grid sm:grid-cols-2 gap-4"
                  >
                    <Field
                      label="Full Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Student / Parent name"
                    />
                    <Field
                      label="Phone Number"
                      required
                      type="tel"
                      pattern="[0-9+\s-]{7,}"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      placeholder="10-digit mobile"
                    />
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-brand-100/80">
                        Class / Course <span className="text-accent-300">*</span>
                      </label>
                      <select
                        required
                        value={form.classFor}
                        onChange={(e) =>
                          setForm({ ...form, classFor: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-brand-100/50 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent appearance-none"
                      >
                        <option value="" className="text-slate-900">
                          Select a class / course
                        </option>
                        {classOptions.map((c) => (
                          <option key={c} value={c} className="text-slate-900">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-brand-100/80">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell us briefly what you'd like to know..."
                        className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-brand-100/50 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mt-1">
                      <p className="text-xs text-brand-100/60">
                        By submitting, you agree to be contacted by our team.
                      </p>
                      <button type="submit" className="btn-accent">
                        <Send className="w-4 h-4" /> Send Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
  pattern,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  pattern?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-brand-100/80">
        {label} {required && <span className="text-accent-300">*</span>}
      </label>
      <input
        type={type}
        required={required}
        pattern={pattern}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-brand-100/50 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent"
      />
    </div>
  );
}
