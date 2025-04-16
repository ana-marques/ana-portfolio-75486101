
import React, { useState, useEffect } from "react";
import PrototypeCard from "./PrototypeCard";
import { wheatVeganLandingPageSvg } from "@/utils/svgAssets";

const LandingPageTab = () => {
  const [useFallbackImage, setUseFallbackImage] = useState(false);
  const [svgDataUrl, setSvgDataUrl] = useState<string | null>(null);
  
  useEffect(() => {
    try {
      // Try to decode the SVG content
      const svgContent = atob(wheatVeganLandingPageSvg);
      
      // Log the first part of the SVG content for debugging
      console.log("SVG content first 50 chars:", svgContent.substring(0, 50));
      
      // Check if it's a valid SVG
      if (!svgContent.startsWith('<svg') && !svgContent.startsWith('<?xml')) {
        console.error("SVG content format is invalid:", svgContent.substring(0, 20));
        setUseFallbackImage(true);
        return;
      }
      
      // Create a data URL
      const dataUrl = `data:image/svg+xml;base64,${wheatVeganLandingPageSvg}`;
      setSvgDataUrl(dataUrl);
    } catch (error) {
      console.error("Error processing SVG:", error);
      setUseFallbackImage(true);
    }
  }, []);
  
  const handleImageError = () => {
    console.error("SVG failed to load, switching to PNG fallback");
    setUseFallbackImage(true);
  };

  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {!useFallbackImage && svgDataUrl ? (
          <img
            src={svgDataUrl}
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
              Using PNG fallback - SVG could not be loaded
            </div>
          </div>
        )}
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
