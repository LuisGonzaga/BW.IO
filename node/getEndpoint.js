var http = require("http");
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 2222;

app.listen(port, () => {
  console.log('We are live on ' + port);
});

// {
//     "imageUrl": "https://via.placeholder.com/350x150",
//     "action": "https://bannerwise.io/",
//     "buttonText": "Click Me"
// }