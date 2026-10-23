"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEMO_TALENT } from "@/lib/data";
import {
  Search,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  SlidersHorizontal,
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
    "Urdu",
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
      <main className="min-h-screen bg-[#040406] text-[#f5f5f7] pt-12 pb-32">
        {/* Editorial Directory Header */}
        <section
          className="cinema-container"
          style={{
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "20px",
              backgroundColor: "rgba(212,175,97,0.1)",
              border: "1px solid rgba(212,175,97,0.25)",
              color: "#d4af61",
              fontSize: "10px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            <span>✦ SCREEN &amp; STAGE REPERTOIRE</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <span style={{ color: "#34d399" }}>ALL 6 PROFILES VERIFIED</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-cinema text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                The Performer Directory
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 max-w-2xl leading-relaxed">
                Discover verified Indian actors, classical dancers, vocalists, and theatre performers. Each profile features verified identity credentials, showreel materials, and direct audition submission capabilities.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-neutral-400 shrink-0">
              <div
                style={{
                  padding: "12px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "center",
                }}
              >
                <span className="font-cinema text-2xl font-bold text-white block">50,000+</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Verified Artists</span>
              </div>
              <div
                style={{
                  padding: "12px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(212,175,97,0.25)",
                  textAlign: "center",
                }}
              >
                <span className="font-cinema text-2xl font-bold text-[#d4af61] block">18 States</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Pan-India Guilds</span>
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="mt-10">
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#0a0a12",
                border: "1px solid rgba(212,175,97,0.3)",
                borderRadius: "16px",
                padding: "4px 8px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                transition: "border-color 0.2s ease",
              }}
            >
              <Search className="ml-4 w-5 h-5 text-[#d4af61] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by artist name, city (e.g. Mumbai, Delhi, Kochi, Hyderabad), dialect, or skills..."
                className="w-full bg-transparent px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-neutral-500 outline-none font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-neutral-300 hover:text-white uppercase transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls Row */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-widest uppercase">
            <div className="flex items-center gap-3">
              {["all", "Female", "Male"].map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedGender(gender)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    border:
                      selectedGender === gender
                        ? "1px solid #d4af61"
                        : "1px solid rgba(255,255,255,0.08)",
                    backgroundColor:
                      selectedGender === gender
                        ? "rgba(212,175,97,0.15)"
                        : "transparent",
                    color: selectedGender === gender ? "#f4e2b8" : "#8e8e98",
                    fontWeight: selectedGender === gender ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {gender === "all" ? "ALL PERFORMERS" : gender.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-neutral-500 text-[10px] flex items-center gap-1.5">
                <SlidersHorizontal size={12} /> LANGUAGE:
              </span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                style={{
                  backgroundColor: "#0e0e14",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  color: "#f5f5f7",
                  fontSize: "11px",
                  outline: "none",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              >
                {languages.map((l) => (
                  <option key={l} value={l} className="bg-[#0e0e14] text-white">
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Talent Portfolio Grid (Perfect 3-Column x 2-Row for All 6 Profiles) */}
        <section className="cinema-container" style={{ paddingTop: "48px" }}>
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-6 mb-8 border-b border-white/[0.04]">
            <span style={{ color: "#d4af61", fontWeight: 700 }}>
              SHOWING {filteredTalent.length} OF 6 VERIFIED PROFILES
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <ShieldCheck size={14} color="#34d399" />
              <span>CINTAA &amp; DIGILOCKER MEITY VALIDATED</span>
            </span>
          </div>

          {filteredTalent.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <p className="font-cinema text-2xl text-neutral-300">
                No performers match your search parameters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGender("all");
                  setSelectedLanguage("all");
                }}
                className="btn-cinema-gold"
                style={{ height: "42px", padding: "0 24px", fontSize: "11px" }}
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "32px",
                width: "100%",
              }}
            >
              {filteredTalent.map((talent) => {
                const isAvailable = talent.availability === "available";
                return (
                  <Link
                    key={talent.id}
                    href={`/talent/${talent.id}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#0a0a10",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "inherit",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,97,0.5)";
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0 30px 60px rgba(0,0,0,0.9), 0 0 35px rgba(212,175,97,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.7)";
                    }}
                  >
                    {/* Portrait Image (3:4 ratio) */}
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "3/4",
                        width: "100%",
                        overflow: "hidden",
                        backgroundColor: "#07070b",
                      }}
                    >
                      {talent.profilePhoto ? (
                        <img
                          src={talent.profilePhoto}
                          alt={talent.displayName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top center",
                            transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "36px",
                            fontFamily: "Playfair Display, serif",
                            color: "#d4af61",
                          }}
                        >
                          {talent.displayName[0]}
                        </div>
                      )}

                      {/* Gradient Vignette at Bottom of Image */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 40%, rgba(10,10,16,0.95) 100%)",
                        }}
                      />

                      {/* Top Badges */}
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          left: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          backgroundColor: "rgba(0,0,0,0.75)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(212,175,97,0.35)",
                          color: "#f4e2b8",
                          fontSize: "10px",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                        }}
                      >
                        <ShieldCheck size={12} color="#d4af61" />
                        <span>CINTAA VERIFIED</span>
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          right: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          backgroundColor: isAvailable
                            ? "rgba(16,185,129,0.2)"
                            : "rgba(245,158,11,0.2)",
                          backdropFilter: "blur(8px)",
                          border: isAvailable
                            ? "1px solid rgba(16,185,129,0.4)"
                            : "1px solid rgba(245,158,11,0.4)",
                          color: isAvailable ? "#34d399" : "#fbbf24",
                          fontSize: "10px",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: isAvailable ? "#10b981" : "#f59e0b",
                          }}
                        />
                        <span>{talent.availability}</span>
                      </div>

                      {/* Performer Name & Age Overlay at Base of Photo */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          left: "18px",
                          right: "18px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.18em",
                            color: "#d4af61",
                            fontWeight: 700,
                            marginBottom: "2px",
                          }}
                        >
                          {talent.gender?.toUpperCase()} • {talent.ageMin}–{talent.ageMax} YRS
                        </div>
                        <h2
                          className="font-cinema"
                          style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#ffffff",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {talent.displayName}
                        </h2>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div
                      style={{
                        padding: "18px 20px 20px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        flex: 1,
                      }}
                    >
                      {/* Location & Specialty */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "11px",
                          fontFamily: "monospace",
                        }}
                      >
                        <span
                          style={{
                            color: "#a0a0b0",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <MapPin size={12} color="#d4af61" />
                          <span>
                            {talent.city}, {talent.state}
                          </span>
                        </span>
                        <span style={{ color: "#34d399", fontWeight: 600 }}>
                          FTII / REP TRAINED
                        </span>
                      </div>

                      {/* Bio Excerpt */}
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#8e8e98",
                          margin: 0,
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {talent.bio}
                      </p>

                      {/* Language Badges */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {talent.languages.map((l) => (
                          <span
                            key={l}
                            style={{
                              fontSize: "10px",
                              fontFamily: "monospace",
                              padding: "3px 8px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              color: "#d0d0dc",
                            }}
                          >
                            {l}
                          </span>
                        ))}
                      </div>

                      {/* Action Footer */}
                      <div
                        style={{
                          marginTop: "auto",
                          paddingTop: "14px",
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "#d4af61",
                          fontWeight: 700,
                        }}
                      >
                        <span>VIEW FULL COMP CARD</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
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
