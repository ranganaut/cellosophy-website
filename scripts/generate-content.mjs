import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const contentRoot = path.join(projectRoot, "content");
const outputPath = path.join(projectRoot, "app", "content.generated.ts");

async function contentFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".obsidian" || entry.name.startsWith(".")) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await contentFiles(entryPath)));
    if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".canvas"))) {
      if (entry.name.endsWith(".canvas.meta.md")) continue;
      files.push(entryPath);
    }
  }

  return files;
}

function parseValue(rawValue) {
  const value = rawValue.trim();
  if (!value) return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (value.startsWith("[") && value.endsWith("]")) {
    return value.slice(1, -1).split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
  }
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function parseFrontmatter(source) {
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

  return { data, body: body.trim() };
}

function defaultData(filePath, data) {
  const relativePath = path.relative(contentRoot, filePath).replaceAll(path.sep, "/");
  const extension = path.extname(relativePath);
  const basename = path.basename(relativePath, extension);
  if (!("publish" in data)) data.publish = false;
  return {
    id: String(data.id ?? relativePath.slice(0, -extension.length)),
    path: relativePath,
    data,
    title: String(data.title ?? basename),
  };
}

function parseNote(source, filePath) {
  const { data, body } = parseFrontmatter(source);
  const defaults = defaultData(filePath, data);
  return {
    id: defaults.id,
    path: defaults.path,
    data,
    body,
    paragraphs: body ? body.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean) : [],
  };
}

async function parseCanvas(source, filePath) {
  const metadataPath = `${filePath}.meta.md`;
  let metadataSource = "";
  try {
    metadataSource = await readFile(metadataPath, "utf8");
  } catch {
    // Canvas metadata is optional; unpublished is the safe default below.
  }
  const { data } = parseFrontmatter(metadataSource);
  const defaults = defaultData(filePath, data);
  if (!("type" in data)) data.type = "canvas";
  if (!("kind" in data)) data.kind = "canvas";
  if (!("title" in data)) data.title = defaults.title;
  return {
    id: defaults.id,
    path: defaults.path,
    data,
    body: "",
    paragraphs: [],
    canvas: JSON.parse(source),
  };
}

const files = await contentFiles(contentRoot);
const notes = [];
for (const filePath of files) {
  notes.push(filePath.endsWith(".canvas")
    ? await parseCanvas(await readFile(filePath, "utf8"), filePath)
    : parseNote(await readFile(filePath, "utf8"), filePath));
}
notes.sort((a, b) => a.id.localeCompare(b.id));

const output = `// Generated from the Obsidian-compatible content vault by scripts/generate-content.mjs.\nexport type ContentValue = string | number | boolean | string[];\nexport type CanvasNode = { id: string; type: string; x?: number; y?: number; width?: number; height?: number; text?: string; file?: string; url?: string; color?: string; label?: string; subpath?: string };\nexport type CanvasEdge = { id: string; fromNode: string; toNode: string; fromSide?: string; toSide?: string; label?: string };\nexport type CanvasDocument = { nodes?: CanvasNode[]; edges?: CanvasEdge[] };\nexport type ContentNote = { id: string; path: string; data: Record<string, ContentValue>; body: string; paragraphs: string[]; canvas?: CanvasDocument };\nexport const contentNotes: ContentNote[] = ${JSON.stringify(notes, null, 2)};\n`;
await writeFile(outputPath, output);
console.log(`Generated ${notes.length} content notes.`);
