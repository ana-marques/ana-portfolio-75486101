
import React from "react";
import { GraduationCap, Lightbulb, Zap } from "lucide-react";

const CoachingSection = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Bite-sized coaching to build <span className="text-amber-500">super managers</span></h2>
      <p className="text-xl mb-8">Smart "nudges" are delivered to managers to help them improve engagement in the most efficient way</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="text-[#FDB75A]">
              <GraduationCap className="size-10" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Science based action points for habit creation</h3>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="text-[#FDB75A]">
              <Lightbulb className="size-10" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Actionable insights for stronger leadership</h3>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="text-[#FDB75A]">
              <Zap className="size-10" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Personalized to each manager, easy to implement</h3>
        </div>
      </div>
    </div>
  );
};

export default CoachingSection;
