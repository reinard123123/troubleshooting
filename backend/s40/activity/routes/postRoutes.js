const express = require("express");
const postController = require('../controllers/postControllers');

const router = express.Router();

router.post("/", postController.createPost);
router.get("/", postController.getPosts);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;