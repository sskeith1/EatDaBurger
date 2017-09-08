//DEPENDENCIES
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


// ==============================================================================
var PORT = process.env.PORT || 3000;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
	console.log("Listening via PORT: " + PORT);
});