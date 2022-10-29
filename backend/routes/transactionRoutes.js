const express = require('express');
const router = express.Router();

const { getMarketPrice, getTransactionHistory  } = require('../controllers/transactionC');

router.route('/market_price').get(getMarketPrice);
router.route('/history').get(getTransactionHistory);

module.exports = router