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
