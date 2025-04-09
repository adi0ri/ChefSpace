const express = require('express');
const { getUserProfile, createUser, updateUser } = require('../controllers/userController');

const router = express.Router();

// GET: Retrieve a user's profile by username
router.get('/:username', getUserProfile);

// POST: Create a new user
router.post('/', createUser);

// PUT: Update an existing user's profile
router.put('/:username', updateUser);

module.exports = router;
