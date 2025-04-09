
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const LandingPageTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default LandingPageTab;
