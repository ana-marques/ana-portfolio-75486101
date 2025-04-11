
import React from "react";

interface PrincipleProps {
  title: string;
  description: string;
}

const principles = [
  {
    title: "Gradual Transition:",
    description: "Systems designed to help users ease into plant-based eating rather than making abrupt changes"
  },
  {
    title: "Culturally Sensitive:",
    description: "Respecting diverse food traditions and creating alternatives that preserve cultural identity"
  },
  {
    title: "Educational:",
    description: "Providing nutritional information and cooking techniques to build user confidence"
  },
  {
    title: "Community-Driven:",
    description: "Creating support networks to sustain long-term behavior change"
  }
];

const DesignPrinciples = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Core Design Principles</h3>
      <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
        {principles.map((principle, index) => (
          <li key={index}>
            <span className="font-medium">{principle.title}</span> {principle.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignPrinciples;
