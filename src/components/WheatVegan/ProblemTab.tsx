
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, ShieldCheck, Coins } from "lucide-react";

const ProblemTab = () => {
  return (
    <div className="space-y-8">
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

      <div className="pt-4 space-y-12">
        <div className="bg-slate-50 p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-4 text-center">"becomes slightly plain and repetitive(...) so it never fully catched my curiosity to cook or try too much."</h3>
          <p className="text-muted-foreground italic text-center mt-4">Quote from one participant from the online survey</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-6 text-xl">Common Challenges When Buying Vegan Food</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
                  <FileSearch className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold">Ingredients List</h4>
                <p className="text-muted-foreground">61.4%* of people said is a challenge when buying vegan products</p>
                <p className="text-xs text-muted-foreground">*Online Survey about Vegan Food with 130 participants</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold">Check if product is actually vegan</h4>
                <p className="text-muted-foreground">35.1%* of people said is a challenge when buying vegan products</p>
                <p className="text-xs text-muted-foreground">*Online Survey about Vegan Food with 130 participants</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
                  <Coins className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold">Price</h4>
                <p className="text-muted-foreground">61.4%* of people said is a challenge when buying vegan products</p>
                <p className="text-xs text-muted-foreground">*Online Survey about Vegan Food with 130 participants</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-6 text-xl">Key Findings from Research</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
            <li>Only 14% of survey participants adopted plant-based diets for health reasons</li>
            <li>17.5% were motivated by environmental concerns</li>
            <li>Animal welfare was the leading motivation (63.2%)</li>
            <li>Taste dissatisfaction was the primary reason for abandoning plant-based diets</li>
            <li>Cultural food traditions presented significant barriers to adoption</li>
            <li>Lack of knowledge about preparation and nutrition was a common concern</li>
            <li>Price and ingredient verification were cited as major challenges when shopping</li>
          </ul>
        </div>
        
        <div className="pt-4">
          <img
            src="/lovable-uploads/3cdd7ecc-5e75-47d6-bb1d-453a3535d15d.png"
            alt="Why aren't we all plant-based?"
            className="w-full max-w-2xl mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemTab;
