import { AppSidebar } from "@/components/layout/app-sidebar";
import PageContent from "@/components/layout/page-content";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <SidebarProvider>
         <AppSidebar />
         <main className="w-full">
            <SidebarTrigger />
            <PageContent>{children}</PageContent>
         </main>
      </SidebarProvider>
   );
};

export default Providers;
