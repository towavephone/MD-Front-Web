var express = require('express');
var app = express();

app.use('/css',express.static('css'));
app.use('/fonts',express.static('fonts'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/about.html', function (req, res) {
    res.sendFile(__dirname + '/about.html');
});
app.get('/product.html', function (req, res) {
    res.sendFile(__dirname + '/product.html');
});
app.get('/contact.html', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});
app.get('/services.html', function (req, res) {
    res.sendFile(__dirname + '/services.html');
});
app.get('', function (req, res) {
    res.redirect('./index.html');
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
