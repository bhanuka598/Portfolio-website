const crypto = require('crypto');

// In-memory OTP store: { email -> { otp, expiresAt, purpose } }
// For production at scale, replace with Redis
const otpStore = new Map();

const OTP_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Generate a 6-digit OTP and store it against an email + purpose
 * @param {string} email
 * @param {'register' | 'update-email' | 'change-password'} purpose
 * @returns {string} otp
 */
const generateOTP = (email, purpose) => {
  const otp = crypto.randomInt(100000, 999999).toString();
  const key = `${email}:${purpose}`;

  otpStore.set(key, {
    otp,
    expiresAt: Date.now() + OTP_EXPIRY_MS,
    purpose,
  });

  return otp;
};

/**
 * Verify an OTP for a given email + purpose
 * Deletes the OTP after successful verification (one-time use)
 * @param {string} email
 * @param {string} otp
 * @param {'register' | 'update-email' | 'change-password'} purpose
 * @returns {{ valid: boolean, message: string }}
 */
const verifyOTP = (email, otp, purpose) => {
  const key = `${email}:${purpose}`;
  const record = otpStore.get(key);

  if (!record) {
    return { valid: false, message: 'OTP not found. Please request a new one.' };
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(key);
    return { valid: false, message: 'OTP has expired. Please request a new one.' };
  }

  if (record.otp !== otp) {
    return { valid: false, message: 'Invalid OTP. Please try again.' };
  }

  // One-time use — delete after successful verification
  otpStore.delete(key);
  return { valid: true, message: 'OTP verified successfully.' };
};

/**
 * Delete OTP manually (e.g. on resend, to invalidate the old one)
 * @param {string} email
 * @param {string} purpose
 */
const deleteOTP = (email, purpose) => {
  otpStore.delete(`${email}:${purpose}`);
};

module.exports = { generateOTP, verifyOTP, deleteOTP };