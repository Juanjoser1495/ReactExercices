const arreglo = new Array(100);
arreglo.push(1);
const arregloNoSize = [1,2,3,4];

let arregloNoSize2 = [...arregloNoSize,5];

const arreglo3 = arregloNoSize2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arregloNoSize);
console.log(arregloNoSize2);
console.log(arreglo3);