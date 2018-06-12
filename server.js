const express = require('express')
const app = express()

// Settings
app.set('view engine', 'hbs') // Express HBS engine

// Middlewares
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'Irving Didier',
        anio: new Date().getFullYear()
    })
})

// starting the server
app.listen(4000, () => {
    console.log('Escuchando peticiones en el puerto 4000')
})