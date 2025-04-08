
import React from "react";

const ConceptSection = () => {
  return (
    <div className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10 text-green-500">Concept</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-3xl font-medium leading-snug">
              Online platform with vegan boxes, monthly subscriptions and vegan recipes
            </p>
            <p className="mt-6 text-muted-foreground">
              100% cruelty free, 100% plant-based. Wheat a Vegan?! boxes are designed to share the best vegan food available.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/560582db-7b75-4006-9631-905715e40e0e.png"
              alt="Wheat a Vegan Logo Concept"
              className="max-w-[300px]"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-medium text-green-500 mb-3">How Might We</h3>
            <p className="text-5xl font-bold">make vegan food be super tasteful, healthy and available?</p>
            <p className="text-xl text-green-500 mt-6">Problem</p>
            <p className="mt-4 text-muted-foreground">
              Despite growing awareness of plant-based benefits, adoption remains low due to taste dissatisfaction, 
              cultural barriers, and lack of knowledge about preparation. Many try vegan options once, have a negative 
              experience, and never return. Our platform aims to solve these challenges through curated subscriptions, 
              culturally-sensitive recipes, and community support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptSection;
