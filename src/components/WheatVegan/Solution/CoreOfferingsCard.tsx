
import React from "react";
import { Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface OfferingProps {
  title: string;
  description: string;
}

const Offering = ({ title, description }: OfferingProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-green-100 rounded-full">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <h3 className="font-bold text-center mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const CoreOfferingsCard = () => {
  const offerings = [
    {
      title: "Subscription Boxes",
      description: "Curated monthly boxes with high-quality vegan products, designed to gradually introduce users to plant-based alternatives that match their taste preferences."
    },
    {
      title: "Recipe Platform",
      description: "Culturally-diverse recipes that recreate familiar dishes with plant-based ingredients, respecting traditional flavors while introducing vegan alternatives."
    },
    {
      title: "Community Hub",
      description: "A supportive community where users can share experiences, get advice from nutritionists, and access resources to support their plant-based journey."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {offerings.map((offering, index) => (
        <Offering key={index} title={offering.title} description={offering.description} />
      ))}
    </div>
  );
};

export default CoreOfferingsCard;
