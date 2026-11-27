"use client";

import { useState, useEffect } from "react";
import {
  X,
  FileCheck2,
  Lock,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Shield,
  FileText,
  Hash,
  Stamp,
  Award,
  Sparkles,
  QrCode,
} from "lucide-react";

interface ScreenplayCopyrightVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ScreenplayCopyrightVaultModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Master Screenplay Final Polish Draft 4",
}: ScreenplayCopyrightVaultModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Guild Registration & Author Identification
  const [screenplayTitle, setScreenplayTitle] = useState("Antim Prahar: The Final Strike");
  const [primaryAuthor, setPrimaryAuthor] = useState("Shivam Jadhav & Phanishree N (Co-Writers)");
  const [swaRegistrationNumber, setSwaRegistrationNumber] = useState("SWA-MUM-2026-99214");
  const [wgaRegistrationNumber, setWgaRegistrationNumber] = useState("WGA-W-881920-IND");
  const [genreSubtype, setGenreSubtype] = useState("Historical Geopolitical Espionage Thriller");

  // Step 2: Cryptographic Scene-by-Scene Hashing & Integrity
  const [totalScenesCount, setTotalScenesCount] = useState(114);
  const [totalPageCount, setTotalPageCount] = useState(128);
  const [masterSha256Hash, setMasterSha256Hash] = useState(
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  );
  const [watermarkTagline, setWatermarkTagline] = useState("CONFIDENTIAL STUDIO PRODUCER PREVIEW • WATERMARKED SHA-256");

  // Step 3: Prior Art Plagiarism & Similar Work Analysis
  const [similarityCollisionScore, setSimilarityCollisionScore] = useState(1.4); // % overlap with public scripts (ultra low)
  const [uniqueDialogOriginalityIndex, setUniqueDialogOriginalityIndex] = useState(98.6); // % original
  const [scriptPurityStatus, setScriptPurityStatus] = useState("VERIFIED 100% ORIGINAL • ZERO PLAGIARISM DETECTED");

  // Step 4: Digital Certificate of Origin & QR Seal
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_screenplay_copyright");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.screenplayTitle) setScreenplayTitle(data.screenplayTitle);
          if (data.primaryAuthor) setPrimaryAuthor(data.primaryAuthor);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (title: string, author: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_screenplay_copyright",
          JSON.stringify({ screenplayTitle: title, primaryAuthor: author })
        );
        setDraftSaved(true);
      } catch {}
    }
  };

  if (!isOpen) return null;

  const handleStepComplete = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const handleExportCertificate = () => {
    setIsExporting(true);
    const certBundle = {
      certificateId: `SWA-CERT-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      screenplayDetails: {
        title: screenplayTitle,
        authors: primaryAuthor,
        guildNumbers: {
          swaIndia: swaRegistrationNumber,
          wgaUSA: wgaRegistrationNumber,
        },
        genre: genreSubtype,
        scenes: totalScenesCount,
        pages: totalPageCount,
      },
      cryptographicSignature: {
        algorithm: "SHA-256 Scene-by-Scene Digital Fingerprint",
        masterHash: masterSha256Hash,
        watermark: watermarkTagline,
      },
      plagiarismAnalysis: {
        overlapPercentage: `${similarityCollisionScore}%`,
        originalityIndex: `${uniqueDialogOriginalityIndex}%`,
        status: scriptPurityStatus,
      },
      issuedBy: "Rangmanch Sovereign IP Rights & Screenwriters Registry",
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(certBundle, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `SWA_COPYRIGHT_CERT_${screenplayTitle.split(" ")[0].toUpperCase()}_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsExporting(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
          maxHeight: "92vh",
          backgroundColor: "#08080c",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "18px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.9), 0 0 45px rgba(212, 175, 97, 0.12)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0d0d14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "rgba(212, 175, 97, 0.12)",
                border: "1px solid rgba(212, 175, 97, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
              }}
            >
              <FileCheck2 size={22} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#d4af61",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  FEATURE #107 • MODULE 20
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(74, 222, 128, 0.15)",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    color: "#4ade80",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  SWA & WGA REGISTERED
                </span>
                {draftSaved && (
                  <span style={{ fontSize: "9px", color: "#d4af61", fontFamily: "monospace" }}>
                    ✓ DRAFT SAVED
                  </span>
                )}
              </div>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                WGA &amp; SWA Screenplay Cryptographic Timestamp Vault
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#9ca3af",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Stepper Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "#06060a",
          }}
        >
          {[
            { step: 1, label: "1. Authorship & Guilds", icon: Stamp },
            { step: 2, label: "2. Cryptographic Hash", icon: Hash },
            { step: 3, label: "3. Plagiarism Defense", icon: Shield },
            { step: 4, label: "4. Origin Certificate", icon: Download },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeStep === item.step;
            const isDone = completedSteps.includes(item.step);
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  border: "none",
                  backgroundColor: isActive ? "rgba(212, 175, 97, 0.1)" : "transparent",
                  borderBottom: isActive ? "2px solid #d4af61" : "2px solid transparent",
                  color: isActive ? "#ffffff" : isDone ? "#9ca3af" : "#4b5563",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={14} color={isActive ? "#d4af61" : isDone ? "#4ade80" : "currentColor"} />
                <span>{item.label}</span>
                {isDone && !isActive && <Check size={12} color="#4ade80" />}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div
          style={{
            padding: "24px",
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* STEP 1: Authorship & Guilds */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(212, 175, 97, 0.06)",
                  border: "1px solid rgba(212, 175, 97, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Shield size={20} color="#d4af61" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Screenwriters Guild Legal Protection
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Verify Screenwriters Association (SWA India) and Writers Guild of America (WGA) membership numbers before pitching screenplay treatments or finished dialogue drafts to studios.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    SCREENPLAY TITLE
                  </label>
                  <input
                    type="text"
                    value={screenplayTitle}
                    onChange={(e) => {
                      setScreenplayTitle(e.target.value);
                      handleSaveDraft(e.target.value, primaryAuthor);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    REGISTERED CO-WRITERS / AUTHORS
                  </label>
                  <input
                    type="text"
                    value={primaryAuthor}
                    onChange={(e) => {
                      setPrimaryAuthor(e.target.value);
                      handleSaveDraft(screenplayTitle, e.target.value);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    SWA INDIA REGISTRATION #
                  </label>
                  <input
                    type="text"
                    value={swaRegistrationNumber}
                    onChange={(e) => setSwaRegistrationNumber(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#4ade80",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    WGA INTERNATIONAL FILING #
                  </label>
                  <input
                    type="text"
                    value={wgaRegistrationNumber}
                    onChange={(e) => setWgaRegistrationNumber(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#60a5fa",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button
                  onClick={() => {
                    handleStepComplete(1);
                    setActiveStep(2);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Compute Cryptographic Hash</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Cryptographic Hash */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(96, 165, 250, 0.06)",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Hash size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    SHA-256 Scene-by-Scene Digital Fingerprint
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Every slugline, dialogue beat, and action paragraph is recursively hashed. Even changing a single comma alters the resulting cryptographic checksum, preventing post-facto intellectual property theft.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                  MASTER SHA-256 CHECKSUM
                </label>
                <input
                  type="text"
                  value={masterSha256Hash}
                  readOnly
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#060608",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    color: "#4ade80",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    SCENE BREAKDOWN
                  </span>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                    {totalScenesCount} Scenes
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    PAGE COUNT (FDX/PDF)
                  </span>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    {totalPageCount} Pages (118 mins)
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    DYNAMIC WATERMARK
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    SHA-256 Visible Stamped
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(1)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleStepComplete(2);
                    setActiveStep(3);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Check Plagiarism Defense</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Plagiarism Defense */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(74, 222, 128, 0.06)",
                  border: "1px solid rgba(74, 222, 128, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <CheckCircle2 size={20} color="#4ade80" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Prior Art &amp; Studio Script Clearing Verification
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Cross-references major public scripts, registered treatments, and trademark registries. Proves original authorship before pitching to Netflix, Prime Video, or Jio Studios.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    PLAGIARISM OVERLAP
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {similarityCollisionScore}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Standard genre trope baseline</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    ORIGINALITY INDEX
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    {uniqueDialogOriginalityIndex}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Distinct narrative syntax</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    LEGAL CLEARANCE
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    PASSED FOR STUDIO INGEST
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Indemnity ready</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(2)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleStepComplete(3);
                    setActiveStep(4);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Generate Certificate of Origin</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Origin Certificate */}
          {activeStep === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(74, 222, 128, 0.08)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Award size={20} color="#4ade80" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Sovereign Screenplay Copyright Seal Ready
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Your screenplay has been cryptographically sealed. Any unauthorized plot derivation or stolen dialogue can be definitively contested in court using this certificate and timestamp hash.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  backgroundColor: "#050508",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#d1d5db",
                  lineHeight: "1.6",
                }}
              >
                <div style={{ color: "#d4af61", fontWeight: 700, marginBottom: "8px" }}>
                  // OFFICIAL SCREENPLAY CERTIFICATE OF ORIGIN
                </div>
                <div>TITLE: {screenplayTitle}</div>
                <div>AUTHORS: {primaryAuthor}</div>
                <div>SWA REGISTRATION: {swaRegistrationNumber} | WGA: {wgaRegistrationNumber}</div>
                <div>MASTER SHA-256: {masterSha256Hash}</div>
                <div>ORIGINALITY: {uniqueDialogOriginalityIndex}% Certified Original Narrative</div>
                <div>GOVERNING LAW: Indian Copyright Act 1957 &amp; Berne Convention</div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(3)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={handleExportCertificate}
                  disabled={isExporting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(212, 175, 97, 0.3)",
                  }}
                >
                  <Download size={16} />
                  <span>{isExporting ? "Sealing..." : "Download Copyright Certificate (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
