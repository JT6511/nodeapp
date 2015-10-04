var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// Configure our HTTP server to respond with Hello World to all requests.
app.get('/hello', function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World - JT customied this line!\n");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


