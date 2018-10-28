const {MongoClient, ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connct to MongoDB server');
    }

    console.log('Connected to DB');

    const db = client.db('TodoApp');

    //db.collection('Users').find().toArray().then((docs) =>{
    db.collection('Users').find().count().then((count) =>{
        //console.log('Users');
        //console.log(JSON.stringify(docs, undefined, 2));
        console.log(`Count is ${count}`);
        
    }, (err) => {
         console.log('Unable to insert todo', err);
    });


    client.close();
});
