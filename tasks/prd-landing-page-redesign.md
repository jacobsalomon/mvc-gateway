# PRD: MVC Landing Page Redesign

## Overview

Redesign the landing page at mechanicalvisioncorp.com (the `mvc-gateway` project at `~/Desktop/Primary_OIR/MVC/mvc-gateway/`) from a single-hero placeholder into a full multi-section marketing page. The page tells the story of why The Mechanical Vision Corporation exists: skilled tradespeople across aerospace, automotive, and industrial sectors are drowning in paperwork, and MVC is building the solution. The page drives visitors to AeroVision (the aerospace product demo) and the investor deck.

**Key positioning:** MVC is a cross-industry company for mechanics. AeroVision is the first product line, focused on aerospace. The company is in stealth — don't reveal how the product works. Focus on the problem and paint a vision of the solved world.

## Goals

- Replace the current single-hero page with a 7-section marketing page
- Establish MVC as a cross-industry company serving mechanics in aerospace, automotive, and industrial
- Communicate the paperwork crisis with real statistics
- Weave in the reindustrialization/labor force narrative (one dedicated section + subtle references)
- Drive visitors to the AeroVision demo, investor deck, and dashboard
- Match the doss.com design language: bold typography, generous whitespace, card-based layouts, scroll animations
- Dark hero transitioning to light sections below
- Fully responsive (desktop + mobile)
- Lightweight — CSS animations + Intersection Observer only (no GSAP/Framer Motion)

## Quality Gates

These must pass for every user story:
- `npx tsc --noEmit` — TypeScript type checking
- `npx next build` — Production build succeeds
- Visual verification in browser at desktop (1440px) and mobile (375px) widths

## User Stories

### US-001: Project Setup & Design System
**Description:** As a developer, I want the project scaffolded with design tokens, animation utilities, and component structure so that subsequent stories can build on a solid foundation.

