
const persona = {
    nombre:'Tony',  
    apellido:'Stark',
    edad: 45,
    direccion:{
        ciudad: 'Medellin',
        zip: 1241341,
        lat: 13.4213,
        lng: 12.121
    }
};

console.log({persona})
console.table(persona);
console.log(persona.nombre);

//Si quiero crear un clon no hacer esto, porque copia la refrencia en memoria y no el objeto
    //const persona2 = persona;
//Debo hacerlo asi
const persona2 = {...persona};
console.log(persona2);