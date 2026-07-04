---
version: alpha
name: MVC Gateway
description: Cinematic industrial landing and brief system for Mechanical Vision Corporation.
colors:
  primary: "#0C0C0C"
  secondary: "#E6E3E0"
  tertiary: "#C9A87C"
  neutral: "#F3F1EE"
  surface: "#161616"
  surfaceAlt: "#1C1C1C"
  line: "#D4D0CB"
  textMuted: "#737373"
  textStrong: "#FAFAF8"
typography:
  h1:
    fontFamily: "Space Grotesk"
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  h2:
    fontFamily: "Space Grotesk"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  body-lg:
    fontFamily: "Inter"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: "Inter"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.25em
rounded:
  xs: 2px
  sm: 4px
  md: 6px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px
  link-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 8px
  stat-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.textStrong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 24px
  nav-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px
  brief-page:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 32px
---

## Overview

The gateway should feel like the front gate to an industrial technology company, not a generic startup homepage. It is cinematic, high-contrast, and deliberate. The product promise is big, so the page can be bold, but it should still feel restrained and expensive.

The visual reference is closer to a premium industrial manifesto or a sharp print spread than to a typical SaaS site. Big statements, real breathing room, dark fields, and one warm accent lane.

This repo also owns the `/brief` pages. Those pages use the same brand voice, but in a print-first format that feels like a board handout or design-partner leave-behind.

## Colors

The palette is intentionally narrow.

- **Primary (`#0C0C0C`)** is true black. It should dominate the hero, dark sections, and the print brief backgrounds.
- **Secondary (`#E6E3E0`)** is the warm cream used for primary CTAs, key text on dark surfaces, and the brand's softer highlights.
- **Tertiary (`#C9A87C`)** is the industrial gold accent. Use it for stat emphasis, small highlights, and premium cues.
- **Neutral (`#F3F1EE`)** is the warm off-white background for lighter moments.
- **Surface (`#161616`)** and **Surface Alt (`#1C1C1C`)** are dark panel layers.
- **Line (`#D4D0CB`)** and **Text Muted (`#737373`)** should stay understated.

Avoid introducing extra hue families. The whole point is discipline. If every section gets a new accent, the brand loses its edge.

## Typography

Typography drives most of the personality in this repo.

- **Space Grotesk** is the display voice. Headlines should feel geometric, mechanical, and slightly severe.
- **Inter** is the supporting voice. It keeps the body copy clean and easy to read.
- Wide tracking belongs on tiny labels, not body copy.

Hero typography should feel oversized and confident. Body text should stay readable and calm. The brief pages can tighten the scale for print, but they should still feel like the same brand family.

## Layout

The landing page is section-driven and cinematic.

- Use full-viewport or near-full-viewport sections when the story needs weight.
- Keep the content width disciplined, usually around a centered long-read column or a balanced two-column grid.
- Let the page breathe. White space is part of the tone.
- Below-the-fold motion should enhance pacing, not become the product.

The `/brief` routes are different by design. They are fixed-format, letter-sized pages intended to read well both on screen and on paper.

## Elevation & Depth

Depth should come from atmosphere more than from UI chrome.

- Low-opacity photography creates texture behind dark sections.
- Dot grids and subtle overlays provide engineering texture.
- Glassy nav blur and gentle card borders are enough. Heavy shadows should be rare.

The brief pages are flatter and more print-like. They should feel composed, not animated.

## Shapes

The repo uses mostly square-ish geometry with only slight softening.

- Buttons and cards usually sit at `rounded-sm` or close to it.
- Panels should feel cut and machined, not bubbly.
- Large pills, over-rounded chips, and playful blobs do not belong here.

## Components

The key components are simple but opinionated.

- **Primary CTA buttons** are cream on black and should feel substantial, not glossy.
- **Stat cards** are dark, quiet containers that let big numbers speak.
- **Navigation** should disappear into the page until it needs to anchor the user.
- **Scroll-driven sections** should read like narrative beats, not gimmicks.
- **Brief pages** should feel print-native, with exact dimensions, strong headline hierarchy, and controlled density.

If a new component does not reinforce the industrial, high-contrast tone, it probably belongs in another repo, not this one.

## Do's and Don'ts

Do keep the brand black-forward, cream-backed, and accent-light.

Do use photography as atmosphere, not as a busy collage.

Do make motion meaningful, especially in the hero and scroll narrative.

Do let the `/brief` pages stay print-first and disciplined.

Do not turn this into a bright blue tech site.

Do not use soft SaaS gradients, purple accents, or cheerful rounded cards.

Do not overload the page with feature-grid clutter. This repo sells the mission and routes the visitor onward.

Do not duplicate product UI patterns from MechaVision. The gateway is the invitation, not the working cockpit.
