/**
 * LoadingSpinner Component
 * Reusable loading spinner with different sizes
 */

'use client';

const LoadingSpinner = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  // Size styles
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  // Color styles
  const colors = {
    primary: 'text-pink-500',
    secondary: 'text-gray-600',
    white: 'text-white',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className={`animate-spin ${sizes[size]} ${colors[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

// Full page loading spinner
LoadingSpinner.FullPage = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        {message && (
          <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

// Inline loading spinner with text
LoadingSpinner.Inline = ({ text = 'Loading...', size = 'sm' }) => {
  return (
    <div className="flex items-center gap-2">
      <LoadingSpinner size={size} />
      <span className="text-gray-600">{text}</span>
    </div>
  );
};

export default LoadingSpinner;