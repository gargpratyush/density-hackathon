const mysql = require('mysql2/promise');
const strict = require('node:assert');
require('dotenv').config();

const config = {
    host: `${process.env.MYSQLHOST}`,
    user: `${process.env.MYSQLUSER}`,
    password: `${process.env.MYSQLPASSWORD}`,
    database: `${process.env.MYSQLDATABASE}`,
    connectionLimit: 10
};

const db = mysql.createPool(config);

db.on('connection', function (connection) {
    strict.ok(connection);
    console.log('index:MySQL connected!');
});

module.exports = db;
