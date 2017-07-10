// Dependencies
var express = require('express');

var app = express();
var PORT = process.env.PORT || 5000;

// serve static files from public directory
app.use(express.static('./public'));

// GET: main route, redirects to rendered react application
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function() {
  console.log('App listening');
});