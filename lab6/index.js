const express = require("express");

const app = express();

app.get("/api",(req,res)=>{
  res.send({method: "GET"});
});

app.listen(8888,()=>{
  console.log("server is listening");
})
