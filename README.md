# RCF KWASU Media Week 2026

A Next.js 14 marketing site for **RCF KWASU Media Week 2026** — June 12, 2026. Built with TypeScript, Tailwind CSS, and the App Router.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, media pillars, highlights, CTA |
| `/about` | Mission, vision, values |
| `/schedule` | Event timeline |
| `/register` | Registration form (demo) |
| `/testimonials` | Participant stories |

## Edit placeholder content

All copy and image URLs live in `src/data/content.ts` — including the `visuals` object for gallery, hero, and page banner photos. Swap URLs for files in `/public/images/` when you have your own shots.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design notes

- Blue/white church aesthetic with gold accents
- Rich visuals: hero collage, bento gallery, photo marquee, full-bleed page heroes
- Media-themed UI: REC badges, viewfinders, scanlines, film strips, timecode, waveforms
- Ken Burns image motion, hover shimmer, floating cards, timeline strip
- Responsive layout with mobile navigation
- Fonts: Playfair Display (headings), Plus Jakarta Sans (body)

## Connect the registration form

`src/components/RegisterForm.tsx` currently shows a success message on submit. Connect it to your backend, [Formspree](https://formspree.io), Google Forms, or Supabase when ready.
