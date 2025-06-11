
import React, { useState } from 'react';
import WithRingTab from './ring-sizer/WithRingTab';
import WithFingerTab from './ring-sizer/WithFingerTab';
import OfflineTab from './ring-sizer/OfflineTab';

type TabType = 'ring' | 'finger' | 'offline';

const RingSizer = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ring');

  const tabs = [
    { id: 'ring' as TabType, label: 'With a Ring' },
    { id: 'finger' as TabType, label: 'With a Finger' },
    { id: 'offline' as TabType, label: 'Offline' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ring':
        return <WithRingTab />;
      case 'finger':
        return <WithFingerTab />;
      case 'offline':
        return <OfflineTab />;
      default:
        return <WithRingTab />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ring Sizer</h1>
        <p className="text-gray-600">Find your perfect ring size with our precise measurement tools</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default RingSizer;
