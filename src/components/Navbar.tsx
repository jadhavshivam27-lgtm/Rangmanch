"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Film,
  Search,
  User,
} from "lucide-react";
import { useUser, useAuthStore, getDashboardRoute } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();
  const user = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#040406]/85 backdrop-blur-2xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#b89242] via-[#d4af61] to-[#f4e2b8] flex items-center justify-center font-bold text-black text-base shadow-[0_0_20px_rgba(212,175,97,0.4)] group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-cinema font-black text-2xl tracking-wider text-white group-hover:text-[#f4e2b8] transition-colors leading-none">
              RANGMANCH
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4af61] uppercase mt-1">
              CINEMA &amp; OTT CASTING
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <Link
            href="/"
            className={`hover:text-[#f4e2b8] transition-colors ${
              pathname === "/" ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/casting-calls"
            className={`hover:text-[#f4e2b8] transition-colors ${
              pathname.startsWith("/casting-calls") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            Casting Calls
          </Link>
          <Link
            href="/talent"
            className={`hover:text-[#f4e2b8] transition-colors ${
              pathname.startsWith("/talent") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            Performers
          </Link>
          <Link
            href="/verification"
            className={`hover:text-[#f4e2b8] transition-colors ${
              pathname.startsWith("/verification") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            Verified Guild
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href={getDashboardRoute(user.role)}
              className="btn-cinema-gold text-xs py-2.5 px-5"
            >
              <User size={14} />
              <span>Dashboard ({user.name.split(" ")[0]})</span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden sm:inline-flex text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white px-3 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/casting-calls"
                className="btn-cinema-gold text-xs py-2.5 px-6"
              >
                <span>Audition Now</span>
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#08080c] border-b border-white/10 px-6 py-6 space-y-4 text-xs font-semibold uppercase tracking-wider">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-white">Home</Link>
          <Link href="/casting-calls" onClick={() => setMobileOpen(false)} className="block py-2 text-neutral-300 hover:text-white">Casting Calls</Link>
          <Link href="/talent" onClick={() => setMobileOpen(false)} className="block py-2 text-neutral-300 hover:text-white">Performers</Link>
          <Link href="/verification" onClick={() => setMobileOpen(false)} className="block py-2 text-neutral-300 hover:text-white">Verified Guild</Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileOpen(false)} className="btn-cinema-ghost py-3 justify-center">Sign In</Link>
            <Link href="/signup" onClick={() => setMobileOpen(false)} className="btn-cinema-gold py-3 justify-center">Join Rangmanch</Link>
          </div>
        </div>
      )}
    </header>
  );
}
