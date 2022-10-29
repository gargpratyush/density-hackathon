const express = require('express');
const router = express.Router();

const { getTransactionHistory, placeSellOrder  } = require('../controllers/transactionC');
const { placeBuyOrder  } = require('../controllers/placeBuyOrder');

router.route('/history').get(getTransactionHistory);
router.route('/place/buy').get(placeBuyOrder);
router.route('/place/sell').get(placeSellOrder);

module.exports = router