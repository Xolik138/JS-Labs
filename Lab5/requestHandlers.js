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

function upload(response, postData) {
  console.log("Был вызван обработчик запроса UPLOAD");
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("You've sent: " + querystring.parse(postData).text);
  response.end();
}

function download() {
  console.log("Был вызван обработчик запроса DOWNLOAD");
}
exports.start = start;
exports.upload = upload;
exports.download = download;
