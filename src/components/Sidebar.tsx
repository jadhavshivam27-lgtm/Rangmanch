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
  { href: "/casting/dashboard", label: "Overview", icon: <LayoutDashboard size={17} /> },
  { href: "/casting/discover", label: "Discover Talent", icon: <Search size={17} /> },
  { href: "/casting/calls", label: "Casting Calls", icon: <Megaphone size={17} /> },
  { href: "/casting/applications", label: "Applications", icon: <FileText size={17} />, badge: "12" },
  { href: "/casting/auditions", label: "Auditions", icon: <Video size={17} /> },
  { href: "/casting/shortlists", label: "Shortlists", icon: <Users size={17} /> },
  { href: "/casting/calendar", label: "Calendar", icon: <Calendar size={17} /> },
  { href: "/casting/messages", label: "Messages", icon: <MessageSquare size={17} /> },
  { href: "/industry-connect", label: "Industry Connect", icon: <Network size={17} /> },
  { href: "/casting/ai-studio", label: "AI Audition Studio", icon: <Sparkles size={17} /> },
  { href: "/settings", label: "Settings", icon: <Settings size={17} /> },
];

const talentLinks: SidebarLink[] = [
  { href: "/talent/dashboard", label: "Dashboard", icon: <LayoutDashboard size={17} /> },
  { href: "/talent/profile", label: "My Profile", icon: <Users size={17} /> },
  { href: "/talent/portfolio", label: "Portfolio", icon: <Video size={17} /> },
  { href: "/talent/applications", label: "Applications", icon: <FileText size={17} /> },
  { href: "/casting-calls", label: "Casting Calls", icon: <Megaphone size={17} /> },
  { href: "/talent/saved", label: "Saved Calls", icon: <Search size={17} /> },
  { href: "/talent/calendar", label: "Calendar", icon: <Calendar size={17} /> },
  { href: "/talent/notifications", label: "Notifications", icon: <MessageSquare size={17} />, badge: "3" },
  { href: "/settings", label: "Settings", icon: <Settings size={17} /> },
];

const adminLinks: SidebarLink[] = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard size={17} /> },
  { href: "/admin/users", label: "Users", icon: <Users size={17} /> },
  { href: "/admin/organizations", label: "Organizations", icon: <Network size={17} /> },
  { href: "/admin/casting-calls", label: "Casting Calls", icon: <Megaphone size={17} /> },
  { href: "/admin/moderation", label: "Moderation", icon: <FileText size={17} /> },
  { href: "/admin/reports", label: "Reports & Safety", icon: <Video size={17} /> },
  { href: "/admin/activity", label: "Platform Activity", icon: <Calendar size={17} /> },
  { href: "/settings", label: "Settings", icon: <Settings size={17} /> },
];

const guardianLinks: SidebarLink[] = [
  { href: "/guardian/dashboard", label: "Dashboard", icon: <LayoutDashboard size={17} /> },
  { href: "/guardian/profiles", label: "Managed Profiles", icon: <Users size={17} /> },
  { href: "/guardian/consent", label: "Consent Management", icon: <FileText size={17} /> },
  { href: "/guardian/applications", label: "Applications", icon: <Megaphone size={17} /> },
  { href: "/guardian/safety", label: "Safety & Privacy", icon: <Video size={17} /> },
  { href: "/settings", label: "Settings", icon: <Settings size={17} /> },
];

function getLinksByRole(role: string): SidebarLink[] {
  switch (role) {
    case "casting_director":
    case "org_admin":
      return castingLinks;
    case "platform_admin":
      return adminLinks;
    case "guardian":
      return guardianLinks;
    default:
      return talentLinks;
  }
}

interface SidebarProps {
  role?: string;
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const user = useUser();
  const logout = useAuthStore((s) => s.logout);
  const [collapsed, setCollapsed] = useState(false);

  const links = getLinksByRole(role ?? user?.role ?? "talent");

  return (
    <aside
      className="hidden md:flex flex-col shrink-0 transition-all duration-300 border-r"
      style={{
        width: collapsed ? "64px" : "var(--sidebar-width)",
        background: "var(--charcoal-800)",
        borderColor: "var(--border-subtle)",
        minHeight: "100vh",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Logo area */}
      <div
        className="flex items-center gap-2 px-3 py-4 border-b"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, var(--gold-500), var(--gold-400))" }}
        >
          <span className="text-xs font-bold" style={{ color: "var(--charcoal-900)" }}>R</span>
        </div>
        {!collapsed && (
          <span className="font-display font-bold text-base" style={{ color: "var(--ivory)" }}>
            Rangmanch
          </span>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar-link ${isActive ? "active" : ""} ${collapsed ? "justify-center px-2" : ""}`}
              title={collapsed ? link.label : undefined}
            >
              <span className="shrink-0">{link.icon}</span>
              {!collapsed && (
                <span className="flex-1">{link.label}</span>
              )}
              {!collapsed && link.badge && (
                <span
                  className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "var(--coral-500)",
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User footer */}
      {user && !collapsed && (
        <div
          className="p-3 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover shrink-0"
                style={{ border: "1.5px solid var(--gold-500)" }}
              />
            ) : (
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: "var(--gold-500)", color: "var(--charcoal-900)" }}
              >
                {getInitials(user.name)}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: "var(--ivory)" }}>{user.name}</p>
              <p className="text-xs truncate capitalize" style={{ color: "var(--text-muted)" }}>
                {user.role.replace(/_/g, " ")}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((p) => !p)}
        className="hidden lg:flex items-center justify-center w-full h-9 border-t transition-colors hover:bg-white/5"
        style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  );
}
