import React, { useState, useEffect } from "react";
import PrototypeCard from "./PrototypeCard";
import { wheatVeganLandingPageSvg } from "@/utils/svgAssets";

const LandingPageTab = () => {
  const [imageState, setImageState] = useState({
    useAsset: true,
    debugInfo: "",
    contentType: "image/png" // Default to PNG
  });
  
  useEffect(() => {
    try {
      // Decode the content to verify it's valid
      const content = atob(wheatVeganLandingPageSvg);
      console.log("Base64 content is valid, length:", content.length);
      
      // Try to determine if it's PNG or SVG based on the first few bytes
      const header = content.substring(0, 20);
      console.log("Content header:", header.replace(/[^\x20-\x7E]/g, '?'));
      
      // Check header for PNG signature (often starts with PNG)
      if (header.includes("PNG")) {
        console.log("Content appears to be PNG based on header");
        setImageState({
          useAsset: true,
          debugInfo: "",
          contentType: "image/png"
        });
      } 
      // Check if it might be SVG
      else if (header.includes("<svg") || header.includes("<?xml")) {
        console.log("Content appears to be SVG based on header");
        setImageState({
          useAsset: true,
          debugInfo: "",
          contentType: "image/svg+xml"
        });
      }
      // Otherwise default to PNG
      else {
        console.log("Content type unknown, defaulting to PNG");
        setImageState({
          useAsset: true,
          debugInfo: "",
          contentType: "image/png"
        });
      }
    } catch (error) {
      console.error("Error with base64 content:", error);
      setImageState({
        useAsset: false,
        debugInfo: "",
        contentType: "image/png"
      });
    }
  }, []);
  
  const handleImageError = () => {
    console.error("Image failed to load from assets, switching to PNG fallback");
    setImageState(prev => ({
      ...prev,
      useAsset: false,
      debugInfo: ""
    }));
  };

  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {imageState.useAsset ? (
          <img
            src={`data:${imageState.contentType};base64,${wheatVeganLandingPageSvg}`}
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
          </div>
        )}
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
