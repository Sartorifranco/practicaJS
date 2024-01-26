// Async / await

function descargarNuevosClientes(){
return new Promise(resolve => {
    console.log('Descargando Clientes... espere...');

    setTimeout(()=>{
        resolve( 'Los clientes fueron descargados')
    },5000)
});
}

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando Pedidos... espere...');
    
        setTimeout(()=>{
            resolve( 'Los Pedidos Fueron Descargados')
        },3000)
    });
    }

async function app(){
    try {
        /*const clientes = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos);*/

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]) // esta forma es para que se ejecuten las 2 tareas al mismo tiempo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();


/*setTimeout(function(){ // Lo hace una sola vez
    console.log('Set timeout...');
}, 4000);

setInterval(function(){ // Lo hace cada vez que se cumpla el tiempo pretendido
    console.log('Set interval...');
}, 2000);*/