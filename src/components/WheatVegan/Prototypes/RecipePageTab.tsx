
import React from "react";
import PrototypeCard from "./PrototypeCard";

const RecipePageTab = () => {
  return (
    <div className="space-y-8">
      <PrototypeCard preserveImageQuality={true}>
        <img
          src="/lovable-uploads/900e35b7-387f-47a1-a3bc-cb5cc76371e2.png"
          alt="Super easy & zesty vegan tacos recipe page"
          className="w-full h-auto object-contain"
          style={{ maxWidth: '100%' }}
          loading="eager"
        />
      </PrototypeCard>
    </div>
  );
};

export default RecipePageTab;
