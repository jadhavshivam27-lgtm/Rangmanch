"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MediaVaultModal from "@/components/MediaVaultModal";
import {
  Sparkles,
  CheckCircle,
  TrendingUp,
  Upload,
  Camera,
  Film,
  Music,
  FileText,
  ChevronRight,
  ShieldCheck,
  Mic,
} from "lucide-react";

export default function TalentDashboardPage() {
  const [activeTab, setActiveTab] = useState<"applications" | "recommended" | "calendar">("applications");
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [vaultStartTab, setVaultStartTab] = useState<"photos" | "videos" | "singing" | "bio">("photos");

  const openVault = (tab: "photos" | "videos" | "singing" | "bio" = "photos") => {
    setVaultStartTab(tab);
    setIsVaultOpen(true);
  };

  const submissions = [
    {
      id: "sub-1",
      projectTitle: "Antim Prahar (Feature Film)",
      roleName: "Neha Sinha — Female Lead",
      productionHouse: "Starlight Casting Co.",
      dateSubmitted: "Oct 15, 2024",
      status: "Shortlisted",
      stage: 3,
      aiScore: 94,
      directorNote: "Exceptional Awadhi dialogue delivery. Callback scheduled for Wednesday.",
    },
    {
      id: "sub-2",
      projectTitle: "Hollow Nights Season 2 (OTT Web Series)",
      roleName: "Rohan — Cyber Forensic Specialist",
      productionHouse: "Spectrum Productions",
      dateSubmitted: "Oct 18, 2024",
      status: "Under Review",
      stage: 2,
      aiScore: 89,
      directorNote: "Tape received. Review in progress by senior casting associate.",
    },
    {
      id: "sub-3",
      projectTitle: "Tata Motors Commercial (Ad Film)",
      roleName: "Modern Father",
      productionHouse: "NovaCast India",
      dateSubmitted: "Oct 12, 2024",
      status: "Callback Scheduled",
      stage: 4,
      aiScore: 96,
      directorNote: "Live Virtual Green Room audition invitation confirmed for 3:30 PM.",
    },
  ];

  const stages = ["Submitted", "Under Review", "Shortlisted", "Callback", "Selected"];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-[#040406] text-[#f8f8f6]">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-10 lg:p-12 space-y-10" style={{ maxWidth: "1200px" }}>

          {/* Welcome Header */}
          <div
            style={{
              padding: "32px 40px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "#0a0a10",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
              className="md:flex-row md:items-center md:justify-between"
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    color: "#d4af61",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  ✦ ARTIST WORKSPACE • ID: RM-8849-IN
                </p>
                <h1
                  className="font-cinema"
                  style={{ fontSize: "32px", color: "#ffffff", fontWeight: 700, margin: 0 }}
                >
                  Welcome back, Shivam Jadhav
                </h1>
                <p style={{ fontSize: "13px", color: "#9a9aa8", margin: 0 }}>
                  You have{" "}
                  <strong style={{ color: "#ffffff" }}>1 Virtual Callback</strong> scheduled and{" "}
                  <strong style={{ color: "#ffffff" }}>2 Active Audition Submissions</strong> under review.
                </p>
              </div>

              {/* Profile Readiness Indicator */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  border: "1px solid rgba(52,211,153,0.3)",
                  backgroundColor: "rgba(52,211,153,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    border: "2px solid #34d399",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    fontWeight: 800,
                    color: "#34d399",
                  }}
                >
                  92%
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Profile Readiness
                  </div>
                  <div style={{ fontSize: "11px", color: "#9a9aa8", marginTop: "2px" }}>
                    Add 1 voice/singing sample for 100%
                  </div>
                  <button
                    onClick={() => openVault("singing")}
                    style={{
                      marginTop: "6px",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "#d4af61",
                      textTransform: "uppercase",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      letterSpacing: "0.08em",
                    }}
                  >
                    UPLOAD NOW →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── MEDIA VAULT SECTION ── */}
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(212,175,97,0.35)",
              backgroundColor: "#08080c",
              overflow: "hidden",
            }}
          >
            {/* Section Header */}
            <div
              style={{
                padding: "24px 32px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background:
                  "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(8,8,12,0) 60%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    color: "#d4af61",
                    fontWeight: 700,
                    margin: "0 0 4px 0",
                  }}
                >
                  ✦ PERFORMER MEDIA VAULT
                </p>
                <h2
                  className="font-cinema"
                  style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", margin: 0 }}
                >
                  Upload Your Portfolio &amp; Audition Assets
                </h2>
                <p style={{ fontSize: "12px", color: "#9a9aa8", margin: "4px 0 0 0" }}>
                  Profile photos, photoshoot lookbook, showreels, singing reels, and vocal samples — all
                  CINTAA DRM-protected and director-ready.
                </p>
              </div>

              <button
                onClick={() => openVault("photos")}
                className="btn-cinema-gold"
                style={{ height: "44px", padding: "0 24px", fontSize: "12px" }}
              >
                <Upload size={15} />
                <span>OPEN MEDIA VAULT</span>
              </button>
            </div>

            {/* 4 Quick-Access Upload Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              {/* Card 1: Photos */}
              <button
                onClick={() => openVault("photos")}
                style={{
                  padding: "24px",
                  backgroundColor: "#07070b",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(212,175,97,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#07070b")
                }
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(212,175,97,0.12)",
                    border: "1px solid rgba(212,175,97,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d4af61",
                  }}
                >
                  <Camera size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "4px",
                    }}
                  >
                    Profile &amp; Photoshoot
                  </div>
                  <div style={{ fontSize: "11px", color: "#9a9aa8" }}>
                    Headshots, lookbook stills, 0°–180° angles, editorial portraits
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#d4af61",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>4 PHOTOS UPLOADED</span>
                  <ChevronRight size={12} />
                </div>
              </button>

              {/* Card 2: Videos */}
              <button
                onClick={() => openVault("videos")}
                style={{
                  padding: "24px",
                  backgroundColor: "#07070b",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(212,175,97,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#07070b")
                }
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#818cf8",
                  }}
                >
                  <Film size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "4px",
                    }}
                  >
                    Showreels &amp; Videos
                  </div>
                  <div style={{ fontSize: "11px", color: "#9a9aa8" }}>
                    Dramatic monologues, action reels, comedy self-tapes, OTT scenes
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#818cf8",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>2 REELS UPLOADED</span>
                  <ChevronRight size={12} />
                </div>
              </button>

              {/* Card 3: Singing */}
              <button
                onClick={() => openVault("singing")}
                style={{
                  padding: "24px",
                  backgroundColor: "#07070b",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(52,211,153,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#07070b")
                }
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(52,211,153,0.12)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#34d399",
                  }}
                >
                  <Music size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "4px",
                    }}
                  >
                    Singing &amp; Vocal Reels
                  </div>
                  <div style={{ fontSize: "11px", color: "#9a9aa8" }}>
                    Classical Hindustani, Bollywood playback, ghazal, musical theatre
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#34d399",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>2 VOCALS UPLOADED</span>
                  <ChevronRight size={12} />
                </div>
              </button>

              {/* Card 4: Bio */}
              <button
                onClick={() => openVault("bio")}
                style={{
                  padding: "24px",
                  backgroundColor: "#07070b",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(139,92,246,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#07070b")
                }
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c084fc",
                  }}
                >
                  <Sparkles size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "4px",
                    }}
                  >
                    Bio &amp; AI Pitch
                  </div>
                  <div style={{ fontSize: "11px", color: "#9a9aa8" }}>
                    AI-powered casting pitch generator for Bollywood &amp; OTT directors
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#c084fc",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>AI BIO READY</span>
                  <ChevronRight size={12} />
                </div>
              </button>
            </div>

            {/* DRM Trust Badge Bar */}
            <div
              style={{
                padding: "12px 32px",
                borderTop: "1px solid rgba(255,255,255,0.04)",
                backgroundColor: "#050508",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: "#8a8a9a",
                }}
              >
                <ShieldCheck size={12} color="#34d399" />
                <span>All assets DRM watermarked with SHA-256 forensic embedding</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: "#8a8a9a",
                }}
              >
                <ShieldCheck size={12} color="#d4af61" />
                <span>Only verified casting directors can decrypt &amp; view your vault</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: "#8a8a9a",
                }}
              >
                <ShieldCheck size={12} color="#818cf8" />
                <span>DPDP Act 2023 compliant • Zero third-party data sharing</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
            className="grid-cols-2 sm:grid-cols-4"
          >
            {[
              { label: "Submitted Tapes", value: "14", sub: "+3 this month", color: "#ffffff" },
              { label: "Shortlists", value: "5", sub: "35% conversion", color: "#d4af61" },
              { label: "Callbacks", value: "2", sub: "Wednesday 3:30 PM", color: "#ffffff" },
              { label: "Escrow Protected", value: "₹85K", sub: "Guaranteed payout", color: "#34d399" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  padding: "20px 24px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "#0a0a10",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#8a8a9a",
                  }}
                >
                  {m.label}
                </div>
                <div
                  className="font-cinema"
                  style={{ fontSize: "28px", fontWeight: 700, color: m.color }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: "11px", color: "#9a9aa8" }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Submissions Pipeline */}
          <div
            style={{
              padding: "28px 32px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "#0a0a10",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <h2
                  className="font-cinema"
                  style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", margin: 0 }}
                >
                  Active Auditions &amp; Pipeline
                </h2>
                <p style={{ fontSize: "12px", color: "#9a9aa8", margin: "4px 0 0 0" }}>
                  Real-time status of your self-tape submissions across casting directors.
                </p>
              </div>

              <Link
                href="/casting-calls"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212,175,97,0.4)";
                  e.currentTarget.style.color = "#d4af61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                EXPLORE CASTINGS <ChevronRight size={12} />
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {submissions.map((sub, idx) => (
                <div
                  key={sub.id}
                  style={{
                    paddingTop: idx === 0 ? 0 : "24px",
                    paddingBottom: "24px",
                    borderBottom:
                      idx < submissions.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <h3
                        className="font-cinema"
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#ffffff",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {sub.projectTitle}
                      </h3>
                      <p
                        style={{
                          fontSize: "12px",
                          fontFamily: "monospace",
                          color: "#9a9aa8",
                          margin: 0,
                        }}
                      >
                        Role: {sub.roleName} • {sub.productionHouse}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          color: "#8a8a9a",
                        }}
                      >
                        {sub.dateSubmitted}
                      </span>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: "6px",
                          border: "1px solid rgba(212,175,97,0.3)",
                          color: "#d4af61",
                          fontSize: "10px",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {sub.status}
                      </span>
                    </div>
                  </div>

                  {/* 5-Stage Tracker */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 1fr)",
                      gap: "8px",
                    }}
                  >
                    {stages.map((st, i) => {
                      const isDone = i + 1 <= sub.stage;
                      return (
                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div
                            style={{
                              height: "3px",
                              borderRadius: "2px",
                              backgroundColor: isDone ? "#d4af61" : "rgba(255,255,255,0.08)",
                              transition: "background-color 0.2s ease",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: "monospace",
                              color: isDone ? "#ffffff" : "#606070",
                              fontWeight: isDone ? 700 : 400,
                            }}
                          >
                            {st}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {sub.directorNote && (
                    <div
                      style={{
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        backgroundColor: "rgba(255,255,255,0.02)",
                        fontSize: "12px",
                        color: "#c0c0d0",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          color: "#8a8a9a",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          display: "block",
                          marginBottom: "4px",
                        }}
                      >
                        Director Feedback:
                      </span>
                      {sub.directorNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Media Vault Modal */}
      <MediaVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />
    </>
  );
}
