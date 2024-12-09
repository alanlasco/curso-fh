import { getGifs } from "../../helpers/getGifs";

describe("pruebas en getgifs", () => {
  test("debe retornar un arreglo", async () => {
    const gifs = await getGifs("One punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String), //podria evaluar que tenga https en la foto
    });
  });
});
