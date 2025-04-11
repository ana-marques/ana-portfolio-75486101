
import React from "react";
import { Leaf } from "lucide-react";

const PersonaTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">User Persona</h2>
        <p className="text-muted-foreground mb-6">
          Based on our research findings, we developed a primary persona to guide our design decisions.
        </p>
        
        <div className="w-full">
          <div className="space-y-8">
            {/* Persona characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Leaf className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-xl font-medium">Vegan</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Leaf className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-xl font-medium">College Student</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Leaf className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-xl font-medium">Doesn't have a lot of time to look for new vegan products</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Leaf className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-xl font-medium">Loves to cook, but ends up eating always with the same taste</p>
              </div>
              
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="mt-1">
                  <Leaf className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-xl font-medium">Would like to have access to more ideas and to new products available in the market</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaTab;
