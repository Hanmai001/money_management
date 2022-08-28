const express = require("express");
const passport = require("passport");
const session = require('express-session')      // dung de luu truu cookie https://www.npmjs.com/package/express-session
const path = require("path");
const bodyParser = require("body-parser");
require('dotenv').config()


const db = require("./configs/db/index");
const connetPassport = require("./configs/passport/index");

const app = express();

//todo setting server
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({           // tao goi session cho may chu trang web
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());     // khoi tao 
app.use(passport.session());        // yeu cau he thong su dung passport de dua session vao 
app.use(express.json());

//todo connet db
db.connect();
connetPassport(passport)

let PORT = process.env.PORT;
//todo server listen
if (PORT == null || PORT == "") {
    PORT = 5000;
}

app.listen(PORT, function () {
    console.log("Server has started successfully");
});