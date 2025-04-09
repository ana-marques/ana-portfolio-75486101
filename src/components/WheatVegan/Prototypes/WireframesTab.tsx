
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WireframesTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default WireframesTab;
