const express = require('express');
const router = express.Router();

const { getUsersData  } = require('../controllers/userC');

router.route('/').get(getUsersData);


module.exports = router