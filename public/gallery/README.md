# Institute Photos

This folder is the single drop-in spot for your real institute photos.

## Just drop your JPGs in — no code edits

Save the institute's photos here using these **exact** filenames:

```
public/gallery/classroom-1.jpg
public/gallery/classroom-2.jpg
public/gallery/classroom-3.jpg
public/gallery/classroom-4.jpg
public/gallery/classroom-5.jpg
public/gallery/classroom-6.jpg
```

That's it. The site picks them up on next request — **zero TypeScript edits**.

### How it works

The `<SmartImage>` wrapper used in Hero, About, and Gallery loads each
`classroom-N.jpg` as the primary source. If a JPG isn't there yet, it
**automatically falls back** to the matching branded
`classroom-N-placeholder.svg` shipped with the repo, so the site never
shows broken images.

### Where each photo appears

| Filename            | Used in                                                        |
| ------------------- | -------------------------------------------------------------- |
| `classroom-1.jpg`   | **Hero background** + Gallery (large bento tile) — strongest classroom shot |
| `classroom-2.jpg`   | About collage (top-right) + Gallery                            |
| `classroom-3.jpg`   | About collage (main portrait) + Gallery — **director photo**   |
| `classroom-4.jpg`   | About collage (bottom-right) + Gallery (wide tile)             |
| `classroom-5.jpg`   | Gallery                                                        |
| `classroom-6.jpg`   | Gallery                                                        |

### Recommended specs

- **Format:** JPG (or PNG / WebP — just rename the `src` field in `lib/site.ts`)
- **Width:** 1600 px or larger — Next/Image generates responsive sizes for every device
- **Quality:** 80–85 (keep each file under ~400 KB for fast loading)

### To pick a different "featured" image for the Hero

In `lib/site.ts`, set `featured: true` on the entry you want as the Hero
background and remove it from the others (only one image is featured).
