import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(testUser).toEqual(user);
    //
  });
  test("geTusuario activo debe retornar un objeto", () => {
    const name = "alan";
    const userActivo = getUsuarioActivo(name);
    const testUserActivo = {
      uid: userActivo.uid,
      username: name,
    };

    expect(testUserActivo).toEqual(userActivo);
  });
});
