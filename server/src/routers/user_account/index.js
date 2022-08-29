const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/user_acount/register.controller");
const loginController = require("../../controllers/user_acount/login.controller");

router.post("/register", registerController.registerPost);
router.post("/login", loginController.loginPost);

module.exports = router;