
import React from "react";

const OverviewTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">
          Tacknest is a comprehensive platform designed to simplify the often complicated process of business creation. As highlighted in my Medium article, the platform offers entrepreneurs an intuitive solution to navigate through the complex steps of establishing their business venture, from initial planning to legal registration and beyond.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">My Role</h3>
          <p className="text-muted-foreground">Product Designer</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Project Timeline</h3>
          <p className="text-muted-foreground">2 weeks</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Tools Used</h3>
          <p className="text-muted-foreground">Figma, Adobe XD, InVision</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Team</h3>
          <p className="text-muted-foreground">1 Product Designer, 1 Product Manager</p>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Project Goals</h3>
        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
          <li>Simplify the business creation process for entrepreneurs</li>
          <li>Reduce bureaucratic friction when establishing a business</li>
          <li>Provide clear guidance and support through each stage of business creation</li>
          <li>Create an intuitive platform that combines administrative tasks with practical guidance</li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewTab;
