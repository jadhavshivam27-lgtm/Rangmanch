"use client";

import React, { useState } from "react";
import {
  X,
  Users,
  Film,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  Award,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Lock,
  Layers,
  FileText,
} from "lucide-react";

interface RoleBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function RoleBreakdownModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: RoleBreakdownModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Role Hierarchy (Leads, Supporting, Antagonists, Day Players)
  // Step 2: Character Specs (Age Brackets, Gender & Dialect Demands)
  // Step 3: Performer Perks & Billing (Credits, Vanities & Allowances)
  // Step 4: Publish Listing (Review & Live Multi-Role Broadcast)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [published, setPublished] = useState(false);

  const [roles, setRoles] = useState([
    {
      id: "r1",
      name: "Neha Sinha",
      category: "Lead Role",
      ageRange: "22–28",
      gender: "Female",
      compensation: "₹85 Lakh – ₹1.1 Cr",
      dialects: "Hindi (Standard), Urdu (Conversational)",
      auditionStatus: "Shortlisting Active",
      billing: "Top Billing (Main Titles)",
      slots: 1,
    },
    {
      id: "r2",
      name: "Dev — Protagonist / Inspector",
      category: "Lead Role",
      ageRange: "24–30",
      gender: "Male",
      compensation: "₹65 – ₹80 Lakh",
      dialects: "Hindi (Street Realism), Marathi (Basic)",
      auditionStatus: "Shortlisting Active",
      billing: "Top Billing (Main Titles)",
      slots: 1,
    },
    {
      id: "r3",
      name: "Vikram Rao",
      category: "Antagonist",
      ageRange: "35–45",
      gender: "Male",
      compensation: "₹35 – ₹50 Lakh",
      dialects: "Hindi (Authoritative Baritone)",
      auditionStatus: "Callback Pending",
      billing: "And Featuring Credit",
      slots: 1,
    },
    {
      id: "r4",
      name: "Razia — Freedom Poet",
      category: "Supporting Lead",
      ageRange: "20–28",
      gender: "Female",
      compensation: "₹40 – ₹55 Lakh",
      dialects: "Urdu (Poetic/Fluent), Hindustani",
      auditionStatus: "Screen Test Scheduled",
      billing: "Key Supporting Title",
      slots: 1,
    },
    {
      id: "r5",
      name: "Havaldar Shinde & Station Constables",
      category: "Day Players / Ensemble",
      ageRange: "30–50",
      gender: "Any",
      compensation: "₹18,000 – ₹25,000 / Day",
      dialects: "Hindi / Marathi",
      auditionStatus: "Open Submissions",
      billing: "End Roller Credits",
      slots: 6,
    },
  ]);

  const [newRoleName, setNewRoleName] = useState("");
  const [newRoleCategory, setNewRoleCategory] = useState("Supporting");

  if (!isOpen) return null;

  const handleAddRole = () => {
    if (!newRoleName.trim()) return;
    const newRole = {
      id: `r-${Date.now()}`,
      name: newRoleName,
      category: newRoleCategory,
      ageRange: "20–35",
      gender: "Any",
      compensation: "₹25,000 – ₹45,000 / Day",
      dialects: "Hindi (Fluent)",
      auditionStatus: "Drafting",
      billing: "End Titles",
      slots: 1,
    };
    setRoles([...roles, newRole]);
    setNewRoleName("");
  };

  const handleDeleteRole = (id: string) => {
    setRoles(roles.filter((r) => r.id !== id));
  };

  const handlePublish = () => {
    setPublished(true);
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
                  "linear-gradient(135deg, rgba(96,165,250,0.2) 0%, rgba(96,165,250,0.05) 100%)",
                border: "1px solid rgba(96,165,250,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#60a5fa",
                boxShadow: "0 0 20px rgba(96,165,250,0.15)",
                flexShrink: 0,
              }}
            >
              <Users size={24} />
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
                  color: "#60a5fa",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M031</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>MULTI-ROLE BREAKDOWN</span>
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
                Multi-Role Production Breakdown Suite
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
              { n: 1, label: "Role Hierarchy", sub: "Leads & Supporting" },
              { n: 2, label: "Character Specs", sub: "Age, Look & Dialect" },
              { n: 3, label: "Perks & Billing", sub: "Vanities & Credits" },
              { n: 4, label: "Publish Listing", sub: "Live Broadcast" },
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
                          ? "rgba(96,165,250,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #60a5fa"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#93c5fd" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(96,165,250,0.4)" : "none",
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
                          color: isCurrent ? "#60a5fa" : "#4a4a58",
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
          {/* STEP 1: Role Hierarchy */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Highlight Banner */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(96,165,250,0.25)",
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
                      color: "#60a5fa",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    MULTI-TIER PRODUCTION BREAKDOWN
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — {roles.length} Structured Casting Roles
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(96,165,250,0.15)",
                    color: "#93c5fd",
                    border: "1px solid rgba(96,165,250,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  FEATURE #31
                </span>
              </div>

              {/* Roles Table */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {roles.map((r) => (
                  <div
                    key={r.id}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "14px",
                      backgroundColor: "#141422",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                          {r.name}
                        </span>
                        <span
                          style={{
                            fontSize: "9px",
                            fontFamily: "monospace",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            backgroundColor: "rgba(96,165,250,0.15)",
                            color: "#93c5fd",
                            border: "1px solid rgba(96,165,250,0.3)",
                          }}
                        >
                          {r.category}
                        </span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "3px" }}>
                        Age: {r.ageRange} • {r.gender} • Compensation:{" "}
                        <strong style={{ color: "#d4af61" }}>{r.compensation}</strong>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          color: "#34d399",
                          backgroundColor: "rgba(52,211,153,0.1)",
                          padding: "3px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {r.auditionStatus}
                      </span>
                      {roles.length > 2 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteRole(r.id)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#f87171",
                            cursor: "pointer",
                            padding: "4px",
                          }}
                          title="Remove role"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Role Quick Row */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d16",
                  border: "1px dashed rgba(255,255,255,0.15)",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter new character role (e.g., DCP Rathore)..."
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "12px",
                    outline: "none",
                  }}
                />
                <select
                  value={newRoleCategory}
                  onChange={(e) => setNewRoleCategory(e.target.value)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "12px",
                    outline: "none",
                  }}
                >
                  <option value="Lead Role">Lead Role</option>
                  <option value="Supporting Lead">Supporting Lead</option>
                  <option value="Antagonist">Antagonist</option>
                  <option value="Day Player">Day Player</option>
                  <option value="Background Extra">Background Extra</option>
                </select>
                <button
                  type="button"
                  onClick={handleAddRole}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "#60a5fa",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "11px",
                    fontFamily: "monospace",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    border: "none",
                  }}
                >
                  <Plus size={14} /> ADD ROLE
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Character Specs */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Character Dialect &amp; Physical Profiles
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Specify linguistic nuance and physical requirements for each role.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(52,211,153,0.1)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  DIALECT ENGINE
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {roles.slice(0, 3).map((r) => (
                  <div
                    key={r.id}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: "#12121c",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                        {r.name} ({r.category})
                      </span>
                      <span style={{ fontSize: "11px", color: "#d4af61", fontFamily: "monospace" }}>
                        Target Age: {r.ageRange}
                      </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div>
                        <div style={{ fontSize: "10px", color: "#8e8e98", fontFamily: "monospace", marginBottom: "4px" }}>
                          PRIMARY DIALECT DEMAND
                        </div>
                        <input
                          type="text"
                          defaultValue={r.dialects}
                          style={{
                            width: "100%",
                            padding: "6px 10px",
                            borderRadius: "8px",
                            backgroundColor: "#181826",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#ffffff",
                            fontSize: "11px",
                          }}
                        />
                      </div>

                      <div>
                        <div style={{ fontSize: "10px", color: "#8e8e98", fontFamily: "monospace", marginBottom: "4px" }}>
                          CINTAA ACCREDITATION TIER
                        </div>
                        <input
                          type="text"
                          defaultValue="Verified Guild Performer / FTII / NSD"
                          style={{
                            width: "100%",
                            padding: "6px 10px",
                            borderRadius: "8px",
                            backgroundColor: "#181826",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#ffffff",
                            fontSize: "11px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Perks & Billing */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Screen Billing &amp; Artist Perks Breakdown
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Standardized CINTAA production rider for billing, vanities, and travel.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#f4e2b8",
                    border: "1px solid rgba(212,175,97,0.3)",
                  }}
                >
                  INDUSTRY RIDER
                </span>
              </div>

              {/* Billing Tiers */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { role: "Lead Roles (Neha, Dev)", billing: "Main Title Card (Solo Screen Credit)", van: "Single-Room Luxury Vanity Van", travel: "Business Class Flights + 5-Star Stay" },
                  { role: "Antagonist (Vikram Rao)", billing: "And Featuring Main Screen Credit", van: "2-Room Shared Premium Van", travel: "Economy Flex + 4-Star Stay" },
                  { role: "Supporting (Razia)", billing: "Prominent Key End Credits Title", van: "2-Room Shared Premium Van", travel: "Economy Airfare + 4-Star Stay" },
                  { role: "Day Players & Constables", billing: "Standard Cast Roller Credits", van: "Common Green Room / Holding Area", travel: "Local Mumbai Travel Stipend" },
                ].map((b, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      backgroundColor: "#12121c",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                      {b.role}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "11px", color: "#a0a0b2" }}>
                      <div>🎬 <strong>Billing:</strong> {b.billing}</div>
                      <div>🚐 <strong>Vanity:</strong> {b.van}</div>
                      <div style={{ gridColumn: "span 2" }}>✈️ <strong>Travel / Stay:</strong> {b.travel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Publish Listing */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(96,165,250,0.3)",
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
                    MULTI-ROLE LISTING CONFIGURED
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Ready for Broadcast
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    {roles.length} roles ready to receive performer self-tapes and comp cards.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                onClick={handlePublish}
                style={{
                  padding: "22px",
                  borderRadius: "14px",
                  backgroundColor: published ? "rgba(52,211,153,0.12)" : "#141422",
                  border: published ? "1px solid #10b981" : "1px solid rgba(96,165,250,0.4)",
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
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: published
                      ? "rgba(52,211,153,0.2)"
                      : "rgba(96,165,250,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: published ? "#34d399" : "#60a5fa",
                  }}
                >
                  {published ? <Check size={24} /> : <Film size={22} />}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    {published ? "Multi-Role Breakdown Live on Directory!" : "Publish Multi-Role Breakdown to Live Directory"}
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                    Sends notification to verified performers matching criteria
                  </div>
                </div>
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
                <Shield size={16} color="#60a5fa" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                  Multi-role listings comply with CINTAA Fair Casting guidelines. Compensation ranges are binding upon contract issuance.
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
            <Shield size={14} color="#60a5fa" />
            <span>CINTAA &amp; WIIA ROLE GOVERNANCE COMPLIANT</span>
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
                {step === 1 && "PROCEED TO CHARACTER SPECS"}
                {step === 2 && "PROCEED TO PERKS & BILLING"}
                {step === 3 && "REVIEW & BROADCAST LISTING"}
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
                CLOSE BREAKDOWN SUITE
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
