var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

buff = new Buffer(256);

len = buf.write(fs.readFileSync('index.html'),0);

app.get('/', function(request, response) {
  response.send(buf.toSring('utf8',0,len);
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
