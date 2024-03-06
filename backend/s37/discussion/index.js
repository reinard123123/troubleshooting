/*
	- Use the "require" directive to load Node.js modules
	- a "module" is a software component or part of a program that contains one or more routines
	- the "http" module lets Node.js transfer data using the Hyper Text Tranfer Protocol (HTTP)
*/
let http = require("http");

// Using this module's createServer() method, we can create an HTTP server that listens to request on a specified port and gives responses back to the client
// A port is a virtual point where network connection start and end.
const port = 4000;

// Add an array of items to return to the client
let items = ["Laptop", "Desktop", "Tablet"];

const app = http.createServer(function(request, response) {

	// console.log("request url: ", request.url);

	// IN the full address: http://localhost:4000/greeting
	if(request.url == '/greeting' && request.method == 'GET') {
		// Use the writeHead() method to:
		// Set a status code for the response - a 200 means OK
		// Set the content-type of the response as a plain text message
		response.writeHead(200, {'Content-Type': 'text/plain'});

		// Send the response with text content 'Hello World!'
		response.end('Hello World! My new app!');

	} else if(request.url == '/homepage' && request.method == 'GET') {

		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end('This is the homepage.');

	
	} else if(request.url == '/items' && request.method == 'GET') {

		response.writeHead(200, {'Content-Type': 'application/json'});

		response.end(JSON.stringify(items));

	} else if(request.url == '/items' && request.method == 'POST') {

		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end("This route will be used to add another item");

	} else {
		// All other routes will return a message of "Page not available".

		// Set a status code for the response - a 404 means Not Found
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end('Page not available.');

	}



});

app.listen(port);


console.log(`Server now accessible at localhost:${port}.`);