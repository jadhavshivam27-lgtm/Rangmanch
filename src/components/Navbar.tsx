"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Bell,
} from "lucide-react";
import { useAuthStore, useUser, getDashboardRoute } from "@/lib/auth";
import { getInitials } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/casting-calls", label: "CASTING" },
  { href: "/talent", label: "DISCOVER TALENT" },
  { href: "/verification", label: "KYC & GUILD" },
];

export default function Navbar() {
  const pathname = usePathname();
  const user = useUser();
  const logout = useAuthStore((s) => s.logout);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // On homepage, the left panel handles the brand and compact navigation directly (ICONIQUE reference)
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-editorial text-2xl tracking-[0.2em] uppercase font-light text-[#f8f8f6] hover:text-white transition-colors">
            RANGMANCH
          </span>
        </Link>

        {/* Desktop Minimal Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-white ${
                pathname === link.href ? "text-white font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                href={getDashboardRoute(user.role)}
                className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-300 hover:text-white"
              >
                Dashboard
              </Link>
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((p) => !p)}
                  className="flex items-center gap-2 p-1.5 border border-white/10 hover:border-white/30 text-xs text-white"
                >
                  <span className="w-6 h-6 flex items-center justify-center bg-white/10 text-[10px] font-mono">
                    {getInitials(user.name)}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider">{user.name.split(" ")[0]}</span>
                  <ChevronDown size={12} />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0e0e12] border border-white/15 p-2 shadow-2xl z-50 text-xs">
                    <Link
                      href={getDashboardRoute(user.role)}
                      className="block px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-rose-400 hover:bg-white/5 mt-1 border-t border-white/10"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-5">
              <Link
                href="/login"
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-300 hover:text-white transition-colors"
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
                className="btn-editorial py-2.5 px-5 text-[10px]"
              >
                JOIN RANGMANCH
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0c] px-6 py-8 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              className="text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white py-2"
            >
              LOGIN
            </Link>
            <Link
              href="/signup"
              className="btn-editorial w-full justify-center text-xs"
            >
              JOIN RANGMANCH
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
