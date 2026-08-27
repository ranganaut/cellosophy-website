import { marked } from "marked";
import { contentNotes, type ContentNote } from "./content";
import { list, text } from "./content";

marked.setOptions({ gfm: true, breaks: true });

export function publishedWikiNotes(): ContentNote[] {
  return contentNotes
    .filter((note) => (note.data.type === "note" || note.data.type === "canvas") && note.data.publish === true)
    .sort((a, b) => text(a, "title").localeCompare(text(b, "title")));
}

export function noteSlug(note: ContentNote): string {
  const path = note.path.replace(/^notes\//, "").replace(/\.(md|canvas)$/, "");
  return path === "index" ? "" : path;
}

export function noteHref(note: ContentNote): string {
  const slug = noteSlug(note);
  return slug ? `/notes/${slug}` : "/notes";
}

export function noteTitle(note: ContentNote): string {
  return text(note, "title") || note.path.split("/").at(-1)?.replace(/\.(md|canvas)$/, "") || note.id;
}

export function noteTags(note: ContentNote): string[] {
  const inlineTags = [...note.body.matchAll(/(?:^|\s)#([A-Za-z][\w/-]*)/g)].map((match) => match[1]);
  return [...new Set([...list(note, "tags"), ...inlineTags])];
}

function normalizeTarget(target: string): string {
  return decodeURIComponent(target.trim()).replace(/\.md$/, "").replace(/^notes\//, "");
}

export function resolveWikiNote(target: string, notes = publishedWikiNotes()): ContentNote | undefined {
  const normalized = normalizeTarget(target.split("#")[0]);
  return notes.find((note) => {
    const slug = noteSlug(note);
    const basename = note.path.split("/").at(-1)?.replace(/\.md$/, "");
    return slug === normalized || basename === normalized || note.id === `notes/${normalized}` || noteTitle(note) === normalized || list(note, "aliases").includes(normalized);
  });
}

export function slugifyHeading(value: string): string {
  return value.trim().toLowerCase().replace(/<[^>]+>/g, "").replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, "-");
}

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function rewriteWikiLinks(source: string, notes: ContentNote[]): string {
  const codeBlocks: string[] = [];
  let rewritten = source.replace(/```[\s\S]*?```/g, (block) => {
    const token = `@@OBSIDIAN_CODE_${codeBlocks.length}@@`;
    codeBlocks.push(block);
    return token;
  });

  rewritten = rewritten.replace(/!\[\[([^\]]+)\]\]/g, (_, rawTarget: string) => {
    const [rawPath, rawSize] = rawTarget.split("|");
    const target = rawPath.trim();
    const embedded = resolveWikiNote(target, notes);
    if (embedded) {
      const href = noteHref(embedded);
      return `<aside class="note-embed"><a class="note-embed-title" href="${href}">${escapeHtml(noteTitle(embedded))}</a><p>Embedded note — open to read the full entry.</p></aside>`;
    }
    const safePath = target.split("#")[0].replaceAll("\\", "/").split("/").map(encodeURIComponent).join("/");
    const width = rawSize?.match(/^\d+/)?.[0];
    return `<img class="note-asset" src="/notes-assets/${safePath}"${width ? ` width="${width}"` : ""} alt="${escapeHtml(target)}" />`;
  });

  rewritten = rewritten.replace(/\[\[([^\]]+)\]\]/g, (_, rawTarget: string) => {
    const [rawDestination, rawLabel] = rawTarget.split("|");
    const destination = rawDestination.trim();
    const [target, heading] = destination.split("#");
    const linked = resolveWikiNote(destination, notes);
    const href = linked ? noteHref(linked) : `/notes/${encodeURIComponent(normalizeTarget(target))}`;
    const fragment = heading ? `#${slugifyHeading(heading)}` : "";
    const label = rawLabel?.trim() || (linked ? noteTitle(linked) : target.trim());
    return `<a class="wikilink${linked ? "" : " unresolved"}" href="${href}${fragment}">${escapeHtml(label)}</a>`;
  });

  rewritten = rewritten.replace(/(^|[\s(])#([A-Za-z][\w/-]*)/g, (_, prefix: string, tag: string) => `${prefix}<a class="inline-tag" href="/notes?tag=${encodeURIComponent(tag)}">#${escapeHtml(tag)}</a>`);

  return rewritten.replace(/@@OBSIDIAN_CODE_(\d+)@@/g, (_, index: string) => codeBlocks[Number(index)]);
}

function renderCallouts(source: string, notes: ContentNote[]): string {
  return source.replace(/(^|\n)((?:> ?.*(?:\n|$))+)/g, (_, prefix: string, rawBlock: string) => {
    const lines = rawBlock.trimEnd().split("\n").map((line) => line.replace(/^> ?/, ""));
    const match = lines[0].match(/^\[!([\w-]+)\]([+-])?\s*(.*)$/);
    if (!match) return `${prefix}${rawBlock}`;
    const type = match[1].toLowerCase();
    const title = match[3] || type.charAt(0).toUpperCase() + type.slice(1);
    const body = lines.slice(1).join("\n").trim();
    return `${prefix}<aside class="callout callout-${escapeHtml(type)}"><div class="callout-title">${escapeHtml(title)}</div>${marked.parse(rewriteWikiLinks(body, notes))}</aside>\n`;
  });
}

type Footnote = { label: string; body: string };

function extractFootnotes(source: string): { body: string; footnotes: Footnote[] } {
  const lines = source.split("\n");
  const body: string[] = [];
  const footnotes: Footnote[] = [];
  let current: Footnote | undefined;

  const finish = () => {
    if (current) footnotes.push({ label: current.label, body: current.body.trim() });
    current = undefined;
  };

  for (const line of lines) {
    const definition = line.match(/^\[\^([^\]]+)\]:\s*(.*)$/);
    if (definition) {
      finish();
      current = { label: definition[1], body: definition[2] };
    } else if (current && (/^(?: {2,}|\t)/.test(line) || line.trim() === "")) {
      current.body += `\n${line.trim()}`;
    } else {
      finish();
      body.push(line);
    }
  }
  finish();
  return { body: body.join("\n"), footnotes };
}

function renderFootnotes(source: string, notes: ContentNote[]): { body: string; footer: string } {
  const extracted = extractFootnotes(source);
  if (extracted.footnotes.length === 0) return { body: source, footer: "" };

  const used = new Map<string, number>();
  const body = extracted.body.replace(/\[\^([^\]]+)\]/g, (_, label: string) => {
    const number = extracted.footnotes.findIndex((footnote) => footnote.label === label) + 1;
    if (number === 0) return _;
    const occurrence = (used.get(label) ?? 0) + 1;
    used.set(label, occurrence);
    const suffix = occurrence === 1 ? "" : `-${occurrence}`;
    return `<sup class="footnote-ref"><a href="#fn-${escapeHtml(label)}" id="fnref-${escapeHtml(label)}${suffix}">${number}</a></sup>`;
  });

  const footer = `<section class="footnotes" aria-label="Footnotes"><h2>Footnotes</h2><ol>${extracted.footnotes.map((footnote, index) => {
    const label = escapeHtml(footnote.label);
    const rendered = String(marked.parse(rewriteWikiLinks(footnote.body, notes)));
    const references = used.get(footnote.label) ?? 1;
    const backLinks = Array.from({ length: references }, (_, occurrence) => {
      const suffix = occurrence === 0 ? "" : `-${occurrence + 1}`;
      return `<a class="footnote-backref" href="#fnref-${label}${suffix}" aria-label="Back to reference ${index + 1}">↩</a>`;
    }).join(" ");
    return `<li id="fn-${label}">${rendered} ${backLinks}</li>`;
  }).join("")}</ol></section>`;
  return { body, footer };
}

export function renderObsidianMarkdown(source: string, notes = publishedWikiNotes()): string {
  const withCallouts = renderCallouts(source, notes);
  const withFootnotes = renderFootnotes(withCallouts, notes);
  return `${String(marked.parse(rewriteWikiLinks(withFootnotes.body, notes)))}${withFootnotes.footer}`;
}

function canvasColor(value: string | undefined): string {
  if (!value) return "var(--cobalt)";
  if (/^#[0-9a-f]{3,8}$/i.test(value)) return value;
  return ({ "1": "var(--rust)", "2": "var(--cobalt)", "3": "var(--moss)", "4": "#9b6b00", "5": "#8c4ab8" } as Record<string, string>)[value] ?? "var(--cobalt)";
}

function canvasNodeStyle(node: { x?: number; y?: number; width?: number; height?: number }): string {
  const x = Number(node.x ?? 0);
  const y = Number(node.y ?? 0);
  const width = Number(node.width ?? 300);
  const height = Number(node.height ?? 180);
  return `left:${x}px;top:${y}px;width:${width}px;height:${height}px`;
}

function canvasNodeContent(node: { type: string; text?: string; file?: string; url?: string; label?: string; subpath?: string }, notes: ContentNote[]): string {
  if (node.type === "text") return renderObsidianMarkdown(node.text ?? "", notes);
  if (node.type === "link" && node.url) return `<a class="canvas-link" href="${escapeHtml(node.url)}" target="_blank" rel="noreferrer">${escapeHtml(node.label || node.url)}</a>`;
  if (node.type === "file" && node.file) {
    const linked = resolveWikiNote(node.file, notes);
    if (linked) return `<a class="canvas-file" href="${noteHref(linked)}">${escapeHtml(noteTitle(linked))}</a><span class="canvas-file-path">${escapeHtml(node.subpath || "Open note")}</span>`;
    const safePath = node.file.replaceAll("\\", "/").split("/").map(encodeURIComponent).join("/");
    if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(node.file)) return `<img class="canvas-image" src="/notes-assets/${safePath}" alt="${escapeHtml(node.file)}" />`;
    return `<span class="canvas-file-path">${escapeHtml(node.file)}</span>`;
  }
  return escapeHtml(node.label || node.text || node.file || node.type);
}

export function renderObsidianCanvas(canvas: NonNullable<ContentNote["canvas"]>, notes = publishedWikiNotes()): string {
  const nodes = canvas.nodes ?? [];
  const edges = canvas.edges ?? [];
  const width = Math.max(960, ...nodes.map((node) => Number(node.x ?? 0) + Number(node.width ?? 300) + 80));
  const height = Math.max(560, ...nodes.map((node) => Number(node.y ?? 0) + Number(node.height ?? 180) + 80));
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const lines = edges.map((edge) => {
    const from = nodeMap.get(edge.fromNode);
    const to = nodeMap.get(edge.toNode);
    if (!from || !to) return "";
    const x1 = Number(from.x ?? 0) + Number(from.width ?? 300) / 2;
    const y1 = Number(from.y ?? 0) + Number(from.height ?? 180) / 2;
    const x2 = Number(to.x ?? 0) + Number(to.width ?? 300) / 2;
    const y2 = Number(to.y ?? 0) + Number(to.height ?? 180) / 2;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
  }).join("");
  const renderedNodes = nodes.map((node) => {
    const type = node.type === "group" ? "canvas-group" : `canvas-node-${node.type}`;
    const color = canvasColor(node.color);
    return `<article class="canvas-node ${type}" style="${canvasNodeStyle(node)};--canvas-accent:${color}">${canvasNodeContent(node, notes)}</article>`;
  }).join("");
  return `<div class="canvas-scroll"><div class="canvas-stage" style="width:${width}px;height:${height}px"><svg class="canvas-edges" viewBox="0 0 ${width} ${height}" aria-hidden="true">${lines}</svg>${renderedNodes}</div></div>`;
}

export function getWikiIndex(): ContentNote {
  return publishedWikiNotes().find((note) => note.id === "notes/index") ?? publishedWikiNotes()[0];
}

export function getWikiNote(slugParts: string[]): ContentNote | undefined {
  const requested = slugParts.join("/");
  return publishedWikiNotes().find((note) => noteSlug(note) === requested);
}

export function backlinksFor(note: ContentNote): ContentNote[] {
  const targetNames = new Set([note.id, noteSlug(note), noteTitle(note), note.path.replace(/\.md$/, "")]);
  return publishedWikiNotes().filter((candidate) => {
    if (candidate.id === note.id) return false;
    const source = `${candidate.body} ${candidate.canvas ? JSON.stringify(candidate.canvas) : ""}`;
    const links = [...source.matchAll(/!?\[\[([^\]|#]+)/g)].map((match) => normalizeTarget(match[1]));
    return links.some((link) => targetNames.has(link) || targetNames.has(`notes/${link}`));
  });
}
