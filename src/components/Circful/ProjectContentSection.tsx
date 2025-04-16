
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ConceptTab from "./Tabs/ConceptTab";
import ProblemTab from "./Tabs/ProblemTab";
import SolutionTab from "./Tabs/SolutionTab";
import DefensibilityTab from "./Tabs/DefensibilityTab";
import TractionTab from "./Tabs/TractionTab";

const ProjectContentSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <Tabs defaultValue="concept" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            <TabsTrigger value="concept">Concept</TabsTrigger>
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="defensibility">Defensibility</TabsTrigger>
            <TabsTrigger value="traction">Traction</TabsTrigger>
          </TabsList>
          
          <TabsContent value="concept">
            <ConceptTab />
          </TabsContent>
          
          <TabsContent value="problem">
            <ProblemTab />
          </TabsContent>
          
          <TabsContent value="solution">
            <SolutionTab />
          </TabsContent>
          
          <TabsContent value="defensibility">
            <DefensibilityTab />
          </TabsContent>
          
          <TabsContent value="traction">
            <TractionTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectContentSection;
