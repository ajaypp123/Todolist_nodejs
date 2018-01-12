const bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const Todo = require('../model/toDoModel')

// "database"
// let data = [{item: 'milk'}, {item: 'walk dog'}, {item: 'learn 7 code'}]

module.exports = app => {

// sends us to '/todo' from '/'
  app.get('/', (req, res) => {
    res.redirect('/todo')
  })

  app.get('/todo', (req, res) => {
    // get data from mongodb and pass it to the view
    Todo.find({}, (err, data) => { // SELECT * FROM Todo (with empty object)
      if (err) throw err
      res.render('todo', {todos: data})
    })
  })

  app.post('/todo', urlencodedParser, (req, res) => {
    let newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err
      res.json(data)
    })
  })

  app.delete('/todo/:item', (req, res) => {
    // delete thre requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
      if (err) throw err
      res.json(data)
    })
  })

}
