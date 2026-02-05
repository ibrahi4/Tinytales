/**
 * Label Component
 * Reusable label for form fields
 */

'use client';

const Label = ({
  htmlFor,
  children,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;