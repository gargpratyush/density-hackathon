const db = require("../database/connection")

const getMarketPrice = async (req, res) => {
    let price_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.market_price;`
    const [prices] = await db.execute(price_query, []);
    res.json(prices);
}

const getTransactionHistory = async (req, res) => {
    let transaction_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.transaction_history;`
    const [transactions] = await db.execute(transaction_query, []);
    res.json(transactions);
}

module.exports = {
    getMarketPrice, getTransactionHistory
}