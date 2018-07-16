//extern lib
const express = require('express');
const bodyParser = require('body-parser');

//local lib
var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  var todo = new ToDo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


//Get Methode

app.listen(3000, () => {
  console.log('Started on port 3000');
});
