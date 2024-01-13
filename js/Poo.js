// POO

// Object Literal

/*const prodructo = {
    nombre: 'Tablet',
    precio: 500
}*/

// Object Constructor
function Cliente (nombre, apellido, dni){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni
}
Cliente.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre} ${this.apellido} tiene el DNI: ${this.dni}`
}




function Producto(nombre, precio, id, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.id = id
    this.disponibilidad = disponibilidad
}
// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El Poducto ${this.nombre} tiene un precio de: $ ${this.precio}`
}


const producto = new Producto ('Monitor Curvo de 49"', 800, 345820, true);
const producto2 = new Producto ('Samart Watch 8"', 1800, 34554, false);
const producto3 = new Producto ('Camara Nikon 3500', 2000, 15796, true);
const producto4 = new Producto ('Caramelos', 5.50, 47785, false);
const cliente = new Cliente ('Franco', 'Sartori', 38646611);



console.log(producto.formatearProducto());
console.log(producto2.formatearProducto());
console.log(cliente.formatearCliente());


