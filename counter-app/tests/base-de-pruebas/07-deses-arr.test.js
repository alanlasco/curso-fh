import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("peubas en 07-deses-arr", () => {
  test("debe retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String)); // en caso de que queira recibir cualquier tipo de string en  vez de abc
  });
});
