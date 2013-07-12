var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var content = fs.readFileSync('index.html');

app.get('/', function(request, response) {
    //var fs = require('fs');
    //var buf = new Buffer(256);
    //response.send(buf.toSring('utf-8',fs.readFileSync('index.html')));
    response.send(content.toString("utf-8"));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
