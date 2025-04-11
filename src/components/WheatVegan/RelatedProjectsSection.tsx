
import React from "react";
import { Link } from "react-router-dom";

const RelatedProjectsSection = () => {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">More Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/project/tacknest" className="group">
            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="/lovable-uploads/2c7a247e-9a31-472e-99af-2e98f397369f.png" 
                alt="Tacknest Business Creation Platform" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-bold">Tacknest - Business Creation Platform</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjectsSection;
