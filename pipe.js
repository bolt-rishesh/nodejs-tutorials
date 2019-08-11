var fs = require('fs');
var http = require('http');

var server  = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url == '/api/bolt'){
        var names = [{names : 'bolt', age : 20},{name : 'zerif',age : 21}];
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.end(JSON.stringify(names));
    }
    else{
        res.writeHead(404,{'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/error.html').pipe(res);
    }
});

server.listen(3002,'127.0.0.1');
console.log('Bahut hard!!');