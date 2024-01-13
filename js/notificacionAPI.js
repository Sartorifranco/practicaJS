const boton = document.querySelector('#boton')

boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es: ${resultado}`))
});

if(Notification.permission == 'granted'){
    new Notification('Notificacion de Amor',{
        icon: 'img/notificacionlogo.png',
        body: 'Candela Te Amo'
    })
}