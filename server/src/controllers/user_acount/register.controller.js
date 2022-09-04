const passport = require("passport");
const User = require("../../modules/user.model");

// POST //account/register
function registerPOST(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    User.register({ username: username }, password, (err, user) => {
        if (err) {
            console.log({ err });
            return res.status(501).json({ check: false });
        }
        passport.authenticate('local', function (err, user, info) {
            console.log(user);
            if (err) {
                console.log({ err });
                return res.status(401).json(err);
            }
            if (user) {
                return res.status(200).json({
                    "token": true
                });
            } else {
                console.log(info);
                res.status(401).json(info);
            }
        })(req, res, next)
    })
}

function registerGET(req, res) {
    if (req.isAuthenticated()) {
        res.send("hello");
    } else {
        res.send("cc");
    }
}
module.exports = {
    registerPOST,
    registerGET
}