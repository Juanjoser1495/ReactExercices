import { getHeroeById, getHeroesByOwner } from "../../base/08-imports-exports";
import heroes from "../../data/Heroes";

describe("Pruebas en 08-import-exports", () => {
  test("Must return an heroe by id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Must return an undefined if doesn't exist", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Must return the DC Heroes", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroes).toEqual(heroeData);
  });

  test("Must return the number of heroes of marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroes.length).toEqual(heroeData.length);
  });
});
