import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Proxy requests to the two sub-apps hosted on their own Vercel projects
  async rewrites() {
    return [
      // AeroVision MVP — demo app
      {
        source: "/aerovision-demo/:path*",
        destination:
          "https://aerovision-mvp.vercel.app/aerovision-demo/:path*",
      },
      // Seed deck — investor pitch
      {
        source: "/pitch/:path*",
        destination:
          "https://aerovision-seed-deck.vercel.app/pitch/:path*",
      },
    ];
  },
};

export default nextConfig;
