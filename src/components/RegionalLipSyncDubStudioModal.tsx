"use client";

import { useState, useEffect } from "react";
import {
  X,
  Languages,
  Video,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Volume2,
  Sparkles,
  Sliders,
  Play,
  RotateCcw,
  Layers,
  Mic2,
} from "lucide-react";

interface RegionalLipSyncDubStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function RegionalLipSyncDubStudioModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Master Theatrical Regional Dub (Tamil, Telugu & Malayalam)",
}: RegionalLipSyncDubStudioModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Source Take & Regional Target Selection
  const [sourceDialogueHindi, setSourceDialogueHindi] = useState(
    "ROY: 'Yeh desh mitti se nahi banta Vikram... yeh hamare balidan aur khamoshi se banta hai.'"
  );
  const [targetRegionalLanguage, setTargetRegionalLanguage] = useState(
    "Tamil (Chengalpattu Classical Literary Register)"
  );
  const [translatedDialogueText, setTranslatedDialogueText] = useState(
    "ROY: 'இந்த நாடு வெறும் மண்ணால் உருவாவதில்லை விக்ரம்... நமது அமைதியான தியாகங்களால்தான் உருவாகிறது.'"
  );

  // Step 2: Acoustic Timbre & Vocal Resonance Preservation
  const [actorTimbrePitchHertz, setActorTimbrePitchHertz] = useState(118); // Hz (Baritone authoritative pitch)
  const [emotionalCadenceMatch, setEmotionalCadenceMatch] = useState(96); // % match to original actor performance
  const [breathinessNaturalismScore, setBreathinessNaturalismScore] = useState(94); // % micro-breaths preserved
  const [regionalDialectFlavor, setRegionalDialectFlavor] = useState("Commanding Military General Cadence (Madras Regiment Style)");

  // Step 3: Neural Phoneme Lip-Sync Warping
  const [phonemeAlignmentScore, setPhonemeAlignmentScore] = useState(97.2); // % audio-to-viseme match
  const [jawMeshWarpingIntensity, setJawMeshWarpingIntensity] = useState(85); // % neural deformation strength
  const [uncannyValleyDampenerActive, setUncannyValleyDampenerActive] = useState(true);

  // Step 4: Final Audio & Video Manifest Export
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_lipsync_dub");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.sourceDialogueHindi) setSourceDialogueHindi(data.sourceDialogueHindi);
          if (data.targetRegionalLanguage) setTargetRegionalLanguage(data.targetRegionalLanguage);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (src: string, lang: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_lipsync_dub",
          JSON.stringify({ sourceDialogueHindi: src, targetRegionalLanguage: lang })
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

  const handleExportDubManifest = () => {
    setIsExporting(true);
    const dubPackage = {
      packageId: `REGIONAL-DUB-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      source: {
        language: "Hindi Original Audio Track (48kHz 24-bit PCM)",
        dialogue: sourceDialogueHindi,
      },
      dubbingTarget: {
        language: targetRegionalLanguage,
        adaptedDialogue: translatedDialogueText,
        dialect: regionalDialectFlavor,
      },
      acousticVocalPreservation: {
        basePitchHz: actorTimbrePitchHertz,
        cadenceMatch: `${emotionalCadenceMatch}%`,
        naturalismBreathScore: `${breathinessNaturalismScore}%`,
      },
      neuralLipSync: {
        visemeAlignment: `${phonemeAlignmentScore}%`,
        jawDeformationIntensity: `${jawMeshWarpingIntensity}%`,
        antiUncannyFilter: uncannyValleyDampenerActive ? "ACTIVE" : "OFF",
      },
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(dubPackage, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `REGIONAL_LIPSYNC_${targetRegionalLanguage.split(" ")[0].toUpperCase()}_MANIFEST.json`;
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
              <Languages size={22} />
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
                  FEATURE #109 • MODULE 20
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(96, 165, 250, 0.15)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    color: "#60a5fa",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  PHONEME VISEME ALIGNMENT
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
                Multilingual Regional Lip-Sync Dubbing Synthesizer Studio
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
            { step: 1, label: "1. Dialogue Adaptation", icon: Languages },
            { step: 2, label: "2. Timbre & Resonance", icon: Volume2 },
            { step: 3, label: "3. Neural Viseme Warping", icon: Video },
            { step: 4, label: "4. Dub Master Export", icon: Download },
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
          {/* STEP 1: Dialogue Adaptation */}
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
                <Languages size={20} color="#d4af61" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Pan-India Cultural &amp; Syllable-Length Matching
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Translates Hindi/English dialogue into South Indian regional languages while maintaining exact syllable meter. Ensures the translated sentence takes the exact same number of video frames to speak.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                  ORIGINAL HINDI MASTER DIALOGUE
                </label>
                <textarea
                  rows={2}
                  value={sourceDialogueHindi}
                  onChange={(e) => {
                    setSourceDialogueHindi(e.target.value);
                    handleSaveDraft(e.target.value, targetRegionalLanguage);
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
                    lineHeight: "1.5",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    REGIONAL DUBBING TARGET
                  </label>
                  <select
                    value={targetRegionalLanguage}
                    onChange={(e) => {
                      setTargetRegionalLanguage(e.target.value);
                      handleSaveDraft(sourceDialogueHindi, e.target.value);
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
                  >
                    <option value="Tamil (Chengalpattu Classical Literary Register)">
                      Tamil (Chengalpattu Classical Literary Register)
                    </option>
                    <option value="Telugu (Coastal Andhra Dramatic Register)">
                      Telugu (Coastal Andhra Dramatic Register)
                    </option>
                    <option value="Malayalam (Valluvanad Naturalistic Cadence)">
                      Malayalam (Valluvanad Naturalistic Cadence)
                    </option>
                    <option value="Kannada (Mysuru Imperial Royal Register)">
                      Kannada (Mysuru Imperial Royal Register)
                    </option>
                    <option value="Bengali (Shuddho Bhasha Kolkata Dramatic)">
                      Bengali (Shuddho Bhasha Kolkata Dramatic)
                    </option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    DIALECT REGISTER FLAVOR
                  </label>
                  <input
                    type="text"
                    value={regionalDialectFlavor}
                    onChange={(e) => setRegionalDialectFlavor(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#60a5fa",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#4ade80", fontFamily: "monospace", fontWeight: 600 }}>
                  SYLLABICALLY SYNCHRONIZED TRANSLATED DIALOGUE
                </label>
                <textarea
                  rows={2}
                  value={translatedDialogueText}
                  onChange={(e) => setTranslatedDialogueText(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#0e0e16",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    color: "#ffffff",
                    fontSize: "13px",
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
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Lock Timbre & Vocal Resonance</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Timbre & Resonance */}
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
                <Volume2 size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Original Actor Vocal Resonance &amp; Emotion Transfusion
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Clones the unique baritone chest resonance, formant frequencies, and dramatic pauses of the primary actor into the regional language voice without robotic distortion.
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
                    ACTOR FUNDAMENTAL PITCH
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    {actorTimbrePitchHertz} Hz
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Deep Baritone Authoritative</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    CADENCE REPLICATION
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {emotionalCadenceMatch}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Subtle dramatic pauses</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    MICRO-BREATH NATURALISM
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    {breathinessNaturalismScore}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Zero artificial artifacts</span>
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
                  <span>Warp Facial Visemes to Audio</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Neural Viseme Warping */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(168, 85, 247, 0.06)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Video size={20} color="#a855f7" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Photorealistic Neural Lip &amp; Jaw Mesh Re-Targeting
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Mathematically deforms the actor’s lip movements and jaw angles to match the phonetic mouth shapes of the regional language. Eliminates the awkward mismatch of traditional dubbing.
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
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      PHONEME-VISEME ALIGNMENT: {phonemeAlignmentScore}%
                    </span>
                    <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600 }}>Cinema Flawless</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="100"
                    step="0.2"
                    value={phonemeAlignmentScore}
                    onChange={(e) => setPhonemeAlignmentScore(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#d4af61" }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      DEFORMATION INTENSITY: {jawMeshWarpingIntensity}%
                    </span>
                    <span style={{ fontSize: "11px", color: "#a855f7", fontWeight: 600 }}>Natural Musculature</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    step="1"
                    value={jawMeshWarpingIntensity}
                    onChange={(e) => setJawMeshWarpingIntensity(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#a855f7" }}
                  />
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
                  <span>Compile Regional Master Deliverable</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Dub Master Export */}
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
                    Theatrical Regional Dub Master Ready
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Seamless lip synchronization achieved with 97.2% viseme match. Ready for multiplex theatrical and OTT streaming release across South India.
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
                  // REGIONAL LIP-SYNC MASTER SPECIFICATION
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>ORIGINAL AUDIO: Hindi PCM 48kHz / 24-bit</div>
                <div>REGIONAL DUB TARGET: {targetRegionalLanguage}</div>
                <div>ACTOR TIMBRE: 118 Hz Baritone Match (Natural Breath Cadence: {breathinessNaturalismScore}%)</div>
                <div>VISEME DEFORMATION: {phonemeAlignmentScore}% Accuracy (Anti-Uncanny Filter Active)</div>
                <div>DELIVERY FORMAT: 4K ProRes 422HQ with 5.1 &amp; Dolby Atmos Mix</div>
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
                  onClick={handleExportDubManifest}
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
                  <span>{isExporting ? "Compiling..." : "Export Regional Dub Master Package (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
