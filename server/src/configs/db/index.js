const mongoose = require("mongoose");
require('dotenv').config({
    path: './src/.env'
})

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useNewUrlParser: true
};

async function connect() {
    try {
        await mongoose.connect(process.env.MONGOATLAS, options
        );
        console.log("ServerDB has started successfully")
    } catch (err) {
        console.log({ err });
    }
}

module.exports = {
    connect
}