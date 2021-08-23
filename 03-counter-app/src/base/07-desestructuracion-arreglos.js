const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p2, p3] = personajes;

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

const testFunction = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const arr = testFunction("Goku");
const [nombre, setNombre] = testFunction("Goku");

export { retornaArreglo };
