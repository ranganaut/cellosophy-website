import { text, type ContentNote } from "../content";
import { backlinksFor, noteHref, noteTags, noteTitle, renderObsidianCanvas, renderObsidianMarkdown } from "../wiki";

export function NoteRenderer({ note }: { note: ContentNote }) {
  const backlinks = backlinksFor(note);
  return (
    <>
      <div className="note-meta">
        <span>{text(note, "kind") || "note"}</span>
        <span>{note.path}</span>
      </div>
      <div className="tag-list note-tags">
        {noteTags(note).map((tag) => <a key={tag} href={`/notes?tag=${encodeURIComponent(tag)}`}>#{tag}</a>)}
      </div>
      {note.canvas ? (
        <div className="note-body canvas-body" dangerouslySetInnerHTML={{ __html: renderObsidianCanvas(note.canvas) }} />
      ) : (
        <div className="note-body" dangerouslySetInnerHTML={{ __html: renderObsidianMarkdown(note.body) }} />
      )}
      {backlinks.length > 0 && (
        <aside className="backlinks">
          <p className="backlinks-label">Linked from</p>
          {backlinks.map((backlink) => <a key={backlink.id} href={noteHref(backlink)}>{noteTitle(backlink)}</a>)}
        </aside>
      )}
    </>
  );
}
