const express = require('express')
const app = express()
const port = 8080;
const path = require('path')
const rutas = require('./routes/index')


app.set('views', path.join(__dirname, './views' ) )
app.set('view engine' ,'ejs')


/* Middleware necesario para tomar datos del body con POST */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rutas)

app.listen(port , (error) => {
    try {
        console.log(`Listening attt http://localhost:${port}`);
    } catch {
        console.log(`Error : ${error}`)
    }
})