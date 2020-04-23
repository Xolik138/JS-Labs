const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const app = express();

mongoose.connect("mongodb://localhost/animaldb")
app.use('/public',express.static('public'));
app.use(bodyParser.text());
app.use("/",require("./router"));

app.listen(8888,()=>{
  console.log("server is listening");
})
