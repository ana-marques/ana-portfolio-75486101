
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github } from "lucide-react";

const MediumIcon = () => (
  <svg 
    viewBox="0 -55 256 256" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    preserveAspectRatio="xMidYMid" 
    fill="currentColor"
    className="w-[18px] h-[18px]"
  >
    <g>
      <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" fill="currentColor"></path>
    </g>
  </svg>
);

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
            href="https://github.com/ana-marques"
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
            <MediumIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
