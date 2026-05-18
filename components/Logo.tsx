import Link from "next/link";
import Image from "next/image";

export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-slate-900";
  const sub = variant === "light" ? "text-brand-100" : "text-brand-700";
  return (
    <Link href="#home" className="flex items-center gap-2.5 group" aria-label="Sure Success Coaching Centre - Home">
      <span className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Image
          src="/logo.svg"
          alt="Sure Success Coaching Centre logo"
          fill
          priority
          sizes="48px"
          className="object-contain drop-shadow-[0_4px_10px_rgba(30,64,175,0.25)]"
        />
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
