#!/usr/bin/env node
// Rewrite-ordering guard for the multi-zone gateway.
//
// Invariant: the hosted-dev host-scoped rewrites (dev.mechanicalvisioncorp.com)
// in next.config.ts beforeFiles must come BEFORE the unscoped Production
// rewrites for the same source paths. Next.js applies the first matching rule,
// so if an unscoped Production rule ever precedes its dev-host twin, traffic on
// dev.mechanicalvisioncorp.com silently proxies to Production.
//
// Runs the real config (Node strips the TypeScript types natively), so it
// checks what Next.js will actually serve, not a copy of the rules.

import nextConfig from "../next.config.ts";

const DEV_HOST = "dev.mechanicalvisioncorp.com";
const PRODUCTION_DESTINATIONS =
  /https:\/\/(aerovision-mvp|aerovision-seed-deck)\.vercel\.app\//;

function hostOf(rule) {
  const conditions = Array.isArray(rule.has) ? rule.has : [];
  const hostCondition = conditions.find((condition) => condition.type === "host");
  return hostCondition ? hostCondition.value : null;
}

const rewrites = await nextConfig.rewrites();
const beforeFiles = Array.isArray(rewrites) ? rewrites : rewrites.beforeFiles;

if (!Array.isArray(beforeFiles)) {
  console.error("check:rewrite-ordering FAILED: could not read beforeFiles rewrites.");
  process.exit(1);
}

const failures = [];

const devRules = beforeFiles
  .map((rule, index) => ({ rule, index }))
  .filter(({ rule }) => hostOf(rule) === DEV_HOST);

if (devRules.length === 0) {
  failures.push(
    `No rewrites scoped to host ${DEV_HOST} found in beforeFiles. ` +
      "The hosted-dev isolation rules are missing.",
  );
}

for (const { rule, index } of devRules) {
  const unscopedIndex = beforeFiles.findIndex(
    (candidate) => candidate.source === rule.source && hostOf(candidate) === null,
  );
  if (unscopedIndex !== -1 && unscopedIndex < index) {
    failures.push(
      `Unscoped Production rewrite for source "${rule.source}" at position ` +
        `${unscopedIndex} precedes the ${DEV_HOST} rule at position ${index}. ` +
        "Hosted dev would proxy to Production.",
    );
  }
  if (PRODUCTION_DESTINATIONS.test(`${rule.destination}/`)) {
    failures.push(
      `Hosted-dev rewrite for source "${rule.source}" points at a Production ` +
        `destination: ${rule.destination}`,
    );
  }
}

if (failures.length > 0) {
  console.error("check:rewrite-ordering FAILED:");
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
}

console.log(
  `check:rewrite-ordering OK: ${devRules.length} hosted-dev rules precede the ` +
    "unscoped Production rewrites.",
);
