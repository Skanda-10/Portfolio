import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid';
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
