"use client";

import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menuItems } from "./sidebar-menus";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar() {
   const pathname = usePathname();
   return menuItems.length <= 1 ? null : (
      <Sidebar>
         <SidebarHeader>
            <h4>Content</h4>
         </SidebarHeader>
         <SidebarContent className="mt-10">
            {menuItems.map((menuItem) => (
               <SidebarGroup key={menuItem.title}>
                  <SidebarMenu
                     className={cn("p-1", pathname === menuItem.url ? "bg-background text-foreground border" : "")}
                  >
                     <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                           <a href={menuItem.url}>
                              <menuItem.icon />
                              <span>{menuItem.title}</span>
                           </a>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>
               </SidebarGroup>
            ))}
         </SidebarContent>
         <SidebarFooter />
      </Sidebar>
   );
}
