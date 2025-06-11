
import React from 'react';

const OfflineTab = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Printable Ring Sizer</h3>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Placeholder for printable ring sizer image */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900">Printable Ring Sizer</h4>
            <p className="text-gray-600">
              Download and print our ring sizer at 100% scale (no scaling) on standard letter paper.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
          Download PDF Ring Sizer
        </button>
        
        <div className="text-sm text-gray-600 space-y-2">
          <h4 className="font-medium text-gray-900">Instructions:</h4>
          <ol className="list-decimal list-inside space-y-1">
            <li>Download and print the ring sizer at 100% scale</li>
            <li>Cut out the ring sizer along the dotted lines</li>
            <li>Insert the pointed end through the slot</li>
            <li>Place around your finger and adjust for comfort</li>
            <li>Read the size where the sizer overlaps</li>
          </ol>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div className="text-sm text-yellow-800">
              <strong>Important:</strong> Make sure to print at 100% scale. Do not fit to page or scale to fit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineTab;
