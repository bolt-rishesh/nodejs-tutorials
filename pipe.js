var fs = require('fs');
var http = require('http');

var server  = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    var read = fs.createReadStream(__dirname + '/index.html','utf8');
    // var write = fs.createWriteStream(__dirname + '/write.txt');
    read.pipe(res);
});

server.listen(5000,'127.0.0.1');
console.log('Bahut hard!!');