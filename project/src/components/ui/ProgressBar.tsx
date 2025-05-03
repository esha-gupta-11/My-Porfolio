import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  showValue?: boolean;
  label?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  showValue = true,
  label,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-[#3F2305] dark:text-[#F5F5DC]">{label}</span>
          {showValue && (
            <span className="text-sm font-medium text-[#3F2305] dark:text-[#F5F5DC]">{value}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-[#F5F5DC] dark:bg-[#3F2305]/30 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-[#8B5A2B] h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;