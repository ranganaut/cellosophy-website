import { list, text, type ContentNote } from "../content";
import { noteHref, noteTitle } from "../wiki";

export function NoteCard({ note }: { note: ContentNote }) {
  return (
    <article className="wiki-card">
      <div className="wiki-card-meta">
        <span>{text(note, "kind") || "note"}</span>
        <span>{note.path}</span>
      </div>
      <h2><a href={noteHref(note)}>{noteTitle(note)}</a></h2>
      <p>{text(note, "description") || note.paragraphs[0] || "A visual map of connected ideas."}</p>
      <div className="tag-list">
        {list(note, "tags").map((tag) => <a key={tag} href={`/notes?tag=${encodeURIComponent(tag)}`}>#{tag}</a>)}
      </div>
      <a className="wiki-card-link" href={noteHref(note)}>Open note <span>→</span></a>
    </article>
  );
}
