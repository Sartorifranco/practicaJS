// Todas las APIS utilizan promises, es una promesa que puede ser concretada ahora, en un futuro o nunca


const usuarioAutenticado = new Promise((resolve, reject) =>{  //Creamos una nueva instancia del promise y ejecutamos la funcion
    const auth = true;

    if(auth){
        resolve('Usuario autenticado'); // El promise se cumple
    }else{
        reject('No se pudo iniciar sesion');   // El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// En los promises existen 3 valores 
// Pending: No se cumplio pero tampoco se rechazo
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir