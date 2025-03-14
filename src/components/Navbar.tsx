
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Always close mobile menu when scrolling
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu if screen size changes from mobile to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-6 px-6 md:px-10",
        scrolled
          ? "backdrop-blur-lg bg-white/80 shadow-sm py-4"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-medium tracking-tight transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          ana.designer
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["work", "about", "process", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group flex items-center space-x-1"
          >
            <FileText size={16} />
            <span>Resume</span>
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={22} className="text-foreground" />
          ) : (
            <Menu size={22} className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-white pt-24 px-8 z-40 flex flex-col md:hidden transition-transform duration-300 ease-in-out transform",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
          style={{ visibility: mobileMenuOpen ? "visible" : "hidden" }}
          data-state={mobileMenuOpen ? "open" : "closed"}
        >
          {/* Close button in top right */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6"
            onClick={handleCloseMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </Button>
          
          <nav className="flex flex-col space-y-6 items-start">
            {["work", "about", "process", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-2xl font-medium tracking-tight hover:text-primary/80 transition-colors"
                onClick={handleCloseMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium tracking-tight hover:text-primary/80 transition-colors flex items-center space-x-2"
              onClick={handleCloseMenu}
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
