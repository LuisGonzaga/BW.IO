var http = require("http");
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 2222;

app.use(myParser.urlencoded({extended : true}));

var server = http.createServer(handleRequest);
server.listen(port, function(){
    //validate that it is running on the server
    console.log("Server listening on: http://localhost:%s", port);
});

function handleRequest(request){
    // log to file
}