import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};
