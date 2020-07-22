describe("Pruebas eb el archivo demo.test.js", () => {
  test("deben de ser iguales dos strings", () => {
    const mensaje = "Hola Mundo";

    const mensaje2 = `Hola Mundo`;

    expect(mensaje).toBe(mensaje2);
  });
});
