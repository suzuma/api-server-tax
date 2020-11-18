const mongoose=require('mongoose');
const dbConnection=async()=>{

    try{
        console.log('[--- INIT DB CONFIG ---]');
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('[--- DB ONLINE ---]');
    }catch(err){
        
        console.log('[--- ',err,' ---]');
        throw new Error('Error en la base de datos, favor de comunicar con sitemas');
    }
}

module.exports = { dbConnection }


