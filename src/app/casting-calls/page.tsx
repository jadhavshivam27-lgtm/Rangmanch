"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PitchbookModal from "@/components/PitchbookModal";
import CallbackDispatcherModal from "@/components/CallbackDispatcherModal";
import ArchivalTalentModal from "@/components/ArchivalTalentModal";
import {
  Search,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
  Star,
  Film,
  Tv,
  Music,
  Megaphone,
  Trophy,
  ChevronDown,
  BadgeCheck,
  FileText,
  Calendar,
  Archive,
} from "lucide-react";

// ─── Self-contained casting data ─────────────────────────────
const CASTINGS = [
  {
    id: "cc-1",
    title: "Antim Prahar",
    subtitle: "Epic Historical Feature Film",
    type: "feature_film",
    typeLabel: "Feature Film",
    studio: "Starlight Casting Co.",
    director: "Imtiaz Ali",
    location: "Mumbai, Maharashtra",
    language: "Hindi",
    budget: "₹85 Lakh – ₹1.2 Cr",
    deadline: "Nov 14, 2024",
    daysLeft: 21,
    escrow: true,
    verified: true,
    image: "/photos/real_06.jpg",
    synopsis:
      "A sweeping period drama set in 1857, following a troupe of performers who secretly aid the independence movement through their art.",
    roles: [
      { name: "Neha Sinha — Female Lead", age: "22–28", gender: "Female" },
      { name: "Vikram Rao — Antagonist", age: "35–45", gender: "Male" },
      { name: "Pratibha — Supporting", age: "18–24", gender: "Female" },
    ],
    tags: ["Period Drama", "Action", "Hindustani Classical", "CINTAA"],
    color: "#d4af61",
  },
  {
    id: "cc-2",
    title: "Hollow Nights — Season 2",
    subtitle: "OTT Psychological Thriller Web Series",
    type: "web_series",
    typeLabel: "OTT Series",
    studio: "Spectrum Productions",
    director: "Zoya Akhtar",
    location: "Delhi NCR",
    language: "Hindi / English",
    budget: "₹18–25 Lakh / Episode",
    deadline: "Nov 08, 2024",
    daysLeft: 15,
    escrow: true,
    verified: true,
    image: "/photos/real_13.jpg",
    synopsis:
      "A forensic psychologist is pulled into a labyrinthine murder conspiracy within Delhi's underground art scene. 8-episode streaming series for Prime Video.",
    roles: [
      { name: "Rohan — Cyber Forensics Lead", age: "28–36", gender: "Male" },
      { name: "Ayesha — Journalist", age: "24–32", gender: "Female" },
    ],
    tags: ["Psychological Thriller", "OTT", "Prime Video", "English Fluency"],
    color: "#818cf8",
  },
  {
    id: "cc-3",
    title: "Tata Motors – 'Ahead'",
    subtitle: "National TV Commercial (60 sec + Digital Cut)",
    type: "commercial",
    typeLabel: "Commercial",
    studio: "NovaCast India × Ogilvy",
    director: "Shakun Batra",
    location: "Mumbai + Lonavala Shoot",
    language: "Hindi",
    budget: "₹3.5–6 Lakh (Usage: 1 Year)",
    deadline: "Oct 30, 2024",
    daysLeft: 6,
    escrow: true,
    verified: true,
    image: "/photos/real_15.jpg",
    synopsis:
      "A modern narrative about an evolving Indian family embracing tomorrow's mobility. Seeking genuine chemistry between lead couple — no prior ad experience required.",
    roles: [
      { name: "Modern Father", age: "30–40", gender: "Male" },
      { name: "Working Mother", age: "28–38", gender: "Female" },
    ],
    tags: ["Corporate TVC", "Lifestyle", "Escrow Protected", "National Broadcast"],
    color: "#34d399",
  },
  {
    id: "cc-4",
    title: "Khwaab Ki Zanjeer",
    subtitle: "Marathi & Hindi Stage Musical Production",
    type: "theatre",
    typeLabel: "Theatre",
    studio: "Resonance Theatre Group",
    director: "Atul Kumar",
    location: "NCPA Mumbai / Prithvi Theatre",
    language: "Hindi / Marathi",
    budget: "₹45,000–₹80,000 / Month",
    deadline: "Nov 22, 2024",
    daysLeft: 29,
    escrow: false,
    verified: true,
    image: "/photos/real_05.jpg",
    synopsis:
      "An original musical exploring themes of partition, love, and displacement across three generations. Requires trained vocalists and movement artists.",
    roles: [
      { name: "Razia — Protagonist (Singer)", age: "20–30", gender: "Female" },
      { name: "Hakim — Patriarch", age: "45–60", gender: "Male" },
      { name: "Ensemble (5 Roles)", age: "18–35", gender: "Any" },
    ],
    tags: ["Musical Theatre", "Classical Singing", "Hindustani Vocals", "NCPA"],
    color: "#f472b6",
  },
  {
    id: "cc-5",
    title: "Neel — Telugu Feature",
    subtitle: "Telugu Pan-India Action Drama",
    type: "feature_film",
    typeLabel: "Feature Film",
    studio: "Mythri Movie Makers",
    director: "Trivikram Srinivas",
    location: "Hyderabad / International Shoot",
    language: "Telugu / Tamil / Hindi",
    budget: "₹1.5–3 Cr (Lead Role)",
    deadline: "Dec 05, 2024",
    daysLeft: 42,
    escrow: true,
    verified: true,
    image: "/photos/real_08.jpg",
    synopsis:
      "High-octane action drama starring a street-level police officer uncovering a political conspiracy. Seeking a commanding female lead with action training.",
    roles: [
      { name: "IPS Officer Kavya", age: "25–33", gender: "Female" },
      { name: "Villain Sidekick", age: "28–40", gender: "Male" },
    ],
    tags: ["Pan-India", "Action", "Telugu", "Stunt Training Required"],
    color: "#fb923c",
  },
  {
    id: "cc-6",
    title: "Meera — Biographical Drama",
    subtitle: "National Award Submission Feature Film",
    type: "feature_film",
    typeLabel: "Feature Film",
    studio: "NFDC × Cinestaan Film Company",
    director: "Shonali Bose",
    location: "Rajasthan / Vrindavan",
    language: "Hindi / Braj Bhasha",
    budget: "₹50–90 Lakh (Lead)",
    deadline: "Nov 28, 2024",
    daysLeft: 35,
    escrow: true,
    verified: true,
    image: "/photos/real_02.png",
    synopsis:
      "A sweeping biographical retelling of the life of poet-saint Mirabai told through a contemporary lens. Requires trained Bharatanatyam and Kuchipudi dancers.",
    roles: [
      { name: "Meera (Young)", age: "18–24", gender: "Female" },
      { name: "Meera (Adult)", age: "28–38", gender: "Female" },
    ],
    tags: ["NFDC", "Classical Dance", "National Award", "Art House"],
    color: "#c084fc",
  },
];

