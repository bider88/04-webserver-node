const express = require('express')
const app = express()
const hbs = require('hbs')
require('./helpers')

const port = process.env.PORT || 4000; 

// Settings
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs') // Express HBS engine

// Middlewares
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', (req, res) => {
    
    res.render('home', {
        name: 'irving didier'
    })
})

app.get('/about', (req, res) => {
    
    res.render('about')
})

// starting the server
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})