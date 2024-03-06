// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");

// Routes
const taskRoute = require("./discussion/routes/taskRoute");

// Server Setup
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Database Connection
// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://reinardbornillo15:reinard1231@reinard.akjsmz3.mongodb.net/b385-to-do?retryWrites=true&w=majority&appName=reinard");

// Check if there are errors connecting to database
mongoose.connection.on("error", console.error.bind(console, "connection error"));
// Check if the connection is successful
mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas."));



// Add the tasks route
// Allow all the task routes created in the "taskRoute.js" file to use "/tasks" route
app.use("/tasks", taskRoute);


// Server listening
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = { app, mongoose };