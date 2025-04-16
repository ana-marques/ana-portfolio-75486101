
import React from "react";
import { BarChart3, LineChart, Sparkles } from "lucide-react";

const SmartReports = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Smart reports with <span className="text-amber-500">personalized insights</span></h2>
      <p className="text-xl mb-8">Managers get total visibility on their team engagement</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-[#FDB75A] mt-1">
              <BarChart3 className="size-6" />
            </div>
            <p className="text-lg">
              Understand your strengths and weaknesses as a manager and company
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-[#FDB75A] mt-1">
              <LineChart className="size-6" />
            </div>
            <p className="text-lg">
              Understand the engagement level of each individual and exactly why
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-[#FDB75A] mt-1">
              <Sparkles className="size-6" />
            </div>
            <p className="text-lg">
              Get action points for each individual and the retention driver you need to work on
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/93734806-6dfa-4bb5-9606-67e2b7416103.png" 
            alt="Circful Dashboard Visualization" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SmartReports;
