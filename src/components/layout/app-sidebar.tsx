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

export function AppSidebar() {
   return (
      <Sidebar>
         <SidebarHeader>
            <h4>Content</h4>
         </SidebarHeader>
         <SidebarContent>
            <SidebarGroup>
               <SidebarMenu>
                  {menuItems.map((menuItem) => (
                     <SidebarMenuItem key={menuItem.title}>
                        <SidebarMenuButton asChild>
                           <a href={menuItem.url}>
                              <menuItem.icon />
                              <span>{menuItem.title}</span>
                           </a>
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
