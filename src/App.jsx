import React from "react";
import Swal from "sweetalert2";

import AddNote from "./components/AddNote";
import Header from "./components/Header";
import ListNotes from "./components/ListNotes";
import { getInitialData } from "./utils/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      newNote: {},
      searchText: ""
    };
  }
  onSearchText = (val) => {
    this.setState({ searchText: val.toLowerCase() });
  };

  onDeleteItem = (id) => {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Apakah Anda yakin?",
        text: "Catatan tidak bisa dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.setState({
            notes: [...newNotes]
          });
          swalWithBootstrapButtons.fire(
            "Terhapus!",
            "Catatan berhasil dihapus.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelled", "Dibatalkan!", "error");
        }
      });
  };

  onArchiveItem = (id) => {
    // console.log("Archive it", id);
    const idx = this.state.notes.findIndex((note) => note.id === id);
    const newNotes = [...this.state.notes];
    newNotes[idx].archived = !newNotes[idx].archived;
    this.setState({
      notes: [...newNotes]
    });
  };

  onAddNote = ({ title, body }) => {
    const date = new Date();
    const newNote = {
      id: +new Date(),
      title: title,
      body: body,
      createdAt: date,
      archived: false
    };

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote]
    }));
  };

  render() {
    const { searchText, notes } = this.state;
    // console.log(notes);
    return (
      <div className="App">
        <Header handleSearchNote={this.onSearchText} />
        <div className="note-app__body">
          <AddNote handleAddNote={this.onAddNote} />
          <ListNotes
            notes={notes.filter((note) =>
              note.title.toLowerCase().includes(searchText)
            )}
            handleDeleteItem={this.onDeleteItem}
            handleArchiveItem={this.onArchiveItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
