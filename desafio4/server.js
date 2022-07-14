const express = require('express')
const app = express()
const PORT = 8080;
const rutas = require('./routes/index')
const rutas2 = require('./usuario/usuario')


//Middleware necesario para tomar datos del body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Archivos estaticos */
app.use('/html', express.static(__dirname + '/pagina'))

app.use('/api', rutas)
app.use('/api2', rutas2)


app.listen(PORT, (error) => {
    try{
        console.log(`Listening attt http://localhost:${PORT}`)
    }catch{
        console.log(`Error s ${error}`);
    }
})