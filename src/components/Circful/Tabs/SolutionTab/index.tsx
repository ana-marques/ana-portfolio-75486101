
import React from "react";
import HowItWorks from "./HowItWorks";
import SmartReports from "./SmartReports";
import CoachingSection from "./CoachingSection";

const SolutionTab = () => {
  return (
    <div className="space-y-8">
      <HowItWorks />
      <SmartReports />
      <CoachingSection />
    </div>
  );
};

export default SolutionTab;
