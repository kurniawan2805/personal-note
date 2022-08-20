import React from "react";
import { MdSearch } from "react-icons/md";

function Header({ handleSearchNote }) {
  // console.log(props);
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        {/* <MdSearch className="search-icons" size="1.5em" /> */}
        <input
          type="text"
          placeholder="Cari catatan ..."
          // value=""
          onChange={(e) => handleSearchNote(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
