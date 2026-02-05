/**
 * VerifyForm Component
 * Email verification with 6-digit OTP input
 */

'use client';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { isValidVerificationCode } from '@/lib/utils/validators';
import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/shared/ErrorMessage';

const VerifyForm = () => {
  const { verify, resendCode, loading } = useAuth();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef([]);

  // Countdown timer for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Handle input change
  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 6 digits are entered
    if (index === 5 && value) {
      const fullCode = newCode.join('');
      if (fullCode.length === 6) {
        handleSubmit(fullCode);
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (/^\d+$/.test(pastedData)) {
      const newCode = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
      setCode(newCode);
      
      // Focus last filled input or submit if complete
      const lastIndex = Math.min(pastedData.length, 5);
      inputRefs.current[lastIndex]?.focus();
      
      if (pastedData.length === 6) {
        handleSubmit(pastedData);
      }
    }
  };

  // Handle submit
  const handleSubmit = async (submittedCode = null) => {
    const verificationCode = submittedCode || code.join('');

    // Validate code
    if (!isValidVerificationCode(verificationCode)) {
      setError('Please enter a valid 6-digit code');
      return;
    }

    // Submit to API
    const result = await verify(verificationCode);

    if (!result.success) {
      setError(result.message);
      // Clear code on error
      setCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
    // If success, useAuth will handle redirect automatically
  };

  // Handle resend code
  const handleResendCode = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    setError('');

    const result = await resendCode();

    if (result.success) {
      setResendSuccess(true);
      setCountdown(60); // 60 seconds countdown
      setTimeout(() => setResendSuccess(false), 3000);
    } else {
      setError(result.message);
    }

    setResendLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
          <MailIcon className="w-8 h-8 text-pink-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600">
          We've sent a 6-digit verification code to your email
        </p>
      </div>

      {/* Error Message */}
      {error && <ErrorMessage message={error} variant="default" />}

      {/* Success Message */}
      {resendSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-center">
          ✓ Verification code sent successfully!
        </div>
      )}

      {/* OTP Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
          Enter Verification Code
        </label>
        <div className="flex gap-2 justify-center" onPaste={handlePaste}>
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              disabled={loading}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Hint: For testing, use code <span className="font-mono font-bold">123456</span>
        </p>
      </div>

      {/* Verify Button */}
      <Button
        type="button"
        onClick={() => handleSubmit()}
        fullWidth
        size="lg"
        loading={loading}
        disabled={loading || code.join('').length !== 6}
      >
        Verify Email
      </Button>

      {/* Resend Code */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          Didn't receive the code?
        </p>
        <button
          type="button"
          onClick={handleResendCode}
          disabled={resendLoading || countdown > 0}
          className="text-sm font-medium text-pink-500 hover:text-pink-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {resendLoading ? (
            'Sending...'
          ) : countdown > 0 ? (
            `Resend in ${countdown}s`
          ) : (
            'Resend Code'
          )}
        </button>
      </div>
    </div>
  );
};

// Mail Icon
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

export default VerifyForm;