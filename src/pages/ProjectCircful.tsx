
import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RelatedProjectsSection from "@/components/WheatVegan/RelatedProjectsSection";

const ProjectCircful: React.FC = () => {
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
                UX/UI Design
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Circful - Employee Engagement Platform
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mt-4">
              The way companies address <span className="text-amber-500 font-medium">employee churn</span> is broken
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full py-8">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/5599020a-7ffc-47d3-b337-bfa2720a259d.png"
              alt="Circful Employee Retention Platform"
              className="w-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
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
            
            <TabsContent value="concept" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">The way companies address employee churn is broken</h2>
                <p className="text-xl text-muted-foreground">
                  Circful fixes it. We're the only platform in the market that analyzes team members individually and coaches managers in a personalized way.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="font-semibold mb-2">My Role</h3>
                  <p className="text-muted-foreground">Lead UX/UI Designer</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Project Timeline</h3>
                  <p className="text-muted-foreground">3 months</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Tools Used</h3>
                  <p className="text-muted-foreground">Figma, Miro, UserTesting</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Team</h3>
                  <p className="text-muted-foreground">1 Designer, 2 Developers, 1 Product Manager</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="problem" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Solving <span className="text-amber-500">3 big hidden</span> problems</h2>
                <p className="text-xl mb-6">
                  Increasing engagement levels and retention by 18%
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="p-6 rounded-lg bg-amber-50/70 border border-amber-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Churn</h3>
                      <p className="text-muted-foreground">
                        Churn and lack of engagement are expensive and most companies have no data on both
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-amber-100/50 border border-amber-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M16 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/></svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                      <p className="text-muted-foreground">
                        Managers are the biggest influence on employee engagement, and most lack leadership skills
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-purple-50/70 border border-purple-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                      <p className="text-muted-foreground">
                        Engagement is very individual, while HR initiatives are one-size-fits-all and ineffective
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="solution" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">How it works</h2>
                <p className="text-xl mb-6">
                  Circful <span className="text-amber-500">maximizes retention</span> through employee data and a proprietary framework, backed by science
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-6 rounded-lg border shadow-sm relative">
                  <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-amber-900 font-semibold absolute -top-4 -left-2">1</div>
                  <h3 className="text-xl font-semibold mb-4">Collect</h3>
                  <div className="flex justify-center mb-6">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    We collect engagement data from employees through non-anonymous surveys, addressing 14 retention factors
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border shadow-sm relative">
                  <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-amber-900 font-semibold absolute -top-4 -left-2">2</div>
                  <h3 className="text-xl font-semibold mb-4">Evaluate</h3>
                  <div className="flex justify-center mb-6">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M4 12h16"/><path d="M9 18h6"/><path d="M10 12v6"/></svg>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Managers get a weekly analysis for the team and each individual, plus the smartest actions to be done
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border shadow-sm relative">
                  <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-amber-900 font-semibold absolute -top-4 -left-2">3</div>
                  <h3 className="text-xl font-semibold mb-4">Act</h3>
                  <div className="flex justify-center mb-6">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Managers get weekly personalized coaching, structured towards building new leadership habits
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Smart reports with <span className="text-amber-500">personalized insights</span></h2>
                <p className="text-xl mb-8">Managers get total visibility on their team engagement</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M4 12h16"/><path d="M9 18h6"/><path d="M10 12v6"/></svg>
                      </div>
                      <p className="text-lg">
                        Understand your strengths and weaknesses as a manager and company
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-6"/><path d="M12 15v-3"/><path d="M15 15v-6"/></svg>
                      </div>
                      <p className="text-lg">
                        Understand the engagement level of each individual and exactly why
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
                      </div>
                      <p className="text-lg">
                        Get action points for each individual and the retention driver you need to work on
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-400">
                    [Dashboard visualization]
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Bite-sized coaching to build <span className="text-amber-500">super managers</span></h2>
                <p className="text-xl mb-8">Smart "nudges" are delivered to managers to help them improve engagement in the most efficient way</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-4">
                      <div className="text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M12 22V2"/><path d="M20 12H4"/></svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">Science based action points for habit creation</h3>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-4">
                      <div className="text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-6"/><path d="M12 15v-3"/><path d="M15 15v-6"/></svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">Actionable insights for stronger leadership</h3>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-4">
                      <div className="text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">Personalized to each manager, easy to implement</h3>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="defensibility" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">We're the <span className="text-amber-500">only</span> company in the space that does:</h2>
                
                <div className="space-y-6 mt-12">
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <div className="text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-6"/><path d="M12 15v-3"/><path d="M15 15v-6"/></svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Individual dynamic retention</h3>
                        <p className="text-muted-foreground">
                          By using non-anonymous data and predictive algorithms we deliver the right action to be done
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <div className="text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Personalized coaching</h3>
                        <p className="text-muted-foreground">
                          By using scientific frameworks and bite-sized learning, we create the right leadership habits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-6">What's <span className="text-amber-500">next?</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Predictive AI</h3>
                    <p className="text-muted-foreground">
                      Our priority is to implement a lot more data points so we can build the smartest machine learning models to increase employee retention.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Specialists on-demand</h3>
                    <p className="text-muted-foreground">
                      A customer will be able to book an HR specialist for any specific topic they need to work on. A marketplace of HR specialists.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="traction" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Product validated with <span className="text-amber-500">zero</span> funding</h2>
                <p className="text-xl mb-8">
                  Circful has been tested and evolved daily for over 2 months, in 2 customers, who brought us 5 more companies, on a waiting list
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M2 12h5"/><path d="M17 12h5"/><path d="M9 12h6"/><path d="M3 18V6a4 4 0 0 1 4-4h3"/><path d="M14 2h3a4 4 0 0 1 4 4v12"/><circle cx="8" cy="18" r="4"/><circle cx="16" cy="18" r="4"/></svg>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-2">2</h3>
                  <p className="text-muted-foreground">Customers using it for 8 weeks</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-2">100%</h3>
                  <p className="text-muted-foreground">Conversion to paid</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-2">52</h3>
                  <p className="text-muted-foreground">Employees covered</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-2">5</h3>
                  <p className="text-muted-foreground">Companies on a waiting list</p>
                </div>
              </div>
              
              <div className="bg-amber-50/70 p-6 rounded-lg border border-amber-100 mt-12">
                <h3 className="text-xl font-semibold mb-4">What was the process</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p>15 days pilot with one of their teams</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p>Decision to go paid and 100% coverage of employees</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p>Weekly feedback collection, together with metrics analysis</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p>Daily iteration of the product, experience and action points</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-6"><span className="text-amber-500">Healthy</span> unit economics</h2>
                <p className="text-xl mb-8">
                  Customer acquisition can be standardized globally and remotely, towards a great LTV to CAC ratio.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">ARPC</p>
                        <p className="text-xl font-semibold">2600 €</p>
                        <p className="text-xs text-gray-500">Average revenue per customer per year</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Retention</p>
                        <p className="text-xl font-semibold">10 months</p>
                        <p className="text-xs text-gray-500">Lifetime value in months</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Operational Costs</p>
                        <p className="text-xl font-semibold">500 €</p>
                        <p className="text-xs text-gray-500">Lifetime costs per customer</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">LTV</p>
                        <p className="text-xl font-semibold">1600 €</p>
                        <p className="text-xs text-gray-500">Net Lifetime Value after all costs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-100 p-6 rounded-lg">
                      <p className="text-center text-amber-900 font-semibold mb-2">CAC Forecast</p>
                      <p className="text-center text-4xl font-bold">300 €</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-lg">
                      <p className="text-center text-blue-900 font-semibold mb-2">LTV to CAC</p>
                      <p className="text-center text-4xl font-bold">3.5</p>
                    </div>
                    <div className="col-span-2">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-center font-semibold mb-2">PRICING</p>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <p className="text-4xl font-bold">5 €</p>
                            <p className="text-sm text-gray-500">Per employee</p>
                          </div>
                          <div className="text-center">or</div>
                          <div>
                            <p className="text-4xl font-bold">500 €</p>
                            <p className="text-sm text-gray-500">per month for enterprise licenses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-6">Planning to go <span className="text-amber-500">big</span></h2>
                <p className="text-xl mb-8">
                  A huge addressable market and a controlled burn rate
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-blue-600 text-5xl font-bold mb-4">20% Growth</div>
                    <p className="text-sm text-blue-800 mb-6">Per Month</p>
                    
                    <div className="space-y-2 text-blue-700">
                      <p>Customers</p>
                      <p>Revenue (MRR)</p>
                      <p>Headcount</p>
                      <p>Fundraising</p>
                    </div>
                    
                    <div className="mt-6 text-right text-blue-800">
                      <p>(Pre-seed)</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border">
                    <div className="space-y-4">
                      <p className="text-lg">
                        The majority of our costs are salaries and marketing, a very lean model
                      </p>
                      
                      <p className="text-lg">
                        We're acquiring two types of customers: SMEs (with an automated sales funnel) and Enterprise (with sales force)
                      </p>
                      
                      <p className="text-lg">
                        We plan to raise a new round each year so we're aggressive with the pace of product, acquisition and data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjectsSection />
    </div>
  );
};

export default ProjectCircful;
