const {Router} = require('express')
const router = Router()

router.get('/', (req, res) =>{
    res.render('main', { titulo: 'Hey', mensaje: 'Hello there!', autor:'Yo',version: 'ff'})
})

module.exports = router