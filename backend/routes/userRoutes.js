const express = require('express');
const router = express.Router();

const { getUsersData, updateUserData, createUser  } = require('../controllers/userC');

router.route('/').get(getUsersData);
router.route('/:id').patch(updateUserData);
router.route('/').post(createUser);

module.exports = router