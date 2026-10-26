"use client";

import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  FileText,
  Lock,
  Download,
  Eye,
  Key,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  FileLock,
  Smartphone,
} from "lucide-react";

interface ScriptSidesEncryptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ScriptSidesEncryptionModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ScriptSidesEncryptionModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Sides Selection (PDF Scenes & Climax Tagging)
  // Step 2: Dynamic Watermark (Aadhaar, Performer UID & Forensics)
  // Step 3: Access Protection (OTP Unlock & 48h Auto-Expiry)
  // Step 4: Encrypted Vault (Review Live Watermark & Distribute)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [selectedProject] = useState(defaultProject);
  const [sceneTitle, setSceneTitle] = useState("Scene 44 — Climax Interrogation Sides");
  const [fileSize] = useState("2.8 MB • 6 Pages");
  const [watermarkName, setWatermarkName] = useState("Ananya Sharma");
  const [watermarkAadhaar, setWatermarkAadhaar] = useState("XXXX-XXXX-4928");
  const [otpRequired, setOtpRequired] = useState(true);
  const [screenshotBlock, setScreenshotBlock] = useState(true);
  const [expiryHours, setExpiryHours] = useState(48);
  const [encrypted, setEncrypted] = useState(false);

  if (!isOpen) return null;

  const handleEncryptAndDistribute = () => {
    setEncrypted(true);
  };

  const handleDownloadSample = () => {
    const text = `CONFIDENTIAL AUDITION SIDES — ${selectedProject}
Scene 44: Interrogation Room
Watermarked for: ${watermarkName} (${watermarkAadhaar})
IP: 103.21.244.18 | UID: TALENT-9421-CONFIDENTIAL
AES-256 ENCRYPTED VIA RANGMANCH DIGITAL RIGHTS VAULT`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Encrypted_Sides_${selectedProject.replace(/\s+/g, "_")}.txt`);
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
              "linear-gradient(90deg, transparent, #ec4899 25%, #f472b6 50%, #ec4899 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0.05) 100%)",
                border: "1px solid rgba(236,72,153,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ec4899",
                boxShadow: "0 0 20px rgba(236,72,153,0.15)",
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={24} />
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
                  color: "#ec4899",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M033</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>AES-256 SCRIPT ENCRYPTION</span>
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
                Script Sides Encryption &amp; Watermark Vault
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
              { n: 1, label: "Sides Selection", sub: "Scene Sides PDF" },
              { n: 2, label: "Forensic Watermark", sub: "Aadhaar & Performer UID" },
              { n: 3, label: "Access Policy", sub: "OTP & 48h Expiry" },
              { n: 4, label: "Encrypted Vault", sub: "Distribute Securely" },
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
                          ? "rgba(236,72,153,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #ec4899"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#fbcfe8" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(236,72,153,0.4)" : "none",
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
                          color: isCurrent ? "#ec4899" : "#4a4a58",
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
          {/* STEP 1: Sides Selection */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(236,72,153,0.25)",
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
                      color: "#ec4899",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    PROPRIETARY SCENIC SCRIPT
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — {sceneTitle}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(236,72,153,0.15)",
                    color: "#fbcfe8",
                    border: "1px solid rgba(236,72,153,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  FEATURE #33
                </span>
              </div>

              {/* Document Overview */}
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#14141e",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <FileText size={24} color="#ec4899" />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      Antim_Prahar_Scene_44_Interrogation_Sides.pdf
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98" }}>{fileSize}</div>
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
                  VERIFIED SCRIPT
                </span>
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
                  SCENE CLASSIFICATION &amp; SENSITIVITY
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "13px",
                    outline: "none",
                  }}
                >
                  <option value="climax">Climax Sequence — Strict NDA Lockdown</option>
                  <option value="dialogue">Character Monologue / Dialect Test</option>
                  <option value="emotional">Emotional Breakdown Screen Test</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 2: Forensic Watermark */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(236,72,153,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Dynamic Performer Watermarking
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Every downloaded PDF is stamped with unique forensic metadata.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(236,72,153,0.15)",
                    color: "#fbcfe8",
                    border: "1px solid rgba(236,72,153,0.3)",
                  }}
                >
                  FORENSIC TRACE
                </span>
              </div>

              {/* Watermark Preview Box */}
              <div
                style={{
                  padding: "24px",
                  borderRadius: "14px",
                  backgroundColor: "#08080f",
                  border: "1px dashed rgba(236,72,153,0.4)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    letterSpacing: "0.18em",
                    color: "rgba(236,72,153,0.6)",
                    textTransform: "uppercase",
                    transform: "rotate(-12deg)",
                    padding: "10px",
                  }}
                >
                  CONFIDENTIAL // {watermarkName.toUpperCase()} // AADHAAR {watermarkAadhaar} // RANGMANCH FORENSIC #9421
                </div>
                <div style={{ fontSize: "10px", color: "#8e8e98", marginTop: "12px" }}>
                  Forensic tracking records IP address, download timestamp, and canvas hash.
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Access Policy */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(236,72,153,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Security Policies &amp; Access Expiry
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Configure OTP requirement and screen-recording prevention.
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
                  ACCESS GATED
                </span>
              </div>

              {/* Toggles */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div
                  onClick={() => setOtpRequired(!otpRequired)}
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
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Smartphone size={18} color="#ec4899" />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        Require Aadhaar Mobile OTP Before Decryption
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                        Performer receives 6-digit OTP to open PDF viewer.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "999px",
                      backgroundColor: otpRequired ? "#ec4899" : "#222230",
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
                        left: otpRequired ? "21px" : "3px",
                        transition: "all 0.2s",
                      }}
                    />
                  </div>
                </div>

                <div
                  onClick={() => setScreenshotBlock(!screenshotBlock)}
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
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Shield size={18} color="#ec4899" />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        Block Screen Capture &amp; OS Print Screen
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                        Blacks out screen buffer if recording software is detected.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "999px",
                      backgroundColor: screenshotBlock ? "#ec4899" : "#222230",
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
                        left: screenshotBlock ? "21px" : "3px",
                        transition: "all 0.2s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Encrypted Vault */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(236,72,153,0.3)",
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
                    AES-256 SCRIPT ENCRYPTION ARMED
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Scene Sides Ready
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    Encrypted with recipient-specific UID. Ready for secure callback distribution.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={handleEncryptAndDistribute}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: encrypted ? "rgba(52,211,153,0.12)" : "#141422",
                    border: encrypted ? "1px solid #10b981" : "1px solid rgba(236,72,153,0.4)",
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
                      backgroundColor: encrypted ? "rgba(52,211,153,0.2)" : "rgba(236,72,153,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: encrypted ? "#34d399" : "#ec4899",
                    }}
                  >
                    {encrypted ? <Check size={22} /> : <FileLock size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {encrypted ? "Encrypted Sides Distributed!" : "Distribute Encrypted Sides"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Sends tamper-proof watermarked sides to actors
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleDownloadSample}
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
                      Download Test Watermarked Copy
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Inspect forensic overlay quality
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
            <Shield size={14} color="#ec4899" />
            <span>INDIAN COPYRIGHT ACT 1957 SEC 63 PROTECTED</span>
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
                {step === 1 && "PROCEED TO WATERMARK"}
                {step === 2 && "PROCEED TO ACCESS POLICY"}
                {step === 3 && "FINALIZE & DISTRIBUTE SIDES"}
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
                CLOSE ENCRYPTION VAULT
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
