const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bd6ffcaa3715d4298f5595b";
var id_user = '5bd5b282f901ae32bc2f1da1';

if(!ObjectID.isValid(id) || !ObjectID.isValid(id_user)){
    console.log('Not a Valid Id.')
}

Todo.find({_id: id}).then( (todos) => console.log('Todo', todos));

Todo.findOne({_id: id}).then( (todo) => console.log('Todo', todo));

Todo.findById(id).then( (todo) =>
    { 
        if(!todo){
            return console.log('Id not found');
        }
        console.log('Todo findById', todo)
    }).catch((e)=> console.log(e));



User.findById(id_user).then( (user) => {
    if(!user){
        return console.log('User Not Found');
    }

    console.log('Found \n',user);
});
