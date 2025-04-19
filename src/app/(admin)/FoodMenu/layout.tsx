import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { AppSidebar } from "../Sidebar/sideBar";

export default function AdminLayout({ children }: PropsWithChildren) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-6">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}