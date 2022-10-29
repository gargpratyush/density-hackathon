const express = require('express');
const router = express.Router();

const { buyBook, sellBook  } = require('../controllers/orderBookC');

router.route('/buy_book').get(buyBook);
router.route('/sell_book').get(sellBook);


module.exports = router