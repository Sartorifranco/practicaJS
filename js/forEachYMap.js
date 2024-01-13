const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 253},
    {nombre: 'Televisor 50 Pulgadas', precio: 500},
    {nombre: 'Pava Electrica', precio: 50},
    {nombre: 'Notebook', precio: 450},
    {nombre: 'Microondas', precio: 300},
    {nombre: 'Sillon 4 Cuerpos', precio: 1100},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Teclado', precio: 500},
    {nombre: 'Auriculares', precio: 150}
];

// forEach
carrito.forEach(producto => console.log(producto.nombre));  //  Para iterar o mostrar en consola

//  map
const array = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);  // Crea un nuevo array (copia)
console.log(array);