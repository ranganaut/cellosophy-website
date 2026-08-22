import { contentNotes, type ContentNote, type ContentValue } from "./content.generated";

export { contentNotes };
export type { ContentNote, ContentValue };

export type NoteValue = string | number | boolean | string[];

export function getContentNote(id: string): ContentNote {
  const note = contentNotes.find((candidate) => candidate.id === id);
  if (!note || note.data.publish === false) {
    throw new Error(`Published content note not found: ${id}`);
  }
  return note;
}

export function getContentNotes(type: string): ContentNote[] {
  return contentNotes
    .filter((note) => note.data.type === type && note.data.publish !== false)
    .sort((a, b) => Number(a.data.order ?? 0) - Number(b.data.order ?? 0));
}

export function text(note: ContentNote, key: string): string {
  const value = note.data[key];
  return value == null ? "" : String(value);
}

export function list(note: ContentNote, key: string): string[] {
  const value = note.data[key] as NoteValue | undefined;
  if (Array.isArray(value)) return value.map(String);
  return value == null || value === "" ? [] : [String(value)];
}
