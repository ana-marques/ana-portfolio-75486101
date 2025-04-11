
import React from "react";

const ProjectOverviewSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Project Overview</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Wheat a Vegan is an online platform that aims to break down barriers to plant-based diets through curated vegan subscription boxes, recipe collections, and community support. The project addresses common challenges like taste preferences, cultural adaptations, and knowledge gaps that prevent people from adopting more plant-based foods.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">My Role</h3>
            <p className="text-muted-foreground">Product Designer</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Project Timeline</h3>
            <p className="text-muted-foreground">3 months</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Tools Used</h3>
            <p className="text-muted-foreground">Figma, Miro, InVision</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Team</h3>
            <p className="text-muted-foreground">1 Product Designer, 1 Researcher, 2 Developers</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-2">Project Goals</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>Create an engaging platform to make vegan food more accessible</li>
            <li>Address common barriers to plant-based diets identified through user research</li>
            <li>Design subscription boxes that introduce users to vegan alternatives gradually</li>
            <li>Develop a recipe system that respects cultural food preferences</li>
            <li>Build community features to support users in their plant-based journey</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
