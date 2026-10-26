"use client";

import React, { useState } from "react";
import {
  X,
  Lock,
  Eye,
  EyeOff,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Key,
  Copy,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  FileText,
} from "lucide-react";

interface ProjectCodenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ProjectCodenameModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ProjectCodenameModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Alias Identity (Codename & Cover Title)
  // Step 2: Redaction Level (Director, Budget & Plot Shield)
  // Step 3: NDA Gatekeeper (Digital Non-Disclosure Tier)
  // Step 4: Activate Shield (Cover Listing Live)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [realTitle] = useState(defaultProject);
  const [codename, setCodename] = useState("PROJECT FALCON-1857");
  const [genreAlias, setGenreAlias] = useState("Period Historical Thriller");
  const [coverSynopsis, setCoverSynopsis] = useState(
    "A high-stakes historical drama following an underground performance troupe navigating political unrest in 19th-century Northern India."
  );

  const [maskDirector, setMaskDirector] = useState(true);
  const [maskStudio, setMaskStudio] = useState(true);
  const [maskBudget, setMaskBudget] = useState(true);
  const [ndaTier, setNdaTier] = useState<"standard" | "high_profile" | "ironclad">("high_profile");
  const [shieldActive, setShieldActive] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleCopyKey = () => {
    setCopiedKey(true);
    navigator.clipboard?.writeText("RANGMANCH-CODENAME-KEY-9821-XFA");
    setTimeout(() => setCopiedKey(false), 2500);
  };

  const handleActivateShield = () => {
    setShieldActive(true);
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
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
                  "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)",
                border: "1px solid rgba(245,158,11,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f59e0b",
                boxShadow: "0 0 20px rgba(245,158,11,0.15)",
                flexShrink: 0,
              }}
            >
              <Lock size={24} />
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
                  color: "#f59e0b",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M032</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>PROJECT CODENAME SHIELD</span>
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
                Confidential Project Codename &amp; Alias Shield
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
              { n: 1, label: "Alias Identity", sub: "Codename & Cover" },
              { n: 2, label: "Redaction Level", sub: "Director & Budget" },
              { n: 3, label: "NDA Gatekeeper", sub: "Digital Penalty" },
              { n: 4, label: "Activate Shield", sub: "Cover Listing Live" },
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
                          ? "rgba(245,158,11,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #f59e0b"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#fde68a" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(245,158,11,0.4)" : "none",
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
                          color: isCurrent ? "#f59e0b" : "#4a4a58",
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
          {/* STEP 1: Alias Identity */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(245,158,11,0.25)",
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
                      color: "#f59e0b",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    REAL PRODUCTION PROTECTED
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {realTitle} → Alias: {codename}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(245,158,11,0.15)",
                    color: "#fde68a",
                    border: "1px solid rgba(245,158,11,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  FEATURE #32
                </span>
              </div>

              {/* Form Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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
                    PROJECT CODENAME
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
                    <Lock size={16} color="#f59e0b" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <input
                      type="text"
                      value={codename}
                      onChange={(e) => setCodename(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        letterSpacing: "0.08em",
                      }}
                    />
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
                    PUBLIC GENRE ALIAS
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
                    <input
                      type="text"
                      value={genreAlias}
                      onChange={(e) => setGenreAlias(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    />
                  </div>
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
                  PUBLIC COVER SYNOPSIS (PLOT-LEAK SHIELD)
                </label>
                <textarea
                  value={coverSynopsis}
                  onChange={(e) => setCoverSynopsis(e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "12px",
                    lineHeight: 1.6,
                    outline: "none",
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP 2: Redaction Level */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Public Visibility &amp; Studio Shield Toggles
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Select which key production elements are masked until audition shortlisting.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(245,158,11,0.15)",
                    color: "#fde68a",
                    border: "1px solid rgba(245,158,11,0.3)",
                  }}
                >
                  SHIELD CONFIG
                </span>
              </div>

              {/* Toggles */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  {
                    title: "Mask A-List Director Identity",
                    sub: "Shows as 'Acclaimed National Award Winning Director' to avoid press hype.",
                    val: maskDirector,
                    toggle: () => setMaskDirector(!maskDirector),
                  },
                  {
                    title: "Mask Studio & Production Banner",
                    sub: "Shows as 'Premier Tier-1 Streaming Co-Production'.",
                    val: maskStudio,
                    toggle: () => setMaskStudio(!maskStudio),
                  },
                  {
                    title: "Mask Multi-Crore Budget Figures",
                    sub: "Shows as 'Industry Standard Competitive Scale' to protect commercial privacy.",
                    val: maskBudget,
                    toggle: () => setMaskBudget(!maskBudget),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.toggle}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      backgroundColor: "#14141e",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98" }}>{item.sub}</div>
                    </div>
                    <div
                      style={{
                        width: "40px",
                        height: "22px",
                        borderRadius: "999px",
                        backgroundColor: item.val ? "#f59e0b" : "#222230",
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
                          left: item.val ? "21px" : "3px",
                          transition: "all 0.2s",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: NDA Gatekeeper */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Digital Non-Disclosure Agreement (NDA) Gate
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Actors must sign this digital agreement before real project details are revealed.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(245,158,11,0.15)",
                    color: "#fde68a",
                    border: "1px solid rgba(245,158,11,0.3)",
                  }}
                >
                  LEGAL BINDING
                </span>
              </div>

              {/* NDA Tiers Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {[
                  { id: "standard", title: "Tier 1: Standard", pen: "₹10 Lakh Penalty", desc: "Basic confidentiality for public casting calls." },
                  { id: "high_profile", title: "Tier 2: High-Profile", pen: "₹50 Lakh Penalty", desc: "Aadhaar e-Sign mandatory + leak tracking." },
                  { id: "ironclad", title: "Tier 3: Ironclad Studio", pen: "₹1.5 Cr Penalty", desc: "Digital forensic tracing + full script lockdown." },
                ].map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setNdaTier(tier.id as any)}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: ndaTier === tier.id ? "#181828" : "#101018",
                      border: ndaTier === tier.id ? "2px solid #f59e0b" : "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                      {tier.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#f59e0b", fontFamily: "monospace", fontWeight: 700, marginBottom: "6px" }}>
                      {tier.pen}
                    </div>
                    <div style={{ fontSize: "10px", color: "#8e8e98", lineHeight: 1.5 }}>
                      {tier.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Statutory Note */}
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
                <Shield size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                  Enforced under Section 72A of the Information Technology Act (Penalty for breach of confidentiality) and Indian Contract Act 1872.
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Activate Shield */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(245,158,11,0.3)",
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
                    CODENAME SHIELD READY FOR ACTIVATION
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {codename} is Armed &amp; Protected
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    Public users will only see the masked title and synopsis. Real details unlock after signing.
                  </div>
                </div>
              </div>

              {/* Action Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={handleActivateShield}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: shieldActive ? "rgba(52,211,153,0.12)" : "#141422",
                    border: shieldActive ? "1px solid #10b981" : "1px solid rgba(245,158,11,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: shieldActive ? "rgba(52,211,153,0.2)" : "rgba(245,158,11,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: shieldActive ? "#34d399" : "#f59e0b",
                    }}
                  >
                    {shieldActive ? <Check size={22} /> : <Lock size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {shieldActive ? "Codename Shield Armed!" : "Activate Codename Shield"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Hides all sensitive metadata from public feeds
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleCopyKey}
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
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: copiedKey ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: copiedKey ? "#34d399" : "#a0a0b2",
                    }}
                  >
                    {copiedKey ? <Check size={20} /> : <Key size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {copiedKey ? "Key Copied!" : "Copy Private Director Passkey"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Bypasses NDA for authorized studio executives
                    </div>
                  </div>
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
            <Shield size={14} color="#f59e0b" />
            <span>IT ACT SEC 72A CONFIDENTIALITY ENFORCED</span>
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
                {step === 1 && "PROCEED TO REDACTION LEVEL"}
                {step === 2 && "PROCEED TO NDA GATEKEEPER"}
                {step === 3 && "FINALIZE & ARM SHIELD"}
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
                CLOSE CODENAME SUITE
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
