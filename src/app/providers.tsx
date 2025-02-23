import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <SidebarProvider>
         <AppSidebar />
         <main>
            <SidebarTrigger />
            {children}
         </main>
      </SidebarProvider>
   );
};

export default Providers;
