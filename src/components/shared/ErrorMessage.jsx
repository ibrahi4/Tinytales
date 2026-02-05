/**
 * ErrorMessage Component
 * Reusable error message display with different variants
 */

'use client';

const ErrorMessage = ({
  message,
  errors = {},
  variant = 'default',
  className = '',
  onClose,
}) => {
  if (!message && Object.keys(errors).length === 0) return null;

  // Variant styles
  const variants = {
    default: 'bg-red-50 border border-red-200 text-red-700',
    inline: 'bg-transparent border-none text-red-600 text-sm',
    banner: 'bg-red-500 text-white',
  };

  return (
    <div
      className={`rounded-lg p-4 ${variants[variant]} ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        {/* Error Icon */}
        {variant !== 'inline' && (
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        {/* Error Content */}
        <div className={`${variant !== 'inline' ? 'ml-3' : ''} flex-1`}>
          {/* Main error message */}
          {message && (
            <p className={`font-medium ${variant === 'inline' ? '' : 'mb-2'}`}>
              {message}
            </p>
          )}

          {/* Field errors */}
          {Object.keys(errors).length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-sm">
              {Object.entries(errors).map(([field, messages]) => (
                <li key={field}>
                  {Array.isArray(messages) ? messages.join(', ') : messages}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Close button */}
        {onClose && variant !== 'inline' && (
          <button
            type="button"
            className="ml-3 flex-shrink-0 hover:opacity-75 transition-opacity"
            onClick={onClose}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;