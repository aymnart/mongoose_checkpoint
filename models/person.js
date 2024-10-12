const mongoose = require('mongoose');
const personSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        age: Number,
        favoriteFoods:[String],
        joined:{type:Date, unique:true, default:Date.now}
    }
);

const person = mongoose.model('person',personSchema);
modules.export = person;

