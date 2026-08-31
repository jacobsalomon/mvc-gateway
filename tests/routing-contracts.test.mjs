import assert from "node:assert/strict";
import test from "node:test";

import nextConfig from "../next.config.ts";

function hostOf(rule) {
  const conditions = Array.isArray(rule.has) ? rule.has : [];
  return conditions.find((condition) => condition.type === "host")?.value ?? null;
}

function matchesSource(source, pathname) {
  if (source === "/:path*") return pathname.startsWith("/");
  if (source.endsWith("/:path*")) {
    const prefix = source.slice(0, -"/:path*".length);
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  }
  return source === pathname;
}

function firstMatchingRewrite(rules, host, pathname) {
  return rules.find((rule) => {
    const requiredHost = hostOf(rule);
    return (
      (requiredHost === null || requiredHost === host) &&
      matchesSource(rule.source, pathname)
    );
  });
}

const rewrites = await nextConfig.rewrites();
const beforeFiles = Array.isArray(rewrites) ? rewrites : rewrites.beforeFiles;

assert.ok(Array.isArray(beforeFiles), "next.config.ts must expose beforeFiles rewrites");

const routingContracts = [
  {
    name: "console root enters the Production console",
    host: "console.mechanicalvisioncorp.com",
    pathname: "/",
    source: "/",
    destination: "https://aerovision-mvp.vercel.app/aerovision/console",
  },
  {
    name: "console AeroVision paths stay in the Production console zone",
    host: "console.mechanicalvisioncorp.com",
    pathname: "/aerovision/inspections",
    source: "/aerovision/:path*",
    destination: "https://aerovision-mvp.vercel.app/aerovision/:path*",
  },
  {
    name: "console catch-all paths enter the Production product zone",
    host: "console.mechanicalvisioncorp.com",
    pathname: "/settings",
    source: "/:path*",
    destination: "https://aerovision-mvp.vercel.app/aerovision/:path*",
  },
  {
    name: "hosted dev AeroVision root stays in dev",
    host: "dev.mechanicalvisioncorp.com",
    pathname: "/aerovision",
    source: "/aerovision",
    destination:
      "https://aerovision-mvp-env-dev-mechavision.vercel.app/aerovision",
  },
  {
    name: "hosted dev AeroVision child paths stay in dev",
    host: "dev.mechanicalvisioncorp.com",
    pathname: "/aerovision/inspections",
    source: "/aerovision/:path*",
    destination:
      "https://aerovision-mvp-env-dev-mechavision.vercel.app/aerovision/:path*",
  },
  {
    name: "hosted dev pitch root stays in dev",
    host: "dev.mechanicalvisioncorp.com",
    pathname: "/pitch",
    source: "/pitch",
    destination:
      "https://aerovision-seed-deck-env-dev-mechavision.vercel.app/pitch",
  },
  {
    name: "hosted dev pitch child paths stay in dev",
    host: "dev.mechanicalvisioncorp.com",
    pathname: "/pitch/market",
    source: "/pitch/:path*",
    destination:
      "https://aerovision-seed-deck-env-dev-mechavision.vercel.app/pitch/:path*",
  },
  {
    name: "public AeroVision paths use the Production product zone",
    host: "mechanicalvisioncorp.com",
    pathname: "/aerovision/inspections",
    source: "/aerovision/:path*",
    destination: "https://aerovision-mvp.vercel.app/aerovision/:path*",
  },
  {
    name: "public pitch paths use the Production deck zone",
    host: "mechanicalvisioncorp.com",
    pathname: "/pitch/market",
    source: "/pitch/:path*",
    destination: "https://aerovision-seed-deck.vercel.app/pitch/:path*",
  },
];

for (const contract of routingContracts) {
  test(contract.name, () => {
    const match = firstMatchingRewrite(
      beforeFiles,
      contract.host,
      contract.pathname,
    );

    assert.ok(match, `expected a rewrite for ${contract.host}${contract.pathname}`);
    assert.equal(match.source, contract.source);
    assert.equal(match.destination, contract.destination);
  });
}
