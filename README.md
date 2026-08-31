# MVC Gateway

**Landing page and routing gateway for mechanicalvisioncorp.com.**

This is the front door for The Mechanical Vision Corporation's web presence. It serves the marketing landing page and routes traffic to the other MVC apps via Vercel rewrites.

## What It Does

1. **Landing page** at `mechanicalvisioncorp.com` with the "Free the Hands That Build" hero section
2. **Rewrites** traffic to the two other Next.js apps:
   - `/aerovision/*` &rarr; MechaVision MVP (product app + API)
   - `/pitch/*` &rarr; Seed Deck (investor pitch)
3. **Domain redirects** — consolidates all domain variants:
   - `mechavisioncorp.com` (+ www) &rarr; `mechanicalvisioncorp.com`
   - `mechanicalvision.ai` &rarr; `mechanicalvisioncorp.com`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.5.12 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| UI | React 19 |

## Components

- **Navbar** — site navigation
- **AnimatedGrid** — background visual effect (GC-optimized)
- **WastedHoursTicker** — dynamic counter with IntersectionObserver (only runs when visible)
- **WhatIfScroll** — lazy-loaded scroll interaction
- **ScrollReveal** — reveal-on-scroll animations
- **ScrollProgress** — page scroll indicator

## Multi-Zone Architecture

This gateway is part of a three-app setup on one domain:

| App | Repo | Next.js | basePath | Vercel Project |
|-----|------|---------|----------|---------------|
| Gateway (this) | `jacobsalomon/mvc-gateway` | 15 | (none) | mvc-gateway |
| MechaVision MVP | `jacobsalomon/aerovision-mvp` | 16 | `/aerovision` | aerovision-mvp |
| Seed Deck | `jacobsalomon/aerovision-seed-deck` | 15 | `/pitch` | aerovision-seed-deck |

Rewrites are defined in `next.config.ts` under `beforeFiles`. All three auto-deploy from `main` via GitHub.

The gateway and Seed Deck remain on Next.js 15; the MechaVision MVP runs Next.js 16. Routing behavior is protected by executable host/path contract tests in this repository.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

Auto-deploys to Vercel from `main`. No environment variables required for the gateway itself.

## License

Private. All rights reserved.