**Acceptance Criteria:**
- [ ] Install `lucide-react` as a dependency
- [ ] Update `app/globals.css` with expanded design tokens: navy-900 (#0a0f1a), navy-800 (#111827), accent blue (#2563EB), stat-blue (#3b82f6), light grays for section backgrounds
- [ ] Add CSS animation keyframes for fade-in-up, fade-in-left, fade-in-right (transform + opacity transitions, 0.6s ease-out)
- [ ] Create `components/scroll-reveal.tsx` — a reusable wrapper component using Intersection Observer that adds animation classes when elements enter the viewport (threshold 0.1, triggerOnce)
- [ ] Create `components/section-wrapper.tsx` — a reusable section container with consistent max-width (1280px), horizontal padding, and vertical spacing
- [ ] Existing `next.config.ts` rewrites and `layout.tsx` Google Analytics are untouched
- [ ] `npx tsc --noEmit` passes
- [ ] `npx next build` passes

### US-002: Sticky Navigation Bar
**Description:** As a visitor, I want a sticky navigation bar so that I can always access the demo CTA and navigate between sections.

**Acceptance Criteria:**
- [ ] Create `components/navbar.tsx` with: MVC company name/wordmark on the left, section anchor links in the center (hidden on mobile), "See AeroVision" primary CTA button on the right
- [ ] Nav starts transparent over the dark hero, transitions to solid white with shadow on scroll (using scroll event listener with a threshold ~50px)
- [ ] Text color flips from white (over hero) to dark (after scroll) with smooth transition
- [ ] "See AeroVision" button links to `/aerovision-demo/glasses-demo`
- [ ] On mobile: hamburger menu icon toggles a slide-down menu with section links and CTA
- [ ] Nav is `position: fixed` with `z-50`
- [ ] Add navbar to `app/page.tsx`

### US-003: Hero Section
**Description:** As a visitor, I want a bold, dark hero section that immediately communicates what MVC does and compels me to scroll or click the CTA.

**Acceptance Criteria:**
- [ ] Full-viewport-height section with dark navy/near-black gradient background (navy-900 to navy-800)
- [ ] Subtle geometric pattern or grid overlay at low opacity for visual texture (CSS-only, no images needed — use a repeating linear-gradient grid pattern)
- [ ] Large headline: "The Mechanic Works." on line one, "The Paperwork Writes Itself." on line two — responsive sizing (text-5xl mobile, text-7xl desktop)
- [ ] Subheadline below: one sentence establishing MVC across aerospace, automotive, and industrial (e.g., "Across aerospace, automotive, and industrial — we're ending the paperwork burden for the people who build and maintain everything.")
- [ ] Primary CTA button: "See AeroVision" → `/aerovision-demo/glasses-demo` (white button, bold)
- [ ] Secondary CTA link: "Investor Deck" → `/pitch` (text link with arrow, more subtle)
- [ ] Staggered fade-in animations on headline, subheadline, and CTAs (using the CSS animation delays from US-001)
- [ ] Scroll-down indicator at bottom (subtle animated chevron)

### US-004: The Problem Section
**Description:** As a visitor, I want to understand the paperwork crisis facing mechanics so that I feel the urgency of what MVC is solving.

**Acceptance Criteria:**
- [ ] White/light background section, clear visual break from dark hero
- [ ] Section header: something punchy establishing the problem (e.g., "The Crisis Hiding in Plain Sight")
- [ ] Three stat cards in a responsive grid (3-column desktop, stacked mobile), each with:
  - A large stat number in accent blue (doss-style oversized treatment, ~text-6xl)
  - A supporting label below explaining the stat
  - Stats to use: "60%" / "of a mechanic's day is paperwork, not work" | "40,000" / "mechanic shortage by 2028" | "$1–2M" / "cost of a single failed aircraft transition"
- [ ] Below the cards: a short paragraph (2-3 sentences) that names all three verticals — aerospace, automotive, industrial — and frames this as a systemic problem, not one industry's quirk
- [ ] All cards use ScrollReveal for fade-in-up animation on scroll
- [ ] Source attributions in small muted text below stats (e.g., "McKinsey" / "Oliver Wyman" / "IBA")

### US-005: The Stakes Section
**Description:** As a visitor, I want to understand what's at risk when documentation fails so that the urgency is clear.

**Acceptance Criteria:**
- [ ] Light gray background (bg-gray-50 or similar) to differentiate from the Problem section
- [ ] Section header framing the consequences (e.g., "When the Paperwork Fails, Everything Fails")
- [ ] 3-4 stat items displayed in a horizontal layout (desktop) or stacked (mobile), each with a large number and one-line explanation. Stats to use:
  - "520,000" / "suspected unapproved parts in aircraft annually"
  - "70%" / "of compliance failures caused by poor documentation"
  - "800+" / "aircraft grounded by the FAA for documentation violations"
- [ ] No company names, no scandal narratives — just the numbers speaking for themselves
- [ ] Subtle divider lines or card borders between stats
- [ ] ScrollReveal fade-in animations

### US-006: Reindustrialization & Labor Force Section
**Description:** As a visitor, I want to understand why this problem matters NOW — connecting MVC to the broader reindustrialization of America and the labor force crisis.

**Acceptance Criteria:**
- [ ] White background section
- [ ] Section header tying to the labor force narrative (e.g., "America Is Rebuilding. The Workforce That Builds Everything Still Runs on Paper.")
- [ ] Two-column layout on desktop (text left, visual/stats right), stacked on mobile
- [ ] Left column: 2-3 short, punchy paragraphs weaving together:
  - America is investing trillions in manufacturing, aerospace, defense, infrastructure
  - The mechanics and technicians who do this work are the backbone — and they're retiring (80% within 6 years, 27% already over 64)
  - You can't reindustrialize with 1970s paperwork systems
  - Documentation IS infrastructure
- [ ] Right column: 2-3 supporting stats displayed large (e.g., "80%" / "of the workforce expected to retire within 6 years" and "5 years" / "to train a new mechanic")
- [ ] ScrollReveal animations (text fades in from left, stats from right)

### US-007: "What If..." Vision Section
**Description:** As a visitor, I want to imagine what the world looks like when the documentation problem is solved — without being told how the product works.

**Acceptance Criteria:**
- [ ] Dark section (navy-800 or navy-900 background, white text) creating a visual bookend with the hero
- [ ] Section opens with "What if..." in large italic or lighter-weight text
- [ ] 3-4 "What if..." statements, each on its own line with generous spacing, painting the solved world:
  - "What if mechanics never touched a form again?"
  - "What if every part had a complete, tamper-proof history from the moment it was made?"
  - "What if documentation generated itself — from the work, as it happens?"
  - "What if the people who build everything could just... build?"
- [ ] Each statement fades in sequentially as the user scrolls (staggered ScrollReveal)
- [ ] No product details, no technology explanation — pure vision
- [ ] Ends with a brief line: "That's what we're building." followed by "See AeroVision →" link to `/aerovision-demo/glasses-demo`

### US-008: CTA Section & Footer
**Description:** As a visitor, I want a clear final call-to-action and clean footer so I know exactly what to do next.

**Acceptance Criteria:**
- [ ] CTA section with white background, centered layout
- [ ] Headline: "See It In Action" or similar
- [ ] Three CTA options clearly laid out:
  - Primary: "See AeroVision" → `/aerovision-demo/glasses-demo` (large blue button)
  - Secondary: "Investor Deck" → `/pitch` (outlined button or text link)
  - Tertiary: "View Dashboard" → `/aerovision-demo/dashboard` (text link)
- [ ] Below the CTAs: minimal footer with "The Mechanical Vision Corporation" and "Jake Salomon | jacobrsalomon@gmail.com" (matching current footer content)
- [ ] Copyright line: "© 2026 The Mechanical Vision Corporation"
- [ ] Footer has subtle top border and muted text colors

### US-009: Responsive Polish & Scroll Animations
**Description:** As a visitor on any device, I want the page to look polished and animations to feel smooth so that MVC feels like a credible, well-built company.

**Acceptance Criteria:**
- [ ] All sections verified at 1440px (desktop), 1024px (tablet), and 375px (mobile) widths
- [ ] Typography scales appropriately (hero headline shrinks on mobile, stat numbers stay large but not overflowing)
- [ ] All stat cards stack to single-column on mobile with proper spacing
- [ ] Navbar hamburger menu works correctly on mobile
- [ ] ScrollReveal animations trigger correctly on all sections (no janky partial reveals)
- [ ] `prefers-reduced-motion` media query disables animations for accessibility
- [ ] No horizontal scroll on any viewport width
- [ ] Page loads fast — no heavy images, no JS animation libraries
- [ ] `npx tsc --noEmit` passes
- [ ] `npx next build` passes
- [ ] Visual verification at desktop AND mobile confirms all sections render correctly

## Functional Requirements

- FR-1: The page must include a sticky navigation bar with a "See AeroVision" CTA that links to `/aerovision-demo/glasses-demo`
- FR-2: The page must include anchor links that smooth-scroll to each section
- FR-3: All three CTAs must link to their correct destinations: `/aerovision-demo/glasses-demo`, `/pitch`, `/aerovision-demo/dashboard`
- FR-4: Scroll-triggered animations must use Intersection Observer API (no external animation libraries)
- FR-5: The page must be fully responsive from 375px to 1440px+
- FR-6: The existing Vercel rewrites in `next.config.ts` must not be modified
- FR-7: Google Analytics (G-ENBE6GFB86) in `layout.tsx` must not be removed
- FR-8: The page must respect `prefers-reduced-motion` for accessibility
- FR-9: All statistics displayed must be real numbers from the MVC research (McKinsey, Oliver Wyman, FAA, IBA, ATEC sources)

## Non-Goals (Out of Scope)

- No "How It Works" section — company is in stealth
- No social proof / testimonials — company is pre-launch
- No stock photography or imported images (geometric patterns and CSS only, keep existing aircraft-wireframe.jpg available but not required)
- No heavy animation libraries (GSAP, Framer Motion, etc.)
- No changes to the AeroVision MVP or Seed Deck projects
- No contact form or email capture
- No blog, team page, or additional routes
- No dark mode toggle (the page has dark sections but is not a dark-mode site)

## Technical Considerations

- **Project:** `~/Desktop/Primary_OIR/MVC/mvc-gateway/`
- **Stack:** Next.js 15 (^15.5.12, do NOT upgrade) + Tailwind 4 + React 19
- **Tailwind 4:** Uses `@theme` inline directive in `globals.css`, NOT a separate `tailwind.config.ts`
- **Existing asset:** `public/aircraft-wireframe.jpg` can be reused in hero if desired
- **Deployment:** Push to `main` on `jacobsalomon/mvc-gateway` → Vercel auto-deploys
- **Keep components simple:** Plain React components, no state management library needed
- **Intersection Observer:** Create one reusable `ScrollReveal` component, don't repeat the observer logic

## Success Metrics

- Page tells a coherent story from problem → stakes → why now → vision → CTA
- All three CTA destinations work correctly through Vercel rewrites
- Page feels like "a founder built it with conviction, not a marketing agency"
- Loads fast with no layout shifts or jank
- Looks polished at both desktop and mobile widths

## Open Questions

- None — all key decisions resolved through clarifying questions

---

## Pickup Context

**To resume this work in a new session, paste this file path and say "execute this PRD".**

### Key Research Stats (pre-extracted)
- 60% of mechanic time on paperwork (McKinsey)
- 40,000 mechanic shortage by 2028 (Oliver Wyman, ATEC)
- $1-2M cost per failed narrowbody transition (IBA)
- 520,000 suspected unapproved parts annually (FAA)
- 70% of compliance failures from poor document management (Airbus)
- 800+ aircraft grounded by FAA for documentation violations (Jan 2026)
- 80% of workforce expected to retire within 6 years (ATEC)
- 27% of mechanics over 64 (ATEC)
- 5 years to train a new mechanic (Parker Aerospace conversation)

### Design Decisions (already made)
- Dark navy hero → light sections → dark "What If" → light CTA/footer
- Tagline: "The Mechanic Works. The Paperwork Writes Itself."
- MVC = cross-industry company (aerospace, automotive, industrial). AeroVision = aerospace product.
- In stealth — no "how it works" section. "What if..." paints the vision instead.
- No social proof (pre-launch). No scandal names (subtle stats only).
- Reindustrialization woven in with labor force focus (one dedicated section + subtle references)
- Doss.com design language: bold type, whitespace, card layouts, scroll animations
- Lightweight: CSS animations + Intersection Observer only

### Files to Preserve
- `next.config.ts` — Vercel rewrites (DO NOT MODIFY)
- `layout.tsx` — Google Analytics (DO NOT REMOVE)

### CTA Destinations
- Primary: `/aerovision-demo/glasses-demo` ("See AeroVision")
- Secondary: `/pitch` ("Investor Deck")
- Tertiary: `/aerovision-demo/dashboard` ("View Dashboard")
