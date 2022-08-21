import React from "react";

function Header({ handleSearchNote }) {
  // console.log(props);
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          onChange={(e) => handleSearchNote(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
