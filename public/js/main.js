/*
	Pirate Translation API: The Client

	Client-Side Cheatsheet
	======================
	document.getElementById("id")
	form.elements["name"]
	form.onsumbit = ...
	event.preventDefault()
	inputElement.value
*/


// _____________________________________________________________________________
// Setting up API requests

var pirateEndPoint = "/piratespeak";

var pirateParameters = {
	text: "hey there buddy"
};

// _____________________________________________________________________________
// Getting elements from the DOM

var form = document.getElementById("translate-form");
var input = form.elements["english-text"];
var output = document.getElementById("pirate-text");

// _____________________________________________________________________________
// Setting up the events so that the APIs are called when a query is submitted 
// with the form

function callPirate(event) {
	event.preventDefault();
	var pirateInput = input.value;
	pirateParameters.text = pirateInput;
	var pirateApiCaller = new ApiCaller(pirateEndPoint, pirateParameters);
	pirateApiCaller.getJson(printPirateSpeak);
	console.log(pirateApiCaller.requestUrl);
}

form.onsubmit = callPirate

function printPirateSpeak (response) {
	console.log(response.translation);
	output.textContent = response.translation;
}

