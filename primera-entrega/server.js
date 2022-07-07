const express = require('express')
const routes = require('routes')
const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')))

app.use( '/api', routers )


app.listen(PORT, error =>  {
    try {
        console.log(`Listening at http://localhost:${PORT}`)
    } catch {
        console.log(`Error: ${error}`);
    }
})