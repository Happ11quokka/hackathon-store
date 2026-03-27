'use client';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
}

const variantStyles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800',
  secondary: 'bg-surface text-primary border border-border hover:bg-brand-subtle',
  outline: 'border border-brand-600 text-brand-600 hover:bg-brand-subtle',
  ghost: 'text-secondary hover:bg-surface hover:text-primary',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
