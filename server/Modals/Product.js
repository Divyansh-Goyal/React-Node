var mongoose = require("mongoose");
var User = require('../Modals/User')
var ProductSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  name: {
    trim: true,
    type: String,
    required: true,
  },
  img: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 10,
  },
  bill :{
    type:URL,
    required:false
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated:{
    type: Date,
    default: Date.now(),
  },
});

 module.exports = mongoose.model('Product', ProductSchema )