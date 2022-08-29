const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/user_acount/register.controller");

router.post("/register", registerController.registerPost);

module.exports = router;