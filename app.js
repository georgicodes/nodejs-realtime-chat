var express = require("express");
var exphbs  = require('express3-handlebars');
var app = express();
var port = 3700;
 
 // setup handlebars as template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(port);
console.log("Listening on port " + port);