const express = require ('express');
const app = express();
const port = 3030;
const path = require('path');

/* recursos estaticos*/
app.use(express.static('public'))

/*rutas*/
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views', 'index.html'))) 
app.get('/babbage',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'babbage.html')))
app.get('/berners-lee',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'berners-lee.html')))
app.get('/clarke',(req,res)=>res.sendFile(path.join(__dirname,'views', 'clarke.html' )))
app.get('/hamilton',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'hamilton.html')))
app.get('/hopper',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'hopper.html')))
app.get('/lovelace',(req,res)=>res.sendFile(path.join(__dirname,'views', 'lovelace.html')))
app.get('/turing',(req,res)=>res.sendFile(path.join(__dirname,'views', 'turing.html')))
app.get('*',(req,res)=>res.sendFile('NO SE ENCUENTRA LA RUTA :('))
//console.log('trabajando con express');

/*servidor*/
app.listen(port, () => console.log(`servidor levantado en el puerto ${port}`));//esa para levantar el servidor