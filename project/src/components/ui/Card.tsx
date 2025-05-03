import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-[#3F2305] rounded-lg shadow-md overflow-hidden transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Card;