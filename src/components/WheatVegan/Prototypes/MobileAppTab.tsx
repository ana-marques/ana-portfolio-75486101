
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MobileAppTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default MobileAppTab;
