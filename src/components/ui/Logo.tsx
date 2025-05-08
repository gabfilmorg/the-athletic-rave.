import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  size?: string | number;
}

export default function Logo({ className = '', color = '#FFF', size = 32 }: LogoProps) {
  return (
    <span
      className={`font-bold tracking-widest uppercase ${className}`}
      style={{ color, fontSize: size }}
    >
      the athletic <span style={{ letterSpacing: '0.2em' }}>••</span> rave
    </span>
  );
} 