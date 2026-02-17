# PRD: MVC Gateway Landing Page — Visual Redesign

## Overview
Transform the MVC Gateway landing page from a clean-but-basic layout into a dark, cinematic, mission-driven experience inspired by Anduril and Hadrian. The copy and narrative structure stay the same — this is purely a visual and experiential upgrade. The page should feel like a defense-tech mission briefing: dark, atmospheric, serious, and deeply confident.

**Project:** `~/Desktop/Primary_OIR/MVC/mvc-gateway/`
**Live URL:** mechanicalvisioncorp.com
**Stack:** Next.js 15 + Tailwind CSS 4 + React 19 + lucide-react
**Deploy:** Push to `main` on `jacobsalomon/mvc-gateway` → Vercel auto-deploys

## Goals
- Make the page feel premium, cinematic, and mission-driven (Anduril/Hadrian energy)
- Shift from alternating dark/light sections to a predominantly dark palette
- Add atmospheric industrial imagery (aerial factories, runways) from Unsplash
- Upgrade typography with a display font for headlines
- Add polished animation touches (stat counters, parallax, refined reveals)
- Fix remaining copy issues (navbar CTA, footer CTA)
- Maintain fast load times and accessibility

## Quality Gates

These commands must pass for every user story:
- `npm run build` — Next.js production build
- `npm run lint` — ESLint checks

For UI stories, also include:
- Visual verification in browser at `localhost:3000`

## User Stories

### US-001: Go Full Dark — Convert All Sections to Dark Palette
**Description:** As a visitor, I want the entire page to feel dark, cinematic, and cohesive — not alternating between dark hero and white content sections like a typical SaaS page.

**Acceptance Criteria:**
- [ ] "The Opportunity" section (currently `bg-white`) becomes dark (e.g., `bg-dark-900` or similar)
- [ ] "Why Now" section (currently `bg-gray-50`) becomes a slightly different dark shade for visual separation
- [ ] "What We Believe" section (currently `bg-white`) becomes dark
- [ ] CTA footer section becomes dark
- [ ] All text colors updated for contrast against dark backgrounds (white/cream primary, white/60-70% for secondary)
- [ ] Stat cards restyled for dark context (dark card with subtle border or glass-morphism effect)
- [ ] "Why Now" right-column stat cards restyled for dark context
- [ ] Section transitions use gradient fades rather than hard color breaks
- [ ] Footer text colors updated for dark background
- [ ] Page still reads well — hierarchy is clear, text is legible, sections are visually distinct despite all being dark

### US-002: Typography Upgrade — Display Font + Refined Hierarchy
**Description:** As a visitor, I want the typography to feel bold, industrial, and distinctive — not generic.

**Acceptance Criteria:**
- [ ] A display/heading font added via `next/font/google` (recommendation: Space Grotesk — techy, industrial, geometric)
- [ ] All `<h1>` and `<h2>` elements use the display font
- [ ] Hero headline (`h1`) sized up to `text-6xl md:text-8xl lg:text-9xl` with tight negative letter-spacing (`tracking-tighter`)
- [ ] Section headings (`h2`) sized to `text-4xl md:text-6xl` with `tracking-tight`
- [ ] Pillar numbers (01, 02, 03) use the display font at large size
- [ ] Body text remains Inter
- [ ] Stat numbers use the display font for extra impact
- [ ] Overall visual contrast between headings and body text is dramatically increased
- [ ] Font variables properly declared in layout.tsx and globals.css

### US-003: Hero Section — Atmospheric Background + Animated Grid
**Description:** As a visitor, I want the hero to feel immersive and cinematic — like I've entered a different world — not just text on a dark gradient.

**Acceptance Criteria:**
- [ ] Subtle animated dot-grid or node-mesh background effect (CSS/canvas-based, lightweight — no heavy libraries)
- [ ] A dark atmospheric Unsplash image layered behind the content with very low opacity (10-15%) for texture
- [ ] Hero content has more vertical breathing room
- [ ] CTA buttons restyled: primary button gets a subtle glow/shadow effect on hover
- [ ] "Scroll" indicator refined (more subtle, thinner typography)
- [ ] The overall hero feels like standing on the observation deck of a factory at night — dark, vast, purposeful

