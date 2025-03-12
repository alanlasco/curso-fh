import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleFormConCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  useEffect(() => {
    console.log("formstate change");
  }, [formState]);

  return (
    <>
      <h1>formulario custom hook</h1>
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

      <input
        type="password"
        className="form-control m-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary m-2">
        Reset
      </button>
    </>
  );
};
