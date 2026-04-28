"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

const ANALYTICS_SCRIPT_PATH = "/_vercel/insights/script.js";
const SESSION_KEY = "mvc-gateway.analytics-script-checked";

export function AnalyticsHealthCheck() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");

    async function checkAnalyticsScript() {
      try {
        const response = await fetch(ANALYTICS_SCRIPT_PATH, {
          method: "HEAD",
          cache: "no-store",
        });

        if (response.ok) {
          return;
        }

        Sentry.withScope((scope) => {
          scope.setLevel("warning");
          scope.setTag("service", "mvc-gateway");
          scope.setTag("check", "vercel_web_analytics_script");
          scope.setContext("vercel_web_analytics", {
            path: ANALYTICS_SCRIPT_PATH,
            status: response.status,
            statusText: response.statusText,
          });
          Sentry.captureMessage("Vercel Web Analytics script failed to load");
        });
      } catch (error) {
        Sentry.withScope((scope) => {
          scope.setLevel("warning");
          scope.setTag("service", "mvc-gateway");
          scope.setTag("check", "vercel_web_analytics_script");
          scope.setContext("vercel_web_analytics", {
            path: ANALYTICS_SCRIPT_PATH,
            reason: error instanceof Error ? error.message : "unknown",
          });
          Sentry.captureMessage("Vercel Web Analytics script check failed");
        });
      }
    }

    void checkAnalyticsScript();
  }, []);

  return null;
}
