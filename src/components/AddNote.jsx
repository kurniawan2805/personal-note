import React from "react";
import Form from "./Form";

function AddNote({ ...props }) {
  const { handleAddNote } = props;
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat catatan</h2>
        <Form handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}

export default AddNote;
