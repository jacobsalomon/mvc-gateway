import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/Aerovision",
        destination: "/aerovision",
        permanent: true,
      },
      {
        source: "/Aerovision/:path*",
        destination: "/aerovision/:path*",
        permanent: true,
      },
      {
        source: "/aerovision-demo",
        destination: "/aerovision",
        permanent: true,
      },
      {
        source: "/aerovision-demo/:path*",
        destination: "/aerovision/:path*",
        permanent: true,
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

export default nextConfig;
