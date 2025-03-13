
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 md:px-8 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="text-base font-medium tracking-tight"
              aria-label="Home"
            >
              john.designer
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} John Designer. All rights reserved.
          </div>

          <div className="mt-4 md:mt-0">
            <nav className="flex items-center space-x-6">
              {["work", "about", "process", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
