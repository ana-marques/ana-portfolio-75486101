
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
          
          // Close any open mobile menu (look for mobile menu elements)
          const mobileMenus = document.querySelectorAll('[data-state="open"]');
          mobileMenus.forEach(menu => {
            if (menu.classList.contains('md:hidden') || menu.closest('.md\\:hidden')) {
              // Find any open mobile menu and trigger its close button if available
              const closeButtons = document.querySelectorAll('button[aria-label="Close menu"]');
              if (closeButtons.length) {
                (closeButtons[0] as HTMLButtonElement).click();
              }
            }
          });
          
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
