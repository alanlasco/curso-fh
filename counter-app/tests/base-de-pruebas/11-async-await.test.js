import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("pruebas en 11-async await", () => {
  test("getImagen deberia retornar una URl ", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
