const mongoose = require('mongoose')

//create database at mlab.com and create user for database
//Connect to database
//mangoose.connect('mongodb://<dbuser>:<dbpassword>@ds251217.mlab.com:51217/databasename');                 //add database user username, password,databasename
mongoose.connect('mongodb://<ajay>:<ajaypp123>@ds251217.mlab.com:51217/learn_mangodb');

// Create a schema - like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
})

const Todo = mongoose.model('Todo', todoSchema) // Models are capitalised

module.exports = Todo
