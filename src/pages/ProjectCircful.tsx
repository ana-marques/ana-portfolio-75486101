
import React, { useEffect } from "react";
import RelatedProjectsSection from "@/components/WheatVegan/RelatedProjectsSection";
import HeroSection from "@/components/Circful/HeroSection";
import ProjectImageSection from "@/components/Circful/ProjectImageSection";
import ProjectContentSection from "@/components/Circful/ProjectContentSection";

const ProjectCircful: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Project Image */}
      <ProjectImageSection />

      {/* Project Content */}
      <ProjectContentSection />

      {/* Related Projects */}
      <RelatedProjectsSection />
    </div>
  );
};

export default ProjectCircful;
