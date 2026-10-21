"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Search,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Play,
  Sparkles,
  Film,
  Camera,
  Star,
  Tv,
  Award,
  Video,
  Flame,
  Layers,
  ChevronRight,
  Radio,
} from "lucide-react";
import {
  DEMO_CASTING_CALLS,
  DEMO_TALENT,
  DEMO_FAQ,
} from "@/lib/data";
import { formatSalary, daysUntil } from "@/lib/utils";

export default function HomePageClient() {
  const router = useRouter();
  const [selectedProjectType, setSelectedProjectType] = useState<string>("all");
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

  const projectCategories = [
    { id: "all", label: "All Productions", icon: Film },
    { id: "feature_film", label: "Feature Films", icon: Film },
    { id: "web_series", label: "OTT Series", icon: Tv },
    { id: "short_film", label: "Short Films", icon: Camera },
    { id: "tv_commercial", label: "Commercials", icon: Sparkles },
    { id: "theatre", label: "Theatre", icon: Flame },
  ];

  return (
    <div className="relative min-h-screen bg-[#040406] text-[#f5f5f7] overflow-x-hidden selection:bg-[#d4af61] selection:text-black">
      
      {/* ── 1. CINEMATIC HERO SHOWCASE ────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        
        {/* Background Film Backdrop & Warm Golden Stage Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1200px] h-[650px] bg-gradient-to-b from-[#d4af61]/20 via-[#b89242]/10 to-transparent blur-[140px] rounded-full transform -translate-y-1/3" />
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#e50914]/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#b89242]/15 blur-[130px] rounded-full" />
          
          {/* Subtle Film Grain / Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Live Casting Ticker Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#d4af61]/35 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_25px_rgba(212,175,97,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e50914] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e50914]"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d4af61] font-semibold">
              Live Audition Guild • 140+ Active Roles
            </span>
          </div>

          {/* Epic Cinematic Headline */}
          <h1 className="font-cinema text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] text-white mb-6">
            Where Talent <br className="hidden sm:inline" />
            Takes <span className="text-gradient-gold italic">The Stage</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-xl font-light text-neutral-300 leading-relaxed mb-10 text-balance">
            India&apos;s verified cinema and OTT audition platform. Connect directly with Bollywood directors, premium web series, and theatrical productions — guaranteed escrow &amp; certified guild talent.
          </p>

          {/* Cinematic Global Search Bar */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-2xl p-2 rounded-2xl sm:rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center gap-2 mb-12 hover:border-[#d4af61]/50 transition-all"
          >
            <div className="flex items-center gap-3 w-full px-4 py-2 sm:py-0">
              <Search className="w-5 h-5 text-[#d4af61] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search character roles, projects (e.g. Antim Prahar, Lead Actor)..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto btn-cinema-gold py-3 px-8 text-xs whitespace-nowrap shadow-none hover:shadow-[0_0_30px_rgba(212,175,97,0.5)]"
            >
              Search Roles
            </button>
          </form>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 pt-6 border-t border-white/[0.08] w-full max-w-3xl text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-cinema">₹4.2 Cr+</div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mt-1">Escrow Secured</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#d4af61] font-cinema">100%</div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mt-1">KYC Verified</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-cinema">45+</div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mt-1">Feature Films</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#e50914] font-cinema">0%</div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mt-1">Artist Fees</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. NOW CASTING — WIDESCREEN CINEMA SHELF ──────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold">
                NOW CASTING • NATIONWIDE AUDITIONS
              </span>
            </div>
            <h2 className="font-cinema text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Productions
            </h2>
          </div>

          <Link
            href="/casting-calls"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af61] hover:text-[#f4e2b8] transition-colors group"
          >
            <span>Explore All 140+ Castings</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-6 scrollbar-none mb-10">
          {projectCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedProjectType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedProjectType(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#d4af61] to-[#b89242] text-black font-bold shadow-[0_0_20px_rgba(212,175,97,0.4)]"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 16:9 Cinematic Production Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCastingCalls.map((call) => (
            <Link
              key={call.id}
              href={`/casting-calls/${call.id}`}
              className="group flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#d4af61]/60 transition-all duration-300 overflow-hidden hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,97,0.15)] hover:-translate-y-1"
            >
              {/* Poster Banner 16:9 */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={call.organization?.logo || "/talent1.jpg"}
                  alt={call.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/40 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/75 backdrop-blur-md text-[#d4af61] border border-[#d4af61]/30 font-semibold">
                    {call.projectType.replace("_", " ")}
                  </span>
                  {call.organization?.verificationStatus === "verified" && (
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40" title="Verified Production">
                      <Shield size={12} />
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
                  {daysUntil(call.applicationDeadline)}d left
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4af61] mb-1.5 flex items-center gap-1.5">
                    <span>{call.organization?.name || "Independent Production"}</span>
                  </div>
                  
                  <h3 className="font-cinema text-xl sm:text-2xl font-bold text-white group-hover:text-[#f4e2b8] transition-colors mb-3 leading-tight line-clamp-2">
                    {call.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed mb-6">
                    {call.description}
                  </p>
                </div>

                {/* Card Meta & Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                      Roles &amp; Compensation
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      {call.roles[0]?.compensation || "Industry Standard"}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4af61] group-hover:translate-x-1 transition-transform">
                    <span>Audition</span>
                    <ChevronRight size={14} />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ── 3. FEATURED PERFORMERS — CINEMA REPERTOIRE ────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-[#d4af61]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold">
                VERIFIED TALENT GUILD
              </span>
            </div>
            <h2 className="font-cinema text-3xl sm:text-5xl font-black text-white tracking-tight">
              Performers in the Spotlight
            </h2>
          </div>

          <Link
            href="/talent"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af61] hover:text-[#f4e2b8] transition-colors group"
          >
            <span>View Full Talent Roster</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3:4 Vertical Headshot Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {DEMO_TALENT.slice(0, 4).map((talent) => (
            <Link
              key={talent.id}
              href={`/talent/${talent.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/[0.08] hover:border-[#d4af61]/70 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,97,0.2)]"
            >
              <Image
                src={talent.profilePhoto || talent.portfolioPhotos[0] || "/talent1.jpg"}
                alt={talent.displayName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-transparent to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Badges on top */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                  <CheckCircle size={10} />
                  <span>VERIFIED</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#d4af61] border border-[#d4af61]/30">
                  GUILD
                </span>
              </div>

              {/* Showreel Indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#d4af61] group-hover:text-black transition-colors">
                <Play size={12} fill="currentColor" />
              </div>

              {/* Performer Details at bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#d4af61] font-semibold mb-1">
                  {talent.rolePreferences[0] || "Actor / Performer"}
                </p>
                <h3 className="font-cinema text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-[#f4e2b8] transition-colors">
                  {talent.displayName}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-neutral-400 mt-2 font-mono">
                  <MapPin size={12} className="text-neutral-500" />
                  <span>{talent.city}</span>
                  <span>•</span>
                  <span>Age {talent.ageMin}-{talent.ageMax}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ── 4. PRODUCTION ECOSYSTEM / BENTO SHOWCASE ────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold mb-3">
            BUILT FOR INDIAN ENTERTAINMENT
          </p>
          <h2 className="font-cinema text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            A New Standard for Cinema Casting
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Engineered to replace chaotic WhatsApp casting groups, commission cuts, and fake auditions with certified production security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-[#d4af61]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d4af61]/10 border border-[#d4af61]/30 flex items-center justify-center text-[#d4af61] mb-6">
                <Video size={22} />
              </div>
              <h3 className="font-cinema text-xl font-bold text-white mb-2">
                In-Browser Audition Studio
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Audition directly from your browser. Our AI Teleprompter scrolls your script and reads opposing dialogue cues in real-time, delivering broadcast-ready self-tapes.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-[11px] font-mono text-[#d4af61] uppercase tracking-wider">
              ✦ Smart AI Script Reader
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-[#d4af61]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e50914]/10 border border-[#e50914]/30 flex items-center justify-center text-[#e50914] mb-6">
                <Shield size={22} />
              </div>
              <h3 className="font-cinema text-xl font-bold text-white mb-2">
                DigiLocker KYC &amp; CINTAA Guild
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Zero fake profiles, zero impersonation. Identity verified through Government DigiLocker and cross-referenced with CINTAA guild membership numbers.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
              ✦ 100% Identity Certified
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-[#d4af61]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Award size={22} />
              </div>
              <h3 className="font-cinema text-xl font-bold text-white mb-2">
                Escrow Protected Compensation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Production budgets are deposited into bank-grade escrow before casting calls go live. Performers are guaranteed timely payment without unauthorized commission cuts.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-[11px] font-mono text-amber-400 uppercase tracking-wider">
              ✦ DPDP Act &amp; Escrow Backed
            </div>
          </div>

        </div>

      </section>

      {/* ── 5. CINEMATIC CALL TO ACTION BILLBOARD ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 md:p-20 border border-[#d4af61]/40 bg-gradient-to-r from-[#0d0d14] via-[#08080c] to-[#040406] shadow-[0_0_80px_rgba(212,175,97,0.15)] flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#d4af61]/20 via-[#b89242]/10 to-transparent blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold block mb-3">
              YOUR NEXT BIG ROLE AWAITS
            </span>
            <h2 className="font-cinema text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
              Step Into The Spotlight
            </h2>
            <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
              Create your verified cinematic profile, upload high-definition headshots and showreels, and audition for premier films today.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              href="/signup"
              className="w-full sm:w-auto btn-cinema-gold py-4 px-8 text-xs text-center justify-center"
            >
              <span>Join as Performer</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/signup?role=casting_director"
              className="w-full sm:w-auto btn-cinema-ghost py-4 px-8 text-xs text-center justify-center"
            >
              <span>Post a Casting Call</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 6. FREQUENTLY ASKED QUESTIONS ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/[0.08]">
        <div className="text-center mb-12">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold mb-2">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="font-cinema text-3xl sm:text-4xl font-bold text-white">
            Everything You Need To Know
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08]">
          {DEMO_FAQ.map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="font-cinema text-lg sm:text-xl text-white font-semibold mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
