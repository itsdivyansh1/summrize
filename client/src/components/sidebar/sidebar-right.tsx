import * as React from "react";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh lg:flex"
      {...props}
    >
      <SidebarContent className="mt-16 px-2">
        <div className="bg-blue-400 w-full h-[200px] rounded-md"></div>
      </SidebarContent>
    </Sidebar>
  );
}
