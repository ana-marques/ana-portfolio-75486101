
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  index,
  link = "#",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    if (link.startsWith("/")) {
      navigate(link);
    } else if (link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={cn(
        "group flex flex-col lg:flex-row gap-8 py-16 opacity-0",
        index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right",
        index % 2 !== 0 && "lg:flex-row-reverse"
      )}
      style={{
        animationDelay: `${0.2 + index * 0.1}s`,
        animationFillMode: "forwards",
      }}
    >
      {/* Image Section */}
      <div className="lg:w-3/5 overflow-hidden rounded-lg">
        <div
          className="block relative overflow-hidden group cursor-pointer"
          onClick={handleLinkClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className={cn(
                "w-full h-full object-cover object-left transition-transform duration-700 ease-out", 
                isHovered && "scale-105"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-2/5 flex flex-col justify-center">
        <div className="mb-3">
          <span className="px-2.5 py-1 text-xs font-medium tracking-wider text-foreground/80 uppercase bg-secondary rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 text-balance">{description}</p>
        <div
          onClick={handleLinkClick}
          className="inline-flex items-center text-foreground font-medium group/link cursor-pointer"
        >
          <span className="relative">
            View Project
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current transform origin-right scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100 group-hover/link:origin-left"></span>
          </span>
          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

