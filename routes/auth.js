/*
    path: api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, login } = require('../controller/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router=Router();

router.post('/new',[
    check('nombre','Nombre es requerido').not().isEmpty(),    
    check('email','Email es requerido').isEmail(),
    check('password','Password es requerido').not().isEmpty(),
    validarCampos
],crearUsuario);

router.post('/',[
    check('email','Email es requerido').isEmail(),
    check('password','Password es requerido').not().isEmpty()
],login);

module.exports=router;