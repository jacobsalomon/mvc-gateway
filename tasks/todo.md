## Gateway Browser Error Alerts

- [x] Confirm the root Gateway app is missing browser/server Sentry capture.
- [x] Add Sentry setup for Gateway client, server, and edge runtimes.
- [x] Add a production health check for the Vercel Web Analytics script.
- [x] Run lint and build validation.
- [x] Open a focused PR after validation.

Review notes
- React error #185 means a component is updating state in a loop until React stops it. Sentry needs source maps and browser capture on every public zone so the next occurrence points at the real component instead of a minified bundle.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`
- PR opened: https://github.com/jacobsalomon/mvc-gateway/pull/13

## AeroVision Prospect One-Pager

- [x] Find the existing public one-pager pattern in the Gateway brief routes.
- [x] Create a new prospect-facing AeroVision one-pager with Fleetcraft lessons folded into MVC's own framing.
- [x] Run lint and build validation.
- [x] Start the local dev server.
- [x] Visually verify the one-pager in the browser with screenshots.
- [x] Record review notes and the final local URL.

Review notes
- Built the prospect one-pager at `/brief/aerovision` using the same `BriefPage`, `BriefHero`, `BriefSection`, `BriefStat`, and `BriefFooter` system as the existing Gateway one-pagers.
- Core framing captured from Fleetcraft research: reduce TAT, remove documentation drag, produce review-ready records, keep humans in control, and fit existing MRO systems.
- Preserved MVC's sharper wedge: AeroVision glasses observe the mechanic doing normal work. The mechanic just does the job. No extra steps.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`
- Visual screenshot saved: `/Users/jake/.codex/playwright-output/aerovision-one-pager-chrome-v2.png`
- Local preview URL: `http://localhost:3000/brief/aerovision`
