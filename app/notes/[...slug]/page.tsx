import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { list, text } from "../../content";
import { NoteRenderer } from "../NoteRenderer";
import { getWikiNote, noteTitle, publishedWikiNotes } from "../../wiki";

export function generateStaticParams() {
  return publishedWikiNotes().filter((note) => note.id !== "notes/index").map((note) => ({ slug: note.path.replace(/^notes\//, "").replace(/\.(md|canvas)$/, "").split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const note = getWikiNote((await params).slug);
  if (!note) return {};
  return { title: `${noteTitle(note)} — CELLosophy`, description: text(note, "description") || note.paragraphs[0] };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const note = getWikiNote((await params).slug);
  if (!note) notFound();

  return (
    <main className="wiki-shell">
      <header className="wiki-header">
        <a className="wiki-back" href="/notes">← Notes</a>
        <a className="wiki-home" href="/">CELLosophy</a>
      </header>
      <article className="wiki-note-page">
        <div className="wiki-note-title">
          <p className="wiki-kicker">{text(note, "kind") || "note"}</p>
          <h1>{noteTitle(note)}</h1>
          {text(note, "description") && <p className="wiki-note-description">{text(note, "description")}</p>}
        </div>
        <NoteRenderer note={note} />
      </article>
    </main>
  );
}
