import React, { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  //   const [formState, setFormState] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });

  const { username, email, password } = formState;
  const onInputChange = ({ target }) => {
    //event.target.value
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //interesante
    });
  };

  const onResetForm = ({ target }) => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
