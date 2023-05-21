import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    const input = event.target.value;
    setInputValue(input);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim();
    // we are going to create a condition so that empty fields are not entered
    if (input.length <= 1) return;
    onAddCategory(input);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};
