import PropTypes from "prop-types";
import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("One punch");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // SetCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} aria-label="form">
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
