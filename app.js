var express = require("express");
var exphbs  = require('express3-handlebars');
var socket = require('socket.io')
var app = express();
var port = 3700;
 
 // setup handlebars as template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.use(express.static(__dirname + '/public'));

var io = socket.listen(app.listen(port)); // passed ExpressJS server to SocketIO
console.log("Listening on port " + port);

io.sockets.on('connection', function (socket) {
    socket.emit('message', {message: 'welcome to the chat'});
    socket.on('send', function(data) {
        io.sockets.emit('message', data);
    });
});