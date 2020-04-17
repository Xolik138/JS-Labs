const express = require("express");
var fs = require("fs");
const router = express.Router();



router.get("/", (req, res) => {
  console.log("GET /");
  var body = fs.readFileSync('six.html');
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write(body);
  res.end();
});

router.post("/gazel", (req, res) => {
  console.log(req.body);
  console.log("POST /gazel")
})
router.get("/gazel", (req, res) => {
  console.log(req.body);
  console.log("GET /gazel")
})
router.post("/gekkon", (req, res) => {
  console.log(req.body);
  console.log("POST /gekkon")
})
router.get("/gekkon", (req, res) => {
  console.log(req.body);
  console.log("GET /gekkon")
})
router.post("/giena", (req, res) => {
  console.log(req.body);
  console.log("POST /giena")
})
router.get("/giena", (req, res) => {
  console.log(req.body);
  console.log("GET /giena")
})


module.exports = router;
