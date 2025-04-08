
import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProjectTacknest: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group w-fit"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div>
              <span className="px-3 py-1 text-xs font-medium tracking-wider text-foreground/80 uppercase bg-secondary rounded-full">
                UX/UI Case Study
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Tacknest - The Easiest Way to Create Your Business
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mt-4">
              A comprehensive platform designed to simplify business creation, offering entrepreneurs an intuitive solution to navigate the complex process of establishing their venture.
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full py-8">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Tacknest Platform Preview"
              className="w-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="w-full py-16">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="outcome">Outcome</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">
                  Tacknest is a comprehensive platform designed to simplify the often complicated process of business creation. As highlighted in my Medium article, the platform offers entrepreneurs an intuitive solution to navigate through the complex steps of establishing their business venture, from initial planning to legal registration and beyond.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">My Role</h3>
                  <p className="text-muted-foreground">UX/UI Designer</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Project Timeline</h3>
                  <p className="text-muted-foreground">3 months</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Tools Used</h3>
                  <p className="text-muted-foreground">Figma, Adobe XD, InVision</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Team</h3>
                  <p className="text-muted-foreground">2 UX Designers, 1 UI Designer, 3 Developers</p>
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
            </TabsContent>
            
            <TabsContent value="problem" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-muted-foreground">
                  Starting a business involves navigating a maze of bureaucratic processes, legal requirements, and administrative tasks that can be overwhelming for first-time entrepreneurs. Many potential business owners get discouraged by the complexity of these procedures or make costly mistakes due to lack of guidance.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Challenges</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Complex and often confusing legal requirements across different jurisdictions</li>
                  <li>Disconnected processes requiring multiple platforms and services</li>
                  <li>Lack of personalized guidance for different business types</li>
                  <li>High costs associated with professional consultations and services</li>
                  <li>Time-consuming paperwork and administrative procedures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">User Research Findings</h3>
                <p className="text-muted-foreground">
                  Through interviews with early-stage entrepreneurs, we discovered that 78% felt overwhelmed by the business creation process, and 63% had delayed launching their business due to administrative complexities. Many expressed confusion about which steps to take first and where to find reliable information specific to their business type.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="solution" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground">
                  Tacknest was designed as an all-in-one platform that guides entrepreneurs through every step of the business creation process. The platform combines intelligent workflows, automated document processing, and contextual guidance to make business creation accessible to everyone, regardless of their previous experience.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Step-by-step guided workflows customized to specific business types</li>
                  <li>Automated document generation and filing</li>
                  <li>Integrated legal compliance checks</li>
                  <li>Business plan creation tools and templates</li>
                  <li>Financial projection calculators and budgeting guides</li>
                  <li>Marketplace for additional professional services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Design Process</h3>
                <p className="text-muted-foreground">
                  Our design process involved extensive user research, competitive analysis, and iterative prototyping. We focused on creating clear information architecture and intuitive navigation patterns that would guide users naturally through the complex process. The UI design emphasized clarity, with progressive disclosure of information to prevent overwhelming users.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="outcome" className="space-y-8">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">More Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="#" className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Financial Wellness App" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">Financial Wellness App Redesign</h3>
            </Link>
            
            <Link to="#" className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Healthcare Patient Portal" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">Healthcare Patient Portal</h3>
            </Link>
            
            <Link to="#" className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="E-commerce Marketplace Platform" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">E-commerce Marketplace Platform</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTacknest;
