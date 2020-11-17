const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT
})

client.connect();

module.exports = client;