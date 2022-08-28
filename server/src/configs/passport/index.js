const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../../modules/User.model")

require('dotenv').config({
    path: '.env'
});


module.exports = (passport) => {
    passport.use(User.createStrategy());

    passport.serializeUser(function (user, done) {      // ma hoa
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {      // giai ma
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://www.example.com/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return cb(err, user);
            });
        }
    ));
};