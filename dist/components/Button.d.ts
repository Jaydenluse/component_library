import React from 'react';
import './button.css';
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}
export declare const Button: React.FC<ButtonProps>;
export {};
