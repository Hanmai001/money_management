const User = require("../../modules/User.model");
const passport = require("passport");


function loginPost(req, res, next) {
    const user = new User({
        username: req.body.email,
        password: req.body.pass
    });
    req.login(user, function (err) {
        if (err) {
            console.log({ err })
            return next(err);
        } else {
            console.log(user);
            passport.authenticate('local')(req, res, () => {
                return res.status(200).json({ check: true, id: user._id });
            });
        }
    });
}

module.exports = {
    loginPost
}