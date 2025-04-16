
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface MobileFriendlyTabsProps {
  defaultValue: string;
  tabs: Tab[];
  className?: string;
}

const MobileFriendlyTabs: React.FC<MobileFriendlyTabsProps> = ({
  defaultValue,
  tabs,
  className = "",
}) => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [sheetOpen, setSheetOpen] = useState(false);
  
  // Find the active tab label
  const activeTabLabel = tabs.find(tab => tab.value === activeTab)?.label || "Select";
  
  // Handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSheetOpen(false);
  };

  if (isMobile) {
    return (
      <div className={className}>
        {/* Mobile Sheet-based Tabs */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="w-full mb-8 flex items-center justify-between bg-muted p-3 rounded-lg">
            <span className="font-medium">{activeTabLabel}</span>
            <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[60vh]">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-2 py-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    className={`w-full text-left px-4 py-3 rounded-md font-medium ${
                      activeTab === tab.value
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary"
                    }`}
                    onClick={() => handleTabChange(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {/* Tab Content */}
        <div className="mt-4">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              className={activeTab === tab.value ? "block" : "hidden"}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop version - use standard tabs
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList className={`grid w-full grid-cols-${tabs.length} mb-12`}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MobileFriendlyTabs;
