import React from "react";
import Note from "./Note";

function ListNotes({ ...props }) {
  const {
    notes,
    handleDeleteItem,
    handleArchiveItem
    // handleActiveItem
  } = props;
  // console.log(props);
  // const activeNotes = [];
  // const archivedNotes = [];

  // notes.map(note => {

  // })

  return (
    <>
      <h2>Aktif</h2>
      <div className="notes-list">
        {notes.map((note) => {
          if (!note.archived) {
            return (
              <Note
                key={note.id}
                note={note}
                handleDeleteItem={handleDeleteItem}
                handleArchiveItem={handleArchiveItem}
              />
            );
          }
        })}
      </div>
      <h2>Arsip</h2>
      <div className="notes-list">
        {notes.map((note) => {
          if (note.archived) {
            return (
              <Note
                key={note.id}
                note={note}
                handleDeleteItem={handleDeleteItem}
                handleArchiveItem={handleArchiveItem}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default ListNotes;
