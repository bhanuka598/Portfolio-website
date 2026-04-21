const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateMe,
  changePassword,
} = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// ─── Public routes ────────────────────────────────────────────────────────────
// POST /api/auth/register  — one-time admin setup (locked after first use)
router.post('/register', register);

// POST /api/auth/login  — returns JWT
router.post('/login', login);

// ─── Protected routes (requires valid JWT) ────────────────────────────────────
// GET  /api/auth/me          — get logged-in admin profile
router.get('/me', authMiddleware, getMe);

// PUT  /api/auth/me          — update name / email
router.put('/me', authMiddleware, updateMe);

// PUT  /api/auth/change-password  — change password
router.put('/change-password', authMiddleware, changePassword);

module.exports = router;