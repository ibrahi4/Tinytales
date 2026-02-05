/**
 * Input Component
 * Reusable input field with error states, icons, and validation
 */

'use client';

import { forwardRef, useState } from 'react';

const Input = forwardRef(
  (
    {
      label,
      type = 'text',
      name,
      placeholder,
      error,
      helperText,
      disabled = false,
      required = false,
      icon: Icon,
      rightIcon: RightIcon,
      className = '',
      containerClassName = '',
      onRightIconClick,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    // Determine input type for password fields
    const inputType = type === 'password' && showPassword ? 'text' : type;

    // Base input styles
    const baseInputStyles =
      'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2';

    // Error styles
    const errorStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200 bg-red-50'
      : 'border-gray-300 focus:border-pink-500 focus:ring-pink-200 bg-white';

    // Disabled styles
    const disabledStyles = disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-100'
      : '';

    // Padding adjustments for icons
    const iconPadding = Icon ? 'pl-11' : 'pl-4';
    const rightIconPadding = RightIcon || type === 'password' ? 'pr-11' : 'pr-4';

    // Combined input classes
    const inputClasses = `
      ${baseInputStyles}
      ${errorStyles}
      ${disabledStyles}
      ${iconPadding}
      ${rightIconPadding}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className={`${containerClassName}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon className="h-5 w-5" />
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            id={name}
            name={name}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={inputClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${name}-error` : undefined}
            {...props}
          />

          {/* Right Icon / Password Toggle */}
          {(RightIcon || type === 'password') && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
              onClick={
                type === 'password'
                  ? togglePasswordVisibility
                  : onRightIconClick
              }
            >
              {type === 'password' ? (
                showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )
              ) : (
                RightIcon && <RightIcon className="h-5 w-5" />
              )}
            </div>
          )}
        </div>

        {/* Helper Text / Error Message */}
        {(helperText || error) && (
          <p
            id={`${name}-error`}
            className={`mt-1.5 text-sm ${
              error ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Eye Icons for password visibility toggle
const EyeIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeOffIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    />
  </svg>
);

export default Input;