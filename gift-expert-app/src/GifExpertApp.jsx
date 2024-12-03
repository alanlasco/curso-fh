import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //ve al index

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = (newCategory) => {
    //se podria usar una validacion con filter etc
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //   SetCategories={setCategories}
        onNewCategory={addCategory}
      />
      {/* <button onClick={addCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
