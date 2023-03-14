const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = new Schema({
  name:String,  
  email: String,
  password: String,
  isactive:Boolean,  
});

module.exports = mongoose.model('Users', Users)
