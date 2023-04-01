import React from "react";
import "./index.css";

const Form = (props) => {
  return (
    <form
      className="Form"
      onSubmit={props.handleSubmit(props.onSubmit)}
    >
      <h1>Form</h1>
      {props.children}
      <input className="form-submit" type="submit" />
    </form>
  );
};

export default Form;
