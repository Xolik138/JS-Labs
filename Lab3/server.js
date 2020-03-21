var fs = require("fs");
var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start() {
  function onRequest(request, response) {
    console.log("Request received");
    var page = fs.readFileSync('three.html');
    var params = url.parse(request.url).search;
    var qstring = querystring.parse(params);
    if (params != null) {
      var item = params.split('&');
      var count = item.length;
      console.log(qstring);
      response.write('Number of parameters:');
      response.write(count.toString());
      response.end();
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(page);
      response.end();
    }
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}
exports.start = start;
