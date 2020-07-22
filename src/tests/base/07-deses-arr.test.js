import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en desestructuraccion", () => {
  test("debe retornarnar un string y un numero", () => {
    const arreglo = retornaArreglo();

    expect(arreglo).toEqual(["ABC", 123]);
  });

  test("debe retornarnar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toEqual("ABC");
    expect(typeof letras).toEqual("string");

    expect(numeros).toEqual(123);
    expect(typeof numeros).toEqual("number");
  });
});
