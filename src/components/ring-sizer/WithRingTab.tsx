
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MillimeterGrid from './MillimeterGrid';
import SizeSlider from './SizeSlider';

const WithRingTab = () => {
  const [diameter, setDiameter] = useState<number>(17.27); // Average ring size
  const { t } = useLanguage();

  // Convert mm to pixels (assuming 96 DPI)
  const mmToPx = (mm: number) => mm * 3.78;

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <SizeSlider
          value={diameter}
          onChange={setDiameter}
          min={9.91}
          max={24.64}
          label={t('ring.diameter')}
          unit="mm"
        />
      </div>

      <MillimeterGrid className="h-96 mx-auto max-w-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="border-2 border-blue-500 rounded-full bg-blue-50 bg-opacity-30 transition-all duration-300 ease-in-out"
            style={{
              width: `${mmToPx(diameter)}px`,
              height: `${mmToPx(diameter)}px`,
            }}
          >
            {/* Ring center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full" />
          </div>
        </div>

        {/* Measurement labels */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded shadow-sm">
          <div className="text-xs text-gray-600">
            <div>{t('diameter')}: {diameter.toFixed(2)} mm</div>
            <div>{t('circumference')}: {(diameter * Math.PI).toFixed(2)} mm</div>
          </div>
        </div>
      </MillimeterGrid>

      <div className="text-center text-sm text-gray-600 max-w-md mx-auto">
        <p>{t('with.ring.instruction')}</p>
      </div>
    </div>
  );
};

export default WithRingTab;
