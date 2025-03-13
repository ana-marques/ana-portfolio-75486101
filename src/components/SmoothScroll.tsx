
import { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          // Close any open mobile menu
          const mobileMenu = document.querySelector('[data-state="open"]');
          if (mobileMenu) {
            // Find and click the close button
            const closeButton = document.querySelector('button[aria-label="Close menu"]') as HTMLButtonElement;
            if (closeButton) {
              closeButton.click();
            }
          }
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
