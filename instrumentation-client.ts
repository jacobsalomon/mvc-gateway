import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || "";
const environment = process.env.VERCEL_ENV || process.env.NODE_ENV || "development";

Sentry.init({
  dsn,
  enabled: Boolean(dsn),
  environment,
  sendDefaultPii: false,
  tracesSampleRate: environment === "production" ? 0.05 : 1,
  initialScope: {
    tags: {
      service: "mvc-gateway",
    },
  },
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
