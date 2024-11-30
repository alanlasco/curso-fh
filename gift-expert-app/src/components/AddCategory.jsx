import { useState } from "react";

export const AddCategory = ({ SetCategories }) => {
  const [inputValue, setinputValue] = useState("One punch");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    SetCategories((categories) => [inputValue, ...categories]);
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={(e) => onInputChange(e)}
        />
      </form>
    </>
  );
};
