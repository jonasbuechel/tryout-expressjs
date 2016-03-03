/*jslint node: true, debug: true*/

'use strict';


/* -------------------------------------------------------------------------------------------------------------
/ HOW TO RUN THIS SERVER:
/ Console Tab 1: node-inspector                 npm node-inspector needed (let's debug node app at runtime)
/ Console Tab 2: nodemon --debug src/app.js     npm nodemon needed (node-wrapper for auto-refreshing)
---------------------------------------------------------------------------------------------------------------- */

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

//ROUTE BLOG-POST WITH PARAM
app.get('/blog/post/:id', function(req, res){
    debugger;
    res.send(blogPosts); 
});

app.listen(serverPort, function(){
    console.log('Ther frontend express server startet at localhost:'+serverPort);
});