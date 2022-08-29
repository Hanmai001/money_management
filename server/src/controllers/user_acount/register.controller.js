const User = require("../../modules/User.model");

function registerPost(req, res) {
    const username = req.body.email;
    const password = req.body.pass;
    console.log(username, password)
    User.register({username}, password, (err, user) => {
        if (err) {
            console.log({ err });
            res.status(401).json({ check: false });
        }
        else if (!user) {
            res.status(402).json({ chekc: true });
        } else {
            console.log(user);
            res.status(200).json({ chekc: true });
        }
    })
}

module.exports = {
    registerPost
};