const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);
console.log(persona.clave);

const retornaPersona = (usuario) => {
  const { nombre, edad } = persona;
  console.log(nombre);
  console.log(edad);
};

const retornaPersonaDesestructuraParams = ({
  clave,
  nombre,
  edad,
  rango = "Capitan",
}) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);
retornaPersonaDesestructuraParams(persona);

const anotherName = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const { nombreClave, anios } = anotherName(persona);

//const { nombreClave, anios } = avenger;
console.log(nombreClave, anios);
