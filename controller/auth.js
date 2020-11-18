const {response} =require('express');
const Usuario=require('../models/usuario');
const bcrypt=require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario= async (req,res=response)=>{
    
    //extraemos el campo
    const {email,password}=req.body;
    try{
                
        const existeEmail = await Usuario.findOne({ email });
        if( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        //recogemos los datos del body
        const usuario=new Usuario(req.body);
        
        //encriptar password
        const salt=bcrypt.genSaltSync();
        usuario.password=bcrypt.hashSync(password,salt);

        //gravar en la bd
        await usuario.save();

        //generar el JWT
        const token=await generarJWT(usuario.id);

        res.json({
            ok:true,
            usuario,
            token
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable al administrdor'
        });

    }
    
}

module.exports = {
    crearUsuario
}