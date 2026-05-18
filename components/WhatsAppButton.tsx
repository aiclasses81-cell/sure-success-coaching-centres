"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Sure Success Coaching Centre, I would like to enquire about your courses."
  );
  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping-slow" />
      <span className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-card hover:scale-110 transition-transform">
        <svg
          viewBox="0 0 32 32"
          aria-hidden
          className="w-7 h-7 fill-white"
        >
          <path d="M19.11 17.31c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.46-.83-2-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29c0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.74 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.31zM16.06 4C9.4 4 4 9.4 4 16.06c0 2.13.55 4.21 1.6 6.04L4 28l6.06-1.59a12.04 12.04 0 0 0 6 1.55h.01c6.66 0 12.06-5.4 12.06-12.06S22.72 4 16.06 4zm0 21.91h-.01a9.83 9.83 0 0 1-5.02-1.37l-.36-.21-3.6.94.96-3.51-.23-.36a9.85 9.85 0 0 1-1.51-5.34c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.89 6.99c0 5.45-4.43 9.84-9.88 9.84z" />
        </svg>
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-soft opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
