const express = require("express");
require('dotenv').config()


const db = require("./configs/db/index");
const app = express();

//todo connet db
db.connect();


let PORT = process.env.PORT;
//todo server listen
if (PORT == null || PORT == "") {
    PORT = 5000;
}

app.listen(PORT, function () {
    console.log("Server has started successfully");
});