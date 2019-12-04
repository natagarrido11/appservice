const express = require('express')
const app = express()
var port = process.env.PORT || 1337;

/* app.get('/', (req, res) => {
    res.send('Hello World')
}) */

app.get('/about', (req, res) => {
    res.send('this is About section')
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log('Hola mama estoy corriendo')
})