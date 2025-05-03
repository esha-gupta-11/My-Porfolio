import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F2305] dark:text-[#F5F5DC] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[#6B4423] dark:text-[#D2B48C]">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-[#8B5A2B] mt-4"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;