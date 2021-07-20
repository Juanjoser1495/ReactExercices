//Mala practica al crear funciones
function saludarBad(nombre) {
  return `Hola, ${nombre}`;
}

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludarFuncionFlecha = (nombre) => `Hola ${nombre}`;

console.log(saludar("Goku"));
console.log(saludarBad("Bad Goku"));
console.log(saludarFuncionFlecha("Arrow Goku"));

const getUser = () => {
  return {
    uid: "ABC123",
    username: "GokuRocks",
  };
};

const getUserSimplified = () => ({
  uid: "ABC123",
  username: "GokuRocks",
});

console.log(getUser());
console.log(getUserSimplified());

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Goku active");
console.log(usuarioActivo);
