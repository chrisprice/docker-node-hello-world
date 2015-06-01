var http = require('http');

var server = http.createServer(function(req, res) {
	res.write('Hello, world!');
});

server.listen(8080);
