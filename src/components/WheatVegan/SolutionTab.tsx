
import React from "react";
import CoreOfferingsCard from "./Solution/CoreOfferingsCard";
import DesignPrinciples from "./Solution/DesignPrinciples";

const SolutionTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-muted-foreground">
          Wheat a Vegan was designed as a comprehensive platform addressing the key barriers to plant-based diets through three core offerings:
        </p>
      </div>
      
      <CoreOfferingsCard />
      
      <DesignPrinciples />
    </div>
  );
};

export default SolutionTab;
