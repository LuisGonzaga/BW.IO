var http = require("http");
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 2222;
const answer = {imageUrl: "https://via.placeholder.com/350x150",
                action: "https://bannerwise.io/",
                buttonText: "Click Me"
}


app.use(myParser.urlencoded({extended : true}));
app.get("/yourpath", function(request, response) {
       console.log(JSON.stringify(answer)); //This prints the JSON document received
                                    // (if it is a JSON document)
});

