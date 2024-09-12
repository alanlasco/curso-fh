test("esta prueba no debe fallar", () => {
  //inicializacion
  const message = "hola mundo";

  //estimulo
  const message2 = message.trim();

  //observar

  expect(message).toBe(message2);
});
