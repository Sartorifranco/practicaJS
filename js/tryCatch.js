// TryCatch es a prueba de errores, pero no se puede usar siempre
// Solamente se utiliza en situaciones muy especificas, por ejemplo si un usuario pudo o no iniciar sesion o si se pudo conectar a una base de datos 

const numero1 = 20;
const numero3 = 30;

console.log(numero1);
try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}
console.log(numero3);