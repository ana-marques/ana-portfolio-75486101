
import React from "react";

const SmartReports = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Smart reports with <span className="text-amber-500">personalized insights</span></h2>
      <p className="text-xl mb-8">Managers get total visibility on their team engagement</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-blue-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M4 12h16"/><path d="M9 18h6"/><path d="M10 12v6"/></svg>
            </div>
            <p className="text-lg">
              Understand your strengths and weaknesses as a manager and company
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-blue-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-6"/><path d="M12 15v-3"/><path d="M15 15v-6"/></svg>
            </div>
            <p className="text-lg">
              Understand the engagement level of each individual and exactly why
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-blue-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
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
