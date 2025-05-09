
import React, { useState } from "react";
import PrototypeCard from "./PrototypeCard";

const LandingPageTab = () => {
  // Simplified component that uses direct image reference
  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        <img
          src="/lovable-uploads/e9f07b7a-b740-4ba7-a57a-487e938951ee.png"
          alt="Wheat a Vegan Landing Page"
          className="w-full h-auto object-contain"
          style={{ maxWidth: '100%' }}
          loading="eager"
        />
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
