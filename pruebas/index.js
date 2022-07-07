const express = require('express')
const app = express()
const puerto = 8080
const mascotas = 'hola'


app.use(express.static('public'))

app.get('/mascotas' , (req, res) =>{
    res.json(mascotas)
})

app.listen(puerto,()=>{
    console.log(`Listening at http://localhost:${puerto}`)
})