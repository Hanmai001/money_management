const accounttRouter = require("./user_account/index");

const route = function(app) {
    app.use("/account", accounttRouter);
}

module.exports = route;