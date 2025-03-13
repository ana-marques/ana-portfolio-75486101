
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  speed = 40,
  once = false,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const initialRender = useRef(true);

  useEffect(() => {
    if (once && !initialRender.current) return;
    initialRender.current = false;

    if (!textRef.current) return;
    
    const element = textRef.current;
    element.textContent = '';
    
    let index = 0;
    const chars = text.split('');
    
    setTimeout(() => {
      const interval = setInterval(() => {
        if (index < chars.length) {
          element.textContent += chars[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);
  }, [text, delay, speed, once]);

  return <span ref={textRef} className={cn("inline-block", className)}></span>;
};

export default AnimatedText;
