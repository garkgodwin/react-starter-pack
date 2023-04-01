import React from "react";

const FormInput = ({ register, name, label }) => {
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input {...register(name)} />
    </div>
  );
};

export default FormInput;
