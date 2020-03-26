var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/download"] = requestHandlers.download;
handle["/giena"] = requestHandlers.giena;
handle["/gazel"] = requestHandlers.gazel;
handle["/gekkon"] = requestHandlers.gekkon;
server.start(router.route, handle);
