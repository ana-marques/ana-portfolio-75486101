
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProblemTab from "./ProblemTab";
import SolutionTab from "./SolutionTab";
import PersonaTab from "./PersonaTab";

const ResearchSolutionSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Research & Solution</h2>
        <Tabs defaultValue="problem" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="problem">The Problem</TabsTrigger>
            <TabsTrigger value="persona">Persona</TabsTrigger>
            <TabsTrigger value="solution">The Solution</TabsTrigger>
          </TabsList>
          
          {/* Project Problem Tab */}
          <TabsContent value="problem">
            <ProblemTab />
          </TabsContent>
          
          {/* Persona Tab */}
          <TabsContent value="persona">
            <PersonaTab />
          </TabsContent>
          
          {/* Project Solution Tab */}
          <TabsContent value="solution">
            <SolutionTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResearchSolutionSection;
