const Post = require('../models/post');

const createPost = (req, res) => {

    Post.findOne({name : req.body.name}).then((result) => {

        if(result != null && result.name == req.body.name){

            return res.send("Duplicate Post found");

        } else {

            let newPost = new Post({
                title : req.body.title,
                content: req.body.content
            });

            newPost.save()
            .then((savedPost) => res.send("New Post created"))
            .catch(err => res.send(err))
        }

    }).catch(err => res.send(err))
};

const getPosts = (req, res) => {

    // "find" is a Mongoose method that is similar to Mongodb "find", and an empty "{}" means it returns all the documents and stores them in the "result" parameter of the callback function
    Post.find({})
        .then((result) => res.send(result))
        .catch((err) => res.send(err))

};

const updatePost = (req, res) => {

     Task.findById(req.params.id).then(result => {

        result.name = newContent.name;

        return result.save()
        .then((updatedTask) => res.send(updatedTask))
        .catch(err => res.send("Update failed"))

    //Catch the error and send a message to the client. 
    }).catch(err => res.send("Find Failed"))

};

const deletePost = (req, res) => {

    Task.findByIdAndRemove(req.params.id)
    .then(result => res.send(updatedTask))
    .catch(err => res.send("delete failed"))

};

module.exports = {createPost, getPosts, updatePost, deletePost};