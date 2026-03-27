interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Card({ children, onClick, className = '' }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl bg-white shadow-sm border border-gray-100 transition-shadow hover:shadow-md ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
