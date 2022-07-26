var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
  },
  address: {
    pincode: {
      type: Number,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
  },
  dateOfBirth :{
    type:Date,
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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

 module.exports = mongoose.model('User', UserSchema )