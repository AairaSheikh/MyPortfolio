import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return (
    <button 
      className={`p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
