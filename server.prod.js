var express = require('express');
var app = express();

app.use('/build', express.static('build'));
app.use('/dist', express.static('dist'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('', function (req, res) {
    res.redirect('./index.html#app/index');
});

var server = app.listen(81, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
