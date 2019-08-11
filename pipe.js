var fs = require('fs');
var http = require('http');



var server  = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var read = fs.createReadStream(__dirname + '/read.txt','utf8');
    // var write = fs.createWriteStream(__dirname + '/write.txt');
    read.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Bahut hard!!');