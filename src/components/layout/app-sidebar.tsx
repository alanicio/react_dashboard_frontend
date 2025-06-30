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
import { NAV_ITEMS } from "../../constants/nav-items";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AppSidebar() {
   const pathname = usePathname();
   return NAV_ITEMS.length <= 1 ? null : (
      <Sidebar collapsible="icon">
         <SidebarHeader>
            <h4 className="group-data-[collapsible=icon]:hidden">Content</h4>
         </SidebarHeader>
         <SidebarContent className="mt-10">
            <SidebarGroup>
               <SidebarMenu className="space-y-4">
                  {NAV_ITEMS.map((menuItem) => (
                     <SidebarMenuItem
                        key={menuItem.title}
                        className={cn(pathname === menuItem.url ? "bg-background text-foreground border" : "")}
                     >
                        <SidebarMenuButton asChild tooltip={menuItem.title}>
                           <Link href={menuItem.url}>
                              <menuItem.icon />
                              <span>{menuItem.title}</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroup>
         </SidebarContent>
         <SidebarFooter />
      </Sidebar>
   );
}
