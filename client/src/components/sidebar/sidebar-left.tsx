"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavChats } from "@/components/sidebar/nav-chats";
import { NavMain } from "@/components/sidebar/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../logo";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  chats: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="p-2 flex items-center gap-2 ">
          <Logo />
          <span>Sumrize</span>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavChats favorites={data.chats} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
