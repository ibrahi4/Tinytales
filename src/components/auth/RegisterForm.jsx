/**
 * RegisterForm Component
 * Registration form with validation and API integration
 */

'use client';
import React from 'react';
import { useState } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/shared/ErrorMessage';
import { COUNTRY_CODES } from '@/lib/utils/constants';
import {
  isValidEmail,
  isValidPassword,
  isValidPhone,
  isValidName,
  VALIDATION_MESSAGES,
} from '@/lib/utils/validators';

const RegisterForm = () => {
  const { register, loading } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    mobile_country_code: '971',
    password: '',
    password_confirmation: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = VALIDATION_MESSAGES.REQUIRED;
    } else if (!isValidName(formData.name)) {
      newErrors.name = VALIDATION_MESSAGES.NAME_INVALID;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = VALIDATION_MESSAGES.REQUIRED;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = VALIDATION_MESSAGES.EMAIL_INVALID;
    }

    // Phone validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = VALIDATION_MESSAGES.REQUIRED;
    } else if (!isValidPhone(formData.mobile)) {
      newErrors.mobile = VALIDATION_MESSAGES.PHONE_INVALID;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = VALIDATION_MESSAGES.REQUIRED;
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = VALIDATION_MESSAGES.PASSWORD_WEAK;
    }

    // Password confirmation
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = VALIDATION_MESSAGES.REQUIRED;
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = VALIDATION_MESSAGES.PASSWORD_MISMATCH;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Submit to API
    const result = await register(formData);

    if (!result.success) {
      setApiError(result.message);
      if (result.errors) {
        setErrors(result.errors);
      }
    }
  };

  // Country code options
  const countryCodeOptions = COUNTRY_CODES.map((country) => ({
    value: country.code,
    label: `${country.flag} +${country.code} ${country.name}`,
  }));

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* API Error */}
      {apiError && (
        <ErrorMessage
          message={apiError}
          errors={errors}
          onClose={() => setApiError('')}
        />
      )}

      {/* Full Name */}
      <Input
        label="Full Name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        disabled={loading}
        icon={UserIcon}
      />

      {/* Email */}
      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        disabled={loading}
        icon={MailIcon}
      />

      {/* Phone Number with Country Code */}
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <Select
            label="Code"
            name="mobile_country_code"
            value={formData.mobile_country_code}
            onChange={handleChange}
            options={countryCodeOptions}
            required
            disabled={loading}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Phone Number"
            name="mobile"
            type="tel"
            placeholder="5012345678"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            required
            disabled={loading}
            icon={PhoneIcon}
          />
        </div>
      </div>

      {/* Password */}
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
        disabled={loading}
        icon={LockIcon}
        helperText="Min 8 characters with uppercase, lowercase, number & special character"
      />

      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        name="password_confirmation"
        type="password"
        placeholder="Confirm your password"
        value={formData.password_confirmation}
        onChange={handleChange}
        error={errors.password_confirmation}
        required
        disabled={loading}
        icon={LockIcon}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        size="lg"
        loading={loading}
        disabled={loading}
      >
        Create Account
      </Button>
    </form>
  );
};

// Icons
const UserIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LockIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

export default RegisterForm;