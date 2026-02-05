/**
 * Select Component
 * Reusable select dropdown with error states
 */

'use client';

import { forwardRef } from 'react';

const Select = forwardRef(
  (
    {
      label,
      name,
      options = [],
      placeholder = 'Select an option',
      error,
      helperText,
      disabled = false,
      required = false,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    // Base select styles
    const baseSelectStyles =
      'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 appearance-none bg-white';

    // Error styles
    const errorStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200 bg-red-50'
      : 'border-gray-300 focus:border-pink-500 focus:ring-pink-200';

    // Disabled styles
    const disabledStyles = disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-100'
      : 'cursor-pointer';

    // Combined select classes
    const selectClasses = `
      ${baseSelectStyles}
      ${errorStyles}
      ${disabledStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className={containerClassName}>
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

        {/* Select Container */}
        <div className="relative">
          {/* Select Field */}
          <select
            ref={ref}
            id={name}
            name={name}
            disabled={disabled}
            required={required}
            className={selectClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${name}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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

Select.displayName = 'Select';

export default Select;