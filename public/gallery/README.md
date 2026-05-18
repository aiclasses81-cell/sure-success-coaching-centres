# Institute Photos

Drop the **real** institute JPEGs into this folder using the exact filenames below.

| Filename | Used in | Description |
|---|---|---|
| `classroom-boys.jpg` | Hero (right card), Gallery (large tile) | Senior boys' batch in navy SSCC polos, mid-test |
| `classroom-coed.jpg` | About collage (top-right), Gallery | Co-ed batch with girls in front rows, written test |
| `director.jpg` | About collage (main portrait) | Founder/Director seated at S.S.C.C. desk |
| `foundation-batch.jpg` | About collage (bottom-right), Gallery | Younger Foundation co-ed batch, casual wear |

## How to swap placeholders for the real photos

1. Save your 4 photos into this folder using the **exact filenames** above.
2. Open `lib/site.ts` and in the `media` block, change each placeholder path
   from `/gallery/<name>-placeholder.svg` to `/gallery/<name>.jpg`. Example:

   ```ts
   classroomBoys: "/gallery/classroom-boys.jpg",
   ```

That's it — the photos will appear in Hero, About, and Gallery automatically.

### Recommended specs

- **Format:** JPG (preferred) or WebP
- **Width:** 1600 px or larger (Next.js will auto-resize for each device)
- **Quality:** 80–85 (keep under ~400 KB per image for fast loading)
