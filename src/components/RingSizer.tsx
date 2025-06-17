import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import WithRingTab from "./ring-sizer/WithRingTab";
import WithFingerTab from "./ring-sizer/WithFingerTab";
import OfflineTab from "./ring-sizer/OfflineTab";

type TabType = "ring" | "finger" | "offline";

const RingSizer = () => {
  const [activeTab, setActiveTab] = useState<TabType>("ring");
  const { t } = useLanguage();

  const tabs = [
    { id: "ring" as TabType, label: t("tab.with.ring") },
    { id: "finger" as TabType, label: t("tab.with.finger") },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "ring":
        return <WithRingTab />;
      case "finger":
        return <WithFingerTab />;
      default:
        return <WithRingTab />;
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6"
      style={{ backgroundColor: "#f4f3ea" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t("ring.sizer")}
        </h1>
        <p className="text-gray-600">{t("ring.sizer.description")}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
              activeTab === tab.id
                ? "text-gray-900 border-b-2"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            style={activeTab === tab.id ? { borderBottomColor: "#D4AF37" } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-96">{renderTabContent()}</div>
    </div>
  );
};

export default RingSizer;
