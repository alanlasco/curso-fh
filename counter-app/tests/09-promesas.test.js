import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";

//todas las pruebas son sincronas
// eslint-disable-next-line no-undef
describe("Prueba en 09-promesas", () => {
  test("getHeroesByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });
  test("getHeroesByIdAsync debe retornar un error00 si heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe con ${id}`);

      done();
    });
  });
});
