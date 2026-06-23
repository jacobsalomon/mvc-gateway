import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN ?? process.env.SENTRY_DSN ?? "",
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      // Keep the standalone control-room deployment focused on the internal page
      // without changing the public MVC homepage on mechanicalvisioncorp.com.
      {
        source: "/",
        has: [{ type: "host", value: "jake-control-room.vercel.app" }],
        destination: "/control-room",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "host", value: "control.jakesalomon.net" }],
        destination: "/control-room",
        permanent: false,
      },
      // MVC vanity path for the no-logos investor deck variant.
      // This redirects instead of rewrites because that deck is built with /pitch as its basePath.
      {
        source: "/pitch-no-logos",
        destination: "https://aerovision-seed-deck-no-logos.vercel.app/pitch",
        permanent: false,
      },
      {
        source: "/pitch-no-logos/:path*",
        destination: "https://aerovision-seed-deck-no-logos.vercel.app/pitch/:path*",
        permanent: false,
      },
      // Redirect mechavisioncorp.com → mechanicalvisioncorp.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "mechavisioncorp.com" }],
        destination: "https://mechanicalvisioncorp.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mechavisioncorp.com" }],
        destination: "https://mechanicalvisioncorp.com/:path*",
        permanent: true,
      },
      // Redirect mechanicalvision.ai → mechanicalvisioncorp.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "mechanicalvision.ai" }],
        destination: "https://mechanicalvisioncorp.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mechanicalvision.ai" }],
        destination: "https://mechanicalvisioncorp.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      // beforeFiles rewrites run before Next.js checks its own routes,
      // ensuring /aerovision/* and /pitch/* are proxied to the sub-apps
      beforeFiles: [
        {
          source: "/aerovision",
          destination:
            "https://aerovision-mvp.vercel.app/aerovision",
        },
        {
          source: "/aerovision/:path*",
          destination:
            "https://aerovision-mvp.vercel.app/aerovision/:path*",
        },
        {
          source: "/pitch",
          destination:
            "https://aerovision-seed-deck.vercel.app/pitch",
        },
        {
          source: "/pitch/:path*",
          destination:
            "https://aerovision-seed-deck.vercel.app/pitch/:path*",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  widenClientFileUpload: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
  },
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
