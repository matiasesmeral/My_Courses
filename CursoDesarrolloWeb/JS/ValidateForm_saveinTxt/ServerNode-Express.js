const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home/masaes09/Documents/CursoDesarrolloWeb/JS/1ValidacionFormularios/index.html');
  });

  
app.put('home/masaes09/Documents/CursoDesarrolloWeb/JS/1ValidacionFormularios/savedata',(req,resp) =>{

    const data = req.body;
    const contenido = JSON.stringify(data);
    const RutaArchivo = '/home/masaes09/Documents/CursoDesarrolloWeb/JS/1ValidacionFormularios/texto.txt';
    fs.writeFile(RutaArchivo,contenido,(err)=>{

        if(err){
            console.log('Error al guardar los datos.',err);
            resp.send(('Error al guardar el archivo.'));
        }else{
            console.log('Datos guardados Exitosamente.');
            resp.send('Los datos se guardaron bien.');
        }

    })
})

app.listen(3000,()=>{
    console.log('Servidor en el puerto 3000.');
})