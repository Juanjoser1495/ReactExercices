import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("GetUser Must return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "GokuRocks",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("GetUserActive Must return an object", () => {
    const nombre = "Juan";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual(userTest);
  });
});
