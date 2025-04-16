
import React from "react";
import { BarChart4, BookUser, Brain, Rocket } from "lucide-react";

const DefensibilityTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">We're the <span className="text-amber-500">only</span> company in the space that does:</h2>
        
        <div className="space-y-6 mt-12">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <div className="text-[#FDB75A]">
                  <BarChart4 className="size-6" />
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
                <div className="text-[#FDB75A]">
                  <BookUser className="size-6" />
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
