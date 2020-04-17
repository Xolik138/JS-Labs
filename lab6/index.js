const express = require("express");
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.text());
app.use("/",require("./router"));

app.listen(8888,()=>{
  console.log("server is listening");
})
