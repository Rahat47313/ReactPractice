import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Split from "react-split";
// import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, notesCollection } from "../firebase";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);

  //used if stored only in localStorage
  //     const [notes, setNotes] = useState(
  //     () => JSON.parse(localStorage.getItem("notes")) || []
  //   );

  const [tempNoteText, setTempNoteText] = useState("");

  const [currentNoteId, setCurrentNoteId] = useState("");
  //   const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || "");
  // notes[0]?.id means (notes[0] && notes[0].id)

  const currentNote =
    notes.find((note) => note.id === currentNoteId) || notes[0];

  //   use either this function or the variable above, but the function uses more resources
  //   function findCurrentNote() {
  //     return (
  //       notes.find((note) => {
  //         return note.id === currentNoteId;
  //       }) || notes[0]
  //     );
  //   }

  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArr);
    });
    return unsubscribe;
  }, []);

  //used if stored only in localStorage
  //   useEffect(() => {
  //     localStorage.setItem("notes", JSON.stringify(notes));
  //   }, [notes]);

  useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id);
    }
  }, [notes]);

  useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote.body);
    }
  }, [currentNote]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body) {
        updateNote(tempNoteText);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [tempNoteText]);

  async function createNewNote() {
    //used if stored only in localStorage
    // id: nanoid(),
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const newNoteRef = await addDoc(notesCollection, newNote);
    //used if stored only in localStorage
    // setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNoteRef.id);
  }

  // Puts recently modified Note at the top in Sidebar
  async function updateNote(text) {
    const docRef = doc(db, "notes", currentNoteId);
    await setDoc(
      docRef,
      { body: text, updatedAt: Date.now() },
      { merge: true }
    );
  }

  //used if stored only in localStorage
  //Puts recently modified Note at the top in Sidebar
  //   function updateNote(text) {
  //     setNotes((oldNotes) => {
  //       const newArray = [];
  //       for (let i = 0; i < oldNotes.length; i++) {
  //         const oldNote = oldNotes[i];
  //         if (oldNote.id === currentNoteId) {
  //           newArray.unshift({ ...oldNote, body: text });
  //         } else {
  //           newArray.push(oldNote);
  //         }
  //       }
  //       return newArray;
  //     });
  //   }

  // Notes holds same position in sidebar
  //   function updateNote(text) {
  //     setNotes((oldNotes) =>
  //       oldNotes.map((oldNote) => {
  //         return oldNote.id === currentNoteId
  //           ? { ...oldNote, body: text }
  //           : oldNote;
  //       })
  //     );
  //   }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
  }

  //used if stored only in localStorage
  //   function deleteNote(event, noteId) {
  //     event.stopPropagation();
  //     setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  //   }

  return (
    <>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={sortedNotes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {/* {currentNoteId && notes.length > 0 && ( */}
          <Editor
            tempNoteText={tempNoteText}
            setTempNoteText={setTempNoteText}
          />
          {/* )} */}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </>
  );
}
