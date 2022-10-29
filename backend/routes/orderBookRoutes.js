const express = require('express');
const router = express.Router();

const { buyBook, sellBook  } = require('../controllers/orderBookC');

router.route('/buy').get(buyBook);
router.route('/sell').get(sellBook);


module.exports = router