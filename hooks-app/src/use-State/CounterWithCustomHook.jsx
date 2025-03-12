import React from "react";
import { useCounter } from "../hooks/useCounter.jsx";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(); //se destructura como un objeto, pero si fuera un array seria con []
  return (
    <div>
      <h1>counter with hook:{counter} </h1>
      <hr />
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      {
        //esta como decrement porque no hago nada con los parametros si hiciera algo haria () => decrement()
      }
      <button onClick={decrement} className="btn btn-primary">
        -1
      </button>
    </div>
  );
};
