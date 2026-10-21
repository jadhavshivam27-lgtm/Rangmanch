"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEMO_CASTING_CALLS } from "@/lib/data";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Shield,
  DollarSign,
  ChevronRight,
  SlidersHorizontal,
  CheckCircle,
  Film,
  Award,
} from "lucide-react";
import { daysUntil } from "@/lib/utils";

export default function CastingCallsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedArchetype, setSelectedArchetype] = useState<string>("all");
  const [onlyEscrow, setOnlyEscrow] = useState<boolean>(false);

  // Filter options
  const projectTypes = [
    { id: "all", label: "All Formats" },
    { id: "feature_film", label: "Feature Films" },
    { id: "web_series", label: "OTT Series" },
    { id: "commercial", label: "Ad Films" },
    { id: "theatre", label: "Theatre" },
    { id: "short_film", label: "Short Films" },
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
    "Punjabi",
  ];

  const archetypes = [
    { id: "all", label: "All Archetypes" },
    { id: "gritty", label: "Gritty Underdog" },
    { id: "royal", label: "Regal Royalty" },
    { id: "heartland", label: "Heartland Native" },
    { id: "corporate", label: "Corporate Elite" },
    { id: "action", label: "Intense Action" },
  ];

  // Filtering Logic
  const filteredCalls = useMemo(() => {
    return DEMO_CASTING_CALLS.filter((call) => {
      // Safe Search
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

      // Type
      const matchesType =
        selectedProjectType === "all" || call.projectType === selectedProjectType;

      // Language
      const matchesLang =
        selectedLanguage === "All Languages" ||
        call.roles.some((r) => r.languages.includes(selectedLanguage));

      // Archetype (matches roles or keywords)
      const matchesArchetype =
        selectedArchetype === "all" ||
        title.toLowerCase().includes(selectedArchetype) ||
        desc.toLowerCase().includes(selectedArchetype) ||
        call.roles.some((r) =>
          r.roleName.toLowerCase().includes(selectedArchetype) ||
          r.description.toLowerCase().includes(selectedArchetype)
        );

      // Escrow Protected Filter
      const matchesEscrow = !onlyEscrow || call.status === "published";

      return matchesSearch && matchesType && matchesLang && matchesArchetype && matchesEscrow;
    });
  }, [searchQuery, selectedProjectType, selectedLanguage, selectedArchetype, onlyEscrow]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedProjectType("all");
    setSelectedLanguage("All Languages");
    setSelectedArchetype("all");
    setOnlyEscrow(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-28 pb-20">
        {/* Hero & Search Header */}
        <section
          className="relative py-12 px-4 sm:px-6 lg:px-8 border-b"
          style={{
            background: "linear-gradient(180deg, rgba(14,14,17,0.95) 0%, rgba(20,20,23,0.8) 100%)",
            borderColor: "rgba(201, 168, 76, 0.15)",
          }}
        >
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-gold">CASTING DIRECTORY</span>
                  <span className="badge badge-green flex items-center gap-1">
                    <Shield className="w-3 h-3" /> 100% CINTAA Fair-Play
                  </span>
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)]">
                  Discover Verified Casting Opportunities
                </h1>
                <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                  Audition for certified feature films, OTT originals, and commercial ads across India.
                  Zero registration fees, verified production houses, and instant AI match evaluation.
                </p>
              </div>

              {/* Stats pill */}
              <div className="flex items-center gap-4 text-xs font-mono bg-black/40 p-3 rounded-xl border border-white/5">
                <div>
                  <div className="text-[var(--gold-400)] font-bold text-base">42</div>
                  <div className="text-[var(--text-muted)]">Active Calls</div>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <div className="text-emerald-400 font-bold text-base">₹1.8 Cr</div>
                  <div className="text-[var(--text-muted)]">Escrow Protected</div>
                </div>
              </div>
            </div>

            {/* Smart Search Bar */}
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[var(--gold-400)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by character name, film title, director, or keyword (e.g. 'Inspector', 'Awadhi', 'Dharma')..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[var(--charcoal-800)] border border-[rgba(201,168,76,0.25)] text-sm text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold-500)] shadow-lg shadow-black/40"
                />
              </div>
            </div>

            {/* Archetype Filter Pills (Revolutionary Feature) */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold-400)]" />
                <span>Search by Character Archetype &amp; Screen Vibe:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {archetypes.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedArchetype(arch.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedArchetype === arch.id
                        ? "bg-[var(--gold-500)] text-[var(--charcoal-900)] font-bold shadow-md shadow-[var(--gold-500)]/20"
                        : "bg-white/5 text-[var(--text-secondary)] border border-white/5 hover:border-[var(--gold-500)]/30 hover:text-white"
                    }`}
                  >
                    {arch.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Format & Language Filters Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedProjectType(type.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                      selectedProjectType === type.id
                        ? "bg-white/15 text-[var(--gold-300)] border border-[var(--gold-500)]/40"
                        : "bg-black/30 text-[var(--text-muted)] hover:text-white border border-transparent"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* Language Dropdown */}
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-black/40 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-[var(--ivory)] focus:outline-none focus:border-[var(--gold-500)] cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-[var(--charcoal-900)]">
                      {lang}
                    </option>
                  ))}
                </select>

                {/* Escrow Guarantee Checkbox Toggle */}
                <label className="flex items-center gap-2 text-xs text-[var(--text-secondary)] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyEscrow}
                    onChange={(e) => setOnlyEscrow(e.target.checked)}
                    className="accent-[var(--gold-500)] rounded"
                  />
                  <span className="text-[var(--gold-300)] font-medium">₹ Escrow Protected Only</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Results Feed */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs text-[var(--text-muted)]">
              Showing <strong className="text-[var(--ivory)]">{filteredCalls.length}</strong> casting calls
            </div>
            <div className="text-xs text-[var(--gold-400)] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> AI Compatibility Match active
            </div>
          </div>

          {filteredCalls.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-black/30 border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/20 mx-auto flex items-center justify-center text-[var(--gold-400)]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--ivory)]">
                No Casting Calls Match Your Current Filters
              </h3>
              <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
                Try clearing your search query, changing the archetype, or resetting format filters to browse all verified auditions.
              </p>
              <button
                onClick={handleResetFilters}
                className="btn-primary text-xs px-5 py-2.5 mx-auto inline-flex items-center gap-2"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalls.map((call) => {
                const daysLeft = daysUntil(call.applicationDeadline || call.auditionDate || "2026-11-30T00:00:00Z");

                return (
                  <div
                    key={call.id}
                    className="group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
                    style={{
                      background: "var(--charcoal-800)",
                      borderColor: "rgba(201, 168, 76, 0.2)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  >
                    {/* Top Meta Bar */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="badge badge-gold uppercase text-[10px] tracking-wider">
                          {call.projectType.replace("_", " ")}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <DollarSign className="w-3 h-3" />
                          <span>Escrow Guaranteed</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-lg text-[var(--ivory)] group-hover:text-[var(--gold-300)] transition-colors line-clamp-1">
                          {call.title}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1.5">
                          <span>{call.organization?.name}</span>
                          {call.organization?.verificationStatus === "verified" && (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          )}
                        </p>
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                        {call.description}
                      </p>

                      {/* Roles Badges */}
                      <div className="space-y-1.5 pt-2 border-t border-white/5">
                        <div className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                          Open Roles ({call.roles.length}):
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {call.roles.map((r) => (
                            <span
                              key={r.id}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-black/40 border border-white/5 text-[var(--gold-200)]"
                            >
                              {r.roleName} • {r.ageMin}-{r.ageMax}y
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action & Deadline Bar */}
                    <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[var(--gold-400)]" />
                          {call.location}, {call.state}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-amber-400">
                          <Clock className="w-3.5 h-3.5" />
                          {daysLeft > 0 ? `${daysLeft} days left` : "Closing Soon"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-[var(--purple-500)]/20 border border-[var(--purple-500)]/40 flex items-center justify-center text-[var(--purple-400)] text-[10px] font-bold">
                            AI
                          </div>
                          <span className="text-[11px] font-semibold text-[var(--purple-300)]">
                            92% Profile Fit
                          </span>
                        </div>

                        <Link
                          href={`/casting-calls/${call.id}`}
                          className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                        >
                          <span>View Sides &amp; Audition</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
