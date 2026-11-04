const DB_NAME = "notesapp";
const STORE = "notes";

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function run(mode, action) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const request = action(tx.objectStore(STORE));
    tx.oncomplete = () => {
      db.close();
      resolve(request.result);
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

export async function listNotes() {
  const notes = await run("readonly", (store) => store.getAll());
  return notes.sort((a, b) => b.createdAt - a.createdAt);
}

export function createNote({ name, description, image }) {
  const note = {
    id: crypto.randomUUID(),
    name,
    description,
    image: image && image.size > 0 ? image : null,
    createdAt: Date.now(),
  };
  return run("readwrite", (store) => store.add(note));
}

export function deleteNote(id) {
  return run("readwrite", (store) => store.delete(id));
}
