import React from "react";
import Swal from "sweetalert2";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        title: "",
        body: ""
      }
    };
  }
  charTitleLimit = 50;

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.note.title && this.state.note.body) {
      this.props.handleAddNote(this.state.note);
      Swal.fire({
        title: "Berhasil!",
        text: "Catatan berhasil ditambah!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6"
      });
    } else {
      Swal.fire({
        title: "Eror!",
        text: "Silakan lengkapi judul dan isi catatan terlebih dahulu!",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6"
      });
    }
  };

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    // limit title char
    if (this.charTitleLimit - fieldVal.length >= 0) {
      this.setState((prevState) => ({
        note: {
          ...prevState.note,
          [fieldName]: fieldVal
        }
      }));
    }
  };

  render() {
    // console.log(this.props);

    return (
      <form onSubmit={this.onSubmit}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.charTitleLimit - this.state.note.title.length}
        </p>
        <input
          className="note-input__title"
          id="title"
          name="title"
          type="text"
          placeholder="Ini adalah judul..."
          onChange={this.handleChange}
          value={this.state.note.title}
        />
        <textarea
          className="note-input__body"
          id="body"
          name="body"
          type="text"
          placeholder="Tuliskan catatanmu di sini..."
          onChange={this.handleChange}
          value={this.state.note.body}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
