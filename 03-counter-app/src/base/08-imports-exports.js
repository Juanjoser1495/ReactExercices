import { heroes } from "../data/Heroes";

console.log(heroes);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));
console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner("DC"));
console.log(getHeroesByOwner("Marvel"));
