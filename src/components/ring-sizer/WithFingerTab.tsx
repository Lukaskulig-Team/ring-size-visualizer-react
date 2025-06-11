
import React, { useState } from 'react';
import MillimeterGrid from './MillimeterGrid';
import SizeSlider from './SizeSlider';

const WithFingerTab = () => {
  const [width, setWidth] = useState<number>(17.27); // Average finger width

  // Convert mm to pixels (assuming 96 DPI)
  const mmToPx = (mm: number) => mm * 3.78;

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <SizeSlider
          value={width}
          onChange={setWidth}
          min={9.91}
          max={24.64}
          label="Finger Width"
          unit="mm"
        />
      </div>

      <MillimeterGrid className="h-96 mx-auto max-w-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-blue-500 bg-opacity-20 border-t-2 border-b-2 border-blue-500 transition-all duration-300 ease-in-out"
            style={{
              width: '100%',
              height: `${mmToPx(width)}px`,
            }}
          >
            {/* Center line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Measurement labels */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded shadow-sm">
          <div className="text-xs text-gray-600">
            <div>Width: {width.toFixed(2)} mm</div>
            <div>Circumference: {(width * Math.PI).toFixed(2)} mm</div>
          </div>
        </div>

        {/* Finger placement guide */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-2 rounded shadow-sm">
          <div className="text-xs text-gray-600 text-center">
            Place your finger here ↑
          </div>
        </div>
      </MillimeterGrid>

      <div className="text-center text-sm text-gray-600 max-w-md mx-auto">
        <p>Place your finger horizontally across the highlighted area. Adjust the width until the blue band matches your finger's width.</p>
      </div>
    </div>
  );
};

export default WithFingerTab;
