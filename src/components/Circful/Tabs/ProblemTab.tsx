
import React from "react";

const ProblemTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Solving <span className="text-amber-500">3 big hidden</span> problems</h2>
        <p className="text-xl mb-6">
          Increasing engagement levels and retention by 18%
        </p>
      </div>
      
      <div className="grid gap-6">
        <div className="p-6 rounded-lg bg-amber-50/70 border border-amber-100">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Churn</h3>
              <p className="text-muted-foreground">
                Churn and lack of engagement are expensive and most companies have no data on both
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-amber-100/50 border border-amber-200">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M16 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-muted-foreground">
                Managers are the biggest influence on employee engagement, and most lack leadership skills
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-purple-50/70 border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalization</h3>
              <p className="text-muted-foreground">
                Engagement is very individual, while HR initiatives are one-size-fits-all and ineffective
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemTab;
