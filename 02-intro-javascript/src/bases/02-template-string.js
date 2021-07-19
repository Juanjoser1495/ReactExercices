
const nombre = 'Juan Jose';
const apellido = 'Rojas';

//Sin temmplate string
const nombreCompleto  = nombre + ' '+ apellido;
//Con template string
const nombreCompletoTS = `${nombre} ${apellido}`;

console.log(nombreCompleto);
console.log(nombreCompletoTS);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompletoTS)}`)