import { useState } from "react";

const GifExpertApp = () => {
  //const categories = ["Dragon Ball", "Pokemon", "Samurai X"];
  const [categories, setCategories] = useState([
    "Dragon Ball",
    "Pokemon",
    "Samurai X",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "Hunter X"]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>

      <button onClick={handleAdd}>Add</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
