const express = require('express');
const app = express();
const puerto = 8080;
const productos = [{pro:'jabon'}, {pro:'mate'}, {pro:'cafe'}]

app.get('/api/productos', (req, res) => {
    res.json(productos)
})

app.listen(puerto, (err) => {
    if(err) {
        console.log(`Error ${err}`)
    }else{
        console.log(`Puerto escuchando en ${puerto}`);
    }
})