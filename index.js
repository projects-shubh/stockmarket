var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var path = require('path');

var PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set Handlebar Routes
app.get('/', function (req, res) {
    res.render('home');
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function() { console.log("Server listening on port " + PORT)})
