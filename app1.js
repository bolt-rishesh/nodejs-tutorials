var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('this is a home page');
});

app.get('/contact',function(req,res){
    res.send('this is a contact page');
});


app.get('/profile/:id',function(req,res){
    res.send('you requested to see a profile with the id of ' + req.params.id);
});

app.listen(3003);