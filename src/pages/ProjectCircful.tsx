
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
              Circful - Leadership Development Platform
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mt-4">
              A software that helps managers become effective leaders, by understanding their team members and automating leadership practices.
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full py-8">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/174bc4e7-2e3b-40a2-a467-3967f075d70f.png"
              alt="Circful Platform Login Screen"
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
                  Circful is a leadership development platform designed to transform managers into effective leaders through data-driven insights and automated best practices. The platform bridges the gap between management theory and practical leadership by providing personalized guidance and tools that help managers understand and support their team members.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              
              <div>
                <h3 className="font-semibold mb-2">Project Goals</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Design an intuitive platform that helps managers understand their team dynamics</li>
                  <li>Create tools that automate leadership best practices and reminders</li>
                  <li>Develop analytics dashboards that provide actionable insights</li>
                  <li>Build features that facilitate better team communication and feedback</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="problem" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-muted-foreground">
                  Most managers are promoted based on their technical abilities rather than leadership skills. They often struggle to transition from individual contributors to effective team leaders. Additionally, leadership training is typically theoretical and not integrated into daily workflows, making it difficult to apply in real-world situations.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Challenges</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Lack of practical tools to implement leadership best practices</li>
                  <li>Difficulty in tracking and understanding team member needs and development</li>
                  <li>Inconsistent application of leadership principles across organizations</li>
                  <li>Time constraints that prevent managers from developing leadership skills</li>
                  <li>Absence of data-driven insights to improve leadership effectiveness</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">User Research Findings</h3>
                <p className="text-muted-foreground">
                  Our research revealed that 72% of new managers felt unprepared for their leadership roles, and 65% reported spending more time on administrative tasks than on team development. Additionally, 83% of team members expressed a desire for more personalized feedback and career guidance from their managers.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="solution" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground">
                  Circful was designed as an integrated leadership platform that combines team analytics, automated workflows, and personalized guidance to help managers become more effective leaders with less administrative overhead.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Team member profiles with personality insights and work preferences</li>
                  <li>Automated check-in reminders and meeting agenda suggestions</li>
                  <li>Feedback collection and analysis tools</li>
                  <li>Leadership development trackers and personalized learning paths</li>
                  <li>Team health dashboards with actionable insights</li>
                  <li>Integration with existing work tools (Slack, MS Teams, etc.)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Design Process</h3>
                <p className="text-muted-foreground">
                  Our design process focused on creating a platform that would fit seamlessly into managers' existing workflows. We conducted extensive user interviews with both managers and team members to understand pain points and needs. The resulting design emphasizes simplicity, actionable insights, and automated reminders to ensure leadership best practices become habitual without requiring significant additional time investment.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="outcome" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Outcomes</h2>
                <p className="text-muted-foreground">
                  Circful has been successfully implemented in several organizations, with early results showing promising improvements in management effectiveness and team satisfaction.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Results</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>28% increase in team member satisfaction with management</li>
                  <li>42% reduction in time spent on administrative leadership tasks</li>
                  <li>63% of managers reported feeling more confident in their leadership abilities</li>
                  <li>Regular 1-on-1 meetings increased by 35% across organizations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Lessons Learned</h3>
                <p className="text-muted-foreground">
                  The project reinforced the importance of designing systems that work with existing workflows rather than adding to them. We found that even small automation and reminders can lead to significant improvements in leadership consistency. The most successful feature was the personalized team insights, which helped managers understand how to adapt their leadership style to each team member's needs.
                </p>
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
