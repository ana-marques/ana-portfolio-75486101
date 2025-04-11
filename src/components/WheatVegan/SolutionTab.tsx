
import React from "react";
import { Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
      
      <div className="pt-4">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/4b67fc29-82ae-45df-873a-60b6db1070f1.png" 
                    alt="Wheat a Vegan logo" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/ff12a400-00f3-484c-a85d-b9a84c548164.png" 
                    alt="For your health statistics" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/16974563-f5b8-48e8-afaf-dd0163596a99.png" 
                    alt="For the environment statistics" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/09343b8e-815e-4fb1-a4db-c387ab31a41c.png" 
                    alt="For the animals statistics" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/94689028-e8da-41c9-9d7f-605c94703aee.png" 
                    alt="Platform screenshot" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/f4389673-49e4-4fc9-8e32-4a43189a1aa8.png" 
                    alt="Platform mobile screenshot" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/6e4a678b-d6a0-492e-96b9-94f4db83c399.png" 
                    alt="Platform features" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default SolutionTab;
