const {Router} = require('express')
const router = Router()

const personas = []
const mascotas = []


router.post('/mascotas', (req , res) => {
    try{
        const {nombre , raza , edad} = req.body
        mascotas.push({nombre, raza , edad })
        res.status(201)
        res.json(mascotas)
    }catch(error){
        console.log(error)
    }
})

router.get('/mascotas', (req , res) => {
    res.json(mascotas)
})

router.post('/personas', (req, res) => {
    const {nombre , apellido , edad} = req.body
    personas.push({nombre, apellido , edad })
    res.status(201)
    res.json(personas)

    
})

router.get('/personas', (req, res) => {
    res.json(personas)
})


module.exports = router