import React from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

const TestFormPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <FormInput
          register={register}
          name="firstname"
          label="First Name"
        />
        <FormInput
          register={register}
          name="lastname"
          label="Last Name"
        />
      </Form>
    </div>
  );
};

export default TestFormPage;
