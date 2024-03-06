const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;


// Setup Middleware
// Allow app to read json data
app.use(express.json());
// Allows app to read form data
app.use(express.urlencoded({extended: true}));


// [SECTION] MongoDB Connection
// Connect to the database by passing in your connection string.


// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://reinardbornillo15:reinard1231@reinard.akjsmz3.mongodb.net/b385-to-do?retryWrites=true&w=majority&appName=reinard");

let db = mongoose.connection;

// If a connection error occurred, output in the console
db.on("error", console.error.bind(console, "connection error"));

// If the connection is successful, output in the console
db.once("open", () => console.log("We're connected to the cloud database."));


// [SECTION] Mongoose Schemas
// Schemas determn the structure of the documents to be written in the database

// Use the Schema constructor of the mongoose module to create a new Schema
const taskSchema = new mongoose.Schema({
	// Define the fields with the corresponding datatype.
	name: String,
	status: {
		type: String,
		default: "pending"
	}
});


// [SECTION] Models
// Uses schemas and are used to create/instantiate objects that correspond to the schema
// Models use Schemas and they act as the middleman from the server (JS Code) to our database (MongoDB)
// Server > Schema (bluprint) > Database > Collection

const Task = mongoose.model("Task", taskSchema);



// [SECTION] Creating a new task
// Business Logic
/*
1. Add a functionality to check if there are duplicate tasks
	- If the task already exists in the database, we return an error
	- If the task doesn't exist in the database, we add it in the database
2. The task data will be coming from the request's body
3. Create a new Task object with a "name" field/property
4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/

app.post("/tasks", (req, res) => {


	// findOne() returns the first document that matches the search criteria as a single object.
	Task.findOne({ name: req.body.name }).then((result, err) => {

		// If a document was found and the document's name matches the information sent via the client/Postman
		if(result != null && result.name === req.body.name){

			// return a message to the client/Postman
			return res.send("Duplicate task found");

		// If no document was found
		} else {

			// Create a new task and save it to the database
			let newTask = new Task({
				name: req.body.name
			});


			// The save() method will store the information to the database
			newTask.save().then((savedTask, saveErr) => {

				// If there are errors in saving
				if(saveErr){

					return console.error(saveErr);

				// No erro found while creating the document
				} else {

					// Send a message on successful creation
					return res.send("New task created!");

				}

			});
		}

	});


});


// [SECTION] Getting all the tasks


// Business Logic
	/*
	1. Retrieve all the documents
	2. If an error is encountered, print the error
	3. If no errors are found, send a success status back to the client/Postman and return an array of documents

	*/

	app.get("/tasks", (req, res) => {

		// "find" is a Mongoose method that is similar to MongoDB "find", and an empty "{}"

		Task.find({}).then((result, err) => {

			if(err) {

				return console.log(err);

			} else {

				return res.send(result);
		}
	});
	});



// User Schema/Model

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema); // Passing 'User' as the second argument

// Route for creating a user
app.post("/register", (req, res) => {
    console.log(req.body); // Check if data can be received from Postman

    // Check if any required field is missing
    if (!req.body.email || !req.body.password) {
        return res.status(400).send("All fields must be provided");
    }

    // Check for duplicate users
    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (existingUser) {
            return res.status(409).send("Duplicate username found");
        }

        // Create a new user if no duplicate is found
        let newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        // Save the new user to the database
        newUser.save((err) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(201).send("New user registered");
        });
    });
});

// Route for logging in a user
app.post("/login", (req, res) => {
    console.log(req.body);
    // Find the user by email
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (!user) {
            return res.status(404).send("Email does not exist");
        }


        if (user.password === req.body.password) {
            return res.send("Thank you for logging in");
        } else {
            return res.status(401).send("Wrong Password");
        }
    });
});







// For automated grading.
if(require.main === module){
	// Listen to the port, meaning if the port is accessed, we run the server
	app.listen(port, () => console.log(`Server running at port ${port}.`));
}

// Export both app and mongoose only for checking 
module.exports = { app, mongoose };






