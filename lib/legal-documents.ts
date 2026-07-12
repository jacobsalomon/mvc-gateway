import fs from "node:fs";
import path from "node:path";

export type LegalDocumentSlug = "terms-of-service" | "privacy-policy";

export type LegalDocument = {
  body: string;
  lastUpdated: string;
  summary: string;
  title: string;
};

const LEGAL_DIRECTORY = path.join(process.cwd(), "docs", "legal");

function parseFrontMatter(raw: string): LegalDocument {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Legal document is missing front matter.");
  }

  const values = new Map<string, string>();

  for (const line of match[1].split("\n")) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    values.set(key, value);
  }

  const title = values.get("title");
  const lastUpdated = values.get("lastUpdated");
  const summary = values.get("summary");

  if (!title || !lastUpdated || !summary) {
    throw new Error("Legal document front matter is incomplete.");
  }

  return {
    body: match[2].trim(),
    lastUpdated,
    summary,
    title,
  };
}

export function getLegalDocument(slug: LegalDocumentSlug): LegalDocument {
  const filePath = path.join(LEGAL_DIRECTORY, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");

  return parseFrontMatter(raw);
}
