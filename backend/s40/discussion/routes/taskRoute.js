// Contains all the endpoints of our application
// We separate the routes such that "index.js" only contains information on the server.
// We need to use express' Router() function to achieve this
const express = require("express");

// Creates a Router instance that functions as a middleware and routing system
const router = express.Router();

// Controllers
// The "taskController" allows us to use the functions defined in the "taskController.js" file.
const taskController = require("../controllers/taskController");

// [SECTION] Routes
// The routes are responsible for defining the URIs that our client accesses and the corresponsing controller functions that will be used when a route is accessed.

// Route to get all the task
// This route expects to receive a GET request at the URI "/tasks"
router.get("/", ( req, res) => {

	// Invokes the "getAllTasks" function from the "taskController.js" and sends the result back to the client/Postman.
	taskController.getAllTasks().then(resultFromController => res.send(resultFromContoller));

});



// Route to create a new task
router.post("/",( req, res)=>{

		taskController.createTask(req.body).then(resultFromController=>res.send(resultFromController));
})


// Route to delete a task
// URL parameter value are accessed via the request object's "params" property
// In thi case "id" is the name of the parameter
// http://localhost:4000/tasks/1234
// 1234 will be stored in he req.params.id

router.delete("/:id",( req, res)=>{
	taskController.deleteTask(req.params.id).then(resultFromController=>res.send(resultFromController));
});


// Route to update a task

router.put("/:id",(req,res)=>{
	taskController.updateTask(req.params.id, req.body).then(resultFromController=>res.send(resultFromController));
});




// Use "module.exports" to export the router object to use in the "index.js" file.
module.exports = router;