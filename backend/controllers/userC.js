const db = require("../database/connection")

const getUsersData = async (req, res) => {
    let user_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.users;`
    const [users] = await db.execute(user_query, []);
    res.json(users);
}

const updateUserData = async (req, res) => {
    let user_id = req.params.id;
    let {stocks, balance} = req.body;
    
    let user_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.users WHERE user_id=${user_id};`
    let [user] = (await db.execute(user_query, []))[0];
    if(stocks === undefined) stocks = user.stocks;
    if(balance === undefined) balance = user.balance;

    let update_query = `UPDATE ${process.env.MYSQLDATABASE}.users SET stocks=${stocks},balance=${balance} WHERE user_id=${user_id};`
    await db.execute(update_query, []);
    let [updated_user] = (await db.execute(user_query, []))[0];
    res.json(updated_user);
}

module.exports = {
    getUsersData,
    updateUserData
}