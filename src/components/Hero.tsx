
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import { ArrowDown, Waves } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F9FAFB] opacity-60"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-rose-50 to-orange-50 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div
            className={cn(
              "mb-8 opacity-0 flex justify-center",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            <Avatar className="h-24 w-24 border-2 border-white shadow-md">
              <AvatarImage src="/lovable-uploads/f7046e72-83dd-4bd9-be62-846314218f9b.png" alt="Ana Marques" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Greeting */}
          <div
            className={cn(
              "mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-lg md:text-xl font-medium mb-2 flex items-center justify-center gap-2">
              Hi, I'm Ana Marques <Waves size={18} className="inline text-amber-500 animate-[wave_2s_ease-in-out_infinite]" />
            </h2>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-foreground/80 uppercase bg-muted rounded-full">
              Senior Product Designer
            </span>
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            Crafting digital 
            <br />
            <span className="relative">
              experiences with
            </span>
            <br />
            <AnimatedText
              text="precision and purpose."
              delay={1000}
              speed={50}
              once={true}
              className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70"
            />
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.6s" }}
          >
            I transform complex problems into elegant, user-centered solutions through
            thoughtful research, strategic thinking, and meticulous design execution.
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row justify-center gap-4 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#work"
              className="px-7 py-3 rounded-full bg-foreground text-white font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 active:shadow-none"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-white border border-gray-200 text-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 active:shadow-none"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div 
        className={cn(
          "absolute bottom-10 left-0 right-0 w-full flex flex-col items-center opacity-0 animate-fade-in",
          isMobile && "bottom-52"
        )} 
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
