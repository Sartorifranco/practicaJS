// Classes

class Producto{
    constructor(nombre, precio, id, disponibilidad){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.disponibilidad = disponibilidad;
    }
    formatearProducto(){
        return `El Poducto ${this.nombre} tiene un precio de: $ ${this.precio}`
    }
    obtenerPrecio(){
        console.log(this.precio);
    }
}

const producto = new Producto ('Monitor Curvo de 49"', 800, 345820, true);
const producto2 = new Producto ('Samart Watch 8"', 1800, 34554, false);

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`
    }
    obtenerPrecio(){
        super.obtenerPrecio()
        console.log('Y si hay en stock');
    }
}

const libro = new Libro ('JavaScript la revolucion', 1250, '000235658200463')
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto.formatearProducto());
