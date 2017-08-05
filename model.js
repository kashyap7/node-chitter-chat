"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema

//User Schema

const userSchema = new Schema({
  id    : {type: String, required: true, unique: true},
  name  : {type: String, required: true, unique: false},
  phone : {type: String, required: true, unique: true},
  email : {type: String, required: false, unique: true}
}, {
  collection: "User",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

//Message Schema

const messageSchema = new Schema({
  id      : {type: String, required: true, unique: true},
  message : {type: String, required: true, unique: false},
  userObj : {type: String}
}, {
  collection: "Message",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Message = mongoose.model("Message", messageSchema);

var modelsObject = {
  User : User,
  Message: Message
};
module.exports = modelsObject;
	
