import React from "react";
import Notes from "./Notes";

function ListNotes({ ...props }) {
  const {
    notes,
    handleDeleteItem,
    handleArchiveItem
    // handleActiveItem
  } = props;
  // console.log(props);
  let activeNotes = [];
  let archivedNotes = [];
  notes.map((note) => {
    if (note.archived) {
      archivedNotes = [...archivedNotes, note];
    } else {
      activeNotes = [...activeNotes, note];
    }
    return { activeNotes, archivedNotes };
  });

  return (
    <>
      <h2>Catatan Aktif</h2>
      <Notes
        notes={activeNotes}
        handleDeleteItem={handleDeleteItem}
        handleArchiveItem={handleArchiveItem}
      />
      <h2>Arsip</h2>
      <Notes
        notes={archivedNotes}
        handleDeleteItem={handleDeleteItem}
        handleArchiveItem={handleArchiveItem}
      />
    </>
  );
}

export default ListNotes;
