const nodemailer = require('nodemailer');

// ─── Transporter ─────────────────────────────────────────────────────────────
// Uses Gmail SMTP. For other providers, update host/port in .env.
// For Gmail: enable 2-Step Verification and generate an App Password at
// https://myaccount.google.com/apppasswords — use that as EMAIL_PASS.
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password, not your account password
    },
  });
};

// ─── Email Templates ──────────────────────────────────────────────────────────
const templates = {
  register: (otp) => ({
    subject: 'Verify Your Email — Admin Registration',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827; margin-bottom: 8px;">Admin Registration</h2>
        <p style="color: #6b7280;">Use the OTP below to verify your email and complete registration.</p>
        <div style="background: #f3f4f6; border-radius: 8px; padding: 24px; text-align: center; margin: 24px 0;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #111827;">${otp}</span>
        </div>
        <p style="color: #6b7280; font-size: 14px;">This OTP expires in <strong>10 minutes</strong>. Do not share it with anyone.</p>
      </div>
    `,
  }),

  'update-email': (otp) => ({
    subject: 'Verify Your New Email — Portfolio Admin',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827; margin-bottom: 8px;">Email Update Request</h2>
        <p style="color: #6b7280;">Use the OTP below to verify your new email address.</p>
        <div style="background: #f3f4f6; border-radius: 8px; padding: 24px; text-align: center; margin: 24px 0;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #111827;">${otp}</span>
        </div>
        <p style="color: #6b7280; font-size: 14px;">This OTP expires in <strong>10 minutes</strong>. If you did not request this, ignore this email.</p>
      </div>
    `,
  }),

  'change-password': (otp) => ({
    subject: 'Verify Your Identity — Password Change',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827; margin-bottom: 8px;">Password Change Request</h2>
        <p style="color: #6b7280;">Use the OTP below to verify your identity before changing your password.</p>
        <div style="background: #f3f4f6; border-radius: 8px; padding: 24px; text-align: center; margin: 24px 0;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #111827;">${otp}</span>
        </div>
        <p style="color: #6b7280; font-size: 14px;">This OTP expires in <strong>10 minutes</strong>. If you did not request this, secure your account immediately.</p>
      </div>
    `,
  }),
};

// ─── Send OTP Email ───────────────────────────────────────────────────────────
/**
 * Send an OTP email for a given purpose
 * @param {string} toEmail - recipient email
 * @param {string} otp - the generated OTP
 * @param {'register' | 'update-email' | 'change-password'} purpose
 */
const sendOTPEmail = async (toEmail, otp, purpose) => {
  const transporter = createTransporter();
  const template = templates[purpose](otp);

  const mailOptions = {
    from: `"Portfolio Admin" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: template.subject,
    html: template.html,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendOTPEmail };