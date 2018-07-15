//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('ToDos').find({
  //   _id:new ObjectID('5b4b1fecf5f1930b981b3b65')
  // }).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch data ', err);
  // });

  // db.collection('ToDos').find().count().then((count) => {
  //   console.log(`ToDos count:${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch data ', err);
  // });


  db.collection('Users').find({name:'Lucian'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    if (err) {
      console.log('Unable to fetch data', err);
    }
  });

  //db.close();
} );
