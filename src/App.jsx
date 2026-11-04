import { useState, useEffect } from "react";
import { listNotes, createNote, deleteNote } from "./notes";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    return () => notes.forEach((note) => note.imageUrl && URL.revokeObjectURL(note.imageUrl));
  }, [notes]);

  async function fetchNotes() {
    try {
      const stored = await listNotes();
      setNotes(
        stored.map((note) => ({
          ...note,
          imageUrl: note.image ? URL.createObjectURL(note.image) : null,
        }))
      );
    } catch {
      setError("Notes can't be saved in this browser. Private windows may block storage.");
    }
  }

  async function handleCreate(event) {
    event.preventDefault();
    const formElement = event.target;
    const form = new FormData(formElement);
    try {
      await createNote({
        name: form.get("name"),
        description: form.get("description"),
        image: form.get("image"),
      });
      formElement.reset();
      fetchNotes();
    } catch {
      setError("That note couldn't be saved. The image may be too large for browser storage.");
    }
  }

  async function handleDelete(id) {
    await deleteNote(id);
    fetchNotes();
  }

  return (
    <main className="app">
      <h1>My Notes App</h1>
      <p className="hint">Notes are saved in this browser only.</p>
      <form className="note-form" onSubmit={handleCreate}>
        <input name="name" placeholder="Note Name" aria-label="Note Name" required />
        <input
          name="description"
          placeholder="Note Description"
          aria-label="Note Description"
          required
        />
        <input name="image" type="file" accept="image/png, image/jpeg" aria-label="Image" />
        <button type="submit" className="primary">
          Create Note
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <hr />
      <h2>Current Notes</h2>
      {notes.length === 0 ? (
        <p className="hint">No notes yet.</p>
      ) : (
        <div className="grid">
          {notes.map((note) => (
            <article key={note.id} className="box">
              <h3>{note.name}</h3>
              <p className="description">{note.description}</p>
              {note.imageUrl && <img src={note.imageUrl} alt={`visual aid for ${note.name}`} />}
              <button className="destructive" onClick={() => handleDelete(note.id)}>
                Delete note
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
