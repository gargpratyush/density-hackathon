const express = require('express');
const router = express.Router();

const { getTransactionHistory, placeSellOrder  } = require('../controllers/transactionC');
const { placeBuyOrder  } = require('../controllers/placeBuyOrder');

router.route('/history').get(getTransactionHistory);
router.route('/place/buy').post(placeBuyOrder);
router.route('/place/sell').post(placeSellOrder);

module.exports = router