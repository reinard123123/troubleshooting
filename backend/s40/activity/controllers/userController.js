const User = require('../models/User');

const registerUser = (req, res) => {

    // Finds for a document with the matching username provided in the client/Postman
    User.findOne({ email : req.body.email }).then((result) => {

        // Check for duplicates
        if(result != null && result.email == req.body.email){

            return res.send("Duplicate email found");

        } else {

            // If the username and password are both not blank
            if(req.body.firstName !== '' && req.body.lastName !== '' && req.body.email !== '' && req.body.password !== ''){

                // Create/instantiate a "newUser" from the "User" model
                let newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password : req.body.password
                });
    
                // Create a document in the database
                newUser.save()
                .then((savedPost) =>res.send("New user registered"))
                .catch((err) => res.send(err))

            // If at least one of the fields are left blank
            } else {

                /// Send a response back to the client/Postman of "created"
                return res.send("All fields must be provided");
            }           
        }
    })
    .catch((err) => res.send(err))
};

const loginUser = (req, res) => {

    User.findOne({ email : req.body.email }).then((result) => {

        // Check if email exists in the database.
        if(result != null && result.email == req.body.email){

            //if it is check password from db and req.body match
            if(result.password === req.body.password){
                return res.send("Thank you for logging in!")
            } else {
                //else, send a message to the client.
                return res.send("Wrong Password")
            }

        // If email does not exist in the database
        } else {
            return res.send("Email does not exist");            
        }
    })
    .catch(err => res.send(err))

};

module.exports = {registerUser, loginUser};