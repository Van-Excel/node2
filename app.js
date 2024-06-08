var express = require('node:express');
var http = require("node:http");


var app = express()

// configuring express to serve static files
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// using middleware logger -> handler that writes response
app.use(function(req, res, next){
    console.log(`Incoming request to ${req.url}`);
    next();

});

app.use(function(req, res){
    res.writeHead(200, "Ok", {"Content-Type": "text/plain"});
    res.end("Hello world, learning to model HTTP");
});


// creating http server and indicating port to listen to requests.
http.createServer(app).listen(3000);