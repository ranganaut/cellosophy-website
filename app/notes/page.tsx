import { list, text } from "../content";
import { NoteCard } from "./NoteCard";
import { getWikiIndex, publishedWikiNotes, renderObsidianMarkdown } from "../wiki";

export const metadata = {
  title: "Notes — CELLosophy",
  description: "The public notebook of CELLosophy: readings, conversations, concepts, and a textbook in progress.",
};

export default function NotesIndex({ searchParams }: { searchParams?: { tag?: string } }) {
  const index = getWikiIndex();
  const selectedTag = searchParams?.tag;
  const notes = publishedWikiNotes().filter((note) => note.id !== index.id && (!selectedTag || list(note, "tags").includes(selectedTag)));

  return (
    <main className="wiki-shell">
      <header className="wiki-header">
        <a className="wiki-back" href="/">← CELLosophy</a>
        <span className="wiki-kicker">Public notebook</span>
      </header>
      <div className="wiki-layout">
        <article className="wiki-index-note">
          <div className="note-meta"><span>index</span><span>{index.path}</span></div>
          <h1>{text(index, "title")}</h1>
          <div className="tag-list note-tags">{list(index, "tags").map((tag) => <a key={tag} href={`/notes?tag=${encodeURIComponent(tag)}`}>#{tag}</a>)}</div>
          <div className="note-body" dangerouslySetInnerHTML={{ __html: renderObsidianMarkdown(index.body) }} />
        </article>
        <aside className="wiki-sidebar">
          <p className="wiki-sidebar-label">Browse the notebook</p>
          <p>{notes.length} published {notes.length === 1 ? "note" : "notes"}</p>
          {selectedTag && <a className="clear-filter" href="/notes">Clear tag filter ×</a>}
        </aside>
      </div>
      <section className="wiki-library" aria-labelledby="notes-library-heading">
        <div className="wiki-library-heading">
          <p className="section-number">The library</p>
          <h2 id="notes-library-heading">Follow the threads.</h2>
        </div>
        <div className="wiki-card-grid">
          {notes.length > 0 ? notes.map((note) => <NoteCard key={note.id} note={note} />) : <p className="wiki-empty">No published notes match this tag yet.</p>}
        </div>
      </section>
    </main>
  );
}
