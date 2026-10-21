"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Search,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Menu,
  X,
  Lock,
} from "lucide-react";
import {
  DEMO_CASTING_CALLS,
  DEMO_TALENT,
  DEMO_FAQ,
} from "@/lib/data";
import { getStatusLabel, daysUntil } from "@/lib/utils";

export default function HomePageClient() {
  const router = useRouter();
  const [selectedProjectType, setSelectedProjectType] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCastingCalls = useMemo(() => {
    if (selectedProjectType === "all") return DEMO_CASTING_CALLS.slice(0, 6);
    return DEMO_CASTING_CALLS.filter((c) => c.projectType === selectedProjectType).slice(0, 6);
  }, [selectedProjectType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/casting-calls?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/casting-calls");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] selection:bg-white selection:text-black">
      
      {/* ── 1. SPLIT-SCREEN EDITORIAL HERO (INSPIRED BY ICONIQUE) ── */}
      <section className="relative min-h-screen w-full flex flex-col lg:flex-row border-b border-white/[0.08]">
        
        {/* ── LEFT PANEL (approx 48% width) ── */}
        <div className="w-full lg:w-[48%] min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-16 border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#0a0a0c]">
          
          {/* Top: Brand & Compact Navigation */}
          <div>
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <Link href="/" className="inline-block">
                <span className="font-editorial text-2xl sm:text-3xl font-light tracking-[0.22em] uppercase text-[#f8f8f6] hover:text-white transition-colors">
                  RANGMANCH
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-400 hover:text-white"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Compact Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 border-b border-white/[0.06] pb-6">
              <Link href="/" className="text-white font-semibold hover:text-white transition-colors">
                HOME
              </Link>
              <Link href="/casting-calls" className="hover:text-white transition-colors">
                CASTING
              </Link>
              <Link href="/talent" className="hover:text-white transition-colors">
                DISCOVER TALENT
              </Link>
              <a href="#about" className="hover:text-white transition-colors">
                ABOUT
              </a>
              <span className="text-white/20">|</span>
              <Link href="/login" className="hover:text-white transition-colors">
                LOGIN
              </Link>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {mobileMenuOpen && (
              <div className="lg:hidden py-6 space-y-4 border-b border-white/10 mb-8">
                <Link href="/" className="block text-xs uppercase tracking-[0.2em] text-white">
                  HOME
                </Link>
                <Link href="/casting-calls" className="block text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white">
                  CASTING
                </Link>
                <Link href="/talent" className="block text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white">
                  DISCOVER TALENT
                </Link>
                <a href="#about" className="block text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white">
                  ABOUT
                </a>
                <Link href="/login" className="block text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white pt-2 border-t border-white/10">
                  LOGIN
                </Link>
              </div>
            )}
          </div>

          {/* Center: Main Editorial Headline & Tagline (Substantial Negative Space) */}
          <div className="my-auto py-12 lg:py-16 max-w-xl">
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c5a059] mb-6">
              ✦ National Casting &amp; Talent Directory
            </p>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.02] tracking-[-0.015em] font-light text-[#f8f8f6] mb-6">
              RANGMANCH<br />
              <span className="italic font-normal text-white/90">CASTING &amp; TALENT</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed tracking-wide max-w-md mb-10">
              Connecting extraordinary talent with the stories that matter.
            </p>

            {/* Two Minimal Outlined Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/casting-calls"
                className="btn-editorial"
              >
                EXPLORE CASTING
              </Link>
              <Link
                href="/signup?role=talent"
                className="btn-editorial-solid"
              >
                JOIN RANGMANCH
              </Link>
            </div>
          </div>

          {/* Bottom: Editorial Footer Details */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            <div>
              <span>MUMBAI • DELHI • HYDERABAD • BENGALURU</span>
            </div>
            <div>
              <span>EST. 2024 / CINTAA FAIR-PLAY</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL (approx 52% width) — ASYMMETRICAL IMAGE COLLAGE ── */}
        <div className="w-full lg:w-[52%] min-h-[600px] lg:min-h-screen bg-[#0d0d12] p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full max-w-3xl grid grid-cols-12 gap-3 sm:gap-4 auto-rows-fr">
            
            {/* Top Wide Image (Spans 12 cols) */}
            <div className="col-span-12 row-span-4 relative overflow-hidden bg-neutral-900 border border-white/[0.08] group min-h-[180px] sm:min-h-[220px]">
              <img
                src="/hero.jpg"
                alt="Cinema Production Stage"
                className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/80">
                <span>Featured Production Sides</span>
                <span>Pan-India</span>
              </div>
            </div>

            {/* Middle Left: Large Vertical Portrait (Spans 7 cols) */}
            <div className="col-span-7 row-span-6 relative overflow-hidden bg-neutral-900 border border-white/[0.08] group min-h-[240px] sm:min-h-[320px]">
              <img
                src="/talent1.jpg"
                alt="Priya Sharma — Actor"
                className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <p className="font-editorial text-base sm:text-lg text-white font-normal leading-tight">
                  Priya Sharma
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059]">
                  Dramatic Lead • FTII
                </p>
              </div>
            </div>

            {/* Middle Right: Tall Vertical Portrait (Spans 5 cols) */}
            <div className="col-span-5 row-span-6 relative overflow-hidden bg-neutral-900 border border-white/[0.08] group min-h-[240px] sm:min-h-[320px]">
              <img
                src="/talent2.jpg"
                alt="Arjun Mehta — Actor"
                className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <p className="font-editorial text-base sm:text-lg text-white font-normal leading-tight">
                  Arjun Mehta
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                  Screen &amp; Theatre
                </p>
              </div>
            </div>

            {/* Bottom Left Supporting Image (Spans 5 cols) */}
            <div className="col-span-5 row-span-4 relative overflow-hidden bg-neutral-900 border border-white/[0.08] group min-h-[160px] sm:min-h-[200px]">
              <img
                src="/talent3.jpg"
                alt="Rekha Pillai — Character Actor"
                className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-editorial text-sm sm:text-base text-white">
                  Rekha Pillai
                </p>
                <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                  Malayalam / Hindi
                </p>
              </div>
            </div>

            {/* Bottom Right Supporting Image (Spans 7 cols) */}
            <div className="col-span-7 row-span-4 relative overflow-hidden bg-neutral-900 border border-white/[0.08] group min-h-[160px] sm:min-h-[200px]">
              <img
                src="/talent4.jpg"
                alt="Kabir Nair — Performer"
                className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3.5 right-3.5">
                <p className="font-editorial text-sm sm:text-base text-white">
                  Kabir Nair
                </p>
                <p className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                  Dance &amp; Physical Theatre
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── 2. EDITORIAL CASTING OPPORTUNITIES ───────────────────── */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-b border-white/[0.08]">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-12">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
              ✦ OPEN PRODUCTIONS
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Current Castings
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 max-w-xl">
              Authentic film, television, theatre, and OTT casting calls verified directly with accredited production companies.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono tracking-widest uppercase">
            {[
              { id: "all", label: "ALL" },
              { id: "feature_film", label: "FEATURE FILMS" },
              { id: "web_series", label: "OTT SERIES" },
              { id: "theatre", label: "THEATRE" },
              { id: "commercial", label: "COMMERCIALS" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedProjectType(tab.id)}
                className={`pb-1 transition-colors ${
                  selectedProjectType === tab.id
                    ? "text-white border-b-2 border-[#c5a059] font-semibold"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Casting Opportunities Rows (Clean Hairline Borders, Zero Clunky Cards) */}
        <div className="divide-y divide-white/[0.08]">
          {filteredCastingCalls.map((call) => {
            const days = daysUntil(call.applicationDeadline);
            return (
              <div
                key={call.id}
                className="py-8 group flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.015] px-4 -mx-4 transition-colors"
              >
                {/* Left: Project Details */}
                <div className="md:w-3/5 space-y-2">
                  <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    <span className="text-[#c5a059]">{getStatusLabel(call.projectType)}</span>
                    <span>•</span>
                    <span>{call.location}</span>
                    <span>•</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Lock size={10} /> ESCROW PROTECTED
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl text-white group-hover:text-[#c5a059] transition-colors font-normal">
                    {call.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light line-clamp-2 max-w-2xl leading-relaxed">
                    {call.description}
                  </p>

                  {/* Character Sides */}
                  {call.roles && (
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-neutral-300">
                      {call.roles.map((r) => (
                        <span key={r.id} className="border border-white/10 px-2.5 py-0.5 text-neutral-400">
                          {r.roleName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Meta & Direct Link */}
                <div className="md:w-2/5 flex flex-row md:flex-col items-start md:items-end justify-between gap-4">
                  <div className="text-right text-[11px] font-mono text-neutral-400">
                    <div className="flex items-center gap-1 text-neutral-400 justify-end">
                      <Clock size={12} />
                      <span>{days > 0 ? `${days} DAYS REMAINING` : "CLOSING TODAY"}</span>
                    </div>
                    {call.organization && (
                      <p className="text-neutral-500 text-[10px] mt-0.5">{call.organization.name}</p>
                    )}
                  </div>

                  <Link
                    href={`/casting-calls/${call.id}`}
                    className="btn-editorial py-2 px-5 text-[10px]"
                  >
                    <span>VIEW CASTING</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Castings */}
        <div className="mt-14 text-center">
          <Link
            href="/casting-calls"
            className="btn-editorial text-[11px] py-3.5 px-8"
          >
            VIEW ALL 42 OPEN CASTINGS
          </Link>
        </div>
      </section>

      {/* ── 3. THE EDITORIAL ROSTER (DISCOVER TALENT) ──────────── */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-b border-white/[0.08]">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-12">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
              ✦ SCREEN &amp; STAGE
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              The Talent Roster
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2">
              Curated portfolios of certified actors, dancers, vocalists, and theatre performers.
            </p>
          </div>

          <Link
            href="/talent"
            className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            VIEW FULL ROSTER →
          </Link>
        </div>

        {/* Clean Portrait Grid (3:4 Ratio, Consistent Proportions) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {DEMO_TALENT.slice(0, 6).map((talent) => (
            <Link
              key={talent.id}
              href={`/talent/${talent.id}`}
              className="group block"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-white/[0.08] mb-3 relative">
                {talent.profilePhoto ? (
                  <img
                    src={talent.profilePhoto}
                    alt={talent.displayName}
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-editorial text-2xl text-neutral-500">
                    {talent.displayName[0]}
                  </div>
                )}
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 text-[9px] font-mono uppercase tracking-wider text-neutral-300">
                  {talent.availability}
                </div>
              </div>

              <div>
                <h3 className="font-editorial text-base text-white group-hover:text-[#c5a059] transition-colors leading-snug">
                  {talent.displayName}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  {talent.skills.acting || "Performer"} • {talent.city}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. THE EDITORIAL MANIFESTO / ABOUT ──────────────────── */}
      <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-4">
              ✦ THE STANDARD
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              A Refined Paradigm for Indian Casting.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
            <p>
              For decades, casting in Indian cinema, television, and theatre has been fragmented by middlemen, unauthorized casting calls, and lack of verified credentials. Rangmanch was conceived as a digital standard of trust and artistic elevation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono">
              <div>
                <p className="text-white font-semibold uppercase tracking-wider mb-1">01. VERIFIED IDENTITY</p>
                <p className="text-neutral-500 leading-normal">
                  DigiLocker KYC and CINTAA guild credentials eliminate impersonation and fraud.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold uppercase tracking-wider mb-1">02. ESCROW SECURITY</p>
                <p className="text-neutral-500 leading-normal">
                  Production fees are held securely in advance. Guaranteed compensation for every performer.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold uppercase tracking-wider mb-1">03. BROWSER STUDIO</p>
                <p className="text-neutral-500 leading-normal">
                  Built-in AI teleprompter reads opposing character cues for broadcast-grade self-tapes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. MINIMALIST FAQ ACCORDION ─────────────────────────── */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto border-b border-white/[0.08]">
        <div className="text-center mb-14">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            ✦ INFORMATION
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-light text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08]">
          {DEMO_FAQ.map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="font-editorial text-lg sm:text-xl text-white mb-2 font-normal">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. MINIMALIST FOOTER ─────────────────────────────────── */}
      <footer className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-xs font-mono text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-white font-editorial tracking-[0.2em] text-sm uppercase mr-3">RANGMANCH</span>
          <span>© 2024 ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex items-center gap-6 uppercase tracking-widest text-[10px]">
          <Link href="/casting-calls" className="hover:text-white transition-colors">CASTINGS</Link>
          <Link href="/talent" className="hover:text-white transition-colors">TALENT</Link>
          <Link href="/verification" className="hover:text-white transition-colors">KYC &amp; GUILD</Link>
          <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
        </div>
      </footer>

    </main>
  );
}
