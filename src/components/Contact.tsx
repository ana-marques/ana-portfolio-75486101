
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact: React.FC = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          Let's Connect
        </h2>
        <p
          className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-balance opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          I'm always open to discussing new projects, design challenges, or
          opportunities to work together.
        </p>

        <div
          className={cn(
            "flex justify-center mb-12 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="mailto:anapcm94@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground hover:bg-foreground/90 text-white font-medium transition-all"
          >
            <Mail size={18} className="mr-2" />
            Get in Touch
          </a>
        </div>

        <div
          className={cn(
            "flex flex-wrap justify-center gap-6 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://www.linkedin.com/in/anaptcmarques/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-foreground transition-all hover:translate-y-[-2px] hover:shadow-md"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-foreground transition-all hover:translate-y-[-2px] hover:shadow-md"
            aria-label="Github"
          >
            <Github size={18} />
          </a>
          <a
            href="https://medium.com/@anapcmarques"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-foreground transition-all hover:translate-y-[-2px] hover:shadow-md"
            aria-label="Medium"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
