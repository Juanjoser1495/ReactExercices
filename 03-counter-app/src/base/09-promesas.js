import { getHeroeById, getHeroesByOwner } from "./08-imports-exports";
import { heroes } from "../data/Heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let heroe = getHeroeById(2);
//     resolve(heroe);
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("Heroe not found");
      }
    }, 2000);
  });
};

export { getHeroeByIdAsync };
