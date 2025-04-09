
import React from "react";
import { Leaf } from "lucide-react";

const PersonaSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Persona</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Persona characteristics */}
            <div className="space-y-5">
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
              
              <div className="flex items-start gap-3">
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

export default PersonaSection;
