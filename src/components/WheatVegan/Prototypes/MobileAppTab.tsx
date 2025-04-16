
import React from "react";
import PrototypeCard from "./PrototypeCard";

const MobileAppTab = () => {
  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        <img
          src="/lovable-uploads/becd1c0e-11ec-413f-818a-c41c440c1e8b.png"
          alt="Wheat a Vegan Mobile App UI Screens"
          className="w-full h-auto object-contain"
          style={{ maxWidth: '100%' }}
          loading="eager"
          key="mobile-app-image-refreshed"
        />
      </PrototypeCard>
    </div>
  );
};

export default MobileAppTab;
