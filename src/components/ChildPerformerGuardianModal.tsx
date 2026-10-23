"use client";

import { useState } from "react";
import {
  ShieldAlert,
  UserCheck,
  CheckCircle2,
  X,
  FileText,
  Clock,
  BookOpen,
  DollarSign,
  Lock,
  ArrowRight,
  Download,
  AlertCircle,
  HeartHandshake,
  ArrowLeft,
  Check,
  Sparkles,
  Smartphone,
  Fingerprint,
} from "lucide-react";
import type { GuardianCoSignRecord } from "@/lib/types";

interface ChildPerformerGuardianModalProps {
  isOpen: boolean;
  onClose: () => void;
  minorName?: string;
  minorAge?: number;
  onSuccess?: (record: GuardianCoSignRecord) => void;
}

export default function ChildPerformerGuardianModal({
  isOpen,
  onClose,
  minorName = "Aarav Sharma",
  minorAge = 12,
  onSuccess,
}: ChildPerformerGuardianModalProps) {
  // Step 1: Guardian Details, Step 2: NCPCR Child Protection Riders, Step 3: Aadhaar e-Sign, Step 4: Approved Permit
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Guardian Form State
  const [guardianName, setGuardianName] = useState("Sunita Sharma");
  const [relation, setRelation] = useState<"Mother" | "Father" | "Legal Guardian">("Mother");
  const [guardianPhone, setGuardianPhone] = useState("+91 98201 49281");
  const [guardianEmail, setGuardianEmail] = useState("sunita.sharma@example.com");
  const [guardianAadhaar, setGuardianAadhaar] = useState("6829 4910 8219");

  // NCPCR Statutory Clauses Checkboxes
  const [clauseSchooling, setClauseSchooling] = useState(true);
  const [clauseMaxHours, setClauseMaxHours] = useState(true);
  const [clauseTrustFund, setClauseTrustFund] = useState(true);

  // OTP e-Sign State
  const [otp, setOtp] = useState(["5", "1", "8", "2", "9", "4"]);
  const [isSigning, setIsSigning] = useState(false);
  const [permitRecord, setPermitRecord] = useState<GuardianCoSignRecord | null>(null);

  if (!isOpen) return null;

  const handleVerifyGuardianSign = () => {
    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      const record: GuardianCoSignRecord = {
        recordId: `NCPCR-${Date.now().toString().slice(-6)}`,
        minorTalentId: "talent-child-01",
        minorName,
        minorAge,
        guardianName,
        guardianRelation: relation,
        guardianPhone,
        guardianEmail,
        guardianAadhaarMasked: `XXXX-XXXX-${guardianAadhaar.slice(-4)}`,
        ncpcrComplianceConfirmed: true,
        educationProtectionClauseAgreed: clauseSchooling,
        maxDailyHoursAgreed: clauseMaxHours,
        trustFundAccountLinked: clauseTrustFund,
        digitalSignatureTimestamp: new Date().toISOString(),
        status: "approved",
        approvalCertificateId: `PERMIT-GOV-IN-${Math.floor(100000 + Math.random() * 900000)}`,
      };
      setPermitRecord(record);
      if (onSuccess) onSuccess(record);
      setStep(4);
    }, 1000);
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "680px",
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
            background: "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
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
                background: "linear-gradient(135deg, rgba(212,175,97,0.2) 0%, rgba(212,175,97,0.05) 100%)",
                border: "1px solid rgba(212,175,97,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
                boxShadow: "0 0 20px rgba(212,175,97,0.15)",
                flexShrink: 0,
              }}
            >
              <HeartHandshake size={24} />
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
                <span>✦ MODULE M005</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>NCPCR STATUTORY RIDER</span>
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
                Minor Performer Guardian Gateway
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
              { n: 1, label: "Guardian ID", sub: "Legal Parent" },
              { n: 2, label: "NCPCR Riders", sub: "Safety Clauses" },
              { n: 3, label: "Digital e-Sign", sub: "UIDAI OTP" },
              { n: 4, label: "Work Permit", sub: "Issued Permit" },
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
            maxHeight: "60vh",
            overflowY: "auto",
            backgroundColor: "#0d0d14",
          }}
        >
          {/* STEP 1: Guardian Information */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Minor Performer Banner */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(212,175,97,0.12) 0%, rgba(212,175,97,0.03) 100%)",
                  border: "1px solid rgba(212,175,97,0.3)",
                }}
              >
                <div>
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
                    CHILD PERFORMER DETECTED (UNDER 18)
                  </div>
                  <div
                    className="font-cinema"
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {minorName}{" "}
                    <span style={{ fontSize: "14px", color: "#a0a0b0", fontFamily: "sans-serif", fontWeight: 400 }}>
                      ({minorAge} Years Old)
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    border: "1px solid rgba(212,175,97,0.35)",
                    color: "#f4e2b8",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  MANDATORY CO-SIGN
                </span>
              </div>

              {/* Form Inputs Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {/* Field 1: Guardian Full Name */}
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
                    Legal Guardian Full Name (Govt ID)
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#050508",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                    }}
                  >
                    <UserCheck size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <input
                      type="text"
                      value={guardianName}
                      onChange={(e) => setGuardianName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                      placeholder="e.g. Sunita Sharma"
                    />
                  </div>
                </div>

                {/* Field 2: Relationship */}
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
                    Relationship to Performer
                  </label>
                  <select
                    value={relation}
                    onChange={(e) => setRelation(e.target.value as any)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      backgroundColor: "#050508",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      cursor: "pointer",
                      height: "44px",
                    }}
                  >
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Legal Guardian">Court-Appointed Legal Guardian</option>
                  </select>
                </div>

                {/* Field 3: Guardian Mobile */}
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
                    Guardian Mobile Number (Aadhaar linked)
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#050508",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                    }}
                  >
                    <Smartphone size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <input
                      type="text"
                      value={guardianPhone}
                      onChange={(e) => setGuardianPhone(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                        fontFamily: "monospace",
                      }}
                      placeholder="+91 98201 49281"
                    />
                  </div>
                </div>

                {/* Field 4: Guardian Aadhaar ID */}
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
                    Guardian 12-Digit Aadhaar ID
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#050508",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                    }}
                  >
                    <Fingerprint size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <input
                      type="text"
                      value={guardianAadhaar}
                      onChange={(e) => setGuardianAadhaar(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        letterSpacing: "0.12em",
                      }}
                      placeholder="6829 4910 8219"
                    />
                  </div>
                </div>
              </div>

              {/* Statutory Legal Notice Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(212,175,97,0.06) 0%, rgba(14,14,20,0.6) 100%)",
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
                    <span>Statutory Legal Compliance (NCPCR 2022)</span>
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
                    CHILD LABOUR PROHIBITION ACT
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                  Under the Indian Child Labour (Prohibition &amp; Regulation) Act, no minor may submit auditions, sign talent representation memos, or appear on set without legal guardian verified digital consent.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: NCPCR Statutory Protection Riders */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <h3
                  className="font-cinema"
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "6px",
                  }}
                >
                  National Child Protection Riders
                </h3>
                <p style={{ fontSize: "12px", color: "#8e8e98", margin: 0, lineHeight: 1.5 }}>
                  Statutory safety conditions required for all entertainment productions in India to protect under-18 talent.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Clause 1: Education */}
                <div
                  onClick={() => setClauseSchooling(!clauseSchooling)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: clauseSchooling ? "1px solid rgba(212,175,97,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    background: clauseSchooling
                      ? "linear-gradient(145deg, rgba(212,175,97,0.1) 0%, rgba(212,175,97,0.02) 100%)"
                      : "#08080d",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "6px",
                      backgroundColor: clauseSchooling ? "#d4af61" : "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#040406",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {clauseSchooling && <Check size={14} strokeWidth={3} />}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <BookOpen size={15} color="#60a5fa" />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                        1. Mandatory Schooling &amp; Examination Clause
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                      Shooting schedules shall not interfere with school education or examinations. Production must provide a dedicated quiet study area and a private tutor for shoots exceeding 3 days.
                    </p>
                  </div>
                </div>

                {/* Clause 2: Strict 5-Hour Daily Shift Cap */}
                <div
                  onClick={() => setClauseMaxHours(!clauseMaxHours)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: clauseMaxHours ? "1px solid rgba(212,175,97,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    background: clauseMaxHours
                      ? "linear-gradient(145deg, rgba(212,175,97,0.1) 0%, rgba(212,175,97,0.02) 100%)"
                      : "#08080d",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "6px",
                      backgroundColor: clauseMaxHours ? "#d4af61" : "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#040406",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {clauseMaxHours && <Check size={14} strokeWidth={3} />}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Clock size={15} color="#fbbf24" />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                        2. Strict 5-Hour Daily Shift Cap (No Night Shoots)
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                      A minor shall not be made to work for more than 5 hours in a day, including rest intervals. No child shall work between 7:00 PM and 8:00 AM under any circumstances.
                    </p>
                  </div>
                </div>

                {/* Clause 3: 20% Minor Trust Fund Allocation */}
                <div
                  onClick={() => setClauseTrustFund(!clauseTrustFund)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: clauseTrustFund ? "1px solid rgba(212,175,97,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    background: clauseTrustFund
                      ? "linear-gradient(145deg, rgba(212,175,97,0.1) 0%, rgba(212,175,97,0.02) 100%)"
                      : "#08080d",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "6px",
                      backgroundColor: clauseTrustFund ? "#d4af61" : "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#040406",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {clauseTrustFund && <Check size={14} strokeWidth={3} />}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <DollarSign size={15} color="#34d399" />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                        3. Irrevocable 20% Minor Trust Fund Allocation
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                      A minimum of 20% of the child performer&apos;s total earnings must be deposited directly into an irrevocable fixed deposit / minor bank trust fund maturing at age 18.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Guardian Aadhaar OTP e-Sign */}
          {step === 3 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "22px",
                padding: "12px 0",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(212,175,97,0.25) 0%, rgba(212,175,97,0.05) 100%)",
                  border: "1px solid rgba(212,175,97,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af61",
                  boxShadow: "0 0 25px rgba(212,175,97,0.2)",
                }}
              >
                <Lock size={28} />
              </div>

              <div>
                <h3
                  className="font-cinema"
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                >
                  Legal Guardian Digital Signature
                </h3>
                <p style={{ fontSize: "12px", color: "#8e8e98", margin: 0, maxWidth: "420px", lineHeight: 1.5 }}>
                  Enter UIDAI OTP sent to Guardian ({guardianName}) at{" "}
                  <span style={{ color: "#d4af61", fontFamily: "monospace", fontWeight: 700 }}>
                    {guardianPhone}
                  </span>
                </p>
              </div>

              {/* 6 OTP Input Boxes */}
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", padding: "8px 0" }}>
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    style={{
                      width: "48px",
                      height: "56px",
                      borderRadius: "12px",
                      backgroundColor: "#050508",
                      border: digit ? "1px solid #d4af61" : "1px solid rgba(255,255,255,0.15)",
                      color: "#ffffff",
                      fontSize: "22px",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      textAlign: "center",
                      outline: "none",
                      boxShadow: digit ? "0 0 15px rgba(212,175,97,0.25)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </div>

              {/* Sandbox Helper Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  fontSize: "11px",
                  color: "#34d399",
                  fontFamily: "monospace",
                }}
              >
                <span>● DEMO SANDBOX:</span>
                <span>Code 518294 pre-filled for rapid testing</span>
              </div>

              <div style={{ fontSize: "11px", color: "#707080", fontFamily: "monospace" }}>
                Cryptographic Aadhaar e-Sign complies with Indian IT Act 2000 Section 3A.
              </div>
            </div>
          )}

          {/* STEP 4: Approved Work Permit Issued */}
          {step === 4 && permitRecord && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Success Hero Banner */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "24px",
                  borderRadius: "18px",
                  background: "linear-gradient(145deg, rgba(16,185,129,0.12) 0%, rgba(212,175,97,0.08) 100%)",
                  border: "1px solid rgba(16,185,129,0.35)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 30px rgba(16,185,129,0.15)",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16,185,129,0.2)",
                    border: "2px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#34d399",
                    boxShadow: "0 0 20px rgba(16,185,129,0.4)",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3
                    className="font-cinema"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    Child Work Permit Officially Issued
                  </h3>
                  <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#a0a0b0" }}>
                    {minorName} is authorized to submit audition tapes and accept escrow-backed contracts.
                  </p>
                </div>
              </div>

              {/* Permit Certificate Details Card */}
              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#07070b",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Permit Number:</span>
                  <span style={{ color: "#d4af61", fontWeight: 700 }}>{permitRecord.approvalCertificateId}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Minor Performer:</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>
                    {permitRecord.minorName} (Age {permitRecord.minorAge})
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Authorized Guardian:</span>
                  <span style={{ color: "#ffffff" }}>
                    {permitRecord.guardianName} ({permitRecord.guardianRelation})
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Guardian Aadhaar:</span>
                  <span style={{ color: "#ffffff" }}>{permitRecord.guardianAadhaarMasked}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "#707080" }}>Trust Fund Status:</span>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>20% Mandatory Lock Active</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 32px",
            backgroundColor: "#0d0d14",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Regulatory Reference */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#707080",
              fontSize: "11px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            <ShieldAlert size={14} color="#d4af61" />
            <span>NCPCR 2022 COMPLIANT</span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {step > 1 && step < 4 && (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "9999px",
                  color: "#d0d0dc",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowLeft size={14} /> Back
              </button>
            )}

            {step === 1 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                PROCEED TO SAFETY RIDERS
                <ArrowRight size={14} />
              </button>
            )}

            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!clauseSchooling || !clauseMaxHours || !clauseTrustFund}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                  opacity: !clauseSchooling || !clauseMaxHours || !clauseTrustFund ? 0.5 : 1,
                }}
              >
                PROCEED TO AADHAAR E-SIGN
                <ArrowRight size={14} />
              </button>
            )}

            {step === 3 && (
              <button
                type="button"
                onClick={handleVerifyGuardianSign}
                disabled={isSigning}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                {isSigning ? "ISSUING PERMIT..." : "AUTHORIZE & ISSUE PERMIT"}
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
                COMPLETE &amp; RETURN
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
