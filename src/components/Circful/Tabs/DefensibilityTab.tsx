
import React from "react";

const DefensibilityTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">We're the <span className="text-amber-500">only</span> company in the space that does:</h2>
        
        <div className="space-y-6 mt-12">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <div className="text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-6"/><path d="M12 15v-3"/><path d="M15 15v-6"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Individual dynamic retention</h3>
                <p className="text-muted-foreground">
                  By using non-anonymous data and predictive algorithms we deliver the right action to be done
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <div className="text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized coaching</h3>
                <p className="text-muted-foreground">
                  By using scientific frameworks and bite-sized learning, we create the right leadership habits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">What's <span className="text-amber-500">next?</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Predictive AI</h3>
            <p className="text-muted-foreground">
              Our priority is to implement a lot more data points so we can build the smartest machine learning models to increase employee retention.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Specialists on-demand</h3>
            <p className="text-muted-foreground">
              A customer will be able to book an HR specialist for any specific topic they need to work on. A marketplace of HR specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefensibilityTab;
