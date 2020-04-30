const express = require("express");
var fs = require("fs");
const Gazel = require("./gazel");
const Gekkon = require("./gekkon");
const Giena = require("./giena");
const router = express.Router();
let jsonbody = null;
let imgerror = null;

router.get("/animals", (req, res)=>{
  console.log(jsonbody);
  res.send(jsonbody);
});

router.post("/findanimal", (req, res)=>{
  var result = JSON.parse(req.body);

  var name = result.name;

  if (result.value == '')
  {
      value = Math.floor(Math.random() * 9 + 1);
  }
  else{
    var value = result.value;
  }

  var modelan = null;

  if (name == "gekko"){
    var modelan = Gekkon;
  }
  else if (name == "gazel"){
    var modelan = Gazel;
  }
  else if (name == "giena"){
    var modelan = Giena;
  }

  modelan.findOne({value: value})
      .then(animal => {  
          { 
              res.send({name, value: animal.value, width: animal.width, height: animal.height, color: animal.color});
          }
      })
});

router.post("/animal", (req, res)=>{
  var result = JSON.parse(req.body);

  var name = result.name;
  var value = result.value;
  var height = result.height;
  var width = result.width;
  var color = result.color;
  console.log(height);
  console.log(width);
  console.log(color);
  var modelan = null;

  if (name == "gekko"){
    var modelan = Gekkon;
  }
  else if (name == "gazel"){
    var modelan = Gazel;
  }
  else if (name == "giena"){
    var modelan = Giena;
  }

  if (width == "")
  {
      width = Math.floor(Math.random() * 3000);
  }
  if (height == "")
  {
      height = Math.floor(Math.random() * 3000);
  }
  if (color == "")
  {
      var coloring = "abcdefghijklmnopqrstuvwxyz0123456789";
      var color = "";
      for (var i = 0; i < 6; i++)
          color += coloring.charAt(Math.floor(Math.random() * coloring.length));
  }
  console.log(height);
  console.log(width);
  console.log(color);
  modelan.findOne({value: value})
  .then(animal => {
      modelan.findOne({width: width, height: height})
          .then(animal => {      
              if (animal != null)
              {
                modelan.findOne({color: color})
                  .then(animal => {      
                      if (animal != null)
                      {
                          jsonbody = animal;
                          res.redirect("./animals");
                      }
                      else
                      {
                          imgerror = {error: "Color error", name: name, value: value, width: width, height: height, color: color};
                          res.send(imgerror);
                      }
                  });
              }
              else 
              {
                  imgerror = {error: "Size error", name: name, value: value, width: width, height: height,color: color};
                  res.send(imgerror);
              }
          });
      }
    );
 });

module.exports = router;
