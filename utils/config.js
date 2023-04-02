const { MongoMissingCredentialsError } = require("mongodb");
const mongoose = require("mongoose");
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
    },
    () => console.log('Connected to DB!!')
);
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = connection;

