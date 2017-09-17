var winston = require('winston');
const port = 2222;

var server = http.createServer(handleRequest);
server.listen(port, function(){
    //validate that it is running on the server
    console.log("Server listening on: http://localhost:%s", port);
});

function handleRequest(request){
    winston.add(request);
    
}

app.post('/logPost', urlencodedParser, function (req, res) {
  
     response = $.getJSON("clicksMouse.log", function(json) {
        console.log(json); 
    });
     res.end(JSON.stringify(response));
  })

winston.add(
    winston.transports.File, {
      filename: 'clicksMouse.log',
      level: 'info',
      json: true,
      eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
      timestamp: false
    }
  )

  winston.error(
    winston.transports.File, {
      filename: 'clicksMouse.log',
      level: 'error',
      json: true,
      eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
      timestamp: true
    }
  )
