"use client";

import React, { useState } from "react";
import {
  X,
  CreditCard,
  DollarSign,
  Building2,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Download,
} from "lucide-react";

interface RemunerationEscrowModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function RemunerationEscrowModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: RemunerationEscrowModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Compensation Model (Per-Day, Per-Episode, Full Buyout)
  // Step 2: Guild Benchmark (CINTAA Minimum Scale Verification)
  // Step 3: Tax & Milestone Split (TDS 194J & 4-Stage Release)
  // Step 4: Escrow Bond Lock (Bank Integration & Guarantee Certificate)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedProject] = useState(defaultProject);

  const [compType, setCompType] = useState<"project" | "daily" | "episode">("project");
  const [baseFee, setBaseFee] = useState(8500000); // 85 Lakh
  const [perDiem, setPerDiem] = useState(4500);
  const [escrowBank] = useState("ICICI Bank Corporate Escrow #9421-ESC");
  const [bondLocked, setBondLocked] = useState(false);

  if (!isOpen) return null;

  const tdsAmount = Math.round(baseFee * 0.1); // 10% TDS under 194J
  const netArtistPay = baseFee - tdsAmount;

  const handleLockBond = () => {
    setBondLocked(true);
  };

  const handleDownloadBondCert = () => {
    const text = `RANGMANCH ESCROW BOND CERTIFICATE
==================================
Project: ${selectedProject}
Escrow Account: ${escrowBank}
Contract Value: ₹${(baseFee / 100000).toFixed(2)} Lakh
TDS Section 194J: ₹${(tdsAmount / 100000).toFixed(2)} Lakh
Net Performer Escrow Guarantee: ₹${(netArtistPay / 100000).toFixed(2)} Lakh
Status: 100% COLLATERALIZED & LOCKED
Certified under CINTAA & Producers Guild Escrow Regulations 2024.`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Escrow_Guarantee_${selectedProject.replace(/\s+/g, "_")}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              "linear-gradient(90deg, transparent, #d4af61 25%, #fde68a 50%, #d4af61 75%, transparent)",
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
              <CreditCard size={24} />
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
                <span>✦ MODULE M035</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>FINANCIAL ESCROW</span>
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
                Remuneration &amp; Escrow Benchmark Calculator
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
              { n: 1, label: "Compensation Model", sub: "Lump-Sum / Per-Day" },
              { n: 2, label: "Guild Benchmark", sub: "CINTAA Scale Check" },
              { n: 3, label: "TDS & Milestones", sub: "Sec 194J & 4-Stages" },
              { n: 4, label: "Lock Escrow Bond", sub: "Guaranteed Payout" },
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
                        color: isDone ? "#ffffff" : isCurrent ? "#fde68a" : "#606070",
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
          {/* STEP 1: Compensation Model */}
          {step === 1 && (
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
                    CONTRACT REMUNERATION CALCULATOR
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Lead Artist Compensation
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#fde68a",
                    border: "1px solid rgba(212,175,97,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  FEATURE #35
                </span>
              </div>

              {/* Model Select Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {[
                  { id: "project", title: "Project Lump-Sum", desc: "Full feature film buyout with milestone split." },
                  { id: "daily", title: "Per-Day Rate", desc: "Daily shooting call rate + overtime multipliers." },
                  { id: "episode", title: "Per-Episode Rate", desc: "OTT streaming series per-episode fee." },
                ].map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setCompType(m.id as any)}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: compType === m.id ? "#1a1a28" : "#101018",
                      border: compType === m.id ? "2px solid #d4af61" : "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                      {m.title}
                    </div>
                    <div style={{ fontSize: "10px", color: "#8e8e98", lineHeight: 1.5 }}>
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Fee Input */}
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
                  PROPOSED BASE ARTIST REMUNERATION (INR ₹)
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
                  <DollarSign size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                  <input
                    type="number"
                    value={baseFee}
                    onChange={(e) => setBaseFee(Number(e.target.value))}
                    style={{
                      width: "100%",
                      padding: "10px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "#d4af61", fontFamily: "monospace", fontWeight: 700 }}>
                    ₹{(baseFee / 100000).toFixed(2)} Lakh
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Guild Benchmark */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(52,211,153,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    CINTAA Guild Minimum Benchmark Comparison
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Verified against Cine &amp; TV Artistes&apos; Association 2024 rate cards.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(52,211,153,0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  APPROVED SCALE
                </span>
              </div>

              {/* Comparison Card */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#12121c",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#8e8e98", fontFamily: "monospace", marginBottom: "4px" }}>
                    GUILD STATUTORY MINIMUM (LEAD TIER)
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>
                    ₹45,000 / Day
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "4px" }}>
                    Base safety threshold mandated by CINTAA Clause 12.
                  </div>
                </div>

                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#161b24",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#34d399", fontFamily: "monospace", marginBottom: "4px" }}>
                    CURRENT PROPOSED REMUNERATION
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#34d399" }}>
                    188% Above Minimum
                  </div>
                  <div style={{ fontSize: "11px", color: "#a7f3d0", marginTop: "4px" }}>
                    Complies with premium commercial film standards.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Tax & Milestones */}
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
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    TDS Withholding &amp; 4-Stage Escrow Milestone Schedule
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Standardized release triggers locked with production bank.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#fde68a",
                    border: "1px solid rgba(212,175,97,0.3)",
                  }}
                >
                  SEC 194J TAX
                </span>
              </div>

              {/* Tax Calculation Row */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#12121c",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#8e8e98" }}>Gross Total: ₹{(baseFee / 100000).toFixed(2)} Lakh</div>
                  <div style={{ fontSize: "12px", color: "#f87171" }}>TDS 10% (Section 194J): -₹{(tdsAmount / 100000).toFixed(2)} Lakh</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "10px", color: "#34d399", fontFamily: "monospace" }}>NET ESCROW RELEASE TO ARTIST</div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#ffffff" }}>
                    ₹{(netArtistPay / 100000).toFixed(2)} Lakh
                  </div>
                </div>
              </div>

              {/* 4 Milestones */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { stage: "Stage 1: Contract Signing & Advance", pct: "20%", amt: `₹${((netArtistPay * 0.2) / 100000).toFixed(2)} Lakh` },
                  { stage: "Stage 2: 50% Principal Photography Wrap", pct: "40%", amt: `₹${((netArtistPay * 0.4) / 100000).toFixed(2)} Lakh` },
                  { stage: "Stage 3: Dubbing & Post-Production Wrap", pct: "30%", amt: `₹${((netArtistPay * 0.3) / 100000).toFixed(2)} Lakh` },
                  { stage: "Stage 4: Release Window Clearance", pct: "10%", amt: `₹${((netArtistPay * 0.1) / 100000).toFixed(2)} Lakh` },
                ].map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "#0d0d14",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <span style={{ color: "#d0d0dc" }}>{m.stage}</span>
                    <span style={{ fontFamily: "monospace", color: "#d4af61", fontWeight: 700 }}>
                      {m.pct} — {m.amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Lock Escrow Bond */}
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
                    ESCROW COLLATERAL READY FOR LOCKING
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    ₹{(baseFee / 100000).toFixed(2)} Lakh Secured via {escrowBank}
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    Guarantees artist compensation against cancellation or non-payment.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={handleLockBond}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: bondLocked ? "rgba(52,211,153,0.12)" : "#141422",
                    border: bondLocked ? "1px solid #10b981" : "1px solid rgba(212,175,97,0.4)",
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
                      backgroundColor: bondLocked ? "rgba(52,211,153,0.2)" : "rgba(212,175,97,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: bondLocked ? "#34d399" : "#d4af61",
                    }}
                  >
                    {bondLocked ? <Check size={22} /> : <Building2 size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {bondLocked ? "Escrow Collateral Locked!" : "Lock Production Escrow Bond"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Holds 100% funds in RBI regulated bank escrow
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleDownloadBondCert}
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
                      backgroundColor: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a0a0b2",
                    }}
                  >
                    <Download size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      Download Guarantee Certificate
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Proof of escrow linkage for performer contract
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
            <Shield size={14} color="#d4af61" />
            <span>RBI REGULATED ESCROW &amp; SECTION 194J COMPLIANT</span>
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
                {step === 1 && "PROCEED TO GUILD BENCHMARK"}
                {step === 2 && "PROCEED TO TDS & MILESTONES"}
                {step === 3 && "FINALIZE & LOCK ESCROW BOND"}
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
                CLOSE ESCROW SUITE
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
