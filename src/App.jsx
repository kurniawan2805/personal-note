import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import ListNotes from "./components/ListNotes";
import { getInitialData, showFormattedDate } from "./utils/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchText: ""
    };
  }
  onSearchText = (val) => {
    this.setState({ searchText: val.toLowerCase() });
  };

  onDeleteItem = (id) => {
    // console.log("Delete it", id);
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes: [...newNotes]
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

  // const deleteNote = (id) => {
  // 	const newNotes = notes.filter((note) => note.id !== id);
  // 	setNotes(newNotes);
  // };

  render() {
    const { searchText, notes } = this.state;
    // console.log(notes);
    // console.log(showFormattedDate(new Date()));
    return (
      <div className="App">
        <Header handleSearchNote={this.onSearchText} />
        <Body />
        <ListNotes
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(searchText)
          )}
          handleDeleteItem={this.onDeleteItem}
          handleArchiveItem={this.onArchiveItem}
        />
      </div>
    );
  }
}

export default App;
