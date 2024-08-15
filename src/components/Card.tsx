import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      {title && <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>}
      {children}
    </div>
  );
};