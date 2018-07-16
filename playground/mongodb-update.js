//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB Server');

// db.collection('ToDos').findOneAndUpdate({
//   _id: new ObjectID('5b4b321c589253801f006966')
// }, {
//   $set:{
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b4b34b59894780c12934acf')
}, {
  $set: {
    name: 'Lucian'
  },
  $inc: {
    age: 1
  },

}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


  //db.close();
} );
