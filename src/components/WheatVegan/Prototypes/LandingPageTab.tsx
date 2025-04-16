
import React, { useState, useEffect } from "react";
import PrototypeCard from "./PrototypeCard";
import { wheatVeganLandingPageSvg } from "@/utils/svgAssets";

const LandingPageTab = () => {
  const [useFallbackImage, setUseFallbackImage] = useState(false);
  
  useEffect(() => {
    // Check if the SVG is valid
    const svgContent = atob(wheatVeganLandingPageSvg);
    if (!svgContent.startsWith('<svg')) {
      console.log("SVG content appears invalid, using fallback");
      setUseFallbackImage(true);
    }
  }, []);
  
  const handleImageError = () => {
    console.log("SVG failed to load, switching to PNG fallback");
    setUseFallbackImage(true);
  };

  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {!useFallbackImage ? (
          <img
            src={`data:image/svg+xml;base64,${wheatVeganLandingPageSvg}`}
            alt="Wheat a Vegan Landing Page"
            className="w-full h-auto object-contain"
            onError={handleImageError}
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
