var fs = require('fs');

// var read = fs.readFileSync('read.txt','utf8');
// fs.writeFileSync('write.txt',read);
fs.readFile('read.txt','utf8',function(err,data){
    fs.writeFileSync('write.txt',data);
    console.log(data);
});