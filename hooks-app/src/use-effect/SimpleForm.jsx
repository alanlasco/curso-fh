import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "aasdasd",
    email: "asdasd@gmail.com",
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    //event.target.value
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //interesante
    });
  };

  useEffect(() => {
    console.log("formstate change");
  }, [formState]);

  return (
    <>
      <h1>formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control m-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "alan" && <Message />}
    </>
  );
};
