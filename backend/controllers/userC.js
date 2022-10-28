const db = require("../database/connection")
const mysql = require("mysql");

const getUsersData = async (req, res) => {
 res.send('testing getUsersData');
}

module.exports = {
    getUsersData
}