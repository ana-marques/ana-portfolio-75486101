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
          {/* Logo Card */}
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Logo</h3>
              <div className="flex justify-center p-4 bg-white rounded-lg shadow-sm">
                <img
                  src="/lovable-uploads/3b6445ae-d35d-4883-aaf9-0d3b1f3753dc.png"
                  alt="Wheat a Vegan Logo"
                  className="max-w-[200px]"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Colors Card */}
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
          
          {/* Typography Card */}
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
          
          {/* Illustrations Card - Increased size */}
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Illustrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-sm flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/e167596d-ec46-44cc-9b6a-ca12dd0c3f38.png" 
                    alt="Carrot and Greens Illustration" 
                    className="h-36 w-auto object-contain" 
                  />
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/b6fcac76-7eb2-423e-8f93-b81d2886edff.png" 
                    alt="Leaves and Avocado Illustration" 
                    className="h-36 w-auto object-contain" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Boxes Card */}
          <Card className="border-none shadow-sm bg-slate-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Boxes</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* March Vegan Box */}
                <div className="p-3 bg-[#E0F8E9] rounded-lg shadow-sm flex flex-col">
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/b2f02c71-011e-46ed-b422-0d039dbb6e67.png" 
                      alt="March Vegan Box" 
                      className="h-36 object-contain mx-auto" 
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div>
                      <div className="flex mb-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <p className="text-sm font-medium text-[#8B3035]">March<br />Vegan Box</p>
                    </div>
                    <p className="text-[#8B3035] font-semibold">€25.00</p>
                  </div>
                </div>

                {/* Easter Surprise Box */}
                <div className="p-3 bg-[#FBE1F1] rounded-lg shadow-sm flex flex-col">
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/108afd3c-75d2-48a8-bb95-679c2fc36188.png" 
                      alt="Easter Surprise Box" 
                      className="h-36 object-contain mx-auto" 
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div>
                      <div className="flex mb-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <p className="text-sm font-medium text-[#B25889]">Easter<br />Surprise Box</p>
                    </div>
                    <p className="text-[#B25889] font-semibold">€35.00</p>
                  </div>
                </div>

                {/* 3 Month Subscription Box */}
                <div className="p-3 bg-[#E8E8FF] rounded-lg shadow-sm flex flex-col">
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/881cad04-8752-46da-93c6-a38ae1d26bbe.png" 
                      alt="3 Month Subscription Box" 
                      className="h-36 object-contain mx-auto" 
                    />
                  </div>
                  <div className="flex justify-between items-start mt-3">
                    <div>
                      <div className="flex mb-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <p className="text-sm font-medium text-[#63C086]">3 Month<br />Subscription<br />Vegan Box</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#63C086] font-semibold">€19.50</p>
                      <p className="text-xs text-[#63C086]">per month</p>
                    </div>
                  </div>
                </div>

                {/* 6 Month Subscription Box */}
                <div className="p-3 bg-[#F5F5F5] rounded-lg shadow-sm flex flex-col">
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/fc71ce79-8e8d-4b27-887c-f98ad1a1911b.png" 
                      alt="6 Month Subscription Box" 
                      className="h-36 object-contain mx-auto" 
                    />
                  </div>
                  <div className="flex justify-between items-start mt-3">
                    <div>
                      <div className="flex mb-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <p className="text-sm font-medium text-[#8B3035]">6 Month<br />Subscription<br />Vegan Box</p>
                    </div>
                    <p className="text-[#8B3035] font-semibold">€17.50</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 flex justify-center">
          <img
            src="/lovable-uploads/3b6445ae-d35d-4883-aaf9-0d3b1f3753dc.png"
            alt="Wheat a Vegan Logo Green Background"
            className="max-w-[300px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandAssetsSection;
