const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateOTP, verifyOTP, deleteOTP } = require('../utils/otp.util');
const { sendOTPEmail } = require('../services/email.service');

// ─── Helper: generate JWT ─────────────────────────────────────────────────────
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRATION FLOW
// Step 1: POST /api/auth/register/send-otp   → validate input, send OTP
// Step 2: POST /api/auth/register             → verify OTP, create admin
// ─────────────────────────────────────────────────────────────────────────────

// @desc    Send OTP to email before registration
// @route   POST /api/auth/register/send-otp
// @access  Public (locked after first admin exists)
const sendRegisterOTP = async (req, res, next) => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (adminExists) {
      return res.status(403).json({
        success: false,
        message: 'Admin already exists. Registration is closed.',
      });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password.',
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters.',
      });
    }

    // Invalidate any existing OTP for this email before sending a new one
    deleteOTP(email, 'register');

    const otp = generateOTP(email, 'register');
    await sendOTPEmail(email, otp, 'register');

    res.json({
      success: true,
      message: `OTP sent to ${email}. It expires in 10 minutes.`,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify OTP and create admin account
// @route   POST /api/auth/register
// @access  Public (locked after first admin exists)
const register = async (req, res, next) => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (adminExists) {
      return res.status(403).json({
        success: false,
        message: 'Admin already exists. Registration is closed.',
      });
    }

    const { name, email, password, otp } = req.body;

    if (!otp) {
      return res.status(400).json({ success: false, message: 'OTP is required.' });
    }

    const { valid, message } = verifyOTP(email, otp, 'register');
    if (!valid) {
      return res.status(400).json({ success: false, message });
    }

    const user = await User.create({ name, email, password, role: 'admin' });
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'Admin account created successfully.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────────────────────────────────────

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password.',
      });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    const token = generateToken(user._id);

    res.json({
      success: true,
      message: 'Login successful.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────────────────────────────────────

// @desc    Get logged-in admin profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update admin name only (email update has its own OTP flow below)
// @route   PATCH /api/auth/me
// @access  Private
const updateMe = async (req, res, next) => {
  try {
    const { name } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Profile updated.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// UPDATE EMAIL FLOW
// Step 1: POST /api/auth/update-email/send-otp  → send OTP to the NEW email
// Step 2: PUT  /api/auth/update-email            → verify OTP, update email
// ─────────────────────────────────────────────────────────────────────────────

// @desc    Send OTP to the new email address
// @route   POST /api/auth/update-email/send-otp
// @access  Private
const sendUpdateEmailOTP = async (req, res, next) => {
  try {
    const { newEmail } = req.body;

    if (!newEmail) {
      return res.status(400).json({ success: false, message: 'New email is required.' });
    }

    const emailTaken = await User.findOne({ email: newEmail });
    if (emailTaken) {
      return res.status(400).json({ success: false, message: 'This email is already in use.' });
    }

    deleteOTP(newEmail, 'update-email');

    const otp = generateOTP(newEmail, 'update-email');
    await sendOTPEmail(newEmail, otp, 'update-email');

    res.json({
      success: true,
      message: `OTP sent to ${newEmail}. It expires in 10 minutes.`,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify OTP and update email
// @route   PATCH /api/auth/update-email
// @access  Private
const updateEmail = async (req, res, next) => {
  try {
    const { newEmail, otp } = req.body;

    if (!newEmail || !otp) {
      return res.status(400).json({
        success: false,
        message: 'New email and OTP are required.',
      });
    }

    const { valid, message } = verifyOTP(newEmail, otp, 'update-email');
    if (!valid) {
      return res.status(400).json({ success: false, message });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { email: newEmail },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Email updated successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// CHANGE PASSWORD FLOW
// Step 1: POST /api/auth/change-password/send-otp → send OTP to current email
// Step 2: PATCH  /api/auth/change-password           → verify OTP + current password, set new password
// ─────────────────────────────────────────────────────────────────────────────

// @desc    Send OTP to current email before changing password
// @route   POST /api/auth/change-password/send-otp
// @access  Private
const sendChangePasswordOTP = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    deleteOTP(user.email, 'change-password');

    const otp = generateOTP(user.email, 'change-password');
    await sendOTPEmail(user.email, otp, 'change-password');

    res.json({
      success: true,
      message: 'OTP sent to your registered email. It expires in 10 minutes.',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify OTP + current password, then save new password
// @route   PATCH /api/auth/change-password
// @access  Private
const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword, otp } = req.body;

    if (!currentPassword || !newPassword || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Current password, new password and OTP are required.',
      });
    }

    const user = await User.findById(req.user.id).select('+password');

    // Verify OTP first
    const { valid, message } = verifyOTP(user.email, otp, 'change-password');
    if (!valid) {
      return res.status(400).json({ success: false, message });
    }

    // Then verify current password
    if (!(await user.comparePassword(currentPassword))) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect.',
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 8 characters.',
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({ success: true, message: 'Password changed successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendRegisterOTP,
  register,
  login,
  getMe,
  updateMe,
  sendUpdateEmailOTP,
  updateEmail,
  sendChangePasswordOTP,
  changePassword,
};