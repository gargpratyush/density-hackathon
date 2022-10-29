const express = require('express');
const router = express.Router();

const { getTransactionHistory, placeBuyOrder, placeSellOrder  } = require('../controllers/transactionC');

router.route('/history').get(getTransactionHistory);
router.route('/place/buy').get(placeBuyOrder);
router.route('/place/sell').get(placeSellOrder);

module.exports = router