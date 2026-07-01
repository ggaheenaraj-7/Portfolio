import { useEffect, useState } from "react";

export default function StickyNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("gg-sticky-notes");

    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "gg-sticky-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        text: "",
        color: "#FDE68A",
      },
    ]);
  };

  const updateNote = (id, value) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, text: value }
          : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => note.id !== id)
    );
  };

  return (
    <div>

      <button
        onClick={addNote}
        className="
          mb-8
          rounded-full
          border border-pink-300/20
          bg-white/5
          px-6 py-3
          hover:bg-white/10
        "
      >
        + New Note
      </button>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {notes.map((note) => (
          <div
            key={note.id}
            className="
              relative
              rounded-3xl
              p-6
              min-h-[220px]
              shadow-xl
            "
            style={{
              backgroundColor: note.color,
            }}
          >
            <button
              onClick={() => deleteNote(note.id)}
              className="
                absolute
                top-4
                right-4
                text-black/60
                hover:text-black
              "
            >
              ✕
            </button>

            <textarea
              value={note.text}
              onChange={(e) =>
                updateNote(
                  note.id,
                  e.target.value
                )
              }
              placeholder="Write something..."
              className="
                w-full
                h-full
                bg-transparent
                resize-none
                outline-none
                text-black
                placeholder:text-black/50
              "
            />
          </div>
        ))}

      </div>

    </div>
  );
}