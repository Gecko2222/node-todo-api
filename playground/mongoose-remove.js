const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => console.log(result));

//Removed is displayed
// Todo.findOneAndRemove({});
//
// Todo.findByIdAndRemove({});

// Todo.findByIdAndRemove('5b4db5bbbad5b6e6e1b5077e').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '5b4db5bbbad5b6e6e1b5077e'}).then((todo) => {
  console.log(todo);
});
