
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none',
        {
          // Variant styles
          'purple-gradient text-white shadow-md hover:purple-glow': variant === 'primary',
          'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:bg-opacity-10': variant === 'secondary',
          'text-purple-400 hover:text-purple-300 p-0': variant === 'text',
          
          // Size styles
          'text-sm px-3 py-1.5': size === 'sm',
          'text-base px-4 py-2': size === 'md',
          'text-lg px-6 py-3': size === 'lg',
          
          // Width styles
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
