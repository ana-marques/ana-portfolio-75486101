
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

  // Desktop version with proper tab styling and consistent layout
  return (
    <Tabs 
      defaultValue={defaultValue} 
      className={className} 
      onValueChange={handleTabChange}
      value={activeTab}
    >
      <div className="w-full mb-12">
        <TabsList className="w-full flex h-12 p-0 bg-muted/20">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.value} 
              value={tab.value} 
              className="flex-1 h-full rounded-none px-4 py-3 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
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
