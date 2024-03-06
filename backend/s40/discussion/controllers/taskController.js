// Controller contain the functions and business logic of our application and create a function for getting all tasks.

const Task = require("../models/task");


// Controller function for getting all the tasks
module.exports.getAllTasks = () => {

	return Task.find({}).then(result => {

		return result;
	})

}


// Controller function for creating a task

module.exports.createTask = (requestBody) =>{

	let newTask = new Task({
		name: requestBody.name
	})

	return newTask.save().then((task,error)=>{

		if(error){
			console.log(error);
			return false;
		} else { 
			return task;
		}
	})
}


// Controller function for deleting a task



module.exports.deleteTask = (taskId)=>{


	return Task.findByIdAndDelete(taskId)
	.then(removedTask => removeTask)
	.catch(err => false);


}



module.exports.updateTask = (taskId, newContent)=>{

	return Task.findById(taskId).then((result => {

		result.name = newContent.name;

		return result.save()
		.then(updatedTask => updatedTask)
		.catch(err => "Updated Failed");

	}) . catch(err => "Find Failed");
}
