import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-black text-white border border-white p-6 rounded-none shadow-md ${className}`}>
      {children}
    </div>
  );
} 