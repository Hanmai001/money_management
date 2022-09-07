const accountRouter = require("./user_account/index");

const route = function (app) {
    app.use("/account", accountRouter);
}

module.exports = route;