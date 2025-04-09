
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LandingPageTab from "./Prototypes/LandingPageTab";
import RecipePageTab from "./Prototypes/RecipePageTab";
import MobileAppTab from "./Prototypes/MobileAppTab";
import WireframesTab from "./Prototypes/WireframesTab";
import FigmaTab from "./Prototypes/FigmaTab";

const PrototypesSection = () => {
  return (
    <div className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Prototypes</h2>
        
        <Tabs defaultValue="landing" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            <TabsTrigger value="landing">Landing Page</TabsTrigger>
            <TabsTrigger value="recipe">Recipe Page</TabsTrigger>
            <TabsTrigger value="mobile">Mobile App</TabsTrigger>
            <TabsTrigger value="wireframes">Wireframes</TabsTrigger>
            <TabsTrigger value="figma">Figma</TabsTrigger>
          </TabsList>
          
          <TabsContent value="landing">
            <LandingPageTab />
          </TabsContent>
          
          <TabsContent value="recipe">
            <RecipePageTab />
          </TabsContent>
          
          <TabsContent value="mobile">
            <MobileAppTab />
          </TabsContent>
          
          <TabsContent value="wireframes">
            <WireframesTab />
          </TabsContent>
          
          <TabsContent value="figma">
            <FigmaTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PrototypesSection;
