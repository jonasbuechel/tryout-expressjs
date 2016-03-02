/*jslint node: true*/

'use strict';

var express     = require('express');
var serverPort  = 3000; 

var app = express();

app.get('/test', function(req, res){
    res.send("<h1>This is my first response!</h1><p>I'ts containing already html :)"); 
});

app.listen(serverPort, function(){
    console.log('Ther frontend express server startet at localhost:'+serverPort);
});