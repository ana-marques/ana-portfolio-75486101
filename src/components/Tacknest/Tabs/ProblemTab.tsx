
import React from "react";

const ProblemTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
        <p className="text-muted-foreground">
          Starting a business involves navigating a maze of bureaucratic processes, legal requirements, and administrative tasks that can be overwhelming for first-time entrepreneurs. Many potential business owners get discouraged by the complexity of these procedures or make costly mistakes due to lack of guidance.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Key Challenges</h3>
        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
          <li>Complex and often confusing legal requirements across different jurisdictions</li>
          <li>Disconnected processes requiring multiple platforms and services</li>
          <li>Lack of personalized guidance for different business types</li>
          <li>High costs associated with professional consultations and services</li>
          <li>Time-consuming paperwork and administrative procedures</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">User Research Findings</h3>
        <p className="text-muted-foreground">
          Through interviews with early-stage entrepreneurs, we discovered that 78% felt overwhelmed by the business creation process, and 63% had delayed launching their business due to administrative complexities. Many expressed confusion about which steps to take first and where to find reliable information specific to their business type.
        </p>
      </div>
    </div>
  );
};

export default ProblemTab;
