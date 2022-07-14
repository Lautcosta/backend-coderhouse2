const {Router} = require('express')
const router = Router()

router.post('/usuario' , (req,res) => {
    const {nombre, edad} =req.body
    console.log(nombre, edad)
    res.sendStatus(201)
})


module.exports = router