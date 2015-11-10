/*
	Node Server

	This server sends static files at localhost:8080/ and acts as an API
	at localhost:8080/piratespeak
*/

var express = require("express");
var app = express();

var path = require("path");
var publicPath = path.join(__dirname, "public");

var dictionary = require("./pirate-dictionary.js");

app.get("/piratespeak", function(req, res) {
	var query = req.query;

	var results = {
		"status": {
			"version": 1,
			"message": "Success"
		},
		"translation": "ahoy there mate"
	}

	if (query.text === undefined) {
		results.status.message = "Bad request";
		results.translation = "";
		res.status(400).send(results);
		return;
	}

	var text = req.query.text;
	res.set("content-type", "text/plain; charset=utf-8");
	var pirate = dictionary.translate(text);
	results.translation = pirate;
	res.send(results);
	}); 

console.log(dictionary.translate(" work yeah with wine woman,"));

var staticHandler = express.static(publicPath);
app.use(staticHandler);

var envPort = process.env.PORT;
if (envPort !== undefined) app.listen(envPort);
	else app.listen(8080);
