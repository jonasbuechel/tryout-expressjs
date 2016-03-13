/*jslint node: true, debug: true*/

'use strict';


/* -------------------------------------------------------------------------------------------------------------
/ HOW TO RUN THIS SERVER:
/ Console Tab 1: node-inspector                 npm node-inspector needed (let's debug node app at runtime)
/ Console Tab 2: nodemon --debug src/app.js     npm nodemon needed (node-wrapper for auto-refreshing)
---------------------------------------------------------------------------------------------------------------- */

var express     = require('express');
var routes      = require('./env/routes.json');
var blogPosts   = require('./mockdata/posts.json');
var serverPort  = 3000; 

var app = express();

app.use('/static', express.static(__dirname + '/public'));


app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

//404 PAGE
var render404page = function(res){
    res.status(404);
    res.render('404-not-found');  
};

//GENERATE ROUTES FROM JSON
var createRoute = function(objRoute){
    
    //ADD DATA TO ROUTE
    var templateData = {};
        templateData.navigation = routes.arrRoutes;
    
    if(objRoute.id === 'blog'){
        templateData.posts = blogPosts;
    }
    console.log(templateData);
    //CREATE ROUTE
    app.get(objRoute.url, function(req, res){
        //ADD URL TO TEMPLATE DATA
        templateData.currentUrl = req.url;
        res.render(objRoute.template, templateData); 
    });
    
};

//CALL createRoute FOR EACH ROUTE IN routes.json
routes.arrRoutes.forEach(createRoute);


//SPECIAL ROUTE BLOG-POST WITH OPTIONAL PARAM
app.get('/blog/post/:id?', function(req, res){
    
    var postId      = req.params.id;
    var actualPost  = blogPosts[postId];
    //debugger;
        
    if(!!postId && !!actualPost){
        
        //res.send('<h1>' + actualPost.title + '</h1>' + '<p>' + actualPost.description + '</p>'); 
        res.render('blog-post', {navigation: routes.arrRoutes, postId: postId, post: actualPost});
    }else{
        render404page(res);
    }
   
});

//START SERVER
app.listen(serverPort, function(){
    console.log('Ther frontend express server startet at localhost:'+serverPort);
});