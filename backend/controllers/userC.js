const db = require("../database/connection")

const getUsersData = async (req, res) => {
    let user_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.users;`
    const [users] = await db.execute(user_query, []);
    res.json(users);
}

module.exports = {
    getUsersData
}