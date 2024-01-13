//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio', 'Julio','Agosto','Septiembre']

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
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes ('Enero'); // Para verificar si un elemento existe o no


// Some, ideal para arrays de objetos
resultado = carrito.some(function(producto){ // Para verificar si un elemento en un objeto existe o no
    return producto.nombre === ('Tablet')
})

//Reduce
resultado = carrito.reduce(function(total, producto){ // Nos calcula el total de los productos agregados al carrito
    return total + producto.precio
}, 0);

// Filter
resultado = carrito.filter(function(producto){ // Filtra por precio
    return producto.precio < 400
});

resultado = carrito.filter(function(producto){ // Filtra por nombre. !== que no sean, === que si sean
    return producto.nombre !== 'Tablet'
});

console.log(resultado);