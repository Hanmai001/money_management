const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");      // cung cap ham findorcreat vi trong mongoose ko co ham do
const passportLocalMogoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    googleId: String,
    displayName: String,
});

userSchema.plugin(passportLocalMogoose);
userSchema.plugin(findOrCreate);

module.exports = new mongoose.model("users", userSchema);