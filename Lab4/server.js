var fs = require("fs");
var http = require("http");
var url = require("url");

function start(route,handle) {
  function onRequest(request, response) {
    console.log("Request received");
    var page = fs.readFileSync('four.html');
    var params = url.parse(request.url).search;
    var pathname = url.parse(request.url).pathname;

    route(handle,pathname);

    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write(page);
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}
exports.start = start;
