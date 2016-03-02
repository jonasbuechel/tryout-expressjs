/*jslint node: true*/

'use strict';

var express     = require('express');
var serverPort  = 3000; 

var app = express();

//ROUTE HOME "/"
app.get('/', function(req, res){
    res.send("<h1>HOME</h1><p>This is my home"); 
});

//ROUTE TEST "/test"
app.get('/test', function(req, res){
    res.send("<h1>This is my testpage!</h1><p>I'ts containing already html :)"); 
});

app.listen(serverPort, function(){
    console.log('Ther frontend express server startet at localhost:'+serverPort);
});