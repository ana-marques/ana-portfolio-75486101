
import React from "react";
import MobileFriendlyTabs from "@/components/MobileFriendlyTabs";
import ProblemTab from "./ProblemTab";
import SolutionTab from "./SolutionTab";
import PersonaTab from "./PersonaTab";

const ResearchSolutionSection = () => {
  const tabs = [
    { value: "problem", label: "The Problem", content: <ProblemTab /> },
    { value: "persona", label: "Persona", content: <PersonaTab /> },
    { value: "solution", label: "The Solution", content: <SolutionTab /> },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Research & Solution</h2>
        <MobileFriendlyTabs defaultValue="problem" tabs={tabs} className="w-full" />
      </div>
    </section>
  );
};

export default ResearchSolutionSection;
