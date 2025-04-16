
import React, { useState, useEffect } from "react";
import PrototypeCard from "./PrototypeCard";
import { wheatVeganRecipePageSvg } from "@/utils/svgAssets";

const RecipePageTab = () => {
  const [imageState, setImageState] = useState({
    useAsset: true,
    contentType: "image/png" // Default to PNG
  });
  
  useEffect(() => {
    try {
      if (wheatVeganRecipePageSvg) {
        // Decode the content to verify it's valid
        const content = atob(wheatVeganRecipePageSvg);
        console.log("Recipe page: Base64 content is valid, length:", content.length);
        
        // Try to determine if it's PNG or SVG based on the first few bytes
        const header = content.substring(0, 20);
        console.log("Recipe page: Content header:", header.replace(/[^\x20-\x7E]/g, '?'));
        
        // Check header for PNG signature or SVG markers
        if (header.includes("PNG")) {
          console.log("Recipe page: Content appears to be PNG based on header");
          setImageState({
            useAsset: true,
            contentType: "image/png"
          });
        } 
        else if (header.includes("<svg") || header.includes("<?xml")) {
          console.log("Recipe page: Content appears to be SVG based on header");
          setImageState({
            useAsset: true,
            contentType: "image/svg+xml"
          });
        }
        else {
          console.log("Recipe page: Content type unknown, defaulting to PNG");
          setImageState({
            useAsset: true,
            contentType: "image/png"
          });
        }
      } else {
        setImageState({
          useAsset: false,
          contentType: "image/png"
        });
      }
    } catch (error) {
      console.error("Recipe page: Error with base64 content:", error);
      setImageState({
        useAsset: false,
        contentType: "image/png"
      });
    }
  }, []);
  
  const handleImageError = () => {
    console.error("Recipe page: Image failed to load from assets, switching to PNG fallback");
    setImageState(prev => ({
      ...prev,
      useAsset: false
    }));
  };

  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        {wheatVeganRecipePageSvg && imageState.useAsset ? (
          <img
            src={`data:${imageState.contentType};base64,${wheatVeganRecipePageSvg}`}
            alt="Wheat a Vegan Recipe Page"
            className="w-full h-auto object-contain"
            onError={handleImageError}
            style={{ 
              maxWidth: '100%' 
            }}
            loading="eager"
          />
        ) : (
          <img
            src="/lovable-uploads/900e35b7-387f-47a1-a3bc-cb5cc76371e2.png"
            alt="Super easy & zesty vegan tacos recipe page"
            className="w-full h-auto object-contain"
            style={{ maxWidth: '100%' }}
            loading="eager"
          />
        )}
      </PrototypeCard>
    </div>
  );
};

export default RecipePageTab;
