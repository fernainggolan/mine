const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.handleRegister);
router.post("/login", UserController.handleLogin);
router.post("/googleLogin", UserController.handleGoogleLogin);

module.exports = router;