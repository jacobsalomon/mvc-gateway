import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative } from "node:path";

const publicDirectory = "public";
const controlRoomPath = "app/control-room/page.tsx";

// A deck PDF stored in the gateway can silently drift from the Seed Deck app.
// Reject any such file during validation so the live /pitch routes stay the
// single source of truth.
const staticDeckPdfs = existsSync(publicDirectory)
  ? listFiles(publicDirectory).filter((path) => {
      const normalized = path.toLowerCase();
      return extname(normalized) === ".pdf" && normalized.includes("deck");
    })
  : [];

const controlRoom = readFileSync(controlRoomPath, "utf8");
const requiredRoutes = [
  'deckEntry("Core Deck (wedge-first)", "/pitch")',
  'deckEntry("Core Deck (wedge-first, no logos)", "/pitch/no-logos")',
  'deckEntry("Mission-first deck", "/pitch/mission")',
  'deckEntry("Mission-first deck (no logos)", "/pitch/mission/no-logos")',
  'data-deck-source-of-truth="live-route-only"',
];
const missingRoutes = requiredRoutes.filter(
  (snippet) => !controlRoom.includes(snippet),
);
const cachedPdfLink =
  /["'][^"'\n]*deck[^"'\n]*\.pdf(?:[?#][^"'\n]*)?["']/i.test(controlRoom);

if (staticDeckPdfs.length > 0 || missingRoutes.length > 0 || cachedPdfLink) {
  console.error("Deck source-of-truth guard failed.");

  if (staticDeckPdfs.length > 0) {
    console.error("Investor-deck PDFs must not be stored in the gateway:");
    for (const path of staticDeckPdfs) console.error(`- ${path}`);
  }

  if (missingRoutes.length > 0) {
    console.error("Missing canonical live-deck links or freshness warning:");
    for (const snippet of missingRoutes) console.error(`- ${snippet}`);
  }

  if (cachedPdfLink) {
    console.error("The control room must not link to a cached deck PDF.");
  }

  process.exit(1);
}

console.log("Deck source-of-truth guard passed.");

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(path);
    if (entry.isFile()) return [relative(".", path)];
    return [];
  });
}
