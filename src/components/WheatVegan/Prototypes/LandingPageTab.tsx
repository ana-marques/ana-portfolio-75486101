
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PrototypeCard from "./PrototypeCard";

const LandingPageTab = () => {
  return (
    <div className="space-y-8">
      <PrototypeCard 
        title="High-Fidelity" 
        subtitle="Full Landing Page Design"
      >
        <img
          src="/lovable-uploads/7793361c-60a1-4b50-9ea8-4a03fc7515db.png"
          alt="Wheat a Vegan Landing Page"
          className="w-full object-contain rounded-md"
        />
      </PrototypeCard>
    </div>
  );
};

export default LandingPageTab;
