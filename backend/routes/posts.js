const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

// create new post
router.post("", checkAuth, extractFile, PostController.createPost);

// edit existing post
// protected from editing by unauthorized users
router.put("/:id", checkAuth, extractFile, PostController.updatePost);

// get all posts
router.get("", PostController.getPosts);

// get single post by id
router.get("/:id", PostController.getPost);

// delete post
router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
