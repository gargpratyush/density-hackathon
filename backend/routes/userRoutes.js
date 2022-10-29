const express = require('express');
const router = express.Router();

const { getUsersData, updateUserData  } = require('../controllers/userC');

router.route('/').get(getUsersData);
router.route('/:id').patch(updateUserData);


module.exports = router