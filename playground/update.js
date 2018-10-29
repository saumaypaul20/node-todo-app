const {MongoClient, ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connct to MongoDB server');
    }

    console.log('Connected to DB');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectId("5bd58f02b6f594ada641836e")},
        {
            $set: {
                location: 'Mumbai'
            }
        },
        {
            returnOriginal: false
        }
    ).then((res) => {
        console.log(res);    

 });
    //client.close();
});
