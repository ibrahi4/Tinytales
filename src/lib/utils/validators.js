// src/lib/utils/validators.js

/**
 * Validation Messages
 */
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  PASSWORD_WEAK:
    'Password must be at least 8 characters and include uppercase, lowercase, number and special character',
  PASSWORD_MISMATCH: 'Passwords do not match',
  PHONE_INVALID: 'Please enter a valid phone number',
  NAME_INVALID: 'Please enter a valid full name',
  VERIFICATION_CODE_INVALID: 'Please enter a valid 6-digit verification code',
};

/**
 * Email validation
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Password validation
 * Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character
 */
export const isValidPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(
    password
  );
};

/**
 * Phone validation (numbers only, 7–15 digits)
 */
export const isValidPhone = (phone) => {
  return /^\d{7,15}$/.test(phone);
};

/**
 * Full name validation (at least 2 words)
 */
export const isValidName = (name) => {
  return /^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(name.trim());
};

/**
 * Verification code validation (6 digits)
 */
export const isValidVerificationCode = (code) => {
  return /^\d{6}$/.test(code);
};
export const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = VALIDATION_MESSAGES.REQUIRED;
  } else if (!isValidEmail(email)) {
    errors.email = VALIDATION_MESSAGES.EMAIL_INVALID;
  }

  if (!password) {
    errors.password = VALIDATION_MESSAGES.REQUIRED;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
