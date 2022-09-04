const passport = require("passport");
const User = require("../../modules/user.model");
// POST /account/login
function loginPOST(req, res, next) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(501).json({ check: false });
        }
        if (!user) {
            console.log("Not user");
            return res.status(400).json({ check: false });
        }
        req.login(user, (err) => {
            if (err) {
                console.log({ err });
                return res.status(501).json({ check: false });
            }
            return res.status(200).json({ check: true });
        });
    })(req, res, next);
}

module.exports = {
    loginPOST
}