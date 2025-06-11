
import React from 'react';

interface MillimeterGridProps {
  children: React.ReactNode;
  className?: string;
}

const MillimeterGrid = ({ children, className = '' }: MillimeterGridProps) => {
  return (
    <div 
      className={`relative bg-white border border-gray-300 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '3.78px 3.78px', // 1mm at 96dpi
      }}
    >
      {/* Major grid lines every 5mm */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #9ca3af 1px, transparent 1px),
            linear-gradient(to bottom, #9ca3af 1px, transparent 1px)
          `,
          backgroundSize: '18.9px 18.9px', // 5mm at 96dpi
        }}
      />
      {children}
    </div>
  );
};

export default MillimeterGrid;
