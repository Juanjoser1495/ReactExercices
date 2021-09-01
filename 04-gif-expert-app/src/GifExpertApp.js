import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  //const categories = ["Dragon Ball", "Pokemon", "Samurai X"];
  const [categories, setCategories] = useState([
    "Dragon Ball",
    "Pokemon",
    "Samurai X",
  ]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Hunter X"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
