"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Sparkles,
} from "lucide-react";
import { useAuthStore, useUser, getDashboardRoute } from "@/lib/auth";
import { getInitials } from "@/lib/utils";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/casting-calls", label: "Casting Calls" },
  { href: "/talent", label: "Discover Talent" },
  { href: "/verification", label: "Govt KYC & Guardian" },
];

export default function Navbar() {
  const pathname = usePathname();
  const user = useUser();
  const logout = useAuthStore((s) => s.logout);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#121215]/95 backdrop-blur-xl border-b border-[rgba(201,168,76,0.18)] shadow-lg shadow-black/50"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--gold-500), var(--gold-400))",
              }}
            >
              <span className="text-xs font-bold" style={{ color: "var(--charcoal-900)" }}>R</span>
            </div>
            <div className="flex flex-col justify-center">
              <span
                className="font-display font-bold text-lg leading-tight"
                style={{ color: "var(--ivory)" }}
              >
                Rangmanch
              </span>
              <span
                className="text-[10px] leading-tight font-medium"
                style={{ color: "var(--gold-400)", letterSpacing: "0.04em" }}
              >
                Where Talent Meets Opportunity
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links (Centered) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? "text-[var(--gold-300)] bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.25)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--ivory)] hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              {/* Dashboard link */}
              <Link
                href={getDashboardRoute(user.role)}
                className="hidden sm:flex btn-ghost text-sm"
              >
                Dashboard
              </Link>

              {/* Notifications */}
              <button
                className="relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/5"
                aria-label="Notifications"
              >
                <Bell size={17} style={{ color: "var(--text-secondary)" }} />
                <span
                  className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                  style={{ background: "var(--coral-500)" }}
                />
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((p) => !p)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors hover:bg-white/5"
                  id="user-menu-button"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-7 h-7 rounded-full object-cover"
                      style={{ border: "1.5px solid var(--gold-500)" }}
                    />
                  ) : (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "var(--gold-500)",
                        color: "var(--charcoal-900)",
                      }}
                    >
                      {getInitials(user.name)}
                    </div>
                  )}
                  <span className="hidden sm:block text-sm font-medium" style={{ color: "var(--ivory)" }}>
                    {user.name.split(" ")[0]}
                  </span>
                  <ChevronDown size={14} style={{ color: "var(--text-muted)" }} />
                </button>

                {userMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-xl p-1 z-50 shadow-lg animate-fadeIn"
                    style={{
                      background: "var(--charcoal-700)",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    <div className="px-3 py-2 border-b mb-1" style={{ borderColor: "var(--border-subtle)" }}>
                      <p className="text-sm font-medium" style={{ color: "var(--ivory)" }}>{user.name}</p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{user.email}</p>
                    </div>
                    <Link
                      href={getDashboardRoute(user.role)}
                      className="btn-ghost w-full justify-start text-sm"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User size={14} /> Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="btn-ghost w-full justify-start text-sm"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings size={14} /> Settings
                    </Link>
                    <div className="border-t mt-1 pt-1" style={{ borderColor: "var(--border-subtle)" }}>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        className="btn-ghost w-full justify-start text-sm"
                        style={{ color: "var(--coral-400)" }}
                      >
                        <LogOut size={14} /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-ghost hidden sm:flex text-sm">
                Log In
              </Link>
              <Link href="/signup" className="btn-primary text-sm px-4 py-2">
                Join Free
              </Link>
            </>
          )}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/5"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={18} style={{ color: "var(--ivory)" }} />
            ) : (
              <Menu size={18} style={{ color: "var(--ivory)" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--charcoal-800)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <div className="px-4 py-3 space-y-1">
            {publicLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--gold-400)] bg-[rgba(201,168,76,0.08)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {!user && (
              <div className="flex gap-2 pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <Link href="/login" className="btn-secondary flex-1 text-center text-sm">Log In</Link>
                <Link href="/signup" className="btn-primary flex-1 text-center text-sm">Join Free</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
