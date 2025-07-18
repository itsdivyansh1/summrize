import NotificationMenu from "@/components/notification-menu";
import UserMenu from "@/components/user-menu";
import { SidebarTrigger } from "./ui/sidebar";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  return (
    <header className="border-b px-4 md:px-6 sticky top-0 left-0 bg-background">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <SidebarTrigger />
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <ModeToggle />
            <NotificationMenu />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
