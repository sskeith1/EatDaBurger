//DEPENDENCIES
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


// ==============================================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// require(".")


app.listen(PORT, function() {
	console.log("Listening via PORT: " + PORT);
});