"use client";

import React, { useState } from "react";
import {
  X,
  FileText,
  Download,
  Share2,
  CheckCircle2,
  Lock,
  Building2,
  Shield,
  Film,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Printer,
  Copy,
  DollarSign,
  Award,
} from "lucide-react";
import Image from "next/image";

interface PitchbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function PitchbookModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: PitchbookModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Executive Deck (Project & Network Specs)
  // Step 2: Shortlist Roster (Candidate Evaluation Grid)
  // Step 3: Remuneration & NDA (Financials & Security)
  // Step 4: Export & Share (Watermarked PDF & Link)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [targetNetwork, setTargetNetwork] = useState<"prime" | "netflix" | "nfdc" | "zee">("prime");
  const [confidentialNDA, setConfidentialNDA] = useState(true);
  const [includeFinancials, setIncludeFinancials] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const [candidates, setCandidates] = useState([
    {
      id: "c1",
      name: "Ananya Sharma",
      role: "Neha Sinha — Female Lead",
      age: "24",
      score: "96%",
      match: "Strong Dramatic Resonance",
      photo: "/photos/real_01.png",
      priorCredits: "FTII Gold Medalist • 4 Feature Films • OTT Drama Lead",
      expectedComp: "₹85 Lakh – ₹1.1 Cr",
      directorVerdict: "Remarkable restraint. Expresses emotional vulnerability with subtle eye movement without over-emoting.",
      guildStatus: "CINTAA Verified #A-4821",
      selected: true,
    },
    {
      id: "c2",
      name: "Shivam Jadhav",
      role: "Dev — Protagonist / Inspector",
      age: "25",
      score: "94%",
      match: "Physical & Intense Presence",
      photo: "/photos/real_03.jpg",
      priorCredits: "Lead — OTT Thriller Anthology (2024) • Mumbai Theatre Circuit",
      expectedComp: "₹65 – ₹80 Lakh",
      directorVerdict: "Commanding screen presence. Strong dialogue delivery in contemporary Hindi and raw street-level realism.",
      guildStatus: "CINTAA Verified #S-2910",
      selected: true,
    },
    {
      id: "c3",
      name: "Meera Nair",
      role: "Razia / Supporting Lead",
      age: "26",
      score: "92%",
      match: "Classical Stillness & Depth",
      photo: "/photos/real_02.png",
      priorCredits: "State Award Nominee • 6 Regional Features • Kalamandalam",
      expectedComp: "₹40 – ₹55 Lakh",
      directorVerdict: "Unmatched classical posture and stillness. Perfect for period or high-stakes historical drama.",
      guildStatus: "CINTAA Verified #M-1094",
      selected: true,
    },
    {
      id: "c4",
      name: "Rohan Kapoor",
      role: "Vikram Rao / Antagonist",
      age: "28",
      score: "91%",
      match: "Deep Vocal Timbre & Stagecraft",
      photo: "/photos/real_07.jpg",
      priorCredits: "NSD Alumnus • 8+ Years Live Stage • Hollow Nights S2",
      expectedComp: "₹35 – ₹50 Lakh",
      directorVerdict: "Baritone resonance creates instant intimidation. Carries internal conflict naturally.",
      guildStatus: "CINTAA Verified #R-3811",
      selected: true,
    },
  ]);

  if (!isOpen) return null;

  const toggleCandidate = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
    );
  };

  const handleCopyLink = () => {
    setCopiedLink(true);
    navigator.clipboard?.writeText(
      `https://rangmanch.in/pitchbooks/pb-${Date.now().toString().slice(-6)}?network=${targetNetwork}&nda=active`
    );
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      window.print();
    }, 600);
  };

  const selectedCount = candidates.filter((c) => c.selected).length;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "740px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Gradient Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
          }}
        />

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px 20px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(212,175,97,0.2) 0%, rgba(212,175,97,0.05) 100%)",
                border: "1px solid rgba(212,175,97,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
                boxShadow: "0 0 20px rgba(212,175,97,0.15)",
                flexShrink: 0,
              }}
            >
              <FileText size={24} />
            </div>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#d4af61",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M028</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>EXECUTIVE PITCHBOOK</span>
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Shortlist PDF Pitchbook for Producers &amp; Networks
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#9a9aa8",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "#9a9aa8";
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Interactive Visual Stepper */}
        <div
          style={{
            padding: "16px 32px",
            backgroundColor: "#07070c",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
            {[
              { n: 1, label: "Executive Deck", sub: "Project & Network" },
              { n: 2, label: "Shortlist Roster", sub: "Scorecards" },
              { n: 3, label: "Remuneration & NDA", sub: "Financial Terms" },
              { n: 4, label: "Export Pitchbook", sub: "PDF & Share Link" },
            ].map((s, idx, arr) => {
              const isCurrent = step === s.n;
              const isDone = step > s.n;
              return (
                <div
                  key={s.n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flex: idx === arr.length - 1 ? "0 0 auto" : 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        backgroundColor: isDone
                          ? "#059669"
                          : isCurrent
                          ? "rgba(212,175,97,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #d4af61"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#f4e2b8" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(212,175,97,0.4)" : "none",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      {isDone ? <Check size={14} /> : s.n}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: isCurrent ? 700 : 500,
                          color: isDone ? "#34d399" : isCurrent ? "#ffffff" : "#606070",
                          lineHeight: 1.2,
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: isCurrent ? "#d4af61" : "#4a4a58",
                          fontFamily: "monospace",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {idx < arr.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: "2px",
                        margin: "0 14px",
                        backgroundColor: isDone ? "#10b981" : "rgba(255,255,255,0.08)",
                        transition: "background-color 0.3s ease",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div
          className="modal-body"
          style={{
            padding: "28px 32px",
            maxHeight: "58vh",
            overflowY: "auto",
            backgroundColor: "#0d0d14",
          }}
        >
          {/* STEP 1: Executive Deck (Project & Network Specs) */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Highlight Banner */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
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
                      letterSpacing: "0.15em",
                      color: "#d4af61",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    EXECUTIVE PITCH DECK ACTIVE
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Producer &amp; Network Showcase
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#f4e2b8",
                    border: "1px solid rgba(212,175,97,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  CONFIDENTIAL DECK
                </span>
              </div>

              {/* Form Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#9a9aa8",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    SELECT PRODUCTION
                  </label>
                  <div
                    style={{
                      backgroundColor: "#14141e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Film size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    >
                      <option value="Antim Prahar" style={{ backgroundColor: "#14141e" }}>
                        Antim Prahar (Feature Film)
                      </option>
                      <option value="Uncharted Waters" style={{ backgroundColor: "#14141e" }}>
                        Uncharted Waters (OTT Web Series)
                      </option>
                      <option value="Noor" style={{ backgroundColor: "#14141e" }}>
                        Noor (Regional Hindi Short Film)
                      </option>
                      <option value="Manto Ki Duniya" style={{ backgroundColor: "#14141e" }}>
                        Manto Ki Duniya (Theatre Production)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#9a9aa8",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    TARGET NETWORK WATERMARK
                  </label>
                  <div
                    style={{
                      backgroundColor: "#14141e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Building2 size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <select
                      value={targetNetwork}
                      onChange={(e) => setTargetNetwork(e.target.value as any)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    >
                      <option value="prime" style={{ backgroundColor: "#14141e" }}>
                        Amazon Prime Video India
                      </option>
                      <option value="netflix" style={{ backgroundColor: "#14141e" }}>
                        Netflix International &amp; India
                      </option>
                      <option value="nfdc" style={{ backgroundColor: "#14141e" }}>
                        NFDC India Cinemas
                      </option>
                      <option value="zee" style={{ backgroundColor: "#14141e" }}>
                        Zee Studios Global
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Logline Box */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  EXECUTIVE PITCH SYNOPSIS
                </label>
                <div
                  style={{
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    fontSize: "12px",
                    color: "#d0d0dc",
                    lineHeight: 1.6,
                  }}
                >
                  Confidential casting pitch deck for {selectedProject}. Shortlist selected based on director scorecards, dialect fluency tests, and verified camera test footage. Prepared for executive commissioning sign-off.
                </div>
              </div>

              {/* Statutory Legal Notice Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.06) 0%, rgba(14,14,20,0.6) 100%)",
                  border: "1px solid rgba(212,175,97,0.22)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#d4af61",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    <Lock size={14} />
                    <span>Statutory Confidentiality (Producers Guild NDA)</span>
                  </div>
                  <span
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(212,175,97,0.15)",
                      color: "#f4e2b8",
                      border: "1px solid rgba(212,175,97,0.3)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    CONFIDENTIALITY LEVEL 4
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                  This shortlist presentation contains proprietary audition evaluations and performer financial estimates. Distribution is restricted to authorized studio producers and network commissioning editors.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Shortlist Roster (Candidate Evaluation Grid) */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#12121c",
                  border: "1px solid rgba(212,175,97,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Selected Performers ({selectedCount} of {candidates.length})
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Select candidates to include in the executive presentation PDF.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(52,211,153,0.1)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  {selectedCount} CANDIDATES SELECTED
                </span>
              </div>

              {/* Candidates List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {candidates.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => toggleCandidate(c.id)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "14px",
                      backgroundColor: c.selected ? "#141422" : "#0f0f16",
                      border: c.selected
                        ? "1px solid rgba(212,175,97,0.4)"
                        : "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "6px",
                          backgroundColor: c.selected ? "#d4af61" : "transparent",
                          border: c.selected
                            ? "1px solid #d4af61"
                            : "1px solid rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#000000",
                          flexShrink: 0,
                        }}
                      >
                        {c.selected && <Check size={14} strokeWidth={3} />}
                      </div>

                      <div
                        style={{
                          position: "relative",
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          border: "1px solid rgba(212,175,97,0.3)",
                          flexShrink: 0,
                        }}
                      >
                        <Image src={c.photo} alt={c.name} fill className="object-cover" />
                      </div>

                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                            {c.name}
                          </span>
                          <span
                            style={{
                              fontSize: "9px",
                              fontFamily: "monospace",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(212,175,97,0.15)",
                              color: "#d4af61",
                              border: "1px solid rgba(212,175,97,0.3)",
                            }}
                          >
                            {c.score} MATCH
                          </span>
                        </div>
                        <div style={{ fontSize: "11px", color: "#34d399", fontWeight: 600 }}>
                          {c.role}
                        </div>
                        <div style={{ fontSize: "10px", color: "#8e8e98" }}>{c.priorCredits}</div>
                      </div>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: "11px", color: "#f4e2b8", fontWeight: 600 }}>
                        {c.expectedComp}
                      </div>
                      <div style={{ fontSize: "9px", color: "#606070", fontFamily: "monospace" }}>
                        {c.guildStatus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Remuneration & NDA (Financials & Security) */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
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
                      letterSpacing: "0.15em",
                      color: "#d4af61",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    COMMERCIAL TERMS &amp; REMUNERATION
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    Estimated Shortlist Package: ₹2.25 Cr – ₹2.95 Cr
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(52,211,153,0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  ESCROW READY
                </span>
              </div>

              {/* Configuration Toggles */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  onClick={() => setIncludeFinancials(!includeFinancials)}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <DollarSign size={18} color="#d4af61" />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        Include Producer Remuneration Estimates
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                        Display benchmark fees, CINTAA scale, and escrow advance calculations.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "999px",
                      backgroundColor: includeFinancials ? "#d4af61" : "#222230",
                      position: "relative",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#000000",
                        position: "absolute",
                        top: "3px",
                        left: includeFinancials ? "21px" : "3px",
                        transition: "all 0.2s",
                      }}
                    />
                  </div>
                </div>

                <div
                  onClick={() => setConfidentialNDA(!confidentialNDA)}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Shield size={18} color="#d4af61" />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        Watermark Target Network NDA Diagonal Stamp
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                        Overlay semi-transparent encrypted watermark across every page of the PDF.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "999px",
                      backgroundColor: confidentialNDA ? "#d4af61" : "#222230",
                      position: "relative",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#000000",
                        position: "absolute",
                        top: "3px",
                        left: confidentialNDA ? "21px" : "3px",
                        transition: "all 0.2s",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Watermark Preview Badge */}
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#090910",
                  border: "1px dashed rgba(212,175,97,0.3)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontFamily: "monospace",
                    letterSpacing: "0.2em",
                    color: "rgba(212,175,97,0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  LIVE WATERMARK: CONFIDENTIAL // {targetNetwork.toUpperCase()} // RANGMANCH // {selectedProject.toUpperCase()}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Export Pitchbook (PDF & Share Link) */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(212,175,97,0.3)",
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
                      letterSpacing: "0.15em",
                      color: "#34d399",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <CheckCircle2 size={12} color="#34d399" />
                    PITCHBOOK READY FOR COMMISSIONING PRESENTATION
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Official Casting Dossier
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    Includes {selectedCount} shortlisted candidates, scorecards, and {targetNetwork.toUpperCase()} watermark.
                  </div>
                </div>
              </div>

              {/* Action Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={handleExportPDF}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: "#141422",
                    border: "1px solid rgba(212,175,97,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1b1b2e";
                    e.currentTarget.style.borderColor = "#d4af61";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#141422";
                    e.currentTarget.style.borderColor = "rgba(212,175,97,0.3)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(212,175,97,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#d4af61",
                    }}
                  >
                    <Printer size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {isExporting ? "Generating PDF..." : "Export Pitchbook (PDF)"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Print or save high-resolution pitchbook
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleCopyLink}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: "#141422",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1b1b2e";
                    e.currentTarget.style.borderColor = "#d4af61";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#141422";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: copiedLink
                        ? "rgba(52,211,153,0.15)"
                        : "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: copiedLink ? "#34d399" : "#a0a0b2",
                    }}
                  >
                    {copiedLink ? <Check size={20} /> : <Share2 size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {copiedLink ? "Link Copied to Clipboard!" : "Copy Executive Web Link"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Encrypted token expires in 72 hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Banner */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Shield size={16} color="#d4af61" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                  This pitchbook is registered with <strong style={{ color: "#ffffff" }}>CINTAA Digital Clearinghouse</strong> and contains view-access tracking timestamps.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "20px 32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#8e8e98",
            }}
          >
            <Shield size={14} color="#d4af61" />
            <span>CINTAA &amp; PRODUCERS GUILD COMPLIANT</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                style={{
                  height: "44px",
                  padding: "0 20px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#d0d0dc",
                  borderRadius: "999px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                }}
              >
                <ArrowLeft size={14} /> BACK
              </button>
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev + 1) as any)}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                {step === 1 && "PROCEED TO SHORTLIST ROSTER"}
                {step === 2 && "PROCEED TO FINANCIALS & NDA"}
                {step === 3 && "FINALIZE & EXPORT PITCHBOOK"}
                <ArrowRight size={14} />
              </button>
            )}

            {step === 4 && (
              <button
                type="button"
                onClick={onClose}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                CLOSE DOSSIER
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
