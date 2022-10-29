const db = require("../database/connection")

const buyBook= async (req, res) => {
    let buyBook_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.buy_order_book;`
    const [buyOrders] = await db.execute(buyBook_query, []);
    res.json(buyOrders);
}

const sellBook= async (req, res) => {
    let sellBook_query = `SELECT * FROM ${process.env.MYSQLDATABASE}.sell_order_book;`
    const [sellOrders] = await db.execute(sellBook_query, []);
    res.json(sellOrders);
}

module.exports = {
    buyBook, sellBook
}