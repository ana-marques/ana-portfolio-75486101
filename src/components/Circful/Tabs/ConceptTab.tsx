
import React from "react";

const ConceptTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">The way companies address employee churn is broken</h2>
        <p className="text-xl text-muted-foreground">
          Circful fixes it. We're the only platform in the market that analyzes team members individually and coaches managers in a personalized way.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="font-semibold mb-2">My Role</h3>
          <p className="text-muted-foreground">Lead UX/UI Designer</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Project Timeline</h3>
          <p className="text-muted-foreground">1 year</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Tools Used</h3>
          <p className="text-muted-foreground">Figma, Miro</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Team</h3>
          <p className="text-muted-foreground">1 Designer, 1 Developer, 1 Product Manager, 1 HR Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default ConceptTab;
