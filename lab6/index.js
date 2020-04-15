const express = require("express");

const app = express();

app.use("/",require("./router"));

app.listen(8888,()=>{
  console.log("server is listening");
})
