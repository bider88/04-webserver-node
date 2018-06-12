const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const salida = {
        nombre: 'Irving Didier',
        edad: 29,
        url: req.url
    }
    res.send(salida)
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})