//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB Server');

  // //deleteMany
  //
  // db.collection('ToDos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // //deleteOne
  // db.collection('ToDos').deleteOne({text: 'dunee'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

//deleteMany

db.collection('Users').deleteMany({name: 'Lucian'}).then((results) => {
  console.log(results);
});

//findAndDeleteOne
db.collection('Users').findOneAndDelete({name:'Tine'}).then((results) => {
  console.log(results);
});


  //db.close();
} );
