
import React from "react";

const SolutionTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-muted-foreground">
          Tacknest was designed as an all-in-one platform that guides entrepreneurs through every step of the business creation process. The platform combines intelligent workflows, automated document processing, and contextual guidance to make business creation accessible to everyone, regardless of their previous experience.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
          <li>Step-by-step guided workflows customized to specific business types</li>
          <li>Automated document generation and filing</li>
          <li>Integrated legal compliance checks</li>
          <li>Business plan creation tools and templates</li>
          <li>Financial projection calculators and budgeting guides</li>
          <li>Marketplace for additional professional services</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Design Process</h3>
        <p className="text-muted-foreground">
          Our design process involved extensive user research, competitive analysis, and iterative prototyping. We focused on creating clear information architecture and intuitive navigation patterns that would guide users naturally through the complex process. The UI design emphasized clarity, with progressive disclosure of information to prevent overwhelming users.
        </p>
      </div>
    </div>
  );
};

export default SolutionTab;
