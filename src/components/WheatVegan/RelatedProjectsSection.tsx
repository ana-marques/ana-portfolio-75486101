
import React from "react";
import { Link, useLocation } from "react-router-dom";

const RelatedProjectsSection = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define all projects
  const allProjects = [
    {
      title: "Wheat a Vegan - Plant-Based Platform",
      image: "/lovable-uploads/60a4ad50-16b1-4117-bcf7-a5ed528bb4ba.png",
      link: "/project/wheat-vegan"
    },
    {
      title: "Circful - Leadership Development Platform",
      image: "/lovable-uploads/5599020a-7ffc-47d3-b337-bfa2720a259d.png",
      link: "/project/circful"
    },
    {
      title: "Tacknest - Business Creation Platform",
      image: "/lovable-uploads/2c7a247e-9a31-472e-99af-2e98f397369f.png",
      link: "/project/tacknest"
    }
  ];

  // Filter out current project to show only related ones
  const relatedProjects = allProjects.filter(project => !currentPath.includes(project.link.split("/").pop() || ""));

  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">More Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((project, index) => (
            <Link key={index} to={project.link} className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjectsSection;
