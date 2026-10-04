# Parth Sahni Portfolio

Personal portfolio built with Next.js (App Router), React 19 and plain CSS. No animation library: motion is CSS, one shared IntersectionObserver, CSS scroll-driven animations where supported, and `components/navigation-motion.tsx`, which gives in-page links an eased scroll and page links a curtain transition. All of it respects `prefers-reduced-motion`.

```bash
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Editing content

| What | Where |
| --- | --- |
| Name, study, college, city | `data/site.ts` → `profile` |
| Email, LinkedIn, WhatsApp | `data/site.ts` → `contactLinks` |
| Resume PDF | `public/resume/parth-sahni-resume.pdf` (path in `data/site.ts` → `resumeHref`) |
| Skills, interests, process steps | `data/site.ts` |
| Projects | `data/projects.ts` |

### Adding project images

Each project's image is set in its `image` field. To swap one, put the file in `public/images/` and update the field:

```ts
image: { src: "/images/swiggy-login.png", alt: "Describe the screen", width: 1600, height: 1000 },
```

Use `fit: "contain"` for device mockups on a plain background so the device is never cropped, and `fit: "logo"` for a small logo shown centred at a capped size. Third-party photos need a `credit` (shown on the case study page); the Monster Energy photo is CC BY-SA 4.0.

## Structure

- `app/` routes: `/`, `/work`, `/work/[slug]`, `/resume`, `/privacy`, `/terms`
- `components/home/` home page sections
- `components/` shared pieces: header, footer, project visual, work index, case study
- `app/globals.css` all styles, organised by section, tokens at the top
