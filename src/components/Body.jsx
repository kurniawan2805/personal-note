import React from "react";
import Form from "./Form";

function Body() {
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat catatan</h2>
        <Form />
      </div>
    </div>
  );
}

export default Body;
