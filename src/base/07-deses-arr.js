const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;

export const retornaArreglo = () => {
  return ["ABC", 123];
};

//const [letras, numeros] = retornaArreglo();

// Tarea
// 1. el primer valor del arr se llamarÃ¡ nombre
// 2. se llamarÃ¡ setNombre
const useState = valor => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    }
  ];
};
