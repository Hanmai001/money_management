const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require("passport");
require('dotenv').config();

const db = require("./configs/db/index");
const route = require("./routers/index");
const passportConfig = require("./configs/passport/index");

const app = express();

//todo setting server
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cors()) // Use this after the variable declaration

//todo passport with session setting
app.use(session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);

//todo connet db
db.connect();

//todo route
route(app);

//todo server listen
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
    PORT = 5000;
}

app.listen(PORT, function () {
    console.log("Server has started successfully");
});