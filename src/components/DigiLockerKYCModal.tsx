"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  X,
  Smartphone,
  Fingerprint,
  ArrowRight,
  CreditCard,
  Globe,
  FileCheck,
  RotateCw,
  Copy,
  Check,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useAuthStore } from "@/lib/auth";
import type { DigiLockerKYCRecord } from "@/lib/types";

interface DigiLockerKYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (record: DigiLockerKYCRecord) => void;
}

export default function DigiLockerKYCModal({
  isOpen,
  onClose,
  onSuccess,
}: DigiLockerKYCModalProps) {
  const { user } = useAuthStore();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [docType, setDocType] = useState<"aadhaar" | "passport" | "driving_license">("aadhaar");
  const [aadhaarNumber, setAadhaarNumber] = useState("4829 3912 8921");
  const [otp, setOtp] = useState(["7", "4", "9", "1", "8", "3"]);
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [faceMatchProgress, setFaceMatchProgress] = useState(0);
  const [verifiedRecord, setVerifiedRecord] = useState<DigiLockerKYCRecord | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && resendTimer > 0) {
      timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, resendTimer]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSendOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setOtpSent(true);
      setStep(2);
      setResendTimer(30);
    }, 700);
  };

  const handleVerifyOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setFaceMatchProgress(Math.min(progress, 100));
        if (progress >= 100) {
          clearInterval(interval);
          const record: DigiLockerKYCRecord = {
            verificationId: `DL-KYC-${Date.now().toString().slice(-6)}`,
            documentType: docType,
            maskedDocNumber: `XXXX-XXXX-${aadhaarNumber.replace(/\s/g, "").slice(-4)}`,
            verifiedName: user?.name || "Priya Sharma",
            verifiedDob: "14-Aug-1998",
            gender: "Female",
            faceMatchScore: 98.4,
            status: "verified",
            verifiedAt: new Date().toISOString(),
            certificateHash: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            digiLockerDocUri: "in.gov.uidai-adhr-98218491829",
          };
          setVerifiedRecord(record);
          if (onSuccess) onSuccess(record);
          setTimeout(() => setStep(4), 400);
        }
      }, 100);
    }, 600);
  };

  const copyCertificateHash = () => {
    if (verifiedRecord?.certificateHash) {
      navigator.clipboard.writeText(verifiedRecord.certificateHash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const docOptions = [
    {
      id: "aadhaar" as const,
      label: "Aadhaar (UIDAI)",
      badge: "INSTANT OTP",
      icon: Fingerprint,
      placeholder: "4829 3912 8921",
      lengthText: "12-Digit Aadhaar Number",
    },
    {
      id: "passport" as const,
      label: "Passport",
      badge: "GLOBAL SHOOTS",
      icon: Globe,
      placeholder: "Z9418204",
      lengthText: "8-Character Passport No.",
    },
    {
      id: "driving_license" as const,
      label: "Driving License",
      badge: "STATE RTO",
      icon: CreditCard,
      placeholder: "MH-02-2019-004819",
      lengthText: "15-Digit DL Number",
    },
  ];

  const currentDoc = docOptions.find((d) => d.id === docType) || docOptions[0];

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
                  color: "#d4af61",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ DIGITAL IDENTITY PROTOCOL</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>MEITY ENCRYPTED</span>
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
                DigiLocker &amp; Identity Verification
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
              { n: 1, label: "Document", sub: "Select Credential" },
              { n: 2, label: "UIDAI OTP", sub: "SMS Auth" },
              { n: 3, label: "Face Match", sub: "Biometrics" },
              { n: 4, label: "Verified", sub: "Issued Badge" },
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
          {/* STEP 1: Document Selection */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Context Info Banner */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(212,175,97,0.12)",
                    border: "1px solid rgba(212,175,97,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d4af61",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Sparkles size={16} />
                </div>
                <p style={{ margin: 0, fontSize: "12px", color: "#a0a0b0", lineHeight: 1.6 }}>
                  Verify your identity using official government-issued credentials. This issues a verified badge to protect against stolen headshots and confirms eligibility for escrow-backed production contracts across India.
                </p>
              </div>

              {/* Document Type Selector */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label
                  style={{
                    fontSize: "11px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#8a8a9a",
                    fontWeight: 600,
                  }}
                >
                  Select Identity Document
                </label>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                  {docOptions.map((item) => {
                    const isSelected = docType === item.id;
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setDocType(item.id);
                          setAadhaarNumber(item.placeholder);
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          padding: "16px 12px",
                          borderRadius: "14px",
                          border: isSelected
                            ? "1px solid #d4af61"
                            : "1px solid rgba(255,255,255,0.09)",
                          background: isSelected
                            ? "linear-gradient(145deg, rgba(212,175,97,0.16) 0%, rgba(212,175,97,0.04) 100%)"
                            : "#08080d",
                          boxShadow: isSelected
                            ? "0 0 24px rgba(212,175,97,0.2)"
                            : "none",
                          cursor: "pointer",
                          transition: "all 0.25s ease",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            backgroundColor: isSelected ? "rgba(212,175,97,0.2)" : "rgba(255,255,255,0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: isSelected ? "#d4af61" : "#707080",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <ItemIcon size={18} />
                        </div>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: isSelected ? 700 : 500,
                            color: isSelected ? "#ffffff" : "#a0a0b0",
                            lineHeight: 1.2,
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          style={{
                            fontSize: "9px",
                            fontFamily: "monospace",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            background: isSelected ? "rgba(212,175,97,0.25)" : "rgba(255,255,255,0.04)",
                            color: isSelected ? "#f4e2b8" : "#555565",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {item.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Document Number Input */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label
                    style={{
                      fontSize: "11px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#8a8a9a",
                      fontWeight: 600,
                    }}
                  >
                    {currentDoc.lengthText}
                  </label>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "#34d399",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#10b981",
                        display: "inline-block",
                      }}
                    />
                    UIDAI SANDBOX READY
                  </span>
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#050508",
                    border: "1px solid rgba(212,175,97,0.3)",
                    borderRadius: "14px",
                    padding: "4px 16px",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.6)",
                  }}
                >
                  <Fingerprint size={18} color="#d4af61" style={{ marginRight: "12px", flexShrink: 0 }} />
                  <input
                    type="text"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#ffffff",
                      fontSize: "16px",
                      fontFamily: "monospace",
                      letterSpacing: "0.18em",
                      fontWeight: 600,
                    }}
                    placeholder={currentDoc.placeholder}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      color: "#d4af61",
                      backgroundColor: "rgba(212,175,97,0.12)",
                      border: "1px solid rgba(212,175,97,0.3)",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ENCRYPTED
                  </span>
                </div>
              </div>

              {/* DPDP Act 2023 Compliance Assurance Card */}
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
                    <span>DPDP Act 2023 Compliant</span>
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
                    ZERO-KNOWLEDGE PROOF
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                  Rangmanch does not store raw government identification numbers. A one-way cryptographic SHA-256 token confirms verification directly with the official UIDAI MeitY sandbox.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: OTP Entry */}
          {step === 2 && (
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
                <Smartphone size={28} />
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
                  Enter 6-Digit Verification Code
                </h3>
                <p style={{ fontSize: "12px", color: "#8e8e98", margin: 0, maxWidth: "420px", lineHeight: 1.5 }}>
                  Dispatched via UIDAI SMS gateway to the registered mobile number associated with your document ending in{" "}
                  <span style={{ color: "#d4af61", fontFamily: "monospace", fontWeight: 700 }}>
                    •••• {aadhaarNumber.slice(-4) || "8921"}
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
                <span>Code 749183 pre-filled for rapid testing</span>
              </div>

              {/* Resend Timer */}
              <div style={{ fontSize: "12px", color: "#707080", fontFamily: "monospace" }}>
                {resendTimer > 0 ? (
                  <span>Resend available in {resendTimer}s</span>
                ) : (
                  <button
                    onClick={() => setResendTimer(30)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#d4af61",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 600,
                    }}
                  >
                    <RotateCw size={13} /> Resend Verification Code
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Biometric Face Match */}
          {step === 3 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "24px",
                padding: "20px 0",
              }}
            >
              {/* Animated High-Tech Radar HUD */}
              <div
                style={{
                  position: "relative",
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(212,175,97,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "radial-gradient(circle, rgba(212,175,97,0.15) 0%, transparent 70%)",
                  boxShadow: "0 0 35px rgba(212,175,97,0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "6px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212,175,97,0.3)",
                  }}
                />
                <Fingerprint size={42} color="#d4af61" />
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
                  Comparing Biometric Landmarks
                </h3>
                <p style={{ fontSize: "12px", color: "#8e8e98", margin: 0, maxWidth: "440px", lineHeight: 1.5 }}>
                  Cross-referencing 128 nodal facial coordinates against UIDAI government registry metadata in real-time.
                </p>
              </div>

              {/* Progress Bar */}
              <div style={{ width: "100%", maxWidth: "340px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    fontFamily: "monospace",
                  }}
                >
                  <span style={{ color: "#8e8e98" }}>Landmark Confidence:</span>
                  <span style={{ color: "#d4af61", fontWeight: 700 }}>{faceMatchProgress}%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${faceMatchProgress}%`,
                      background: "linear-gradient(90deg, #d4af61 0%, #f4e2b8 100%)",
                      borderRadius: "6px",
                      transition: "width 0.15s ease",
                      boxShadow: "0 0 10px rgba(212,175,97,0.6)",
                    }}
                  />
                </div>
              </div>

              {/* Live Checklist */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "100%",
                  maxWidth: "340px",
                  textAlign: "left",
                }}
              >
                {[
                  { label: "UIDAI Record Match", done: faceMatchProgress >= 30 },
                  { label: "Facial Symmetry Analysis (98.4%)", done: faceMatchProgress >= 65 },
                  { label: "SHA-256 Ledger Token Issuance", done: faceMatchProgress >= 95 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "11px",
                      color: item.done ? "#34d399" : "#555565",
                      fontFamily: "monospace",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <CheckCircle2 size={13} color={item.done ? "#10b981" : "#444455"} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Success / Verified Badge */}
          {step === 4 && verifiedRecord && (
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
                    Identity Authenticated
                  </h3>
                  <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#a0a0b0" }}>
                    Your official government credentials have been cryptographically validated.
                  </p>
                </div>
              </div>

              {/* Verified Ledger Card */}
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
                  <span style={{ color: "#707080" }}>Certificate ID:</span>
                  <span style={{ color: "#d4af61", fontWeight: 700 }}>{verifiedRecord.verificationId}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Verified Name:</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>{verifiedRecord.verifiedName}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Document Mask:</span>
                  <span style={{ color: "#ffffff" }}>{verifiedRecord.maskedDocNumber}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#707080" }}>Biometric Score:</span>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>{verifiedRecord.faceMatchScore}% Match</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#707080" }}>Ledger Hash:</span>
                  <button
                    onClick={copyCertificateHash}
                    style={{
                      background: "none",
                      border: "none",
                      color: copied ? "#34d399" : "#d4af61",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      fontFamily: "monospace",
                    }}
                  >
                    <span>{verifiedRecord.certificateHash.slice(0, 16)}...</span>
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                  </button>
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
          {/* Security Badge */}
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
            <ShieldCheck size={14} color="#d4af61" />
            <span>UIDAI MEITY CERTIFIED</span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
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
                onClick={handleSendOtp}
                disabled={isVerifying}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                {isVerifying ? "CONNECTING UIDAI..." : "DISPATCH OTP"}
                <ArrowRight size={14} />
              </button>
            )}

            {step === 2 && (
              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={isVerifying}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                {isVerifying ? "VERIFYING TOKEN..." : "VERIFY OTP"}
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
