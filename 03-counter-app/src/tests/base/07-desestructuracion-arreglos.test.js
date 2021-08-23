import { retornaArreglo } from "../../base/07-desestructuracion-arreglos";

describe("Pruebas en 07-desestructuracion-arreglos", () => {
  test("Must return an string and a number", () => {
    const arr = retornaArreglo();
    const [letras, numero] = retornaArreglo();

    expect(arr).toEqual(["ABC", 123]);
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
