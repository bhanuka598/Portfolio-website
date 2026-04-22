const express = require('express');
const router = express.Router();
const {
  sendRegisterOTP,
  register,
  login,
  getMe,
  updateMe,
  sendUpdateEmailOTP,
  updateEmail,
  sendChangePasswordOTP,
  changePassword,
} = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// ─────────────────────────────────────────────────────────────────────────────
// Public routes
// ─────────────────────────────────────────────────────────────────────────────

// Registration flow
// Step 1 → send OTP to email
router.post('/register/send-otp', sendRegisterOTP);
// Step 2 → verify OTP + create admin
router.post('/register', register);

// Login
router.post('/login', login);

// ─────────────────────────────────────────────────────────────────────────────
// Protected routes (valid JWT required)
// ─────────────────────────────────────────────────────────────────────────────

// Profile
router.get('/me', authMiddleware, getMe);
router.patch('/me', authMiddleware, updateMe);            // update name only

// Update email flow
// Step 1 → send OTP to new email
router.post('/update-email/send-otp', authMiddleware, sendUpdateEmailOTP);
// Step 2 → verify OTP + update email
router.patch('/update-email', authMiddleware, updateEmail);

// Change password flow
// Step 1 → send OTP to current email
router.post('/change-password/send-otp', authMiddleware, sendChangePasswordOTP);
// Step 2 → verify OTP + current password, set new password
router.patch('/change-password', authMiddleware, changePassword);

module.exports = router;