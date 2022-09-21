const express = require('express')
const app = express()
const PORT = 8080;
const rutas = require('./routes/index')


/* Middleware necesario para tomar datos del body con POST */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Archivos estaticos */
app.use('/html', express.static(__dirname + '/public'))


app.use('/api', rutas)


app.listen(PORT, (error) => {
    try{
        console.log(`Listening attt http://localhost:${PORT}`)
    }catch{
        console.log(`Error s ${error}`);
    }
})