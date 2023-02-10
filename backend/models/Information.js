const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const UserSchema = new Schema({
    name :  {type:String,required:true},
    email:  {type:String,required:true},
    subject: { type: String},
    appoinmentdate: { type: Date, default: Date.now }
  });

  module.exports=mongoose.model('information',UserSchema);