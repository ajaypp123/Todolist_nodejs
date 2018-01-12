const express = require('express')
const toDoController = require('./controllers/toDoController')

const app = express()

const port = 3000

// set up template engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('./public'))

// fire controllers
toDoController(app)

// listen to port
app.listen(port)
console.log(`Server now listening on port ${port}`);
