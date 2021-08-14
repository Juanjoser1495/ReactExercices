const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p2, p3] = personajes;
console.log(p3);
console.log(p2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

const testFunction = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const arr = testFunction("Goku");
console.log(arr);

const [nombre, setNombre] = testFunction("Goku");
console.log(nombre);
setNombre();
