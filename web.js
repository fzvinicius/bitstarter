var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());


var data = new Buffer(128);
data = fs.readFileSync('index.html');
index = data.toString();

app.get('/', function(request, response) {
    response.send(index);
});

/*app.get('/', function(request, response) {
    response.send('Hello World2!');
});*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
