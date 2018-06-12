const express = require('express')
const app = express()

// Settings

// Middlewares
app.use(express.static(__dirname + '/public'))

// Routes
// app.get('/', (req, res) => {
//     const salida = {
//         nombre: 'Irving Didier',
//         edad: 29,
//         url: req.url
//     }
//     res.send(salida)
// })

// starting the server
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})