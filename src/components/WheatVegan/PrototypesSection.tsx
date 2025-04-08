
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const PrototypesSection = () => {
  return (
    <div className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Prototypes</h2>
        
        <Tabs defaultValue="landing" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="landing">Landing Page</TabsTrigger>
            <TabsTrigger value="recipe">Recipe Page</TabsTrigger>
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
                    className="w-full object-contain rounded-md mb-6"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Landing Page - Sign Up</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/d9957c50-e94b-4283-b94c-57f1f436bcf7.png"
                    alt="Landing Page Sign Up"
                    className="w-full object-contain rounded-md"
                  />
                  <div className="mt-4 text-sm text-muted-foreground">
                    Customers can sign up to get 10% off on their first order.
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Landing Page - Vegan Box Products</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/c8c77856-6fa1-43a9-9f69-6cacff7eedd8.png"
                    alt="Landing Page Vegan Box Products"
                    className="w-full object-contain rounded-md"
                  />
                  <div className="mt-4 text-sm text-muted-foreground">
                    Display of various subscription options with 3 and 6-month plans.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Landing Page - Free Shipping</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/5de4c35b-ce3c-4e4e-b62f-3a6ad5416a3c.png"
                    alt="Landing Page Free Shipping"
                    className="w-full object-contain rounded-md"
                  />
                  <div className="mt-4 text-sm text-muted-foreground">
                    Free shipping promotion for orders over €50.
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-50/50 p-6 border-b">
                  <h3 className="text-2xl font-bold">High-Fidelity</h3>
                  <p className="text-xl text-green-500">Landing Page - Product Selection</p>
                </div>
                <div className="p-6">
                  <img
                    src="/lovable-uploads/f1fed275-bf52-4277-aad4-6cd7e51c0531.png"
                    alt="Landing Page Product Selection"
                    className="w-full object-contain rounded-md"
                  />
                  <div className="mt-4 text-sm text-muted-foreground">
                    Detailed view of available vegan box options with pricing.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recipe" className="space-y-8">
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
