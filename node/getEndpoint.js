var http = require("http");
var express        = require('express');
var app            = express();
var port = 1111;
var answer = {imageUrl: "https://via.placeholder.com/350x150",
                action: "https://bannerwise.io/",
                buttonText: "Click Me"};
var logging = require("./logMetrics.js");


var server = http.createServer(handleRequest);
server.listen(port, function(){
    //validate that it is running on the server
    console.log("Server listening on: http://localhost:%s", port);
});

function handleRequest(request, response){
    function Logging(request){
        $.ajax({
                url: '/Node/logMetrics.js',
                method: 'GET',
                contentType: 'text/html; charset=UTF-8',
                success: function (request, status){  
                    response.setHeader('Access-Control-Allow-Origin', '*');
                    response.setHeader('Access-Control-Allow-Headers',  'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
                    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
                    response.end(JSON.stringify(answer));
                    logging.methods.logLines(request);
                    console.log(request); 
                }
                ,
                error: function (status){
                    console.log(status);
                    alert("failed connection, please try again later")
                }
            });
        }
    
}



