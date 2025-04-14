
import { Star, SparklesIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const StarIcon = ({ 
  className, 
  size = 20, 
  animationDelay = "0s" 
}: { 
  className?: string;
  size?: number;
  animationDelay?: string;
}) => (
  <span 
    className={cn("star", className)} 
    style={{ animationDelay }}
  >
    <Star size={size} fill="currentColor" />
  </span>
);

export const SparkleIcon = ({ 
  className, 
  size = 20, 
  animationDelay = "0s" 
}: { 
  className?: string;
  size?: number;
  animationDelay?: string;
}) => (
  <span 
    className={cn("star", className)} 
    style={{ animationDelay }}
  >
    <SparklesIcon size={size} />
  </span>
);

export const CurvedLine = ({ className }: { className?: string }) => (
  <svg 
    className={cn("text-mauve/20", className)} 
    width="150" 
    height="50" 
    viewBox="0 0 150 50" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0,25 Q37.5,0 75,25 T150,25" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    />
  </svg>
);

export const CircleBackground = ({ className }: { className?: string }) => (
  <div 
    className={cn(
      "absolute rounded-full bg-gradient-to-br from-mauve/30 to-mauve/5 blur-3xl", 
      className
    )}
  />
);
