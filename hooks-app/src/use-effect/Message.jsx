import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("monto");

    return () => {
      console.log("no monto");
    };
  }, []);

  return (
    <div>
      <h1>usuario ua existe</h1>
    </div>
  );
};
