"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const port = 3000;

// db options
let options = { 
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
  };

//db connection
mongoose.connect(config.DBHost, options)
  .then(function(){
    console.log("Mongo connection successful");
  }).catch(function(error){
    console.log(error.message)
  });

app.get("/", (req, res) => {
  res.json("Welcome to Chitter messaging app");
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
