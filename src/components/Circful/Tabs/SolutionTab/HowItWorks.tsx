
import React from "react";
import { PieChart, ClipboardCheck, PlayCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-6">How it works</h2>
        <p className="text-xl mb-6">
          Circful <span className="text-amber-500">maximizes retention</span> through employee data and a proprietary framework, backed by science
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-6 rounded-lg border shadow-sm relative">
          <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-amber-900 font-semibold absolute -top-4 -left-2">1</div>
          <h3 className="text-xl font-semibold mb-4">Collect</h3>
          <div className="flex justify-center mb-6">
            <div className="text-[#FDB75A]">
              <PieChart className="size-8" />
            </div>
          </div>
          <p className="text-muted-foreground">
            We collect engagement data from employees through non-anonymous surveys, addressing 14 retention factors
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm relative">
          <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-amber-900 font-semibold absolute -top-4 -left-2">2</div>
          <h3 className="text-xl font-semibold mb-4">Evaluate</h3>
          <div className="flex justify-center mb-6">
            <div className="text-[#FDB75A]">
              <ClipboardCheck className="size-8" />
            </div>
          </div>
          <p className="text-muted-foreground">
            Managers get a weekly analysis for the team and each individual, plus the smartest actions to be done
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm relative">
          <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-amber-900 font-semibold absolute -top-4 -left-2">3</div>
          <h3 className="text-xl font-semibold mb-4">Act</h3>
          <div className="flex justify-center mb-6">
            <div className="text-[#FDB75A]">
              <PlayCircle className="size-8" />
            </div>
          </div>
          <p className="text-muted-foreground">
            Managers get weekly personalized coaching, structured towards building new leadership habits
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
