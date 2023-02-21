
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//ENDPOINTS

app.get('/', (req, res) => {
    res.send("Hola mundo");
})

app.post('/', (req, res) => {
    res.send(`Su nombre es ${rep.body.nombre} y su apellido es ${rep.body.apellido}`);
})

app.get('/adios', (req, res) => {
    res.send("Adios mundo");
})

app.get('/presagio/:name', (req, res) => {
    let nombre = req.params.name;
    let entidad = req.query.entidad;
    let consecuencia = req.query.consecuencia;

    res.send(`Ten cuidado ${nombre}, vas a cruzarte con ${entidad} y a ${consecuencia}`);
})

app.listen(PORT, ()=>{
    console.log(`Servidor levantado en puerto ${PORT}`);
})