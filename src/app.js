/*jslint node: true*/

'use strict';

var express     = require('express');
var blogPosts   = require('./mockdata/posts.json');
var serverPort  = 3000; 

var app = express();

//ROUTE HOME "/"
app.get('/', function(req, res){
    res.send("<h1>HOME</h1><p>This is my home"); 
});

//ROUTE BLOG "/blog"
app.get('/blog', function(req, res){
    res.send(blogPosts); 
});

app.listen(serverPort, function(){
    console.log('Ther frontend express server startet at localhost:'+serverPort);
});