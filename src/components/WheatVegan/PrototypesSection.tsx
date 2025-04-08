
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const PrototypesSection = () => {
  return (
    <div className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Prototypes</h2>
        
        <Tabs defaultValue="landing" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="landing">Landing Page</TabsTrigger>
            <TabsTrigger value="mobile">Mobile App</TabsTrigger>
            <TabsTrigger value="wireframes">Wireframes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="landing" className="space-y-8">
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Landing Page</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/95ab8527-01df-4295-938a-30a497b04229.png"
                    alt="Landing Page High-Fidelity Mockup"
                    className="w-full object-contain rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mobile" className="space-y-8">
            <Card className="border-none shadow-md overflow-hidden mb-8">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Mobile App - Purchase Flow</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/0a821166-6ecb-474b-af88-6ac37b0f5df2.png"
                    alt="Mobile App Checkout Flow High-Fidelity Mockup"
                    className="w-full object-contain rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden mb-8">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Mobile App - Product Selection</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/ab80cee0-2d7a-4b45-8061-eedc51359deb.png"
                    alt="Mobile App Product Selection High-Fidelity Mockup"
                    className="w-full object-contain rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Mobile App - Onboarding</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/92dd745f-4cee-43dd-8687-5a04405f7619.png"
                    alt="Mobile App Onboarding High-Fidelity Mockup"
                    className="w-full object-contain rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wireframes" className="space-y-8">
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">Wireframes</h3>
                  <p className="text-xl text-green-500">Mobile App</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/dd0a361d-a1f8-4505-8ba5-e5bb89cdec5c.png"
                    alt="Mobile App Wireframes"
                    className="w-full object-contain rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PrototypesSection;
