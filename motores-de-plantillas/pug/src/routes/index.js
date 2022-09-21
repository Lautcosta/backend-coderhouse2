const {Router} = require('express')
const router = Router()
const { homeProducts, listProducts, postProuct } = require('../controllers/productsController')

router.get('/', homeProducts)

router.get('/products' ,listProducts)

router.post("/", postProuct );




module.exports = router