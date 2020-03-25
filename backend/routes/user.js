const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

// signup route
router.post("/signup", UserController.createUser);

// login route
router.post("/login", UserController.userLogin);

module.exports = router;
