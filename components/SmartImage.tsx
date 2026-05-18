"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

type Props = Omit<ImageProps, "onError"> & {
  /** If `src` 404s or fails to load, this is rendered instead. */
  fallbackSrc?: string;
};

/**
 * <SmartImage /> wraps next/image with two safety nets:
 *
 *  1. SVG bypass — sets `unoptimized` automatically when the source is an
 *     `.svg` file. Next.js's Image Optimization API blocks SVGs by default
 *     for XSS safety, which is what made the gallery placeholders fail to
 *     render. By bypassing the optimizer for SVGs only, we keep raster
 *     optimization for real photos while letting SVG placeholders display.
 *
 *  2. fallbackSrc — if the primary source fails to load (e.g. you haven't
 *     uploaded `classroom-1.jpg` yet), the component swaps to `fallbackSrc`.
 *     This means contributors can drop JPGs into `public/gallery/` later
 *     without touching any TypeScript.
 */
export default function SmartImage({ src, fallbackSrc, ...rest }: Props) {
  const [current, setCurrent] = useState<ImageProps["src"]>(src);

  // If the parent re-renders with a new primary src, reset state.
  useEffect(() => {
    setCurrent(src);
  }, [src]);

  const isSvg = typeof current === "string" && current.toLowerCase().endsWith(".svg");

  return (
    <Image
      {...rest}
      src={current}
      // SVGs bypass the optimizer (which would otherwise block them).
      // Raster files (JPG/PNG/WebP) keep full optimization.
      unoptimized={isSvg ? true : rest.unoptimized}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) {
          setCurrent(fallbackSrc);
        }
      }}
    />
  );
}
