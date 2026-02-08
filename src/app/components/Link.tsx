import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function Link({ children, className = '', ...props }: LinkProps) {
  return (
    <a 
      className={`text-purple-400 hover:text-purple-300 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
