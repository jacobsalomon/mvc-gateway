# MVC Gateway — Agent Instructions

**Source of truth:** `README.md` (role, tech stack, components), `ARCHITECTURE.md`, `DESIGN.md`.

Landing page and routing gateway for `mechanicalvisioncorp.com`. Owns the Vercel rewrites that stitch the multi-zone setup together (`/aerovision/*` → aerovision-mvp, `/pitch/*` → seed deck) and the domain redirects (`mechavisioncorp.com`, `mechanicalvision.ai` → main domain).

## Critical Rules (don't violate)

- **Next.js 15 only.** v16 breaks the multi-zone rewrites. Blast radius is bigger than this repo: a bad deploy here takes down routing for the product app and the pitch deck too.
- **Never push directly to `main`.** It auto-deploys to production via Vercel. Use PRs.
- **Run `/Users/jake/bin/mvc-doctor.sh`** before any build, deploy, or merge work.
- **Marketing copy follows the product language:** glasses observe, mechanic just does the job — never "narrates". Writing style rules apply (no em dashes, no semicolons, no buzzwords — see `~/AGENTS.md` → Writing Style Rules).
- **iCloud guardrail:** canonical root is `/Users/jake/dev/Primary_OIR/MVC/mvc-gateway`. If the path resolves under `~/Desktop` or `~/Documents`, run `/Users/jake/bin/repo-preflight-icloud.sh <repo-path>` first.

## Commands

```bash
npm run dev               # Dev server
npm run lint              # Fast gate
npm run build             # Production build
npm run validate:fast     # = lint
npm run validate:release  # = lint && build
```

## Related Projects

- **`aerovision-mvp`** — product app + API, served under `/aerovision` via this gateway's rewrites
- **`aerovision-seed-deck`** — investor pitch, served under `/pitch`
