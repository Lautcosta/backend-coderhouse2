/* const { stringify } = require('querystring');
const Container = require('./index');
const productos = require('./productos');

const nuevoContenedor = new Container('./productos.txt');
nuevoContenedor.save(JSON.stringify(productos)); */


function callback () {
    console.log('hola soy un callback')
}

function holis (fn) {
    fn();
}

holis(callback);