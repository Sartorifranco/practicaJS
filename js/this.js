// This

const reservacion = {
    nombre: 'Franco',
    apellido: 'Sartori',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre: 'Candela',
    apellido: 'Gastardelli',
    total: 5000,
    pagado: true,
    informacion: function(){
        console.log(`${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion();
reservacion2.informacion();
