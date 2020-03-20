var fs = require("fs");
var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    console.log("Request received");
    var page = fs.readFileSync('three.html');
    var params = url.parse(request.url).search;

    if (params != null) {
      var item = params.split('&');
      var count = item.length;
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
