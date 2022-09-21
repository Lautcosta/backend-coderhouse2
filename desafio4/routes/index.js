const {Router} = require('express')
const router = Router()

const products = []


router.get('/productos', (req , res) => {
    try{
        res.json(products)
    }catch (error){
        res.sendStatus(500)
    }
})


router.get('productos:id',(req,res) => {
    try {
        const id = Number(req.params.id)
        const product = products.find((item) => item.id === id)

        (products.find((prod) => prod.id === id)) ? (res.json(product)) : (res.send(`El producto con el id: ${id} no existe`))

    } catch (error) {
        res.sendStatus(500)
    }
})


router.post("/products", (req, res) => {
    try {
      const { title, price, thumbnail } = req.body;
      let id;
    
      (products.length === 0) ? (id = 1) : (id = products[products.length - 1].id + 1);
    
      products.push({ id, title, price, thumbnail });
    
      res.json({ id, title, price, thumbnail });
  
    } catch (error) {
        res.sendStatus(500)
    }
  
});

router.put("/products/:id", (req, res) => {
    try {
      const id = Number(req.params.id);
      const { title, price, thumbnail } = req.body;
    
      products.map((prod) => {
        if (prod.id === id) {
          (prod.title = title),
            (prod.price = price),
            (prod.thumbnail = thumbnail);
        }
      });
  
      (products.find((prod) => prod.id === id)) ? (res.json(products)) : (res.send(`El producto con el id: ${id} no existe`))
  
    } catch (error) {
        res.sendStatus(500)
    }
});

router.delete("/products/:id", (req, res) => {
    try {
      const id = Number(req.params.id);
      const productDelete = products.find((prod) => prod.id === id)
      products = products.filter((prod) => prod.id !== id);
  
      (productDelete) ? (res.json(productDelete)) : (res.send(`El producto con el id: ${id} no existe`))
  
    } catch (error) {
        res.sendStatus(500)
    }
});



module.exports = router