const db = require("../database/connection")

const getUsersData = async (req, res) => {
    const [temp] = await db.execute('SHOW TABLES;', []);
    res.json(temp);
}

module.exports = {
    getUsersData
}