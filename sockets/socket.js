const {io}=require('../index');

const Unidades=require('../models/unidades');
const Unidad=require('../models/unidad');

const unidades=new Unidades();
unidades.addUnidad(new Unidad());

io.on('connection',client=>{
    console.log('[---- cliente conectado ----]');

    //REGRESAMOS EL TOTAL DE LAS UNIDADES CONECTADAS
    client.emit('unidad-online',unidades.getUnidaes());
    
    //AGREGAMOS UNIDAD AL ARREGLO
    client.on('unidad-add',(payload)=>{
        const nUnidad=new Unidad(
            payload.nombre
        );
        nUnidad.placa=payload.placa;
        nUnidad.modelo=payload.modelo;
        nUnidad.marca=payload.marca;
        nUnidad.lng=payload.lng;
        nUnidad.lat=payload.lat;    
        unidades.addUnidad(nUnidad);
        io.emit('unidad-online',unidades.getUnidaes());
    });

    //BORRAR LA UNIDAD DE LA LISTA
    client.on('unidad-delete',(payload)=>{
        unidades.deleteUnidad(payload.id);
        io.emit('unidad-online',unidades.getUnidaes());
    });

    //CALIFICAR A LA UNIDAD
    client.on('unidad-calificar',(payload)=>{
        unidades.calificarUnidad(payload.id,payload.calificacion);
        io.emit('unidades-online',unidades.getUnidaes());
    });

});