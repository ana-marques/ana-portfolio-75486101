
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const RecipePageTab = () => {
  return (
    <div className="space-y-8">
      <Card className="border-none shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-green-50/50 p-6 border-b">
            <h3 className="text-2xl font-bold">High-Fidelity</h3>
            <p className="text-xl text-green-500">Recipe Page - Overview</p>
          </div>
          <div className="p-6">
            <img
              src="/lovable-uploads/add3bbb6-16fa-463d-bb1d-439a0e448432.png"
              alt="Recipe Page Overview"
              className="w-full object-contain rounded-md"
            />
            <div className="mt-4 text-sm text-muted-foreground">
              Recipe page showing detailed instructions for vegan meals.
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-green-50/50 p-6 border-b">
            <h3 className="text-2xl font-bold">High-Fidelity</h3>
            <p className="text-xl text-green-500">Recipe Page - Vegan Tacos</p>
          </div>
          <div className="p-6">
            <img
              src="/lovable-uploads/ad1fa4da-f4fa-42c3-84ce-8834ec8ae844.png"
              alt="Recipe Page Vegan Tacos"
              className="w-full object-contain rounded-md"
            />
            <div className="mt-4 text-sm text-muted-foreground">
              Super easy and zesty vegan tacos recipe with detailed ingredients list and preparation steps.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipePageTab;
