const db = require("../database/connection")

const getTransactionHistory = async (req, res) => {
    let transaction_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.transaction_history;`
    const [transactions] = await db.execute(transaction_query, []);
    res.json(transactions);
}

module.exports = {
    getTransactionHistory
}