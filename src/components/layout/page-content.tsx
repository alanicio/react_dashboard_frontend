import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PageContent = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex">
         <ScrollArea type="always" className="h-[calc(100vh-28px)] w-1 flex-1 overflow-x-auto">
            <div className="px-4 sm:px-12 py-6">{children}</div>
            <ScrollBar orientation="horizontal" className="w-full" />
         </ScrollArea>
      </div>
   );
};

export default PageContent;
