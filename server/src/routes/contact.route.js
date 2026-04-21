const express = require('express');
const router = express.Router();
const { submitContact, getContacts, markAsRead } = require('../controllers/contact.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public route — anyone can submit the form
router.post('/', submitContact);

// Protected routes (Admin only)
router.get('/', authMiddleware, getContacts);
router.put('/:id/read', authMiddleware, markAsRead);

module.exports = router;