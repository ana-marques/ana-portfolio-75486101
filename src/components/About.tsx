
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Lightbulb, 
  Compass, 
  Code, 
  PenTool, 
  Layout
} from "lucide-react";

const skills = [
  {
    icon: <Users size={20} />,
    label: "User Research",
    description: "Conducting interviews, usability studies, and analyzing data to uncover user needs."
  },
  {
    icon: <Lightbulb size={20} />,
    label: "Problem Solving",
    description: "Breaking down complex challenges into actionable, user-centered solutions."
  },
  {
    icon: <Compass size={20} />,
    label: "UX Strategy",
    description: "Aligning design decisions with business goals and user needs."
  },
  {
    icon: <PenTool size={20} />,
    label: "Visual Design",
    description: "Creating cohesive, accessible, and visually appealing interfaces."
  },
  {
    icon: <Layout size={20} />,
    label: "Design Systems",
    description: "Building scalable component libraries and documentation for consistency."
  },
  {
    icon: <Code size={20} />,
    label: "Prototyping",
    description: "Developing interactive prototypes to validate concepts and interactions."
  }
];

const About: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-secondary/50"
    >
      <div className="container px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Content */}
          <div>
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-6 opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              About Me
            </h2>
            <div
              className={cn(
                "space-y-5 text-muted-foreground opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <p>
                With over 8 years of experience in product design, I've had the privilege of working across diverse industries—from fintech and healthcare to e-commerce and SaaS platforms.
              </p>
              <p>
                My design philosophy is grounded in the belief that exceptional products emerge at the intersection of user needs, business goals, and technological possibilities. I excel at translating complex requirements into intuitive interfaces that delight users while driving business results.
              </p>
              <p>
                Beyond my technical skills, I'm passionate about fostering design culture within organizations and mentoring emerging designers. I believe in the power of design as a strategic driver for business growth and meaningful innovation.
              </p>
              <p>
                When I'm not designing, you'll find me exploring photography, attending design conferences, or experimenting with new creative tools to expand my perspective.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3
              className={cn(
                "text-xl font-semibold mb-6 opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-5 rounded-lg bg-white shadow-sm border border-border/50 transition-all hover:-translate-y-1 hover:shadow-md opacity-0",
                    isVisible && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 flex items-center justify-center bg-secondary rounded-md text-foreground">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{skill.label}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
