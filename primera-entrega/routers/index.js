const { Router } = require("express");
const router = Router()

const { 
    getProducts,
    postProducts, 
    putProducts,
    deleteProducts,
    getProductsId
} = require("../controllers/productsControllers");


/* Verificación de admin */

const admin = false

const isAdmin = ( req, res, next ) => {
    if (admin) {
        return next()
    } else {
        res.json({ error: 'Not admin', description: `rute ${req.path} method ${req.method} unauthorized`})
    }
}


/* Productos  */

router.get('/products', getProducts)

router.get('/products/:id', getProducts)

router.post('', isAdmin, getProducts)

router.put('', isAdmin, getProducts)

router.delete('', isAdmin, getProducts)


/* Carrito */

module.exports = router