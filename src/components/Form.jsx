import React from "react";
// import { useForm } from "react-hook-form";
import { useFormik } from "formik";

function Form() {
  const MAX_CHAR = 50;
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length > 15) {
      errors.title = "Judul tidak boleh lebih dari 15 karakter!";
    }

    if (!values.note) {
      errors.lastName = "Required";
    } else if (values.note.length > 50) {
      errors.lastName = "Catatan tidak boleh lebih 50 karakter!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      note: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  // let noteLimit = MAX_CHAR - noteMessage.length;
  // console.log(MAX_CHAR - noteMessage.length);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form onSubmit={formik.handleSubmit}>
      {/* <label htmlFor="note">Email Address</label> */}
      <p className="note-input__title__char-limit">50 characters</p>
      <input
        className="note-input__title"
        id="title"
        type="text"
        placeholder="Ini adalah judul..."
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}
      <input
        className="note-input__body"
        id="note"
        name="note"
        type="text"
        placeholder="Tuliskan catatanmu di sini..."
        onChange={formik.handleChange}
        value={formik.values.note}
      />
      {formik.errors.note ? <div>{formik.errors.note}</div> : null}
      <button type="submit">Submit</button>
    </form>

    //   {/* errors will return when field validation fails  */}
    //   {<p className="note-input__title__char-limit">{MAX_CHAR - noteMessage.length}</p>}

    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input
    //     className="note-input__title"
    //     type="text"
    //     placeholder="Ini adalah judul..."
    //     defaultValue=""
    //     {...register("title", { required: true })}
    //   />

    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input
    //     className="note-input__body"
    //     type="text"
    //     placeholder="Tuliskan catatanmu di sini..."
    //     {...register(
    //       "note",
    //       {
    //         maxLength: 5
    //       },
    //       { required: true }
    //     )}
    //   />

    //   <input type="submit" />
    // </form>
  );
}

export default Form;
