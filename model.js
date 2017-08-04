"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema

//User Schema

const userSchema = new Schema({
  id    : {type: String, required: true, unique: true},
  name  : {type: String, required: true},
  phone : {type: String, required: true, unique: true},
  email : {type: String, required: false, unique: true}
}, {
  collection: "User",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users 
	
