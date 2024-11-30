import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = () => {
    setCategories(["Dragon Ball", ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory SetCategories={setCategories} />
      {/* <button onClick={addCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};
