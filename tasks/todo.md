## Generic MVC Overview One-Pager

- [x] Start from the live V-Star one-pager structure.
- [x] Replace `/brief/overview` with a generic customer-facing MVC teaser.
- [x] Remove the accidental `/brief/overview-2` route.
- [x] Run focused validation.
- [x] Record review notes.

Review notes
- Replaced the old dense overview page with the same three-section shape as the V-Star one-pager: what MVC does, what maintenance teams get back, and what the record carries.
- Broadened the documentation pain statement so it does not assume every shop captures measurements the same way.
- Kept the required hero: "The Mechanical Vision Corporation" and "The Mechanic works. The paperwork writes itself."
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`
- Browser preview passed at `http://localhost:3015/brief/overview`; only the existing Leadsy localhost fetch/CORS errors appeared.
- Mobile-width browser snapshot passed for the fixed brief shell.

## Generic MVC Overview Concision Pass

- [x] Tighten the opening copy to recover vertical space.
- [x] Soften the bottom image transition with a fade.
- [x] Preview locally before merge.
- [x] Run focused validation.

Review notes
- Shortened the "What MVC does" text and replaced the slightly salesy section headline with "A useful record without slowing down the work."
- Added a top mask to the bottom image/overlay so the transition from dotted page background is less harsh.
- Local preview image saved: `/Users/jake/.codex/playwright-output/mvc-overview-copy-tightened-fade.png`
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`

## Footer One-Pager Links

- [x] Confirm the current MVC one-pager routes.
- [x] Add all one-pagers to the main website footer.
- [x] Run focused validation.
- [x] Record review notes and PR status.

Review notes
- Current one-pagers: `/brief/overview`, `/brief/aerovision`, `/brief/how-it-works`, and `/brief/investor`.
- The investor one-pager URL for sharing is `https://mechanicalvisioncorp.com/brief/investor`.
- Added a dedicated One-pagers section to the homepage footer with all four links.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`
- Browser desktop and mobile checks passed at `http://localhost:3000`. The only console errors were existing Leadsy localhost fetch/CORS errors.
- PR opened: https://github.com/jacobsalomon/mvc-gateway/pull/24

## Gateway Meeting Link

- [x] Replace the old personal Calendly link with the MVC Google Calendar scheduling link.
- [x] Run focused validation.
- [x] Open a focused PR for deployment.

Review notes
- Old link removed: `https://calendly.com/jacobsalomon`
- New link target: `https://calendar.app.google/ajT5d6E4c9cmU92R7`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run lint`
- PR opened: https://github.com/jacobsalomon/mvc-gateway/pull/26

## Wencor IT Legal Docs

- [x] Review Circuit's public Terms of Service and Privacy Policy as structure references.
- [x] Draft MVC Terms of Service with customer ownership, MVC service-improvement rights, AI model training rights, Aggregated Data rights, NDI handling, and staged integration language.
- [x] Draft MVC Privacy Policy with collected data, storage, sharing, security, AI use, Aggregated Data, NDI, and retention sections.
- [x] Add website-ready legal pages at `/legal/terms` and `/legal/privacy`.
- [x] Run focused validation.
- [x] Record review notes.

Review notes
- Drafts are legal-policy starting points for business and IT review, not a substitute for counsel review before broad public launch.
- The drafts intentionally say customers retain ownership of Customer Content while MVC receives rights to provide, improve, train/evaluate MVC models, develop new products, and use Aggregated Data.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`
- Browser smoke passed: `/legal/terms` and `/legal/privacy` rendered at `http://localhost:3000` during local verification. The only console errors were from the existing Leadsy analytics script being blocked on localhost.

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

## MechaVision Prospect One-Pager

- [x] Find the existing public one-pager pattern in the Gateway brief routes.
- [x] Create a new prospect-facing MechaVision one-pager with Fleetcraft lessons folded into MVC's own framing.
- [x] Run lint and build validation.
- [x] Start the local dev server.
- [x] Visually verify the one-pager in the browser with screenshots.
- [x] Record review notes and the final local URL.

Review notes
- Built the prospect one-pager at `/brief/aerovision` using the same `BriefPage`, `BriefHero`, `BriefSection`, `BriefStat`, and `BriefFooter` system as the existing Gateway one-pagers.
- Core framing captured from Fleetcraft research: reduce TAT, remove documentation drag, produce review-ready records, keep humans in control, and fit existing MRO systems.
- Preserved MVC's sharper wedge: MechaVision glasses observe the mechanic doing normal work. The mechanic just does the job. No extra steps.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh`
- Validation passed: `npm run build`
- Visual screenshot saved: `/Users/jake/.codex/playwright-output/aerovision-one-pager-chrome-v2.png`
- Local preview URL: `http://localhost:3000/brief/aerovision`

## MechaVision Value Proposition Tightening

- [x] Refresh from latest main so the live one-pager is present in this worktree.
- [x] Update the one-pager to make the three value propositions explicit: reduced turnaround time, more team output per hour, and evidence-backed auditability.
- [x] Run lint and build validation.
- [x] Visually verify the page after the copy/layout update.
- [ ] Open and merge a focused PR if validation is green.

Review notes
- Added explicit prospect-facing value propositions: TAT reduction, reduced paperwork burden, and auditability through records plus video proof of work being done.
- Tightened product language so the mechanic starts the job normally and MechaVision glasses observe without changing the flow.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh` (same App Store Connect issuer warning as before)
- Validation passed: `npm run build`
- Visual screenshot saved: `/Users/jake/.codex/playwright-output/aerovision-one-pager-value-props-final-local-production.png`
- Browser tool screenshot saved: `aerovision-one-pager-value-props-playwright.png`

## MechaVision One-Pager UI Polish

- [x] Inventory current brief one-pagers.
- [x] Run an end-to-end visual review of the MechaVision one-pager.
- [x] Improve spacing, hierarchy, and value-prop presentation.
- [x] Run lint/build validation.
- [x] Visually verify the revised page with screenshots.
- [ ] Open and merge a focused PR if validation is green.

Review notes
- Current one-pagers: `/brief/overview`, `/brief/how-it-works`, and `/brief/aerovision`.
- Visual issue found: the MechaVision page fit on one sheet, but the top and bottom spacing felt cramped and the value proposition cards used mismatched display type.
- Reworked the MechaVision page into a calmer editorial layout: taller hero, no value-prop cards, a cleaner buyer-outcomes section, and a shorter proof section with the footer visible.
- Validation passed: `npm run lint`
- Validation passed: `/Users/jake/bin/mvc-doctor.sh` (same App Store Connect issuer warning as before)
- Validation passed: `npm run build`
- Baseline screenshot saved: `/Users/jake/.codex/playwright-output/aerovision-one-pager-ui-baseline.png`
- Final local production screenshot saved: `/Users/jake/.codex/playwright-output/aerovision-one-pager-ui-polish-final-local-production.png`
- Browser tool screenshot saved: `aerovision-one-pager-ui-polish-playwright.png`
