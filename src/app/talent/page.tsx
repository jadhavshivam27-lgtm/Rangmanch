"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { DEMO_TALENT } from "@/lib/data";
import {
  Search,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function TalentDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");

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
  ];

  const filteredTalent = useMemo(() => {
    return DEMO_TALENT.filter((talent) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        talent.displayName.toLowerCase().includes(q) ||
        talent.city.toLowerCase().includes(q) ||
        (talent.bio || "").toLowerCase().includes(q) ||
        talent.languages.some((l) => l.toLowerCase().includes(q));

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
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] pt-12 pb-32">
        
        {/* Editorial Directory Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-12 border-b border-white/[0.08]">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-4">
            ✦ SCREEN &amp; STAGE REPERTOIRE
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                The Performer Directory
              </h1>
              <p className="text-sm text-neutral-400 font-light mt-3 max-w-2xl leading-relaxed">
                Discover verified Indian actors, classical dancers, vocalists, and theatre performers. Each profile features verified identity credentials, showreel materials, and direct audition submission capabilities.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-white text-lg font-editorial block">50,000+</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Artists</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="text-[#c5a059] text-lg font-editorial block">18 States</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Pan-India</span>
              </div>
            </div>
          </div>

          {/* Clean Search Input */}
          <div className="mt-10">
            <div className="relative flex items-center border border-white/[0.15] focus-within:border-white transition-colors bg-white/[0.01]">
              <Search className="ml-5 w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by artist name, city (e.g. Mumbai, Delhi, Kochi), dialect, or skills..."
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
            <div className="flex items-center gap-5">
              {["all", "Female", "Male"].map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedGender(gender)}
                  className={`pb-1 transition-colors ${
                    selectedGender === gender
                      ? "text-white border-b-2 border-[#c5a059] font-semibold"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {gender === "all" ? "ALL PERFORMERS" : gender.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-neutral-500 text-[10px]">LANGUAGE:</span>
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
            </div>
          </div>
        </section>

        {/* Talent Portfolio Grid (Consistent 3:4 Proportions, Minimal Labels) */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12">
          
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-6 mb-8 border-b border-white/[0.04]">
            <span>SHOWING {filteredTalent.length} VERIFIED PROFILES</span>
            <span>CINTAA &amp; DIGILOCKER CERTIFIED</span>
          </div>

          {filteredTalent.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <p className="font-editorial text-2xl text-neutral-300">
                No performers match your search parameters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGender("all");
                  setSelectedLanguage("all");
                }}
                className="btn-editorial text-[10px] py-2 px-6"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredTalent.map((talent) => (
                <Link
                  key={talent.id}
                  href={`/talent/${talent.id}`}
                  className="group flex flex-col justify-between border-b border-white/[0.06] pb-6"
                >
                  <div>
                    {/* Consistent 3:4 Portrait Image */}
                    <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-white/[0.08] mb-4 relative">
                      {talent.profilePhoto ? (
                        <img
                          src={talent.profilePhoto}
                          alt={talent.displayName}
                          className="w-full h-full object-cover object-top filter grayscale-[20%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-editorial text-3xl text-neutral-600">
                          {talent.displayName[0]}
                        </div>
                      )}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/70 text-[9px] font-mono uppercase tracking-wider text-neutral-300">
                        {talent.availability}
                      </div>
                    </div>

                    {/* Performer Name in Editorial Serif */}
                    <h2 className="font-editorial text-xl sm:text-2xl text-white group-hover:text-[#c5a059] transition-colors leading-snug font-normal">
                      {talent.displayName}
                    </h2>

                    {/* Profession & City */}
                    <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1 flex items-center gap-1">
                      <MapPin size={10} className="text-neutral-500" />
                      <span>{talent.city}, {talent.state}</span>
                    </p>

                    {/* Relevant Skills & Languages */}
                    <div className="flex flex-wrap gap-1.5 mt-3 text-[10px] font-mono text-neutral-500">
                      {talent.languages.slice(0, 3).map((l) => (
                        <span key={l} className="border border-white/5 px-2 py-0.5">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                    <span>VIEW PORTFOLIO</span>
                    <ArrowRight size={11} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

      </main>
    </>
  );
}
