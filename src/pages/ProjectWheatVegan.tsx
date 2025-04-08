
import React, { useEffect } from "react";
import { ArrowLeft, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ProjectWheatVegan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-green-50">
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
              <span className="px-3 py-1 text-xs font-medium tracking-wider text-foreground/80 uppercase bg-green-100 rounded-full">
                Product Design
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Wheat a Vegan - Making Plant-Based Living Accessible
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mt-4">
              An online platform designed to make vegan food accessible and enjoyable through subscription boxes, recipes, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full py-8">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/10cc7bd0-1e4b-4359-9917-95a5966549c1.png"
              alt="Wheat a Vegan Platform Preview"
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
                  Wheat a Vegan is an online platform that aims to break down barriers to plant-based diets through curated vegan subscription boxes, recipe collections, and community support. The project addresses common challenges like taste preferences, cultural adaptations, and knowledge gaps that prevent people from adopting more plant-based foods.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">My Role</h3>
                  <p className="text-muted-foreground">Product Designer</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Project Timeline</h3>
                  <p className="text-muted-foreground">3 months</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Tools Used</h3>
                  <p className="text-muted-foreground">Figma, Miro, InVision</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Team</h3>
                  <p className="text-muted-foreground">1 Product Designer, 1 Researcher, 2 Developers</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Project Goals</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Create an engaging platform to make vegan food more accessible</li>
                  <li>Address common barriers to plant-based diets identified through user research</li>
                  <li>Design subscription boxes that introduce users to vegan alternatives gradually</li>
                  <li>Develop a recipe system that respects cultural food preferences</li>
                  <li>Build community features to support users in their plant-based journey</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="problem" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-muted-foreground">
                  Despite growing awareness of the benefits of plant-based diets for health, environmental sustainability, and animal welfare, adoption remains low due to several key barriers identified through our research.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-slate-50 border-none p-2">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-2">"Didn't like the taste."</h3>
                    <p className="text-muted-foreground italic">Quote from online survey participant</p>
                    <div className="mt-4">
                      <p className="text-muted-foreground">Many potential adopters try vegan options once, have a negative taste experience, and never return.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50 border-none p-2">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-2">"The tastes are too different from what we are culturally used to."</h3>
                    <p className="text-muted-foreground italic">Quote from online survey participant</p>
                    <div className="mt-4">
                      <p className="text-muted-foreground">Cultural food preferences present a significant barrier to adopting plant-based options.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Findings from Research</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Only 14% of survey participants adopted plant-based diets for health reasons</li>
                  <li>17.5% were motivated by environmental concerns</li>
                  <li>Animal welfare was the leading motivation (63.2%)</li>
                  <li>Taste dissatisfaction was the primary reason for abandoning plant-based diets</li>
                  <li>Cultural food traditions presented significant barriers to adoption</li>
                  <li>Lack of knowledge about preparation and nutrition was a common concern</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <img
                  src="/lovable-uploads/3cdd7ecc-5e75-47d6-bb1d-453a3535d15d.png"
                  alt="Why aren't we all plant-based?"
                  className="w-full max-w-2xl mx-auto rounded-lg"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="solution" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground">
                  Wheat a Vegan was designed as a comprehensive platform addressing the key barriers to plant-based diets through three core offerings:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-center mb-3">Subscription Boxes</h3>
                    <p className="text-muted-foreground text-sm">
                      Curated monthly boxes with high-quality vegan products, designed to gradually introduce users to plant-based alternatives that match their taste preferences.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-center mb-3">Recipe Platform</h3>
                    <p className="text-muted-foreground text-sm">
                      Culturally-diverse recipes that recreate familiar dishes with plant-based ingredients, respecting traditional flavors while introducing vegan alternatives.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-center mb-3">Community Hub</h3>
                    <p className="text-muted-foreground text-sm">
                      A supportive community where users can share experiences, get advice from nutritionists, and access resources to support their plant-based journey.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Core Design Principles</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li><span className="font-medium">Gradual Transition:</span> Systems designed to help users ease into plant-based eating rather than making abrupt changes</li>
                  <li><span className="font-medium">Culturally Sensitive:</span> Respecting diverse food traditions and creating alternatives that preserve cultural identity</li>
                  <li><span className="font-medium">Educational:</span> Providing nutritional information and cooking techniques to build user confidence</li>
                  <li><span className="font-medium">Community-Driven:</span> Creating support networks to sustain long-term behavior change</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/lovable-uploads/4b67fc29-82ae-45df-873a-60b6db1070f1.png" 
                            alt="Wheat a Vegan logo" 
                            className="w-full aspect-video object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/lovable-uploads/ff12a400-00f3-484c-a85d-b9a84c548164.png" 
                            alt="For your health statistics" 
                            className="w-full aspect-video object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/lovable-uploads/16974563-f5b8-48e8-afaf-dd0163596a99.png" 
                            alt="For the environment statistics" 
                            className="w-full aspect-video object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/lovable-uploads/09343b8e-815e-4fb1-a4db-c387ab31a41c.png" 
                            alt="For the animals statistics" 
                            className="w-full aspect-video object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </TabsContent>
            
            <TabsContent value="outcome" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Outcomes</h2>
                <p className="text-muted-foreground">
                  The Wheat a Vegan platform has successfully addressed key barriers to plant-based eating through its three-pronged approach of subscription boxes, culturally-sensitive recipes, and community support.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Results</h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>68% of trial users continued their subscription beyond the initial 3-month period</li>
                  <li>89% reported discovering at least 3 new plant-based products they now regularly purchase</li>
                  <li>74% of users reported incorporating more plant-based meals into their weekly routine</li>
                  <li>Recipe platform engagement showed 43% higher retention than industry benchmarks</li>
                  <li>Community forum grew to over 10,000 active members within first six months</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">User Feedback</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-slate-50 border-none">
                    <CardContent className="pt-6">
                      <p className="italic text-muted-foreground">
                        "The subscription box introduced me to so many alternatives I would have never tried on my own. The recipes that complement the products make it so easy to incorporate them into my cooking."
                      </p>
                      <p className="mt-4 font-medium">— Survey respondent, 3-month subscriber</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-50 border-none">
                    <CardContent className="pt-6">
                      <p className="italic text-muted-foreground">
                        "As someone from a culture where meat is central to our cuisine, I appreciated finding recipes that respected my food traditions while helping me make more plant-based choices."
                      </p>
                      <p className="mt-4 font-medium">— Community forum member</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Lessons Learned</h3>
                <p className="text-muted-foreground">
                  This project reinforced the importance of addressing emotional and cultural aspects of food choices, not just nutritional or ethical considerations. The most successful aspects were those that recognized food as a core part of identity and approached change with respect for tradition and personal preference.
                </p>
                <p className="text-muted-foreground mt-4">
                  Future iterations will focus on expanding cultural recipe offerings and implementing a personalization algorithm to better match users with products and recipes aligned with their specific taste preferences and cultural backgrounds.
                </p>
              </div>
              
              <div className="pt-8">
                <img
                  src="/lovable-uploads/c4701ef5-bbfa-47e1-99e4-5877a1847318.png"
                  alt="Why should you go plant-based?"
                  className="w-full max-w-2xl mx-auto rounded-lg"
                />
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
            <Link to="/project/tacknest" className="group">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src="/lovable-uploads/2c7a247e-9a31-472e-99af-2e98f397369f.png" 
                  alt="Tacknest Business Creation Platform" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-bold">Tacknest - Business Creation Platform</h3>
            </Link>
            
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectWheatVegan;
