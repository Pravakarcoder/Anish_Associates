import { BarChart4 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <BarChart4 className="h-8 w-8 mr-2" />
      <span className="font-bold text-lg">NFA Partners</span>
    </div>
  );
}