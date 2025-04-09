
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FigmaTab = () => {
  return (
    <div className="space-y-8">
      <Card className="border-none shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-green-50/50 p-6 border-b">
            <h3 className="text-2xl font-bold">Figma Prototypes</h3>
            <p className="text-xl text-green-500">Interactive Design Prototypes</p>
          </div>
          <div className="p-6">
            <div className="space-y-8">
              <div className="border rounded-md overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <h4 className="text-lg font-medium">Landing Page Prototype</h4>
                </div>
                <div className="p-6">
                  <div className="bg-white border rounded-md p-4 mb-4">
                    <img 
                      src="/lovable-uploads/95ab8527-01df-4295-938a-30a497b04229.png"
                      alt="Landing Page Preview"
                      className="w-full h-48 object-cover object-top rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">
                      Explore the interactive landing page prototype with all user flows and interactions.
                    </p>
                    <Button variant="outline" className="w-full flex items-center gap-2" asChild>
                      <a href="https://figma.com/proto/example-landing-page" target="_blank" rel="noopener noreferrer">
                        Open in Figma <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <h4 className="text-lg font-medium">Mobile App Prototype</h4>
                </div>
                <div className="p-6">
                  <div className="bg-white border rounded-md p-4 mb-4">
                    <img 
                      src="/lovable-uploads/92dd745f-4cee-43dd-8687-5a04405f7619.png"
                      alt="Mobile App Preview"
                      className="w-full h-48 object-cover object-center rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">
                      Test the user journey through our mobile app with this interactive prototype.
                    </p>
                    <Button variant="outline" className="w-full flex items-center gap-2" asChild>
                      <a href="https://figma.com/proto/example-mobile-app" target="_blank" rel="noopener noreferrer">
                        Open in Figma <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <h4 className="text-lg font-medium">Recipe Page Prototype</h4>
                </div>
                <div className="p-6">
                  <div className="bg-white border rounded-md p-4 mb-4">
                    <img 
                      src="/lovable-uploads/ad1fa4da-f4fa-42c3-84ce-8834ec8ae844.png"
                      alt="Recipe Page Preview"
                      className="w-full h-48 object-cover object-center rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">
                      Explore the recipe browsing and detail view interactions in this detailed prototype.
                    </p>
                    <Button variant="outline" className="w-full flex items-center gap-2" asChild>
                      <a href="https://figma.com/proto/example-recipe-page" target="_blank" rel="noopener noreferrer">
                        Open in Figma <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FigmaTab;
