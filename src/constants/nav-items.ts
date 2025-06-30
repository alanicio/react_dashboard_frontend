import { LayoutDashboard, LucideIcon, Users } from "lucide-react";

interface NavItem {
   title: string;
   url: string;
   icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
   {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
   },
   {
      title: "Users",
      url: "/users",
      icon: Users,
   },
];
