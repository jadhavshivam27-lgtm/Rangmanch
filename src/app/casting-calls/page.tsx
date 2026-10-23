"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { DEMO_CASTING_CALLS } from "@/lib/data";
import {
  Search,
  MapPin,
  Clock,
  Lock,
  ArrowRight,
  Shield,
} from "lucide-react";
import { daysUntil, getStatusLabel } from "@/lib/utils";

export default function CastingCallsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [onlyEscrow, setOnlyEscrow] = useState<boolean>(false);

  // Filter options
  const projectTypes = [
    { id: "all", label: "ALL FORMATS" },
    { id: "feature_film", label: "FEATURE FILMS" },
    { id: "web_series", label: "OTT SERIES" },
    { id: "theatre", label: "THEATRE" },
    { id: "commercial", label: "COMMERCIALS" },
  ];

  const languages = [
    "All Languages",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Bengali",
  ];

  // Filtering Logic
  const filteredCalls = useMemo(() => {
    return DEMO_CASTING_CALLS.filter((call) => {
      const q = searchQuery.toLowerCase().trim();
      const orgName = (call.organization?.name || "").toLowerCase();
      const title = (call.title || "").toLowerCase();
      const desc = (call.description || "").toLowerCase();

      const matchesSearch =
        q === "" ||
        title.includes(q) ||
        desc.includes(q) ||
        orgName.includes(q) ||
        call.roles.some((r) => r.roleName.toLowerCase().includes(q));

      const matchesType =
        selectedProjectType === "all" || call.projectType === selectedProjectType;

      const matchesLang =
        selectedLanguage === "All Languages" ||
        call.roles.some((r) => r.languages.includes(selectedLanguage));

      const matchesEscrow = !onlyEscrow || call.status === "published";

      return matchesSearch && matchesType && matchesLang && matchesEscrow;
    });
  }, [searchQuery, selectedProjectType, selectedLanguage, onlyEscrow]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedProjectType("all");
    setSelectedLanguage("All Languages");
    setOnlyEscrow(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] pt-12 pb-32">
        
        {/* Editorial Page Header with Generous Negative Space */}
        <section className="cinema-container" style={{paddingBottom:'48px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-4">
            ✦ NATIONAL CASTING DIRECTORY
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                Current Castings &amp; Productions
              </h1>
              <p className="text-sm text-neutral-400 font-light mt-3 max-w-2xl leading-relaxed">
                Direct audition submissions for accredited Indian feature films, OTT original series, and stage productions. All engagements operate under CINTAA fair-play standards and escrow-protected compensation.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-white text-lg font-editorial block">42</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Active Sides</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="text-[#c5a059] text-lg font-editorial block">₹1.80 Cr</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Escrow Secured</span>
              </div>
            </div>
          </div>

          {/* Clean Editorial Search Bar */}
          <div className="mt-10">
            <div className="relative flex items-center border border-white/[0.15] focus-within:border-white transition-colors bg-white/[0.01]">
              <Search className="ml-5 w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search character roles, titles, dialects, or production studios..."
                className="w-full bg-transparent px-4 py-4 text-sm text-white placeholder:text-neutral-500 outline-none font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-5 text-xs font-mono text-neutral-400 hover:text-white uppercase"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Minimal Filter Controls Row */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 text-[11px] font-mono tracking-widest uppercase">
            {/* Format filters */}
            <div className="flex flex-wrap items-center gap-5">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedProjectType(type.id)}
                  className={`pb-1 transition-colors ${
                    selectedProjectType === type.id
                      ? "text-white border-b-2 border-[#c5a059] font-semibold"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Language & Escrow */}
            <div className="flex items-center gap-5">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent border border-white/15 px-3 py-1.5 text-[11px] text-neutral-300 focus:outline-none focus:border-white cursor-pointer uppercase font-mono"
              >
                {languages.map((l) => (
                  <option key={l} value={l} className="bg-[#0a0a0c] text-white">
                    {l}
                  </option>
                ))}
              </select>

              <label className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyEscrow}
                  onChange={(e) => setOnlyEscrow(e.target.checked)}
                  className="accent-[#c5a059]"
                />
                <span className="text-[10px] tracking-wider">Escrow Protected Only</span>
              </label>
            </div>
          </div>
        </section>

        {/* Results Grid (Whitespace Separation, Consistent 16:9 Production Imagery) */}
        <section className="cinema-container" style={{paddingTop:'48px'}}>
          
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-6 mb-8 border-b border-white/[0.04]">
            <span>SHOWING {filteredCalls.length} VERIFIED PRODUCTION SIDES</span>
            <span>DIRECT SELF-TAPE ENABLED</span>
          </div>

          {filteredCalls.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <p className="font-editorial text-2xl text-neutral-300">
                No casting opportunities match your selected criteria.
              </p>
              <button
                onClick={handleResetFilters}
                className="btn-editorial text-[10px] py-2 px-6"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredCalls.map((call) => {
                const daysLeft = daysUntil(call.applicationDeadline || "2024-11-30T23:59:59Z");

                return (
                  <div
                    key={call.id}
                    className="group flex flex-col justify-between border-b border-white/[0.08] pb-8"
                  >
                    <div>
                      {/* 16:9 Cinematic Production Image */}
                      <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-900 border border-white/[0.08] mb-5 relative">
                        <img
                          src="/hero.jpg"
                          alt={call.title}
                          className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/70 text-[9px] font-mono uppercase tracking-widest text-neutral-300">
                          {getStatusLabel(call.projectType)}
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/70 text-[9px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                          <Lock size={9} /> Escrow
                        </div>
                      </div>

                      {/* Studio & Location */}
                      <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
                        <span>{call.organization?.name || "Production"}</span>
                        <span>{call.location}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-editorial text-xl sm:text-2xl text-white group-hover:text-[#c5a059] transition-colors leading-snug mb-2 font-normal">
                        {call.title}
                      </h2>

                      {/* Synopsis */}
                      <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed mb-4">
                        {call.description}
                      </p>

                      {/* Character Sides List */}
                      {call.roles && (
                        <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] font-mono">
                          {call.roles.map((r) => (
                            <span
                              key={r.id}
                              className="border border-white/10 px-2 py-0.5 text-neutral-400"
                            >
                              {r.roleName}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Meta & Action */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 uppercase">
                        <Clock size={11} />
                        <span>{daysLeft > 0 ? `${daysLeft}d remaining` : "Closing soon"}</span>
                      </div>

                      <Link
                        href={`/casting-calls/${call.id}`}
                        className="btn-editorial text-[10px] py-2 px-4"
                      >
                        <span>VIEW SIDES</span>
                        <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </main>
    </>
  );
}
