
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Financial Wellness App Redesign",
    category: "UX/UI Design",
    description:
      "A comprehensive redesign that improved user engagement by 37% and simplified complex financial data into digestible, actionable insights for users.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Healthcare Patient Portal",
    category: "Product Design",
    description:
      "Led the design of an intuitive patient portal that streamlined appointment scheduling and medical record access, resulting in a 42% reduction in support calls.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "E-commerce Marketplace Platform",
    category: "UX Strategy",
    description:
      "Redesigned the user experience for a global marketplace, implementing a customer-centric approach that increased conversion rates by 28% and reduced cart abandonment.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Selected Work
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto text-balance opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Case studies showcasing my approach to solving design challenges and
            creating impactful digital products.
          </p>
        </div>

        <div className="divide-y divide-muted">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
