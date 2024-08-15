import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded-md transition duration-300 ease-in-out';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};