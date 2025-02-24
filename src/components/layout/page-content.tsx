import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const PageContent = ({ children }: { children: React.ReactNode }) => {
   return <ScrollArea className="h-[calc(100vh-28px)] w-full max-w-full bg-red-400">{children}</ScrollArea>;
};

export default PageContent;
