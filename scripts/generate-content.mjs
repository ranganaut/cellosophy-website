import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const contentRoot = path.join(projectRoot, "content");
const outputPath = path.join(projectRoot, "app", "content.generated.ts");

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".obsidian" || entry.name.startsWith(".")) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(entryPath)));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(entryPath);
  }

  return files;
}

function parseValue(rawValue) {
  const value = rawValue.trim();
  if (!value) return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function parseNote(source, filePath) {
  const normalized = source.replaceAll("\r\n", "\n");
  const frontmatterMatch = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const data = {};
  let body = normalized;

  if (frontmatterMatch) {
    for (const line of frontmatterMatch[1].split("\n")) {
      const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (match) data[match[1]] = parseValue(match[2]);
    }
    body = frontmatterMatch[2];
  }

  const trimmedBody = body.trim();
  if (!("publish" in data)) data.publish = false;
  return {
    id: String(data.id ?? path.relative(contentRoot, filePath).replace(/\.md$/, "")),
    path: path.relative(contentRoot, filePath).replaceAll(path.sep, "/"),
    data,
    body: trimmedBody,
    paragraphs: trimmedBody ? trimmedBody.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean) : [],
  };
}

const files = await markdownFiles(contentRoot);
const notes = [];
for (const filePath of files) notes.push(parseNote(await readFile(filePath, "utf8"), filePath));
notes.sort((a, b) => a.id.localeCompare(b.id));

const output = `// Generated from the Obsidian-compatible content vault by scripts/generate-content.mjs.\nexport type ContentValue = string | number | boolean;\nexport type ContentNote = { id: string; path: string; data: Record<string, ContentValue>; body: string; paragraphs: string[] };\nexport const contentNotes: ContentNote[] = ${JSON.stringify(notes, null, 2)};\n`;
await writeFile(outputPath, output);
console.log(`Generated ${notes.length} content notes.`);
