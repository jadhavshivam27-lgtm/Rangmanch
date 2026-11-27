"use client";

import { useState, useEffect } from "react";
import {
  X,
  ShieldAlert,
  Mic,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Shield,
  Eye,
  AlertTriangle,
  Fingerprint,
  Send,
  Lock,
} from "lucide-react";

interface DeepfakeVoiceCloneShieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function DeepfakeVoiceCloneShieldModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Cast Biometric Voiceprint & Face Anti-Cloning Shield",
}: DeepfakeVoiceCloneShieldModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Protected Performer Biometric Hash Registry
  const [protectedTalentName, setProtectedTalentName] = useState("Kabir Oberoi (Lead Actor - Voice & Face Hash)");
  const [voiceprintMfccHash, setVoiceprintMfccHash] = useState(
    "vhash_mfcc_89a3f912e74100c5bc62149bfe3812d"
  );
  const [facialMeshKeypoints, setFacialMeshKeypoints] = useState(468); // MediaPipe 468 3D landmarks
  const [biometricClearanceScope, setBiometricClearanceScope] = useState(
    "AUTHORIZED SOLELY FOR 'ANTIM PRAHAR' THEATRICAL & OTT DISTRIBUTIONS. ALL GENERATIVE AI CLONING STRICTLY PROHIBITED."
  );

  // Step 2: Digital Web & Social Crawler Telemetry
  const [crawledPlatforms, setCrawledPlatforms] = useState([
    { platform: "YouTube / Shorts", status: "Clean (0 infringements found)", color: "#4ade80" },
    { platform: "Instagram / Reels", status: "1 Unauthorized AI Parody Flagged", color: "#f87171" },
    { platform: "X (Twitter) Audio Spaces", status: "Clean (0 infringements found)", color: "#4ade80" },
    { platform: "Deepfake Video Hubs", status: "Quarantined via Section 79 Notice", color: "#60a5fa" },
  ]);
  const [flaggedInfringementUrl, setFlaggedInfringementUrl] = useState(
    "https://instagram.com/reels/ai_spoof_kabir_voice_clip_fake"
  );
  const [syntheticVoiceConfidence, setSyntheticVoiceConfidence] = useState(99.4); // % confidence it's an AI clone

  // Step 3: Section 79 & DMCA Legal Takedown Notice Generator
  const [legalCounselEntity, setLegalCounselEntity] = useState(
    "Rangmanch Cinema Legal Trust & Cyber Cell Liaison, Mumbai"
  );
  const [takedownStatute, setTakedownStatute] = useState(
    "Information Technology Act 2000 (Section 79 & 66D - Impersonation via Computer Resource) + DMCA 17 U.S.C. § 512"
  );

  // Step 4: Takedown Dossier & Interception Order
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_deepfake_shield");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.protectedTalentName) setProtectedTalentName(data.protectedTalentName);
          if (data.flaggedInfringementUrl) setFlaggedInfringementUrl(data.flaggedInfringementUrl);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (talent: string, url: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_deepfake_shield",
          JSON.stringify({ protectedTalentName: talent, flaggedInfringementUrl: url })
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

  const handleExportTakedown = () => {
    setIsExporting(true);
    const takedownPacket = {
      noticeId: `DMCA-IT79-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      protectedTalent: {
        name: protectedTalentName,
        voiceprintHash: voiceprintMfccHash,
        landmarks: facialMeshKeypoints,
        authorizationScope: biometricClearanceScope,
      },
      infringementEvidence: {
        targetUrl: flaggedInfringementUrl,
        aiSyntheticConfidence: `${syntheticVoiceConfidence}%`,
        violationType: "Unauthorized Generative AI Likeness & Voice Synthesis",
      },
      statutoryNotice: {
        counsel: legalCounselEntity,
        statutes: takedownStatute,
        mandate: "MANDATORY REMOVAL WITHIN 24 HOURS AS PER IT (INTERMEDIARY GUIDELINES) RULES 2021",
      },
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(takedownPacket, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `SECTION79_TAKEDOWN_NOTICE_${Date.now()}.json`;
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
          border: "1px solid rgba(239, 68, 68, 0.35)",
          borderRadius: "18px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.9), 0 0 45px rgba(239, 68, 68, 0.12)",
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
            backgroundColor: "#0d0a0c",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f87171",
              }}
            >
              <ShieldAlert size={22} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#f87171",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  FEATURE #108 • MODULE 20
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#f87171",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  SEC 79 IT ACT INTERCEPTOR
                </span>
                {draftSaved && (
                  <span style={{ fontSize: "9px", color: "#f87171", fontFamily: "monospace" }}>
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
                AI Deepfake &amp; Unauthorized Voice Clone Defamation Interceptor
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
            { step: 1, label: "1. Biometric Hash Registry", icon: Fingerprint },
            { step: 2, label: "2. Crawler & Intercept", icon: Eye },
            { step: 3, label: "3. Legal Takedown Mandate", icon: Shield },
            { step: 4, label: "4. Section 79 Order", icon: Download },
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
                  backgroundColor: isActive ? "rgba(239, 68, 68, 0.12)" : "transparent",
                  borderBottom: isActive ? "2px solid #ef4444" : "2px solid transparent",
                  color: isActive ? "#ffffff" : isDone ? "#9ca3af" : "#4b5563",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={14} color={isActive ? "#f87171" : isDone ? "#4ade80" : "currentColor"} />
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
          {/* STEP 1: Biometric Hash Registry */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(239, 68, 68, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Fingerprint size={20} color="#f87171" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Performer Vocal &amp; Facial Biometric Keypoint Hash
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Registers acoustic MFCC voiceprint vectors and 3D facial mesh coordinates for primary cast members. Creates an unforgeable baseline to detect generative voice synthesis and face-swapping.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                  PROTECTED LEAD PERFORMER
                </label>
                <input
                  type="text"
                  value={protectedTalentName}
                  onChange={(e) => {
                    setProtectedTalentName(e.target.value);
                    handleSaveDraft(e.target.value, flaggedInfringementUrl);
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    VOICEPRINT MFCC CHECKSUM
                  </label>
                  <input
                    type="text"
                    value={voiceprintMfccHash}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#4ade80",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    FACIAL LANDMARK RECOGNITION
                  </label>
                  <input
                    type="text"
                    value={`${facialMeshKeypoints} 3D Mesh Vertices Registered`}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#60a5fa",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                  STATUTORY BIOMETRIC PROTECTION CLAUSE
                </label>
                <textarea
                  rows={2}
                  value={biometricClearanceScope}
                  readOnly
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#0a0a10",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#d1d5db",
                    fontSize: "12px",
                    lineHeight: "1.5",
                  }}
                />
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
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Scan Web Platforms for Infringement</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Crawler & Intercept */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(239, 68, 68, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Eye size={20} color="#f87171" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Automated Digital Platform Crawler Telemetry
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Scans YouTube, Meta Instagram, X, and synthetic audio repositories. Detects unauthorized voice likeness and deepfake impersonations with acoustic spectrogram spectral distortion analysis.
                  </p>
                </div>
              </div>

              {/* Crawled Results */}
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {crawledPlatforms.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#ffffff", fontWeight: 500 }}>{p.platform}</span>
                    <span style={{ fontSize: "12px", color: p.color, fontFamily: "monospace", fontWeight: 600 }}>
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                  FLAGGED INFRINGING ASSET URL
                </label>
                <input
                  type="text"
                  value={flaggedInfringementUrl}
                  onChange={(e) => {
                    setFlaggedInfringementUrl(e.target.value);
                    handleSaveDraft(protectedTalentName, e.target.value);
                  }}
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#0e0e16",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    color: "#f87171",
                    fontSize: "13px",
                    fontFamily: "monospace",
                  }}
                />
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
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Draft Section 79 Legal Mandate</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Legal Takedown Mandate */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(239, 68, 68, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Shield size={20} color="#f87171" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Statutory Grievance Officer Notice (Indian IT Rules 2021)
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Automatically forms statutory legal orders directing social media intermediaries to expeditiously disable access within 24 hours pursuant to Rule 3(2)(b) of the IT (Intermediary Guidelines) Rules 2021.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                  STATUTORY GOVERNING ACTS
                </label>
                <textarea
                  rows={2}
                  value={takedownStatute}
                  readOnly
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#0a0a10",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    fontSize: "12px",
                    lineHeight: "1.5",
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
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    AI DETECTION CONFIDENCE
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#ef4444", marginTop: "4px" }}>
                    {syntheticVoiceConfidence}% Synthetic
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    MANDATORY REMOVAL TIMELINE
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#f87171", marginTop: "4px" }}>
                    24-Hour Strict Deadline
                  </p>
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
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Generate Takedown Order</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Section 79 Order */}
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
                <CheckCircle2 size={20} color="#4ade80" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Statutory Takedown Notice Formatted &amp; Sealed
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Cryptographic evidence showing acoustic spectrogram divergence and registered biometric voiceprint has been attached to the legal grievance mandate.
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
                <div style={{ color: "#f87171", fontWeight: 700, marginBottom: "8px" }}>
                  // STATUTORY NOTICE TO SOCIAL MEDIA GRIEVANCE OFFICER
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>VIOLATED TALENT: {protectedTalentName}</div>
                <div>INFRINGING TARGET: {flaggedInfringementUrl}</div>
                <div>SYNTHETIC PROBABILITY: {syntheticVoiceConfidence}% (Voice Clone Confirmed)</div>
                <div>LEGAL ACTION: Section 79 IT Act 2000 &amp; Rule 3(2)(b) Intermediary Rules</div>
                <div>PENALTY FOR NON-COMPLIANCE: Loss of Intermediary Safe Harbor Immunity</div>
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
                  onClick={handleExportTakedown}
                  disabled={isExporting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <Download size={16} />
                  <span>{isExporting ? "Generating..." : "Download Formal Takedown Notice (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
