const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{type:String,required:true},
    contact:{type:String,required:true},
    email:{type:String,required:true},
    fullAddress:{type:String,required:true},
    message:{type:String,required:true}
});


const userModel = mongoose.model('users',userSchema);

module.exports = userModel;