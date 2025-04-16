
import React, { useState, useEffect } from "react";
import PrototypeCard from "./PrototypeCard";
import { wheatVeganLandingPageSvg } from "@/utils/svgAssets";

const LandingPageTab = () => {
  const [useImageFromAssets, setUseImageFromAssets] = useState(true);
  
  useEffect(() => {
    try {
      // Try to decode the content to verify it's valid
      const content = atob(wheatVeganLandingPageSvg);
      // If we get this far without an error, the base64 is at least valid
      console.log("Base64 content appears to be valid");
    } catch (error) {
      console.error("Error with base64 content:", error);
      setUseImageFromAssets(false);
    }
  }, []);
  
  const handleImageError = () => {
    console.error("Image failed to load, switching to PNG fallback");
    setUseImageFromAssets(false);
  };

  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {useImageFromAssets ? (
          <img
            src={`data:image/png;base64,${wheatVeganLandingPageSvg}`}
            alt="Wheat a Vegan Landing Page"
            className="w-full h-auto object-contain"
            onError={handleImageError}
            style={{ 
              maxWidth: '100%' 
            }}
            loading="eager"
          />
        ) : (
          <div>
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
            <div className="text-xs text-muted-foreground text-center mt-2">
              Using PNG fallback image
            </div>
          </div>
        )}
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
