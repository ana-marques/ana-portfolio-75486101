
import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface PrototypeCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  description?: string;
}

const PrototypeCard = ({ title, subtitle, children, description }: PrototypeCardProps) => {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardContent className="p-0">
        {(title || subtitle) && (
          <div className="bg-green-50/50 p-6 border-b">
            {title && <h3 className="text-2xl font-bold">{title}</h3>}
            {subtitle && <p className="text-xl text-green-500">{subtitle}</p>}
          </div>
        )}
        <div className="p-6">
          {children}
          {description && (
            <div className="mt-4 text-sm text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PrototypeCard;
