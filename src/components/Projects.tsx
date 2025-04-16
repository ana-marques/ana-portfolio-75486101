
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Wheat a Vegan - Plant-Based Platform",
    category: "Product Design",
    description:
      "An online platform designed to make vegan food accessible and enjoyable, featuring subscription boxes, curated recipes, and a community hub aimed at overcoming common barriers to plant-based diets.",
    image: "/lovable-uploads/60a4ad50-16b1-4117-bcf7-a5ed528bb4ba.png",
    link: "/project/wheat-vegan",
  },
  {
    title: "Circful - Leadership Development Platform",
    category: "UX/UI Design",
    description:
      "A software that helps managers become effective leaders, by understanding their team members and automating leadership practices.",
    image: "/lovable-uploads/5599020a-7ffc-47d3-b337-bfa2720a259d.png",
    link: "/project/circful",
  },
  {
    title: "Tacknest - Business Creation Platform",
    category: "UX/UI Case Study",
    description:
      "A comprehensive platform designed to simplify business creation, offering entrepreneurs an intuitive solution to navigate the complex process of establishing their venture with guided workflows and support.",
    image: "/lovable-uploads/2c7a247e-9a31-472e-99af-2e98f397369f.png",
    link: "/project/tacknest",
  }
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
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
