const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b4caadecaa329b809453b5b';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo)=> {
//   console.log('Todo', todo);
// });

//
// Todo.findById(id).then((todo)=> {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   console.log(e);
// });


var id = '5b4c7a8f3aadb3c603e4017e';
//
// User.find({
//   _id: id
// }).then((user) => {
//   console.log('User:', user);
// });

User.findById(id).then((user) => {
  if (!user) {
  return console.log('User not found');
  }
  console.log('User by id ',user);
}).catch((e) => {
  console.log(e);
});
