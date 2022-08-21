import React from "react";
import { showFormattedDate } from "../utils/index";
import Note from "./Note";

function Notes({ ...props }) {
  const { notes, handleDeleteItem, handleArchiveItem } = props;
  // console.log(note);
  return (
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
