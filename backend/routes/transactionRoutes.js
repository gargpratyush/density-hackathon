const express = require('express');
const router = express.Router();

const { getTransactionHistory  } = require('../controllers/transactionC');

router.route('/history').get(getTransactionHistory);

module.exports = router