
import React from "react";
import MobileFriendlyTabs from "@/components/MobileFriendlyTabs";
import ConceptTab from "./Tabs/ConceptTab";
import ProblemTab from "./Tabs/ProblemTab";
import SolutionTab from "./Tabs/SolutionTab";
import DefensibilityTab from "./Tabs/DefensibilityTab";
import TractionTab from "./Tabs/TractionTab";

const ProjectContentSection = () => {
  const tabs = [
    { value: "concept", label: "Concept", content: <ConceptTab /> },
    { value: "problem", label: "Problem", content: <ProblemTab /> },
    { value: "solution", label: "Solution", content: <SolutionTab /> },
    { value: "defensibility", label: "Defensibility", content: <DefensibilityTab /> },
    { value: "traction", label: "Traction", content: <TractionTab /> },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <MobileFriendlyTabs defaultValue="concept" tabs={tabs} className="w-full" />
      </div>
    </section>
  );
};

export default ProjectContentSection;
