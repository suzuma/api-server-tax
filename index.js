const express=require('express');
const path=require('path');

require('dotenv').config();

require('./dabase/config').dbConnection();

const app=express();

//LECTURA Y PARCEO DEL BODY
app.use(express.json());


const server=require('http').createServer(app);

module.exports.io=require('socket.io')(server);
require('./sockets/socket');

//PATH PUBLICO
const publicPath=path.resolve(__dirname,'public');
app.use(express.static(publicPath));

//mis rutas
app.use('/api/login',require('./routes/auth'));

server.listen(process.env.PORT,(err)=>{
    if(err) throw new Error(err);
    console.log('[---- SERVIDOR CORRIENDO EN EL PUERTO ----]',process.env.PORT)
});
