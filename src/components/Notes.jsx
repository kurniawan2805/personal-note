import React from "react";
import { showFormattedDate } from "../utils/index";
import Note from "./Note";

function Notes({ ...props }) {
  const { notes, handleDeleteItem, handleArchiveItem } = props;
  // console.log(note);
  return (
    <>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                handleDeleteItem={handleDeleteItem}
                handleArchiveItem={handleArchiveItem}
              />
            );
          })}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default Notes;

/*
Format note
{
  id: number | string,
  title: string,
  body: string,
  archived: boolean, 
  createdAt: string,
}
*/
