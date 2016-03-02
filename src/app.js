/*jslint node: true*/

'use strict';

var express     = require('express');
var serverPort  = 3000; 

var app = express();

app.get('/test', function(request, response){
    response.send('This is my first response!'); 
});

app.listen(serverPort, function(){
    console.log('express server startet at localhost:'+serverPort);
});