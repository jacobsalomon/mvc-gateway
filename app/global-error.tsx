"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.withScope((scope) => {
      scope.setTag("service", "mvc-gateway");
      scope.setTag("surface", "global-error");
      if (error.digest) {
        scope.setTag("next_digest", error.digest);
      }
      Sentry.captureException(error);
    });

    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f3eb] text-[#171510]">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#906947]">
            System fault
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Something went wrong
          </h1>
          <p className="mt-4 text-sm leading-6 text-[#5c554b]">
            The error has been reported. Please try again in a moment.
          </p>
          <button
            className="mt-8 rounded-full bg-[#171510] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#3a332a]"
            onClick={reset}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
