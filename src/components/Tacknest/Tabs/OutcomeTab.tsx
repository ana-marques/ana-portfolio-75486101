
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OutcomeTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Project Outcomes</h2>
        <p className="text-muted-foreground">
          Tacknest has significantly simplified the business creation process for entrepreneurs across different industries. The platform has received positive feedback for its user-friendly interface and comprehensive guidance.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Results</h3>
        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
          <li>Reduced average business creation time from 4 weeks to 10 days</li>
          <li>92% user satisfaction rate based on post-launch surveys</li>
          <li>45% reduction in legal consultation costs for entrepreneurs</li>
          <li>30% increase in successful business registrations compared to traditional methods</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Lessons Learned</h3>
        <p className="text-muted-foreground">
          This project reinforced the importance of thoroughly understanding the user journey before attempting to simplify complex processes. We learned that even highly technical or bureaucratic procedures could be made approachable through thoughtful UX design and clear information presentation. The project also highlighted the value of continuous user testing throughout the development process.
        </p>
      </div>
      
      <div className="pt-8">
        <Link 
          to="https://medium.com/@anapcmarques/tacknest-the-easiest-way-to-create-your-business-46ce81a8b2c2" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative">
            Read the full case study on Medium
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current transform origin-left"></span>
          </span>
          <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
        </Link>
      </div>
    </div>
  );
};

export default OutcomeTab;
