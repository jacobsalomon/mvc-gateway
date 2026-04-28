import * as Sentry from "@sentry/nextjs";

// Next.js loads this file once per runtime. Each runtime gets the matching
// Sentry config so browser, server, and edge errors all land in the same place.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
