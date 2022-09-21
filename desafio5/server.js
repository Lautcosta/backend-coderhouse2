const express = require('express')
const app = express()
const port = 8080;
const router = require('./routes/index')
const path = require('path');
const fs = require('fs');

app.use(express.static('public'))

app.use('/', router)


app.engine('cte', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
      if (err) {
        return callback(new Error(err));
      }
      const rendered = content.toString()
        .replace('$$titulo$$', ''+ options.titulo +'')
        .replace('$$mensaje$$', ''+ options.mensaje +'')
        .replace('$$autor$$', ''+ options.autor +'')
        .replace('$$version$$', ''+ options.version +'')

      return callback(null, rendered);
    });
});
  

app.set('views engine' , 'cte')
app.set('views', path.join(__dirname, './views'))

app.listen(port, (error) => {
    try {
        console.log(`Listening attt http://localhost:${port}`);
    } catch {
        console.log(`Error s ${error}`)
    }
})