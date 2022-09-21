const saludoController = (req,res) => {
    try {
        res.render('main.ejs', {titulo:'<h1>EJS</h1>', prueba:'<h1>Holis</h1>'})
    } catch (error) {
        console.log(`Error : ${error}`)
        res.sendStatus(500)
    }
}

module.exports = {
    saludoController,
}