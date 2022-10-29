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

const createUser = async (req, res) => {
    let {user_name, stocks, balance} = req.body;
    if(!user_name) res.status(400).json({message: "user_name is required"})
    if(!stocks) res.status(400).json({message: "stocks is required"})
    if(!balance) res.status(400).json({message: "balance is required"})

    let create_query = `INSERT INTO ${process.env.MYSQLDATABASE}.users (user_name, stocks, balance) VALUES ('${user_name}', '${stocks}', '${balance}');`
    const {insertId} = (await db.execute(create_query, []))[0];

    let user_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.users WHERE user_id=${insertId};`
    let [user] = (await db.execute(user_query, []))[0];

    res.json(user)
}

module.exports = {
    getUsersData,
    updateUserData,
    createUser
}