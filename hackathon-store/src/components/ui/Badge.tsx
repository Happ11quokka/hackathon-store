interface BadgeProps {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

const variantStyles = {
  default: 'bg-surface text-secondary',
  primary: 'bg-brand-subtle text-brand-600',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  danger: 'bg-red-50 text-red-700',
};

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${variantStyles[variant]}`}>
      {label}
    </span>
  );
}
