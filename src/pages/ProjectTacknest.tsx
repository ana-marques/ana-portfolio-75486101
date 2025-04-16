
import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectContentSection from "@/components/Tacknest/ProjectContentSection";

const ProjectTacknest: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group w-fit"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div>
              <span className="px-3 py-1 text-xs font-medium tracking-wider text-foreground/80 uppercase bg-secondary rounded-full">
                UX/UI Case Study
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Tacknest - The Easiest Way to Create Your Business
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mt-4">
              A comprehensive platform designed to simplify business creation, offering entrepreneurs an intuitive solution to navigate the complex process of establishing their venture.
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full py-8">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/2c7a247e-9a31-472e-99af-2e98f397369f.png"
              alt="Tacknest Platform Preview"
              className="w-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <ProjectContentSection />

      {/* Related Projects */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">More Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/project/wheat-vegan" className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src="/lovable-uploads/60a4ad50-16b1-4117-bcf7-a5ed528bb4ba.png" 
                  alt="Wheat a Vegan - Plant-Based Platform" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">Wheat a Vegan - Plant-Based Platform</h3>
            </Link>
            
            <Link to="/project/circful" className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src="/lovable-uploads/5599020a-7ffc-47d3-b337-bfa2720a259d.png" 
                  alt="Circful - Leadership Development Platform" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">Circful - Leadership Development Platform</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTacknest;
