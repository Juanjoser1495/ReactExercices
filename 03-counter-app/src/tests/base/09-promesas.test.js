import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/Heroes";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync Must return the heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test("getHeroeByIdAsync Must return error async", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("Heroe not found");
      done();
    });
  });
});
