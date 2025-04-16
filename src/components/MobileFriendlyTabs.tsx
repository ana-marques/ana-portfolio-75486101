
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

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
  
  // Find the active tab label
  const activeTabLabel = tabs.find(tab => tab.value === activeTab)?.label || "Select";
  
  // Handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  if (isMobile) {
    return (
      <div className={className}>
        {/* Mobile Dropdown-based Tabs */}
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full mb-8 flex items-center justify-between bg-muted p-3 rounded-lg">
            <span className="font-medium">{activeTabLabel}</span>
            <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
            <DropdownMenuRadioGroup value={activeTab} onValueChange={handleTabChange}>
              {tabs.map((tab) => (
                <DropdownMenuRadioItem 
                  key={tab.value} 
                  value={tab.value}
                  className="cursor-pointer"
                >
                  {tab.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

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

  // Calculate the grid columns based on tab count
  const getGridCols = (count: number) => {
    // For 3 tabs (like in Research & Solution section), use full width with equal columns
    if (count === 3) return "grid-cols-3";
    // If there are 5 or more tabs, limit to 5 columns max for readability
    if (count >= 5) return "grid-cols-5";
    // Otherwise use the exact number of tabs
    return `grid-cols-${count}`;
  };

  // Desktop version - use standard tabs with dynamic grid layout
  return (
    <Tabs 
      defaultValue={defaultValue} 
      className={className} 
      onValueChange={handleTabChange}
      value={activeTab}
    >
      <div className="w-full mb-12">
        <TabsList className={`grid w-full ${getGridCols(tabs.length)}`}>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="px-4 py-3">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MobileFriendlyTabs;
