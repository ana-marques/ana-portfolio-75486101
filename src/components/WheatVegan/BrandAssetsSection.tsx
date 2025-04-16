
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BrandAssetsSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-4xl font-bold">Wheat a vegan?!</h2>
          <p className="text-2xl text-green-500 font-medium">Brand Assets</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Logo</h3>
              <div className="flex justify-center p-4 bg-white rounded-lg shadow-sm">
                <img
                  src="/lovable-uploads/6afafae1-24fd-44df-8c4d-ea62c63c0152.png"
                  alt="Wheat a Vegan Logo"
                  className="max-w-[200px]"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Colors</h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="h-16 rounded-md bg-[#8DD8A0]"></div>
                <div className="h-16 rounded-md bg-[#2D3B31]"></div>
                <div className="h-16 rounded-md bg-[#7D7D8C]"></div>
                <div className="h-16 rounded-md bg-[#705A65]"></div>
                <div className="h-16 rounded-md bg-[#752622]"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-slate-50 lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Typography</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold">Poppins Semi Bold</h4>
                  <p className="text-sm text-muted-foreground">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789!@#$%^&</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold">Poppins Regular</h4>
                  <p className="text-sm text-muted-foreground">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789!@#$%^&</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold">Shadows Into Light</h4>
                  <p className="text-sm text-muted-foreground">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789!@#$%^&</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Illustrations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm flex justify-center items-center">
                  <img src="/lovable-uploads/375abc2c-a5df-44e0-98da-51fcc0241049.png" alt="Leaves Illustration" className="h-20 object-contain" />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm flex justify-center items-center">
                  <img src="/lovable-uploads/375abc2c-a5df-44e0-98da-51fcc0241049.png" alt="Box with Plant Illustration" className="h-20 object-contain" />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm flex justify-center items-center">
                  <img src="/lovable-uploads/f656561f-4d1a-40c1-91ff-3af22b2066cc.png" alt="Avocado Illustration" className="h-20 object-contain" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Boxes</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm flex flex-col items-center">
                  <img src="/lovable-uploads/375abc2c-a5df-44e0-98da-51fcc0241049.png" alt="March Vegan Box" className="h-24 object-contain mb-2" />
                  <p className="text-sm font-medium">March Vegan Box</p>
                  <p className="text-xs text-green-500">€25.00</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm flex flex-col items-center">
                  <img src="/lovable-uploads/560582db-7b75-4006-9631-905715e40e0e.png" alt="Easter Box" className="h-24 object-contain mb-2" />
                  <p className="text-sm font-medium">Easter Surprise Box</p>
                  <p className="text-xs text-green-500">€35.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 flex justify-center">
          <img
            src="/lovable-uploads/6afafae1-24fd-44df-8c4d-ea62c63c0152.png"
            alt="Wheat a Vegan Logo Green Background"
            className="max-w-[300px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandAssetsSection;
