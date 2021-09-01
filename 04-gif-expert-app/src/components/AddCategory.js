import { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hello World");
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Submit done");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={inputValue} onChange={handleOnChange} />
    </form>
  );
};

export default AddCategory;
