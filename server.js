var http = require('http');
var priceOps = require('./priceOperation')


var toExecute = function(req, res) {
    res.writeHead(200);
    res.end("The price is :"+ priceOps.taxCalcul(10));
}

var server = http.createServer(toExecute);

server.listen(8080);
