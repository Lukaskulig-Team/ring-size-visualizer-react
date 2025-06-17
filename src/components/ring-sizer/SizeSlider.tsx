
import React from 'react';

interface SizeSliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  label: string;
  unit: string;
}

const SizeSlider = ({ value, onChange, min, max, label, unit }: SizeSliderProps) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-semibold" style={{ color: '#D4AF37' }}>
          {value.toFixed(2)} {unit}
        </span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={0.01}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none 
                     [&::-webkit-slider-thumb]:h-5 
                     [&::-webkit-slider-thumb]:w-5 
                     [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:border-2 
                     [&::-webkit-slider-thumb]:border-white 
                     [&::-webkit-slider-thumb]:shadow-md 
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:h-5 
                     [&::-moz-range-thumb]:w-5 
                     [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:border-2 
                     [&::-moz-range-thumb]:border-white 
                     [&::-moz-range-thumb]:shadow-md 
                     [&::-moz-range-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:border-none"
          style={{
            '--webkit-slider-thumb-bg': '#D4AF37',
            '--moz-range-thumb-bg': '#D4AF37',
          } as React.CSSProperties}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              background-color: #D4AF37;
            }
            input[type="range"]::-moz-range-thumb {
              background-color: #D4AF37;
            }
          `}
        </style>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
};

export default SizeSlider;
