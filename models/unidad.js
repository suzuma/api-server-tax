const {v4: uuidV4}= require('uuid');
class Unidad{
    constructor(nombre='no-name'){
        this.id=uuidV4();
        this.nombre=nombre;
        this.placa='';
        this.modelo='';
        this.marca='';
        this.lng='-110.9661022';
        this.lat='29.110338'; 
        this.calificacion=0;
    }
}


module.exports =Unidad;