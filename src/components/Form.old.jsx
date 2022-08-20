import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const MAX_CHAR = 50;
  let noteMessage = watch("note");
  // let noteLimit = MAX_CHAR - noteMessage.length;
  // console.log(MAX_CHAR - noteMessage.length);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* errors will return when field validation fails  */}
      {errors.noteMessage && (
        <p className="note-input__title__char-limit">This field is required</p>
      )}

      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="note-input__title"
        type="text"
        placeholder="Ini adalah judul..."
        defaultValue=""
        {...register("title", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="note-input__body"
        type="text"
        placeholder="Tuliskan catatanmu di sini..."
        {...register(
          "note",
          {
            maxLength: {
              value: 2,
              message: alert("error message") // JS only: <p>error message</p> TS only support string
            }
          },
          { required: true }
        )}
      />

      <input type="submit" />
    </form>
  );
}

export default Form;
