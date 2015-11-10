/*
	Pirate Translation API: The Client Side
*/

// _____________________________________________________________________________
// Set up API requests

var pirateEndPoint = "/piratespeak";

var pirateParameters = {
	text: "hey there buddy"
};

// _____________________________________________________________________________
// Get elements from the DOM

var form = document.getElementById("translate-form");
var input = form.elements["english-text"];
var output = document.getElementById("pirate-text");

// _____________________________________________________________________________
// Set up the events so that the APIs are called when a query is submitted 
// with the form

function callPirate(event) {
	event.preventDefault();
	var pirateInput = input.value;
	// Call the API
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

