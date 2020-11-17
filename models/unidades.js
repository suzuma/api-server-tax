const Unidad=require('./unidad');

class Unidades{
    constructor(){
        this.unidades=[];
    }

    addUnidad(unidad=new Unidad()){
        this.unidades.push(unidad);
    }

    getUnidaes(){
        return this.unidades;
    }

    deleteUnidad(id=''){
        //filtramos todos los requistros que no tengan el id
        this.unidades=this.unidades.filter(unidad=>unidad.id!==id);
        return this.unidades;
    }

    calificarUnidad(id='',nCalificacion=0){
        this.unidades=this.unidades.map(unidad=>{
            if(unidad.id==id){
                //se promedia la calificación
                unidad.calificacion=(unidad.calificacion+nCalificacionclear)/2;
                return unidad;
            }else{
                return unidad;
            }
        });
    }
}

module.exports=Unidades;