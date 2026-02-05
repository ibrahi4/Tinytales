/**
 * Card Component
 * Reusable card container with variants
 */

'use client';

const Card = ({
  children,
  variant = 'default',
  padding = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-white rounded-xl border';

  const variants = {
    default: 'shadow-sm border-gray-100',
    elevated: 'shadow-lg border-gray-200',
    outlined: 'border-2 border-gray-300',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  const cardClasses = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.Header = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Title = ({ children, className = '', ...props }) => {
  return (
    <h2 className={`text-2xl font-bold text-gray-900 ${className}`} {...props}>
      {children}
    </h2>
  );
};

Card.Description = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-gray-600 mt-2 ${className}`} {...props}>
      {children}
    </p>
  );
};

Card.Content = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

Card.Footer = ({ children, className = '', ...props }) => {
  return (
    <div className={`mt-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;