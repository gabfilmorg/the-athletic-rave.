import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'black' | 'white';
  children: React.ReactNode;
}

export default function Button({ variant = 'black', children, className = '', ...props }: ButtonProps) {
  const base =
    'px-6 py-2 font-semibold uppercase rounded-none border-2 transition-colors duration-150 focus:outline-none';
  const styles =
    variant === 'white'
      ? 'bg-white text-black border-black hover:bg-black hover:text-white'
      : 'bg-black text-white border-white hover:bg-white hover:text-black';
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
} 