import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-slate-900";
  const sub = variant === "light" ? "text-brand-100" : "text-brand-700";
  return (
    <Link href="#home" className="flex items-center gap-2.5 group">
      <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 shadow-card overflow-hidden">
        <GraduationCap className="w-5 h-5 text-white relative z-10" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-400 ring-2 ring-white" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display font-extrabold text-base sm:text-lg ${text}`}
        >
          Sure Success
        </span>
        <span
          className={`block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase ${sub}`}
        >
          Coaching Centre
        </span>
      </span>
    </Link>
  );
}
