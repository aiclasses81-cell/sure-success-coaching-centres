# Institute Photos

Drop your **real** institute JPGs into this folder using the exact filenames
below. The site will pick them up automatically — no code changes needed.

| Filename               | Used in                                             |
| ---------------------- | --------------------------------------------------- |
| `classroom-1.jpg`      | **Hero background** + Gallery (large tile) — pick the strongest classroom photo |
| `classroom-2.jpg`      | About collage (top-right) + Gallery                 |
| `classroom-3.jpg`      | About collage (main portrait) + Gallery — director  |
| `classroom-4.jpg`      | About collage (bottom-right) + Gallery (wide tile)  |
| `classroom-5.jpg`      | Gallery                                             |
| `classroom-6.jpg`      | Gallery                                             |

## How the swap works

1. Save the JPGs into this folder using the filenames above.
2. Open `lib/site.ts` and in the `galleryImages` array change each `src`
   from `-placeholder.svg` to `.jpg` — for example:

   ```ts
   { src: "/gallery/classroom-1.jpg", alt: "...", caption: "...", featured: true }
   ```

3. Save. The Hero background, About collage, and Gallery all update.

## Recommended specs

- **Format:** JPG (preferred) or WebP.
- **Width:** 1600 px or larger — Next/Image automatically generates
  responsive sizes for every device.
- **Quality:** 80–85 (keep each file under ~400 KB for fast loading).

## Until your JPGs are in place

Each filename has a branded blue SVG placeholder of the same name, so the
site renders intentional placeholder cards (not broken icons).
