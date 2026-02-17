# Pickup Prompt: MVC Landing Page Visual Redesign

## What to do

Execute the PRD at `tasks/prd-landing-page-redesign.md` in this project (`~/Desktop/Primary_OIR/MVC/mvc-gateway/`). Work through the 7 user stories sequentially. Use the `frontend-design` skill for implementation quality.

## Status

- **All 7 stories are pending** — no implementation work has started yet
- The PRD is fully approved by Jake
- The current page is live at mechanicalvisioncorp.com and already has good copy/structure — this is a VISUAL upgrade only

## What's already done (previous sessions)

- Copy and narrative are finalized — do NOT change the words, only the visuals
- Favicon updated to black/cream eye icon (app/icon.svg)
- Research notes at `LANDING_PAGE_NOTES.md` (untracked, for reference only)
- Page has 6 sections: Hero, Opportunity (stats), Why Now, What We Believe (pillars), What If, CTA+Footer

## Execution order (stories)

1. **US-001: Go Full Dark** — Convert all light sections to dark backgrounds. This is the foundation — everything else builds on it.
2. **US-002: Typography** — Add Space Grotesk (or your best pick) as display font for headlines. Update sizing/tracking.
3. **US-003: Hero** — Add animated dot-grid background + atmospheric Unsplash image at low opacity.
4. **US-004: Stat Counters** — Create `components/count-up.tsx`, animate the big numbers.
5. **US-005: Imagery** — Source 2-3 Unsplash images (aerial industrial/factory/runway), download to `public/`, integrate as section backgrounds with dark overlays.
6. **US-006: Nav + CTA copy** — Change "See AeroVision" → "See It in Action", update footer CTA copy, make navbar dark-on-scroll instead of white-on-scroll.
7. **US-007: Animation polish** — Parallax, refined easing, stagger timing.

## Quality gates (run after EVERY story)

```bash
cd ~/Desktop/Primary_OIR/MVC/mvc-gateway && npm run build && npm run lint
```

Also visually verify at `localhost:3000` (run `npm run dev` to start dev server).

## Critical rules

- **DO NOT change the copy/words** — only change colors, fonts, images, animations, layout
- **DO NOT modify `next.config.ts`** — it has Vercel rewrites
- **DO NOT remove Google Analytics from `layout.tsx`**
- **Stay on Next.js 15** — do not upgrade
- **No heavy libraries** — no GSAP, Framer Motion, Three.js. CSS animations + Intersection Observer only.
- **Unsplash images go in `public/`** — don't hotlink
- **All animations must respect `prefers-reduced-motion`**
- Deploy: push to `main` → Vercel auto-deploys

## Key files

| File | Role |
|------|------|
| `app/page.tsx` | The landing page (413 lines) |
| `app/globals.css` | Theme tokens + animation keyframes |
| `app/layout.tsx` | Root layout with Inter font + GA |
| `components/navbar.tsx` | Sticky nav |
| `components/scroll-reveal.tsx` | Intersection Observer animation wrapper |
| `components/section-wrapper.tsx` | Consistent section container |
| `LANDING_PAGE_NOTES.md` | Research notes (reference only) |

## Design direction (Jake's choices)

- **Overall vibe:** Dark & cinematic (Anduril.com energy)
- **Imagery:** Abstract/atmospheric — aerial factories, airport runways from above. NO people, NO stock photos.
- **Animations:** Subtle & elegant — not flashy
- **Typography:** My pick (Space Grotesk recommended for headlines, Inter stays for body)
- **Color palette already exists in globals.css:** dark-950 (#0C0C0C), cream-200 (#E6E3E0), amber-400 (#C9A87C)

## Jake context

Jake is non-technical. Explain what you're doing in plain language. Run all commands yourself. Ask questions with lettered options if needed. Announce which story you're starting before each one.
