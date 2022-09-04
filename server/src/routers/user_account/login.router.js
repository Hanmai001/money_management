const router = require("express").Router();
const loginController = require("../../controllers/user_acount/login.controller");

// POST /account/login
router.post("/", loginController.loginPOST);

module.exports = router;