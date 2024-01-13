// Arrays

const numeros = [10,20,30,40,50];
// console.log(numeros);
console.table(numeros);

const meses = new Array['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio', 'Julio','Agosto','Septiembre']

console.table(meses);

/*const array = ['Hola', 10, true,'Si', null, {nombre:'Franco',trabajo:'Programador'}, [1,2,3]];

console.log(array);

//Acceder a los valores de un arreglo
console.log(numeros[4]); //Constante + posicion
console.log(numeros[0]);

//Conocer la extension de un array 
console.log(meses.length);

meses.forEach(function(mes){ //Para mostrar todos los elementos del array
    console.log(mes);
})*/

numeros.push(60,70,80); //Sirve para sumar elementos al array al final
numeros.unshift(-10,-20,-30); //Sirve para sumar elementos al array al principio

meses.pop(); // Elimina el ultimo elemento del array
meses.shift(); // Elimina el primer elemento del array
meses.splice(2, 1); // Elimina un elemento del medio, primer valor es la posicion del elemento y el segundo valor es cuantos quiero eliminar a partir de esa posicion

console.table(numeros);

console.table(meses);


// Rest Operator o Spread Operator
// Esta forma es mas utilizada ya que no modifica el array original

//Los puntos suspensivos generan una copia del array original y luego se agrega la modificacion

//const nuevoArray = [...meses, 'Macri'] // Simula el push

const nuevoArray = ['Macri', ...meses] // Simula el unshift

console.log(nuevoArray);



