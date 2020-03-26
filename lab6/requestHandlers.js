var exec = require("child_process").exec;
var fs = require("fs");
var querystring = require("querystring");

function start(response, postData) {
  console.log("Был вызван обработчик запроса START");
  var body = fs.readFileSync('five.html');
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write(body);
  response.end();
}

function raspred(response, postData){
  var pdata = querystring.parse(postData).text.split(' ')[0];
  var chdata = querystring.parse(postData).text.split(' ')[1];

  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  if (chdata != null) {
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
  } else {
    response.write("You've sent: " + querystring.parse(postData).text + " " + Math.floor(Math.random() * 10));
    response.end();
  }
}

function upload(response, postData) {
  console.log("Был вызван обработчик запроса UPLOAD");
  raspred(response, postData)
}

function download() {
  console.log("Был вызван обработчик запроса DOWNLOAD");
}

function giena(response, postData) {
  console.log("Был вызван обработчик запроса GIENA");
  raspred(response, postData)
}
function gazel(response, postData) {
  console.log("Был вызван обработчик запроса GAZEL");
  raspred(response, postData)
}
function gekkon(response, postData) {
  console.log("Был вызван обработчик запроса GEKKON");
  raspred(response, postData)
}
exports.start = start;
exports.upload = upload;
exports.download = download;
exports.giena = giena;
exports.gazel = gazel;
exports.gekkon = gekkon;
