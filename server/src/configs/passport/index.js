const User = require('../../modules/user.model');
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy
module.exports = function passportConfig() {
    passport.use(User.createStrategy());

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}