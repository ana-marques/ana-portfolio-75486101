
import React, { useState } from "react";
import PrototypeCard from "./PrototypeCard";
import { wheatVeganLandingPageSvg } from "@/utils/svgAssets";

const LandingPageTab = () => {
  const [svgLoadError, setSvgLoadError] = useState(false);
  
  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {!svgLoadError ? (
          <img
            src={`data:image/svg+xml;base64,${wheatVeganLandingPageSvg}`}
            alt="Wheat a Vegan Landing Page"
            className="w-full h-auto object-contain"
            onError={() => setSvgLoadError(true)}
            style={{ 
              maxWidth: '100%' 
            }}
            loading="eager"
          />
        ) : (
          <img
            src="/lovable-uploads/e9f07b7a-b740-4ba7-a57a-487e938951ee.png"
            alt="Wheat a Vegan Landing Page"
            className="w-full h-auto object-contain"
            style={{ 
              imageRendering: "auto",
              maxWidth: '100%' 
            }}
            loading="eager"
          />
        )}
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
