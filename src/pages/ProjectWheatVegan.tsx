
import React, { useEffect } from "react";
import HeroSection from "@/components/WheatVegan/HeroSection";
import ProjectOverviewSection from "@/components/WheatVegan/ProjectOverviewSection";
import ConceptSection from "@/components/WheatVegan/ConceptSection";
import ResearchSolutionSection from "@/components/WheatVegan/ResearchSolutionSection";
import PrototypesSection from "@/components/WheatVegan/PrototypesSection";
import BrandAssetsSection from "@/components/WheatVegan/BrandAssetsSection";
import NextStepsSection from "@/components/WheatVegan/NextStepsSection";
import RelatedProjectsSection from "@/components/WheatVegan/RelatedProjectsSection";

const ProjectWheatVegan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Project Overview */}
      <ProjectOverviewSection />
      
      {/* Concept Section */}
      <ConceptSection />
      
      {/* Process & Research Tabs */}
      <ResearchSolutionSection />
      
      {/* Prototypes Section */}
      <PrototypesSection />
      
      {/* Brand Assets Section */}
      <BrandAssetsSection />
      
      {/* Next Steps Section */}
      <NextStepsSection />

      {/* Related Projects */}
      <RelatedProjectsSection />
    </div>
  );
};

export default ProjectWheatVegan;
