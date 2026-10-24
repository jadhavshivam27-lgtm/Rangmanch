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
    <header className="sticky top-0 z-40 w-full bg-[#040406]/95 backdrop-blur-2xl border-b border-white/[0.08]">
      <div className="cinema-container" style={{height:'80px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        
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
        <nav className="hidden md:flex items-center gap-9 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <Link
            href="/"
            className={`hover:text-[#f4e2b8] transition-colors py-2 relative ${
              pathname === "/" ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            <span>Home</span>
            {pathname === "/" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af61] rounded-full shadow-[0_0_8px_#d4af61]" />
            )}
          </Link>
          <Link
            href="/casting-calls"
            className={`hover:text-[#f4e2b8] transition-colors py-2 relative ${
              pathname.startsWith("/casting-calls") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            <span>Casting Calls</span>
            {pathname.startsWith("/casting-calls") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af61] rounded-full shadow-[0_0_8px_#d4af61]" />
            )}
          </Link>
          <Link
            href="/talent"
            className={`hover:text-[#f4e2b8] transition-colors py-2 relative ${
              pathname.startsWith("/talent") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            <span>Performers</span>
            {pathname.startsWith("/talent") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af61] rounded-full shadow-[0_0_8px_#d4af61]" />
            )}
          </Link>
          <Link
            href="/dashboard/talent"
            className={`hover:text-[#f4e2b8] transition-colors py-2 relative flex items-center gap-1.5 ${
              pathname.startsWith("/dashboard") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            <span>Upload Reel &amp; Studio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af61] animate-pulse" />
            {pathname.startsWith("/dashboard") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af61] rounded-full shadow-[0_0_8px_#d4af61]" />
            )}
          </Link>
          <Link
            href="/verification"
            className={`hover:text-[#f4e2b8] transition-colors py-2 relative ${
              pathname.startsWith("/verification") ? "text-[#d4af61] font-bold" : ""
            }`}
          >
            <span>Verified Guild</span>
            {pathname.startsWith("/verification") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af61] rounded-full shadow-[0_0_8px_#d4af61]" />
            )}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <Link
            href="/casting-calls"
            className="text-neutral-400 hover:text-white transition-colors p-1.5"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>

          {/* Notifications Icon with Badge */}
          <div className="relative cursor-pointer text-neutral-400 hover:text-white transition-colors p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="absolute top-1 right-0.5 w-3.5 h-3.5 rounded-full bg-[#e50914] text-[9px] font-bold flex items-center justify-center text-white">
              0
            </span>
          </div>

          {/* User Avatar linking to Performer Dashboard */}
          <Link
            href="/dashboard/talent"
            title="Performer Studio & Media Vault"
            className="w-8 h-8 rounded-full overflow-hidden border border-[#d4af61]/60 shrink-0 hover:scale-110 hover:border-[#d4af61] transition-all cursor-pointer"
          >
            <img
              src="/photos/real_03.jpg"
              alt="Shivam Jadhav — Performer Profile"
              className="w-full h-full object-cover"
            />
          </Link>

          {/* Audition Now CTA Button */}
          <Link
            href="/casting-calls"
            className="btn-cinema-gold text-xs py-2.5 px-6 shrink-0"
          >
            <span>Audition Now</span>
          </Link>

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
          <Link href="/dashboard/talent" onClick={() => setMobileOpen(false)} className="block py-2 text-[#d4af61] font-bold">Upload Reel &amp; Studio</Link>
          <Link href="/verification" onClick={() => setMobileOpen(false)} className="block py-2 text-neutral-300 hover:text-white">Verified Guild</Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link href="/dashboard/talent" onClick={() => setMobileOpen(false)} className="btn-cinema-gold py-3 justify-center">Performer Media Vault</Link>
            <Link href="/login" onClick={() => setMobileOpen(false)} className="btn-cinema-ghost py-3 justify-center">Sign In</Link>
          </div>
        </div>
      )}
    </header>
  );
}
