
import React from "react";

const CoachingSection = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Bite-sized coaching to build <span className="text-amber-500">super managers</span></h2>
      <p className="text-xl mb-8">Smart "nudges" are delivered to managers to help them improve engagement in the most efficient way</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M12 22V2"/><path d="M20 12H4"/></svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Science based action points for habit creation</h3>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-6"/><path d="M12 15v-3"/><path d="M15 15v-6"/></svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Actionable insights for stronger leadership</h3>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Personalized to each manager, easy to implement</h3>
        </div>
      </div>
    </div>
  );
};

export default CoachingSection;
