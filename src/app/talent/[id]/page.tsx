"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEMO_TALENT } from "@/lib/data";
import {
  ChevronLeft,
  Video,
  Mic,
  Film,
  Share2,
  Play,
  CheckCircle2,
  MapPin,
  Lock,
  ShieldCheck,
  Award,
  Sparkles,
  Calendar,
  Send,
  X,
  FileText,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function TalentProfileDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#040406]" />}>
      <TalentProfileDetailContent />
    </Suspense>
  );
}

function TalentProfileDetailContent() {
  const params = useParams();
  const id = params?.id as string;

  const initialTalent =
    DEMO_TALENT.find(
      (t) =>
        t.id === id ||
        t.id === `talent-${id?.replace(/^t-/, "")}` ||
        `t-${t.id.replace(/^talent-/, "")}` === id
    ) || DEMO_TALENT[0];
  const [talent, setTalent] = useState(initialTalent);
  const [activePhoto, setActivePhoto] = useState(talent.profilePhoto || "/talent1.jpg");
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const [selectedProduction, setSelectedProduction] = useState("Antim Prahar — Feature Film");
  const [directorNote, setDirectorNote] = useState("");
  const [inviteSent, setInviteSent] = useState(false);

  // Gallery of photos for this talent
  const gallery = [
    talent.profilePhoto || "/talent1.jpg",
    talent.profilePhoto || "/talent1.jpg",
    talent.profilePhoto || "/talent1.jpg",
    talent.profilePhoto || "/talent1.jpg",
  ];

  const handleSendInvite = () => {
    setInviteSent(true);
    setTimeout(() => {
      setInviteSent(false);
      setIsInviteModalOpen(false);
      alert(`Official casting invitation transmitted to ${talent.displayName} for ${selectedProduction}.`);
    }, 900);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#040406] text-[#f5f5f7] pt-10 pb-32">
        <div className="cinema-container" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          
          {/* Top Breadcrumb & Share Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "24px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Link
              href="/talent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#a0a0b0",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af61")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0b0")}
            >
              <ChevronLeft size={16} />
              <span>THE PERFORMER ROSTER</span>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Portfolio URL copied to clipboard.");
                }}
                className="btn-cinema-ghost"
                style={{ height: "42px", padding: "0 20px", fontSize: "11px" }}
              >
                <Share2 size={13} />
                <span>SHARE COMP CARD</span>
              </button>

              <button
                onClick={() => setIsInviteModalOpen(true)}
                className="btn-cinema-gold"
                style={{ height: "42px", padding: "0 24px", fontSize: "11px" }}
              >
                <Send size={13} />
                <span>INVITE TO AUDITION</span>
              </button>
            </div>
          </div>

          {/* ── 1. EDITORIAL PORTFOLIO HERO ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
            }}
            className="lg:grid-cols-12"
          >
            {/* Left: Prominent Portrait Gallery (5 cols) */}
            <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "20px",
                  backgroundColor: "#07070b",
                  border: "1px solid rgba(212,175,97,0.35)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(212,175,97,0.15)",
                }}
              >
                <img
                  src={activePhoto}
                  alt={talent.displayName}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    transition: "transform 0.5s ease",
                  }}
                />
                
                {/* Status Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212,175,97,0.4)",
                    color: "#f4e2b8",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                >
                  <ShieldCheck size={13} color="#d4af61" />
                  <span>CINTAA VERIFIED</span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    backgroundColor: talent.availability === "available" ? "rgba(16,185,129,0.25)" : "rgba(245,158,11,0.25)",
                    backdropFilter: "blur(8px)",
                    border: talent.availability === "available" ? "1px solid rgba(16,185,129,0.5)" : "1px solid rgba(245,158,11,0.5)",
                    color: talent.availability === "available" ? "#34d399" : "#fbbf24",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: talent.availability === "available" ? "#10b981" : "#f59e0b",
                    }}
                  />
                  <span>{talent.availability}</span>
                </div>
              </div>

              {/* Angle thumbnails */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {gallery.map((imgSrc, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(imgSrc)}
                    style={{
                      aspectRatio: "3/4",
                      overflow: "hidden",
                      borderRadius: "10px",
                      border: activePhoto === imgSrc ? "2px solid #d4af61" : "1px solid rgba(255,255,255,0.12)",
                      backgroundColor: "#07070b",
                      cursor: "pointer",
                      padding: 0,
                      opacity: activePhoto === imgSrc ? 1 : 0.6,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <img src={imgSrc} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Editorial Bio, Specs & Typography (7 cols) */}
            <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "11px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#d4af61",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  <span>✦ VERIFIED ARTIST</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                  <span>ID: {talent.id.toUpperCase()}</span>
                </div>

                <h1
                  className="font-cinema"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  {talent.displayName}
                </h1>

                <p
                  style={{
                    fontSize: "13px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#a0a0b0",
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{talent.skills.acting || "Actor & Screen Performer"}</span>
                  <span style={{ color: "#d4af61" }}>•</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={13} color="#d4af61" />
                    {talent.city}, {talent.state}
                  </span>
                </p>
              </div>

              {/* Physical Specifications & Languages Table */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "16px",
                  padding: "20px 24px",
                  borderRadius: "16px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                }}
              >
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    HEIGHT
                  </span>
                  <span style={{ color: "#ffffff", fontWeight: 700 }}>5&apos;10&quot; (178 cm)</span>
                </div>
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    SCREEN AGE
                  </span>
                  <span style={{ color: "#ffffff", fontWeight: 700 }}>
                    {talent.ageMin} – {talent.ageMax} Years
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    GUILD RECOGNITION
                  </span>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>CINTAA Verified</span>
                </div>
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    CURRENT STATUS
                  </span>
                  <span style={{ color: talent.availability === "available" ? "#34d399" : "#fbbf24", fontWeight: 700, textTransform: "capitalize" }}>
                    {talent.availability}
                  </span>
                </div>
              </div>

              {/* Biography in Editorial Prose */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "11px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.18em", color: "#d4af61", fontWeight: 700 }}>
                  ARTISTIC BACKGROUND &amp; REPRESENTATION
                </span>
                <p
                  className="font-cinema"
                  style={{
                    fontSize: "20px",
                    color: "#f5f5f7",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  &ldquo;{talent.bio}&rdquo;
                </p>
              </div>

              {/* Spoken Dialects */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "11px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "#8a8a9a", fontWeight: 600 }}>
                  LANGUAGES &amp; DIALECT PROFICIENCY:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {talent.languages.map((l) => (
                    <span
                      key={l}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "8px",
                        backgroundColor: "#0d0d14",
                        border: "1px solid rgba(212,175,97,0.3)",
                        color: "#f4e2b8",
                        fontSize: "12px",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {l} — Native / Fluent
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Training */}
              {talent.education && (
                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                >
                  <span style={{ color: "#d4af61", fontWeight: 700, textTransform: "uppercase" }}>TRAINING &amp; CONSERVATORY: </span>
                  <span style={{ color: "#ffffff" }}>{talent.education}</span>
                </div>
              )}
            </div>
          </div>

          {/* ── 2. PROMINENT AUDITION SHOWREEL ── */}
          <div
            style={{
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.22em", color: "#d4af61", fontWeight: 700, margin: 0 }}>
                  ✦ DIGITAL MEDIA VAULT
                </p>
                <h2 className="font-cinema" style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", margin: "4px 0 0 0" }}>
                  Audition Showreel &amp; Dramatic Monologue
                </h2>
              </div>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                1080P HD • 2M 14S
              </span>
            </div>

            <div
              style={{
                position: "relative",
                aspectRatio: "16/9",
                width: "100%",
                maxWidth: "880px",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#07070b",
                border: "1px solid rgba(212,175,97,0.3)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/hero.jpg"
                alt="Showreel Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.45,
                  filter: "contrast(1.1)",
                }}
              />
              <button
                onClick={() => setIsPlayingReel(!isPlayingReel)}
                style={{
                  position: "absolute",
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(212,175,97,0.9) 0%, rgba(184,146,66,0.9) 100%)",
                  border: "2px solid #ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#040406",
                  cursor: "pointer",
                  boxShadow: "0 0 35px rgba(212,175,97,0.6)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                aria-label="Play showreel"
              >
                <Play size={26} className="ml-1 fill-current" />
              </button>
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "20px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  color: "#ffffff",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  backdropFilter: "blur(8px)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {talent.displayName} — Dramatic Monologue &amp; Intensity Reel (2024)
              </div>
            </div>
          </div>

          {/* ── 3. VERIFIED CREDITS & FILMOGRAPHY ── */}
          <div
            style={{
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2 className="font-cinema" style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
              Verified Filmography &amp; Stage Credentials
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                fontFamily: "monospace",
                fontSize: "12px",
              }}
            >
              {/* Screen credits */}
              <div
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d4af61", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em" }}>
                  <Film size={15} />
                  <span>SCREEN &amp; OTT CREDITS</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(talent.experience?.film || []).map((f, idx) => (
                    <div
                      key={idx}
                      style={{
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        color: "#e0e0ea",
                      }}
                    >
                      {f}
                    </div>
                  ))}
                  {(talent.experience?.webSeries || []).map((w, idx) => (
                    <div
                      key={idx}
                      style={{
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        color: "#e0e0ea",
                      }}
                    >
                      {w}
                    </div>
                  ))}
                </div>
              </div>

              {/* Theatre works */}
              <div
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d4af61", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em" }}>
                  <Award size={15} />
                  <span>THEATRE &amp; LIVE STAGE</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(talent.experience?.theatre || []).length > 0 ? (
                    talent.experience.theatre.map((t, idx) => (
                      <div
                        key={idx}
                        style={{
                          paddingBottom: "10px",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          color: "#e0e0ea",
                        }}
                      >
                        {t}
                      </div>
                    ))
                  ) : (
                    <div style={{ color: "#a0a0b0" }}>
                      Prithvi Theatre Circuit &amp; National School of Drama repertory productions.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ─── Audition Invitation Modal (Cinema Gold Redesign) ─── */}
      {isInviteModalOpen && (
        <div className="modal-backdrop">
          <div
            className="modal-panel"
            style={{
              maxWidth: "540px",
              width: "100%",
              background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
              border: "1px solid rgba(212, 175, 97, 0.35)",
              borderRadius: "24px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.15)",
              overflow: "hidden",
            }}
          >
            {/* Top Gold Trim */}
            <div
              style={{
                height: "3px",
                width: "100%",
                background: "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
              }}
            />

            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "24px 28px 18px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "#0d0d14",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(212,175,97,0.2) 0%, rgba(212,175,97,0.05) 100%)",
                    border: "1px solid rgba(212,175,97,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d4af61",
                  }}
                >
                  <Send size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#d4af61",
                      fontWeight: 700,
                    }}
                  >
                    ✦ OFFICIAL CASTING MEMO
                  </div>
                  <h3
                    className="font-cinema"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "2px 0 0 0",
                    }}
                  >
                    Audition Invitation
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsInviteModalOpen(false)}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9a9aa8",
                  cursor: "pointer",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#a0a0b0", lineHeight: 1.5 }}>
                Send an official casting audition memo to{" "}
                <span style={{ color: "#ffffff", fontWeight: 700 }}>{talent.displayName}</span>. The talent will receive a confidential notification and scripted sides.
              </p>

              {/* Form Fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#8a8a9a",
                      fontWeight: 600,
                    }}
                  >
                    Select Production Call
                  </label>
                  <select
                    value={selectedProduction}
                    onChange={(e) => setSelectedProduction(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      backgroundColor: "#050508",
                      border: "1px solid rgba(212,175,97,0.3)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    <option className="bg-[#0e0e14]">Antim Prahar — Feature Film (Main Lead)</option>
                    <option className="bg-[#0e0e14]">Dhoop Ki Deewar — OTT Series (Season 2)</option>
                    <option className="bg-[#0e0e14]">Kailash Hills — Period Drama (Parallel Lead)</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#8a8a9a",
                      fontWeight: 600,
                    }}
                  >
                    Director&apos;s Audition Note / Sides Context
                  </label>
                  <textarea
                    rows={3}
                    value={directorNote}
                    onChange={(e) => setDirectorNote(e.target.value)}
                    placeholder="Include scene notes, character mood, dialect references, or sides instructions..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      backgroundColor: "#050508",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      resize: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              {/* Escrow Guarantee Pill */}
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(212,175,97,0.06)",
                  border: "1px solid rgba(212,175,97,0.25)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "#d4af61",
                }}
              >
                <Lock size={14} style={{ flexShrink: 0 }} />
                <span>Escrow-Protected: Audition honorariums &amp; callbacks are guaranteed under CINTAA terms.</span>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "12px",
                padding: "18px 28px",
                backgroundColor: "#0d0d14",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                type="button"
                onClick={() => setIsInviteModalOpen(false)}
                className="btn-cinema-ghost"
                style={{ height: "42px", padding: "0 20px", fontSize: "11px" }}
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={handleSendInvite}
                disabled={inviteSent}
                className="btn-cinema-gold"
                style={{ height: "42px", padding: "0 24px", fontSize: "11px" }}
              >
                {inviteSent ? "TRANSMITTING..." : "SEND INVITATION"}
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
