const {MongoClient, ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connct to MongoDB server');
    }

    console.log('Connected to DB');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Hell No to alcohol'}).then((res) => {
    //     console.log(res);
   
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((res) => {
    //     console.log(res);

//for Users collection

    // db.collection('Users').deleteMany({location: 'Ghy'});

    db.collection('Users').findOneAndDelete({_id: new ObjectId("5bd58f0ab6f594ada6418370")}).then((res) => {
        console.log(res);    

 });
    //client.close();
});
