var http = require("http");
var express        = require('express');
var app            = express();
var winston = require('winston');
var port = 2222;
var  bodyParser = require('body-parser')

var server = http.createServer(handleRequest);
server.listen(port, function(){
    app.post('/logPost', bodyParser, function (req, res) {
        response = $.getJSON("clicksMouse.log", function(json) {
           console.log(json); 
           res.end(JSON.stringify(response));
       });

    console.log("Server listening on: http://localhost:%s", port);
});

methods.logLines = function(receivedInput) {
	winston.add(receivedInput);
};

winston.add(
    winston.transports.File, {
      filename: 'clicksMouse.log',
      level: 'info',
      json: true,
      eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
      timestamp: false
    }
  )
})

exports.data = methods;