const {Router} = require("express")
const router = Router()
const personas = []
const mascotas = []

router.get('/mascotas' , (req, res) =>{
    res.json(mascotas)
})

router.post('/mascotas' , (req, res) =>{
    const {nombre, raza, edad} = req.body
    mascotas.push({nombre , raza , edad})
    res.sendStatus(202)
})

router.get('/personas' , (req, res) =>{
    res.json(mascotas)
})

router.post('/personas' , (req, res) =>{
    const {nombre, apellido, edad} = req.body
    mascotas.push({nombre , apellido , edad})
    res.sendStatus(202)
})

module.exports = router