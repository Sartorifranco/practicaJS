/*function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2,3);

console.log(resultado);*/
const usuario = 'Franco'
let total = 0;

function agregarCarrito(precio){ // Funcion que va sumando todos los precios que ponemos en la variable total
    return total += precio;
}

function calcularImpuesto(total){ // Funcion para la operacion de clacular el 15%
    return 1.15 * total;
}

total = agregarCarrito(200);//Ingresamos los totales 
total = agregarCarrito(600);
total = agregarCarrito(200);

console.log(total); // Imprimimos total

const totalAPagar = calcularImpuesto(total); // Creamos constante invocamos funcion calcularImpuesto 

console.log(`Hola ` + usuario + ` el total a pagar es de $` + totalAPagar); // Imprimimos constante y nos da el resultado de toda la operacion con impuesto includio