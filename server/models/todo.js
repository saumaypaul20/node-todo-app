var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        trim: true,
        required: true,
        minlength: 4

    },
    completed: {
        type: Boolean,
        default: false

    },
    completedAt: {
        type: Number,
        default: null
    }

});

module.exports ={Todo};
