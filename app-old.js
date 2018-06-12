const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type' : 'application/json'})

    const salida = {
        nombre: 'Irving Didier',
        edad: 29,
        url: req.url
    }

    res.write( JSON.stringify(salida) )
    // res.write('Hola mundo')
    res.end()
})
.listen(8080)

console.log('Escuchando en el puerto 8080')