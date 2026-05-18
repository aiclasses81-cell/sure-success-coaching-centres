import Link from "next/link";
import Image from "next/image";
import { logoSrc, siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "dark" | "light";
  /** Show the wordmark text next to the badge. Defaults to true. */
  showWordmark?: boolean;
  /** Size preset for the badge image. */
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-9 sm:h-10",
  md: "h-11 sm:h-12 lg:h-14",
  lg: "h-16 sm:h-20",
};

export default function Logo({
  variant = "dark",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const titleColor = variant === "light" ? "text-white" : "text-slate-900";
  const subColor = variant === "light" ? "text-brand-100/90" : "text-brand-700";

  return (
    <Link
      href="#home"
      className="inline-flex items-center gap-2.5 sm:gap-3 group select-none"
      aria-label={`${siteConfig.name} - Home`}
    >
      {/* Logo badge - keeps natural aspect ratio (~5:4) so wings don't get clipped */}
      <span
        className={`relative ${sizeMap[size]} aspect-[5/4] shrink-0 transition-transform duration-300 group-hover:scale-[1.04]`}
      >
        <Image
          src={logoSrc}
          alt={`${siteConfig.name} logo`}
          fill
          priority
          sizes="(max-width: 640px) 56px, (max-width: 1024px) 72px, 84px"
          className="object-contain drop-shadow-[0_3px_8px_rgba(15,42,95,0.18)]"
        />
      </span>

      {showWordmark && (
        <span className="leading-tight">
          <span
            className={`block font-display font-extrabold text-base sm:text-lg ${titleColor}`}
          >
            Sure Success
          </span>
          <span
            className={`block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase ${subColor}`}
          >
            Coaching Centre
          </span>
        </span>
      )}
    </Link>
  );
}
