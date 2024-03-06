const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoute");
const userRoutes = require("./routes/userRoute");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:1234@cluster0.zlyew.mongodb.net/postDB", 
    { 
        useNewUrlParser : true,  
        useUnifiedTopology : true
    }
);


let db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to the cloud database"));


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



app.use("/post", postRoutes);
app.use("/user", userRoutes);




// Listen to the port, meaning, if the port is accessed, we run the server

//An if statement is added here to be able to export the following app/server for checking.
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app;