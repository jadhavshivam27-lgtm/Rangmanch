"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  Megaphone,
  FileText,
  Video,
  Users,
  Calendar,
  MessageSquare,
  Network,
  Sparkles,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useAuthStore, useUser } from "@/lib/auth";
import { getInitials } from "@/lib/utils";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}

const castingLinks: SidebarLink[] = [
  { href: "/casting/dashboard", label: "Overview", icon: <LayoutDashboard size={15} /> },
  { href: "/casting/discover", label: "Discover Talent", icon: <Search size={15} /> },
  { href: "/casting/calls", label: "Casting Calls", icon: <Megaphone size={15} /> },
  { href: "/casting/applications", label: "Applications", icon: <FileText size={15} />, badge: "12" },
  { href: "/casting/auditions", label: "Auditions", icon: <Video size={15} /> },
  { href: "/casting/shortlists", label: "Shortlists", icon: <Users size={15} /> },
  { href: "/casting/calendar", label: "Calendar", icon: <Calendar size={15} /> },
  { href: "/settings", label: "Settings", icon: <Settings size={15} /> },
];

const talentLinks: SidebarLink[] = [
  { href: "/dashboard/talent", label: "Dashboard", icon: <LayoutDashboard size={15} /> },
  { href: "/talent", label: "The Roster", icon: <Users size={15} /> },
  { href: "/casting-calls", label: "Casting Calls", icon: <Megaphone size={15} /> },
  { href: "/verification", label: "Govt KYC", icon: <FileText size={15} /> },
  { href: "/settings", label: "Settings", icon: <Settings size={15} /> },
];

function getLinksByRole(role: string): SidebarLink[] {
  switch (role) {
    case "casting_director":
    case "org_admin":
      return castingLinks;
    default:
      return talentLinks;
  }
}

export default function Sidebar({ role }: { role?: string }) {
  const pathname = usePathname();
  const user = useUser();
  const [collapsed, setCollapsed] = useState(false);

  const links = getLinksByRole(role ?? user?.role ?? "talent");

  return (
    <aside
      className="hidden md:flex flex-col shrink-0 border-r border-white/[0.08] bg-[#0a0a0c] transition-all duration-300 sticky top-0 h-screen overflow-y-auto"
      style={{
        width: collapsed ? "68px" : "240px",
      }}
    >
      {/* Brand area */}
      <div className="flex items-center gap-3 px-6 h-20 border-b border-white/[0.08] shrink-0">
        <Link href="/" className="font-editorial text-xl tracking-[0.2em] uppercase text-white hover:text-white truncate">
          {collapsed ? "R" : "RANGMANCH"}
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto text-xs font-mono uppercase tracking-wider">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 transition-colors ${
                isActive
                  ? "text-white bg-white/10 font-semibold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? link.label : undefined}
            >
              <span className="shrink-0">{link.icon}</span>
              {!collapsed && <span className="flex-1 truncate">{link.label}</span>}
              {!collapsed && link.badge && (
                <span className="text-[10px] px-1.5 py-0.2 bg-white/20 text-white">
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User footer */}
      {user && !collapsed && (
        <div className="p-4 border-t border-white/[0.08] text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 flex items-center justify-center bg-white/10 text-white font-mono text-[10px]">
              {getInitials(user.name)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white truncate font-sans text-xs">{user.name}</p>
              <p className="text-[10px] text-neutral-500 uppercase truncate">
                {user.role.replace(/_/g, " ")}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden lg:flex items-center justify-center w-full h-10 border-t border-white/[0.08] text-neutral-500 hover:text-white transition-colors"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  );
}
