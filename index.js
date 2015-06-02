var http = require('http');

var server = http.createServer(function(req, res) {
	res.write('Hello, world!');
});

server.listen(8080);

console.log('Server started on port 8080');