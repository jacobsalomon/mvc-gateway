import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async rewrites() {
    return {
      // beforeFiles rewrites run before Next.js checks its own routes,
      // ensuring /aerovision-demo/* and /pitch/* are proxied to the sub-apps
      beforeFiles: [
        {
          source: "/aerovision-demo",
          destination:
            "https://aerovision-mvp.vercel.app/aerovision-demo",
        },
        {
          source: "/aerovision-demo/:path*",
          destination:
            "https://aerovision-mvp.vercel.app/aerovision-demo/:path*",
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

export default nextConfig;
