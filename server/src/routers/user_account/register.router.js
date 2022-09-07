const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/user_acount/register.controller");

router.post("/", registerController.registerPOST);
router.get("/", registerController.registerGET);


module.exports = router;