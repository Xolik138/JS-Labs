const express = require("express");
var fs = require("fs");
const router = express.Router();

router.get("/",(req,res)=>{
  console.log("GET /");
  var body = fs.readFileSync('six.html');
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write(body);
  res.end();
});

router.post("/",(req,res)=>{
  res.send({method:"POST"});
  console.log("POST /")
})
module.exports = router;
