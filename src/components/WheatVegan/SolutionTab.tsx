
import React from "react";
import { Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SolutionTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-muted-foreground">
          Wheat a Vegan was designed as a comprehensive platform addressing the key barriers to plant-based diets through three core offerings:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-green-100 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="font-bold text-center mb-3">Subscription Boxes</h3>
            <p className="text-muted-foreground text-sm">
              Curated monthly boxes with high-quality vegan products, designed to gradually introduce users to plant-based alternatives that match their taste preferences.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-green-100 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="font-bold text-center mb-3">Recipe Platform</h3>
            <p className="text-muted-foreground text-sm">
              Culturally-diverse recipes that recreate familiar dishes with plant-based ingredients, respecting traditional flavors while introducing vegan alternatives.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-green-100 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="font-bold text-center mb-3">Community Hub</h3>
            <p className="text-muted-foreground text-sm">
              A supportive community where users can share experiences, get advice from nutritionists, and access resources to support their plant-based journey.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Core Design Principles</h3>
        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
          <li><span className="font-medium">Gradual Transition:</span> Systems designed to help users ease into plant-based eating rather than making abrupt changes</li>
          <li><span className="font-medium">Culturally Sensitive:</span> Respecting diverse food traditions and creating alternatives that preserve cultural identity</li>
          <li><span className="font-medium">Educational:</span> Providing nutritional information and cooking techniques to build user confidence</li>
          <li><span className="font-medium">Community-Driven:</span> Creating support networks to sustain long-term behavior change</li>
        </ul>
      </div>
    </div>
  );
};

export default SolutionTab;

