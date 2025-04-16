
import React from "react";
import MobileFriendlyTabs from "@/components/MobileFriendlyTabs";
import OverviewTab from "./Tabs/OverviewTab";
import ProblemTab from "./Tabs/ProblemTab";
import SolutionTab from "./Tabs/SolutionTab";
import OutcomeTab from "./Tabs/OutcomeTab";

const ProjectContentSection = () => {
  const tabs = [
    { value: "overview", label: "Overview", content: <OverviewTab /> },
    { value: "problem", label: "Problem", content: <ProblemTab /> },
    { value: "solution", label: "Solution", content: <SolutionTab /> },
    { value: "outcome", label: "Outcome", content: <OutcomeTab /> },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <MobileFriendlyTabs defaultValue="overview" tabs={tabs} className="w-full" />
      </div>
    </section>
  );
};

export default ProjectContentSection;
