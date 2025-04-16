
import React from "react";
import MobileFriendlyTabs from "@/components/MobileFriendlyTabs";
import LandingPageTab from "./Prototypes/LandingPageTab";
import RecipePageTab from "./Prototypes/RecipePageTab";
import MobileAppTab from "./Prototypes/MobileAppTab";

const PrototypesSection = () => {
  const tabs = [
    { value: "landing", label: "Landing Page", content: <LandingPageTab /> },
    { value: "recipe", label: "Recipe Page", content: <RecipePageTab /> },
    { value: "mobile", label: "Mobile App", content: <MobileAppTab /> },
  ];
  
  return (
    <div className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Designs</h2>
        <MobileFriendlyTabs defaultValue="landing" tabs={tabs} className="w-full" />
      </div>
    </div>
  );
};

export default PrototypesSection;