const TYPES = [
  { id: "all", label: "All Formats", icon: Film },
  { id: "feature_film", label: "Feature Films", icon: Film },
  { id: "web_series", label: "OTT Series", icon: Tv },
  { id: "theatre", label: "Theatre", icon: Music },
  { id: "commercial", label: "Commercials", icon: Megaphone },
];

export default function CastingCallsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [onlyEscrow, setOnlyEscrow] = useState(false);
  const [language, setLanguage] = useState("All Languages");

  // Module 3 Features State (Features #28, #29, #30)
  const [isPitchbookOpen, setIsPitchbookOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [selectedPitchProject, setSelectedPitchProject] = useState("Antim Prahar");

  const filtered = useMemo(() => {
    return CASTINGS.filter((c) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.synopsis.toLowerCase().includes(q) ||
        c.studio.toLowerCase().includes(q) ||
        c.roles.some((r) => r.name.toLowerCase().includes(q));
      const matchType = type === "all" || c.type === type;
      const matchEscrow = !onlyEscrow || c.escrow;
      const matchLang =
        language === "All Languages" || c.language.includes(language);
      return matchSearch && matchType && matchEscrow && matchLang;
    });
  }, [search, type, onlyEscrow, language]);

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#040406",
          color: "#f8f8f6",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* ── HERO HEADER ── */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 32px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "10px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "#d4af61",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            ✦ NATIONAL CASTING DIRECTORY • VERIFIED PRODUCTIONS ONLY
          </p>

          {/* Title row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "32px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            <div>
              <h1
                className="font-cinema"
                style={{
                  fontSize: "clamp(32px, 5vw, 58px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.05,
                  margin: "0 0 12px 0",
                }}
              >
                Current Castings &amp;<br />
                <span style={{ color: "#d4af61" }}>Open Productions</span>
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#9a9aa8",
                  maxWidth: "560px",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Direct audition submissions for accredited Indian feature films, OTT originals, theatre, and commercials. All engagements under{" "}
                <span style={{ color: "#d4af61" }}>CINTAA fair-play standards</span> and escrow-protected compensation.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "32px", flexShrink: 0 }}>
              {[
                { value: "42", label: "Active Sides" },
                { value: "₹1.8 Cr", label: "Escrow Secured", gold: true },
                { value: "18", label: "Studios Live" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    className="font-cinema"
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: s.gold ? "#d4af61" : "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#606070",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CASTING DIRECTOR COMMAND CENTER (MODULE 3: FEATURES 28, 29, 30) ── */}
          <div
            style={{
              borderRadius: "18px",
              backgroundColor: "#0d0d16",
              border: "1px solid rgba(212, 175, 97, 0.35)",
              boxShadow: "0 0 35px rgba(212, 175, 97, 0.08)",
              padding: "22px 26px",
              marginBottom: "32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <span style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.22em", color: "#d4af61", textTransform: "uppercase", fontWeight: 700 }}>
                  ✦ CASTING DIRECTOR COMMAND CENTER • MODULE 3
                </span>
                <span style={{ fontSize: "10px", backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "1px 8px", borderRadius: "999px", fontFamily: "monospace" }}>
                  LIVE PRODUCTION SUITE
                </span>
              </div>
              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Executive Shortlists, Callback Dispatcher &amp; Studio Archive
              </h3>
              <p style={{ fontSize: "13px", color: "#9a9aa8", margin: "4px 0 0 0", maxWidth: "600px", lineHeight: 1.5 }}>
                Generate pitch presentations for Network Producers, batch-schedule Round-2 studio callbacks with calendar holds, and query the private performer archive.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {/* Feature #28 Button */}
              <button
                onClick={() => {
                  setSelectedPitchProject("Antim Prahar");
                  setIsPitchbookOpen(true);
                }}
                className="btn-cinema-gold"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <FileText size={14} />
                <span>FEATURE 28: PITCHBOOK (PDF)</span>
              </button>

              {/* Feature #29 Button */}
              <button
                onClick={() => {
                  setSelectedPitchProject("Antim Prahar");
                  setIsCallbackOpen(true);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  letterSpacing: "0.06em",
                  backgroundColor: "#161624",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#202035";
                  e.currentTarget.style.borderColor = "#d4af61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#161624";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
              >
                <Calendar size={14} color="#d4af61" />
                <span>FEATURE 29: CALLBACK DISPATCHER</span>
              </button>

              {/* Feature #30 Button */}
              <button
                onClick={() => setIsArchiveOpen(true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  letterSpacing: "0.06em",
                  backgroundColor: "#161624",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#202035";
                  e.currentTarget.style.borderColor = "#d4af61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#161624";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
              >
                <Archive size={14} color="#d4af61" />
                <span>FEATURE 30: TALENT ARCHIVE</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 16px",
              height: "52px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "#08080e",
              marginBottom: "28px",
              transition: "border-color 0.2s",
            }}
          >
            <Search size={16} color="#606070" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search roles, production studios, dialects, genres..."
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontSize: "14px",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "#606070",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Filter Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {/* Type chips */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {TYPES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    border:
                      type === t.id
                        ? "1px solid #d4af61"
                        : "1px solid rgba(255,255,255,0.1)",
                    backgroundColor:
                      type === t.id
                        ? "rgba(212,175,97,0.12)"
                        : "transparent",
                    color: type === t.id ? "#d4af61" : "#8a8a9a",
                    fontSize: "11px",
                    fontFamily: "monospace",
                    fontWeight: type === t.id ? 700 : 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <t.icon size={12} />
                  {t.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                  background: "#08080e",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  color: "#c0c0d0",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {["All Languages", "Hindi", "Telugu", "Tamil", "Marathi", "Bengali", "English"].map((l) => (
                  <option key={l} value={l} style={{ background: "#0a0a10" }}>
                    {l}
                  </option>
                ))}
              </select>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: onlyEscrow ? "#34d399" : "#8a8a9a",
                  cursor: "pointer",
                  userSelect: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                <input
                  type="checkbox"
                  checked={onlyEscrow}
                  onChange={(e) => setOnlyEscrow(e.target.checked)}
                  style={{ accentColor: "#34d399", cursor: "pointer" }}
                />
                <Shield size={12} />
                Escrow Only
              </label>
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "40px 32px",
          }}
        >
          {/* Result count row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "32px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              fontSize: "11px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#606070",
            }}
          >
            <span>
              Showing{" "}
              <span style={{ color: "#d4af61", fontWeight: 700 }}>
                {filtered.length}
              </span>{" "}
              verified production sides
            </span>
            <span>Direct self-tape submissions enabled</span>
          </div>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(212,175,97,0.1)",
                  border: "1px solid rgba(212,175,97,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af61",
                }}
              >
                <Search size={24} />
              </div>
              <p className="font-cinema" style={{ fontSize: "22px", color: "#c0c0d0" }}>
                No castings match your filters
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setType("all");
                  setOnlyEscrow(false);
                  setLanguage("All Languages");
                }}
                className="btn-cinema-gold"
                style={{ height: "40px", padding: "0 24px", fontSize: "11px" }}
              >
                RESET ALL FILTERS
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gap: "24px",
              }}
            >
              {filtered.map((call) => (
                <CastingCard
                  key={call.id}
                  call={call}
                  onOpenPitchbook={(title) => {
                    setSelectedPitchProject(title);
                    setIsPitchbookOpen(true);
                  }}
                  onOpenCallback={(title) => {
                    setSelectedPitchProject(title);
                    setIsCallbackOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Feature #28: Shortlist PDF Pitchbook Modal */}
      <PitchbookModal
        isOpen={isPitchbookOpen}
        onClose={() => setIsPitchbookOpen(false)}
        defaultProject={selectedPitchProject}
      />

      {/* Feature #29: Audition Callback Dispatcher Modal */}
      <CallbackDispatcherModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        defaultProject={selectedPitchProject}
      />

      {/* Feature #30: Studio Archival Talent Database Modal */}
      <ArchivalTalentModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </>
  );
}

function CastingCard({
  call,
  onOpenPitchbook,
  onOpenCallback,
}: {
  call: typeof CASTINGS[0];
  onOpenPitchbook?: (title: string) => void;
  onOpenCallback?: (title: string) => void;
}) {
  return (
    <div
      style={{
        borderRadius: "20px",
        backgroundColor: "#07070b",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = `${call.color}55`;
        e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.6), 0 0 0 1px ${call.color}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", backgroundColor: "#030305" }}>
        <img
          src={call.image}
          alt={call.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.75) contrast(1.1)",
            transition: "transform 0.5s ease, filter 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.filter = "brightness(0.85) contrast(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(0.75) contrast(1.1)";
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(7,7,11,0.9) 0%, transparent 55%)",
          }}
        />

        {/* Top badges */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            right: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              padding: "4px 10px",
              borderRadius: "6px",
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
              fontSize: "9px",
              fontFamily: "monospace",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: call.color,
              border: `1px solid ${call.color}55`,
            }}
          >
            {call.typeLabel}
          </span>

          {call.escrow && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "4px 10px",
                borderRadius: "6px",
                backgroundColor: "rgba(52,211,153,0.15)",
                backdropFilter: "blur(8px)",
                fontSize: "9px",
                fontFamily: "monospace",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#34d399",
                border: "1px solid rgba(52,211,153,0.3)",
              }}
            >
              <Shield size={9} />
              ESCROW
            </span>
          )}
        </div>

        {/* Deadline badge — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "10px",
            fontFamily: "monospace",
            color: call.daysLeft <= 7 ? "#f87171" : "#e0e0f0",
            fontWeight: 600,
          }}
        >
          <Clock size={11} />
          {call.daysLeft <= 7
            ? `⚠ ${call.daysLeft} days left`
            : `${call.daysLeft} days • ${call.deadline}`}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Studio + location */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "10px",
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#606070",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {call.verified && <BadgeCheck size={11} color="#d4af61" />}
            {call.studio}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MapPin size={9} />
            {call.location.split(",")[0]}
          </span>
        </div>

        {/* Title */}
        <div>
          <h2
            className="font-cinema"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 4px 0",
              lineHeight: 1.2,
            }}
          >
            {call.title}
          </h2>
          <p style={{ fontSize: "11px", color: call.color, margin: 0, fontWeight: 600 }}>
            {call.subtitle}
          </p>
        </div>

        {/* Synopsis */}
        <p
          style={{
            fontSize: "12px",
            color: "#9a9aa8",
            lineHeight: 1.65,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {call.synopsis}
        </p>

        {/* Roles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p
            style={{
              fontSize: "9px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#606070",
              margin: 0,
            }}
          >
            Open Roles
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {call.roles.map((r) => (
              <span
                key={r.name}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "11px",
                  color: "#c0c0d0",
                  fontFamily: "monospace",
                }}
              >
                {r.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {call.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 8px",
                borderRadius: "4px",
                backgroundColor: `${call.color}12`,
                border: `1px solid ${call.color}30`,
                fontSize: "9px",
                fontFamily: "monospace",
                fontWeight: 600,
                color: call.color,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "14px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "9px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "#606070",
                letterSpacing: "0.1em",
              }}
            >
              Budget / Fee
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#d4af61",
                fontFamily: "monospace",
              }}
            >
              {call.budget}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {onOpenPitchbook && (
              <button
                type="button"
                onClick={() => onOpenPitchbook(call.title)}
                title="Feature #28: Generate Executive Pitchbook (PDF)"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "9px",
                  backgroundColor: "#141420",
                  border: "1px solid rgba(212, 175, 97, 0.3)",
                  color: "#d4af61",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d4af61";
                  e.currentTarget.style.color = "#000000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#141420";
                  e.currentTarget.style.color = "#d4af61";
                }}
              >
                <FileText size={14} />
              </button>
            )}

            {onOpenCallback && (
              <button
                type="button"
                onClick={() => onOpenCallback(call.title)}
                title="Feature #29: Dispatch Round-2 Callbacks"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "9px",
                  backgroundColor: "#141420",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#a0a0b2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#202035";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#d4af61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#141420";
                  e.currentTarget.style.color = "#a0a0b2";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
              >
                <Calendar size={14} />
              </button>
            )}

            <Link
              href={`/casting-calls/${call.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: "10px",
                backgroundColor: call.color,
                color: "#040406",
                fontSize: "11px",
                fontFamily: "monospace",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              VIEW SIDES <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
