const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kittyDB');


const Cat = mongoose.model('Cat',{ 
     name: String ,
     color: String,
     age: Number,
     sleeping: Boolean ,
     salary: { type: Number, default: 0} 
});


const kitty = new Cat({ 
    name: 'Tom' ,
    color: 'Gray' ,
    age : 127 ,
    sleeping: false
});


module.exports = Cat 

