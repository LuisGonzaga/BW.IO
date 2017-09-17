var http = require("http");
const express        = require('express');
const app            = express();
const port = 1111;
const answer = {imageUrl: "https://via.placeholder.com/350x150",
                action: "https://bannerwise.io/",
                buttonText: "Click Me"};

app.use(myParser.urlencoded({extended : true}));

var server = http.createServer(handleRequest);
server.listen(port, function(){
    //validate that it is running on the server
    console.log("Server listening on: http://localhost:%s", port);
});

function handleRequest(request, response){
    
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers',  'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.end(JSON.stringify(answer));
}



