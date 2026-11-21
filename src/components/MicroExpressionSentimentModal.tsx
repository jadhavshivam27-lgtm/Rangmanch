"use client";

import { useState, useEffect } from "react";
import {
  X,
  Smile,
  Activity,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Eye,
  Flame,
  BarChart2,
  Sparkles,
  TrendingUp,
  Brain,
  Layers,
} from "lucide-react";

interface MicroExpressionSentimentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function MicroExpressionSentimentModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Scene 14 Interrogation Audition Take #3",
}: MicroExpressionSentimentModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Navarasa Affective Emotion Classifier
  const [selectedCandidate, setSelectedCandidate] = useState("Kabir Oberoi (Auditioning for Major Kabir Rathore)");
  const [primaryRasaDetected, setPrimaryRasaDetected] = useState("Raudra (Fury / Controlled Rage - 42%)");
  const [secondaryRasaDetected, setSecondaryRasaDetected] = useState("Karuna (Hidden Grief / Sorrow - 36%)");
  const [tertiaryRasaDetected, setTertiaryRasaDetected] = useState("Bhayanaka (Repressed Dread - 22%)");
  const [emotionalAuthenticityScore, setEmotionalAuthenticityScore] = useState(96); // /100

  // Step 2: Facial Micro-Expression & Muscle Action Units (FACS)
  const [eyeDartFrequencyHertz, setEyeDartFrequencyHertz] = useState(1.4); // saccades per sec
  const [pupilDilationMillimeters, setPupilDilationMillimeters] = useState(4.8); // mm
  const [corrugatorTensionPercent, setCorrugatorTensionPercent] = useState(88); // Brow furrow tension
  const [microTremorConfidence, setMicroTremorConfidence] = useState(93); // Vocal micro-tremor

  // Step 3: Dramatic Tension Heatmap & Subtext Arc
  const [peakTensionTimestamp, setPeakTensionTimestamp] = useState("01:24.12 (Dialogue: 'Then don't drink it')");
  const [subtextAuthenticityRatio, setSubtextAuthenticityRatio] = useState(91); // % unacted authentic micro-cues
  const [performativeDriftDetected, setPerformativeDriftDetected] = useState(false);

  // Step 4: Casting Comparison & Audition Dossier
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft to LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_micro_expression");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.selectedCandidate) setSelectedCandidate(data.selectedCandidate);
          if (data.primaryRasaDetected) setPrimaryRasaDetected(data.primaryRasaDetected);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (cand: string, rasa: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_micro_expression",
          JSON.stringify({ selectedCandidate: cand, primaryRasaDetected: rasa })
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

  const handleExportTelemetry = () => {
    setIsExporting(true);
    const telemetryReport = {
      reportId: `AFFECTIVE-AI-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      candidate: selectedCandidate,
      navarasaClassification: {
        primary: primaryRasaDetected,
        secondary: secondaryRasaDetected,
        tertiary: tertiaryRasaDetected,
        overallAuthenticityScore: emotionalAuthenticityScore,
      },
      facsActionUnits: {
        eyeDartHz: eyeDartFrequencyHertz,
        pupilDilationMm: pupilDilationMillimeters,
        browCorrugatorTension: corrugatorTensionPercent,
        vocalVibratoTremor: microTremorConfidence,
      },
      tensionHeatmap: {
        peakTensionTime: peakTensionTimestamp,
        subtextRatio: subtextAuthenticityRatio,
        performativeDrift: performativeDriftDetected,
      },
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(telemetryReport, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `MICRO_EXPRESSION_HEATMAP_${selectedCandidate.split(" ")[0].toUpperCase()}.json`;
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
          border: "1px solid rgba(168, 85, 247, 0.35)",
          borderRadius: "18px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.9), 0 0 45px rgba(168, 85, 247, 0.12)",
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
            backgroundColor: "#0d0a14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "rgba(168, 85, 247, 0.12)",
                border: "1px solid rgba(168, 85, 247, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c084fc",
              }}
            >
              <Brain size={22} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#c084fc",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  FEATURE #104 • MODULE 19
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    color: "#c084fc",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  NAVARASA AFFECTIVE COMPUTING
                </span>
                {draftSaved && (
                  <span style={{ fontSize: "9px", color: "#c084fc", fontFamily: "monospace" }}>
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
                AI Micro-Expression & Dramatic Tension Heatmap Analyzer
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
            { step: 1, label: "1. Navarasa Affective Scan", icon: Smile },
            { step: 2, label: "2. FACS Action Units", icon: Eye },
            { step: 3, label: "3. Tension Heatmap", icon: Activity },
            { step: 4, label: "4. Audition Dossier", icon: Download },
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
                  backgroundColor: isActive ? "rgba(168, 85, 247, 0.1)" : "transparent",
                  borderBottom: isActive ? "2px solid #a855f7" : "2px solid transparent",
                  color: isActive ? "#ffffff" : isDone ? "#9ca3af" : "#4b5563",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={14} color={isActive ? "#c084fc" : isDone ? "#4ade80" : "currentColor"} />
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
          {/* STEP 1: Navarasa Scan */}
          {activeStep === 1 && (
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
                <Brain size={20} color="#c084fc" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Classical Navarasa Emotional Decomposition
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Deconstructs audition performances against the 9 classical rasas. Neural networks detect layered micro-sentiments beneath overt dialogue delivery to identify raw authenticity versus melodrama.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#c084fc", fontFamily: "monospace", fontWeight: 600 }}>
                    AUDITIONING CANDIDATE
                  </label>
                  <input
                    type="text"
                    value={selectedCandidate}
                    onChange={(e) => {
                      setSelectedCandidate(e.target.value);
                      handleSaveDraft(e.target.value, primaryRasaDetected);
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
                  <label style={{ fontSize: "12px", color: "#c084fc", fontFamily: "monospace", fontWeight: 600 }}>
                    PRIMARY RASA CONSTELLATION
                  </label>
                  <input
                    type="text"
                    value={primaryRasaDetected}
                    onChange={(e) => setPrimaryRasaDetected(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#c084fc",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  />
                </div>
              </div>

              {/* Rasa Breakdown Card */}
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
                    SECONDARY RASA
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    {secondaryRasaDetected}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    TERTIARY RASA
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#f87171", marginTop: "4px" }}>
                    {tertiaryRasaDetected}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    AUTHENTICITY INDEX
                  </span>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {emotionalAuthenticityScore} / 100
                  </p>
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
                    backgroundColor: "#a855f7",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Analyze Action Units (FACS)</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: FACS Action Units */}
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
                <Eye size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Facial Action Coding System (FACS) Muscle Telemetry
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Detects involuntary ocular micro-saccades, pupil expansion, and forehead muscle contractions (AU1, AU4, AU12) occurring in less than 120 milliseconds.
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
                      EYE DART FREQUENCY: {eyeDartFrequencyHertz} Hz
                    </span>
                    <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600 }}>Focused Intensity</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4.0"
                    step="0.1"
                    value={eyeDartFrequencyHertz}
                    onChange={(e) => setEyeDartFrequencyHertz(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#c084fc" }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      PUPIL DILATION: {pupilDilationMillimeters} mm
                    </span>
                    <span style={{ fontSize: "11px", color: "#60a5fa", fontWeight: 600 }}>Adrenaline Response</span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="8.0"
                    step="0.2"
                    value={pupilDilationMillimeters}
                    onChange={(e) => setPupilDilationMillimeters(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#60a5fa" }}
                  />
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
                    backgroundColor: "#a855f7",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Generate Dramatic Heatmap</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Tension Heatmap */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(234, 179, 8, 0.06)",
                  border: "1px solid rgba(234, 179, 8, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Activity size={20} color="#eab308" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Dramatic Subtext Spike & Tension Curve
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Correlates dialogue beats with affective spikes to map where the scene’s silent tension reaches peak cinematic power.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "#9ca3af", fontFamily: "monospace" }}>
                    PEAK DRAMATIC CLIMAX TIMESTAMP
                  </span>
                  <span style={{ fontSize: "12px", color: "#eab308", fontWeight: 700, fontFamily: "monospace" }}>
                    {peakTensionTimestamp}
                  </span>
                </div>
                {/* Simulated Waveform Bar */}
                <div
                  style={{
                    height: "36px",
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "4px",
                    backgroundColor: "#060608",
                    padding: "4px 8px",
                    borderRadius: "6px",
                  }}
                >
                  {[20, 35, 45, 60, 40, 55, 75, 95, 90, 85, 70, 50, 65, 80, 45, 30].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        backgroundColor: h > 85 ? "#ef4444" : h > 60 ? "#a855f7" : "#3b82f6",
                        borderRadius: "2px",
                      }}
                    />
                  ))}
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
                    backgroundColor: "#a855f7",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Compile Dossier</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Audition Dossier */}
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
                    Audition Affective Analysis Complete
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Neural evaluation demonstrates high subtext authenticity ({subtextAuthenticityRatio}%) with authentic micro-tremor and Navarasa compliance.
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
                <div style={{ color: "#c084fc", fontWeight: 700, marginBottom: "8px" }}>
                  // AFFECTIVE AUDITION TELEMETRY DOSSIER
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>PERFORMER: {selectedCandidate}</div>
                <div>PRIMARY RASA: {primaryRasaDetected}</div>
                <div>AUTHENTICITY SCORE: {emotionalAuthenticityScore} / 100</div>
                <div>PEAK SPIKE BEAT: {peakTensionTimestamp}</div>
                <div>FACS VALIDATION: 120ms Micro-Saccades Verified</div>
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
                  onClick={handleExportTelemetry}
                  disabled={isExporting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#a855f7",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <Download size={16} />
                  <span>{isExporting ? "Exporting..." : "Download Affective Dossier (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
