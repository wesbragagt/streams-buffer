var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received', chunk.length)
})

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    res.write('<h1>Hello Server</h1>');
});

server.listen(3000, '127.0.0.1');
console.log('now listening on port 3000');
