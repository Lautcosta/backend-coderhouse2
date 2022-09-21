const {Router} = require('express')
const router = Router()
const { saludoController } = require('../controllers/saludoController')

router.get('/', saludoController)



module.exports = router