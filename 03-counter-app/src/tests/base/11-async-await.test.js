import { getImagen } from "../../base/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen Must return the data of the image", async () => {
    const data = await getImagen();
    const url = data.data.images.original.url;

    expect(typeof url).toBe("string");
  });
});
