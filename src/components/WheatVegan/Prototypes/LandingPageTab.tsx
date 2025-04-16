
import React from "react";
import PrototypeCard from "./PrototypeCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { wheatVeganLandingPageSvg } from "@/utils/svgAssets";

const LandingPageTab = () => {
  // Use the PNG image as fallback in case the SVG base64 string hasn't been updated
  const useDefaultImage = wheatVeganLandingPageSvg === "YOUR_BASE64_STRING_HERE";
  
  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {useDefaultImage ? (
          <img
            src="/lovable-uploads/e9f07b7a-b740-4ba7-a57a-487e938951ee.png"
            alt="Wheat a Vegan Landing Page"
            className="w-full h-auto object-contain"
            style={{ 
              imageRendering: "auto", // Fixed the TypeScript error by using a valid value
              maxWidth: '100%' 
            }}
            loading="eager"
          />
        ) : (
          <img
            src={`data:image/svg+xml;base64,${wheatVeganLandingPageSvg}`}
            alt="Wheat a Vegan Landing Page (SVG)"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        )}
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