### US-004: Animated Stat Counters
**Description:** As a visitor, I want the big numbers (25%, 1.9M, $2T+) to count up from zero when they scroll into view — making them feel alive and dramatic.

**Acceptance Criteria:**
- [ ] New `CountUp` client component created at `components/count-up.tsx`
- [ ] Uses Intersection Observer to trigger when element enters viewport
- [ ] Animates from 0 to target number over ~2 seconds with ease-out curve
- [ ] Handles different formats: percentage (25%), abbreviated millions (1.9M), currency ($2T+)
- [ ] Prefix/suffix (%, M, $, +, T) handled correctly (don't animate the letters)
- [ ] Animation only triggers once (doesn't re-animate on scroll back)
- [ ] Respects `prefers-reduced-motion` (shows final number instantly)
- [ ] Applied to all stat numbers on the page (Opportunity section + Why Now section)

### US-005: Atmospheric Imagery — Unsplash Sourcing + Integration
**Description:** As a visitor, I want subtle, atmospheric industrial imagery that adds visual richness and depth without showing specific products or people.

**Acceptance Criteria:**
- [ ] 2-3 Unsplash images sourced (aerial factory/industrial complex, airport runway from above, abstract industrial texture)
- [ ] Images downloaded to `public/` directory (not hotlinked — Unsplash license requires download)
- [ ] Hero section: one image as very low-opacity background texture
- [ ] "Why Now" section: one image as background with dark overlay (opacity 8-12%)
- [ ] Images are optimized (compressed, reasonable file size <500KB each)
- [ ] Dark gradient overlays ensure text remains fully legible
- [ ] Images add atmosphere without distracting from content
- [ ] Proper Unsplash attribution added (comment in code with photographer + Unsplash link)

### US-006: Navbar + CTA Footer Copy & Style Updates
**Description:** As a visitor, I want the navigation and final call-to-action to feel cohesive with the new dark-cinematic design and use product-agnostic language.

**Acceptance Criteria:**
- [ ] Navbar CTA button text changed from "See AeroVision" to "See It in Action" (all instances — desktop, mobile)
- [ ] CTA footer paragraph changed from "We're starting in aerospace..." to something vague and exciting (e.g., "The technology is real. The mission is just beginning.")
- [ ] Navbar scroll behavior updated: since page is now all-dark, navbar starts transparent and transitions to dark solid (not white) on scroll
- [ ] Navbar scrolled state uses `bg-dark-950` or similar with subtle bottom border instead of `bg-white shadow-md`
- [ ] All nav link colors work against dark scrolled background
- [ ] Mobile menu styled dark to match
- [ ] Footer styled cohesively with dark theme

### US-007: Animation Polish — Parallax, Timing, Transitions
**Description:** As a visitor, I want the page to feel smooth, refined, and intentional in its motion — subtle touches that elevate the experience.

**Acceptance Criteria:**
- [ ] Hero background has a subtle parallax effect (moves slightly slower than content on scroll) — CSS `background-attachment: fixed` or transform-based
- [ ] Scroll-reveal animation durations increased slightly for more elegance (0.6s → 0.8s)
- [ ] Easing curves updated to `cubic-bezier(0.16, 1, 0.3, 1)` for a more refined feel
- [ ] Stat counter animations stagger slightly (first starts immediately, second after 0.2s, third after 0.4s)
- [ ] Section gradient transitions are smooth (no jarring color jumps)
- [ ] "What If" questions have a slightly longer stagger between reveals (feels more dramatic/deliberate)
- [ ] All animations still respect `prefers-reduced-motion`

## Functional Requirements
- FR-1: Page must load in under 3 seconds on Fast 3G (images optimized, no heavy JS libraries)
- FR-2: All text must maintain WCAG AA contrast ratio against dark backgrounds
- FR-3: Page must remain fully responsive (mobile, tablet, desktop)
- FR-4: No external animation libraries — all effects built with CSS animations, Intersection Observer, and lightweight vanilla JS/React
- FR-5: Unsplash images must be self-hosted in `public/` (not hotlinked)
- FR-6: Display font loaded via `next/font/google` for zero layout shift

## Non-Goals (Out of Scope)
- Changing the page copy/narrative structure (already approved)
- Adding new sections or removing existing ones
- Video backgrounds or Lottie animations (too heavy)
- Interactive 3D elements (WebGL/Three.js — overkill for a landing page)
- Mobile-specific redesign beyond responsive adjustments
- SEO or metadata changes

## Technical Considerations
- Project uses Next.js 15, Tailwind CSS 4, and lucide-react
- Tailwind theme is defined inline in `globals.css` via `@theme inline`
- No component library (shadcn/ui NOT installed in this project)
- Existing components: `Navbar`, `ScrollReveal`, `SectionWrapper` — modify in place
- New component needed: `CountUp` (client component for animated numbers)
- New component needed: `AnimatedGrid` or `ParticleGrid` (lightweight hero background)
- Images go in `public/` directory
- All existing animation keyframes are in `globals.css`
- **MUST stay on Next.js 15** — do NOT upgrade
- `next.config.ts` contains Vercel rewrites — DO NOT MODIFY
- `layout.tsx` has Google Analytics — DO NOT REMOVE

## File Map
| File | Changes |
|------|---------|
| `app/page.tsx` | Section backgrounds, text colors, stat counter integration, image backgrounds, CTA copy |
| `app/globals.css` | New animations, updated easing curves, gradient utilities, parallax styles |
| `app/layout.tsx` | Add display font import (keep everything else) |
| `components/navbar.tsx` | Dark scrolled state, CTA text, mobile menu dark styling |
| `components/scroll-reveal.tsx` | Updated timing/easing |
| `components/count-up.tsx` | NEW — animated number counter |
| `components/animated-grid.tsx` | NEW — subtle hero background animation |
| `public/*.jpg` | NEW — 2-3 Unsplash images |

## Current File State (as of Feb 2026)

### page.tsx sections (lines ~1-413):
1. Hero (dark gradient, "Free the Hands That Build")
2. The Opportunity (white bg, 3 stat cards: 25%, 1.9M, $2T+)
3. Why Now (gray-50 bg, 2-col with narrative left + stats right)
4. What We Believe (white bg, 3 pillars: Vision/AI/Documentation)
5. What If (dark bg, 4 "what if" questions)
6. CTA + Footer (white bg, "See It for Yourself")

### globals.css:
- Custom dark palette: dark-950 (#0C0C0C) through dark-700 (#2A2A2A)
- Warm cream accents: cream-200 (#E6E3E0) through cream-400 (#C2BCB5)
- Warm amber: amber-400 (#C9A87C), amber-500 (#B8956A)
- Warm-shifted grays
- Animation keyframes: fade-in-up, fade-in-left, fade-in-right, bounce-slow
- Utility classes for staggered reveals
- prefers-reduced-motion support

### Design Decisions Already Made:
- Dark & cinematic overall (Anduril energy)
- Abstract/atmospheric imagery — aerial factories, runways. No people.
- Subtle & elegant animations (not flashy)
- Typography: my pick (leading candidate: Space Grotesk for headlines)
- Navbar CTA: "See It in Action"
- Keep all existing copy — only change navbar CTA text + footer CTA paragraph
- Unsplash photos for imagery (not AI-generated)

### CTA Destinations:
- Primary: `/aerovision-demo/glasses-demo` ("See It in Action")
- Secondary: `/pitch` ("Investor Deck")
- Tertiary: `/aerovision-demo/dashboard` ("Explore the Platform")

## Success Metrics
- The page feels like it belongs alongside Anduril.com and Hadrian.co
- A visitor's first reaction is "these people are serious" — not "this is a startup template"
- All content remains readable and accessible
- Page loads fast, animations are smooth, no jank

## Open Questions
- Exact Unsplash images TBD (will be selected during US-005)
- Display font final selection confirmed during US-002 implementation (Space Grotesk is the leading candidate)
