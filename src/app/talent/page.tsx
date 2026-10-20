"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEMO_TALENT } from "@/lib/data";
import {
  Search,
  Filter,
  MapPin,
  Sparkles,
  Shield,
  Star,
  CheckCircle,
  Video,
  Languages,
  Award,
  ChevronRight,
  UserCheck,
} from "lucide-react";

export default function TalentDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedArchetype, setSelectedArchetype] = useState<string>("all");
  const [onlyVerified, setOnlyVerified] = useState<boolean>(false);

  const archetypes = [
    { id: "all", label: "All Archetypes" },
    { id: "gritty", label: "Gritty Underdog" },
    { id: "regal", label: "Regal Royalty" },
    { id: "heartland", label: "Heartland Native" },
    { id: "corporate", label: "Corporate Elite" },
    { id: "romantic", label: "Romantic Charm" },
  ];

  const languages = [
    "All Languages",
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Punjabi",
    "Bengali",
  ];

  const filteredTalent = useMemo(() => {
    return DEMO_TALENT.filter((talent) => {
      const matchesSearch =
        talent.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (talent.bio || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.languages.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLang =
        selectedLanguage === "all" ||
        selectedLanguage === "All Languages" ||
        talent.languages.includes(selectedLanguage);

      const matchesGender =
        selectedGender === "all" ||
        (talent.gender || "").toLowerCase() === selectedGender.toLowerCase();

      return matchesSearch && matchesLang && matchesGender;
    });
  }, [searchQuery, selectedLanguage, selectedGender]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-24 pb-20">
        {/* Header Hero Section */}
        <section
          className="relative py-12 px-4 sm:px-6 lg:px-8 border-b"
          style={{
            background: "linear-gradient(180deg, rgba(14,14,17,0.95) 0%, rgba(20,20,24,0.8) 100%)",
            borderColor: "rgba(201, 168, 76, 0.15)",
          }}
        >
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-gold">TALENT DISCOVERY</span>
                  <span className="badge badge-purple flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> AI Archetype Vectoring
                  </span>
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)]">
                  Discover India&apos;s Next Screen Generation
                </h1>
                <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                  Search certified performers across Bollywood, South Indian cinema, and regional theatre.
                  Explore 360° comp cards, verified dialects, and audition showreels.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono bg-black/40 p-3 rounded-xl border border-white/5">
                <div>
                  <div className="text-[var(--gold-400)] font-bold text-base">50,000+</div>
                  <div className="text-[var(--text-muted)]">Verified Talent</div>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <div className="text-purple-400 font-bold text-base">22</div>
                  <div className="text-[var(--text-muted)]">Indian Dialects</div>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--gold-400)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by actor name, city (e.g. Mumbai, Bengaluru), skills (Classical Dance, Stunts), or dialect..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[var(--charcoal-800)] border border-[rgba(201,168,76,0.25)] text-sm text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold-500)] shadow-lg shadow-black/40"
              />
            </div>

            {/* Archetype Filter Buttons */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--purple-400)]" />
                <span>Filter by Cinematic Vibe &amp; Archetype:</span>
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

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                {["all", "Female", "Male"].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                      selectedGender === gender
                        ? "bg-white/15 text-[var(--gold-300)] border border-[var(--gold-500)]/40"
                        : "bg-black/30 text-[var(--text-muted)] hover:text-white border border-transparent"
                    }`}
                  >
                    {gender === "all" ? "All Genders" : gender}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
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

                <label className="flex items-center gap-2 text-xs text-[var(--text-secondary)] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyVerified}
                    onChange={(e) => setOnlyVerified(e.target.checked)}
                    className="accent-[var(--gold-500)] rounded"
                  />
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <Shield className="w-3 h-3" /> CINTAA Verified Only
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Talent Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs text-[var(--text-muted)]">
              Showing <strong className="text-[var(--ivory)]">{filteredTalent.length}</strong> performers
            </div>
            <span className="text-xs text-[var(--gold-400)] font-medium flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" /> All Headshots Certified Authentic
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTalent.map((talent) => (
              <div
                key={talent.id}
                className="group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                {/* Photo Aspect Box */}
                <div className="relative aspect-[4/5] w-full bg-black/60 overflow-hidden">
                  <Image
                    src={talent.profilePhoto || "/talent1.jpg"}
                    alt={talent.displayName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="badge badge-gold text-[10px] uppercase font-mono">
                      {talent.ageMin}–{talent.ageMax} yrs
                    </span>
                    <span className="badge badge-green flex items-center gap-1 text-[10px]">
                      <Shield className="w-2.5 h-2.5" /> Verified
                    </span>
                  </div>

                  {/* Bottom Info on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[var(--gold-300)] transition-colors">
                      {talent.displayName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-0.5">
                      <MapPin className="w-3 h-3 text-[var(--gold-400)]" />
                      <span>{talent.city}, {talent.state}</span>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Spoken Languages */}
                    <div className="flex flex-wrap gap-1">
                      {talent.languages.slice(0, 3).map((lang) => (
                        <span
                          key={lang}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[var(--gold-200)]"
                        >
                          {lang}
                        </span>
                      ))}
                      {talent.languages.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 text-[var(--text-muted)]">
                          +{talent.languages.length - 3}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {talent.bio}
                    </p>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-purple-300 flex items-center gap-1">
                      <Video className="w-3 h-3" /> Showreel Active
                    </span>

                    <Link
                      href={`/talent/${talent.id}`}
                      className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1 font-semibold"
                    >
                      <span>View Comp Card</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
