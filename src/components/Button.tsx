import React from 'react';
import './button.css'; 

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium' 
}) => {
  const baseClass = 'storybook-button';
  const variantClass = `storybook-button--${variant}`;
  const sizeClass = `storybook-button--${size}`;

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};