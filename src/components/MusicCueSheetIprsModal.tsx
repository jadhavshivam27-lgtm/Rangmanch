"use client";

import { useState, useEffect } from "react";
import {
  X,
  Music,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Percent,
  Coins,
  Headphones,
  FileText,
  Sparkles,
  Layers,
} from "lucide-react";

interface MusicCueSheetIprsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function MusicCueSheetIprsModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Theatrical Cut Music Cue Sheet & IPRS Master",
}: MusicCueSheetIprsModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Acoustic Audio Fingerprinting & Cue Logging
  const [soundtrackTitle, setSoundtrackTitle] = useState("Antim Prahar Original Motion Picture Soundtrack");
  const [totalMusicDurationMinutes, setTotalMusicDurationMinutes] = useState(48.5); // Total score minutes in film
  const [totalCueCount, setTotalCueCount] = useState(38); // Cues detected
  const [acousticFingerprintConfidence, setAcousticFingerprintConfidence] = useState(99.1); // %

  // Step 2: Cues Table & Society Royalty Allocation
  const [sampleCues, setSampleCues] = useState([
    { id: "CUE-01", title: "Theme of Kabir (Desert Infiltration)", usage: "Background (Visual)", duration: "03:14", composer: "A. R. Rahman", share: "50% Writer / 50% Publisher" },
    { id: "CUE-02", title: "Midnight Interrogation Tension", usage: "Underscore", duration: "02:45", composer: "Shivam Jadhav (Guest Theme)", share: "50% Writer / 50% Publisher" },
    { id: "CUE-03", title: "Watan Ke Nishaan (Anthem)", usage: "Source Vocal Track", duration: "04:20", composer: "A. R. Rahman & Mehboob (Lyricist)", share: "33% Composer / 33% Lyricist / 34% Label" },
  ]);

  // Step 3: IPRS / PPL / ASCAP Society Licensing
  const [iprsLicensingStatus, setIprsLicensingStatus] = useState("IPRS India Certified (#IPRS-MUM-2026-004)");
  const [pplPublicPerformanceClearance, setPplPublicPerformanceClearance] = useState("PPL India Cleared for Theatrical & Multiplex Exhibition");
  const [ascapBmiInternationalClearance, setAscapBmiInternationalClearance] = useState("ASCAP / PRS For Music Worldwide Reciprocal Pass");

  // Step 4: Export Cue Sheet
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_music_cue_sheet");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.soundtrackTitle) setSoundtrackTitle(data.soundtrackTitle);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (title: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_music_cue_sheet",
          JSON.stringify({ soundtrackTitle: title })
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

  const handleExportCueSheet = () => {
    setIsExporting(true);
    const cueSheetData = {
      sheetId: `IPRS-CUE-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      scoreDetails: {
        soundtrack: soundtrackTitle,
        totalMusicMinutes: totalMusicDurationMinutes,
        cuesCount: totalCueCount,
        audioMatchingConfidence: `${acousticFingerprintConfidence}%`,
      },
      cues: sampleCues,
      societyAffiliations: {
        indiaIPRS: iprsLicensingStatus,
        indiaPPL: pplPublicPerformanceClearance,
        worldwideReciprocal: ascapBmiInternationalClearance,
      },
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(cueSheetData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `IPRS_MUSIC_CUE_SHEET_${soundtrackTitle.split(" ")[0].toUpperCase()}_${Date.now()}.json`;
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
              <Music size={22} />
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
                  FEATURE #111 • MODULE 20
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
                  IPRS &amp; PPL ROYALTY ENGINE
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
                Automated Music Cue Sheet &amp; IPRS Royalty Distribution Engine
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
            { step: 1, label: "1. Fingerprint & Log", icon: Headphones },
            { step: 2, label: "2. Cues & Writers", icon: FileSpreadsheet },
            { step: 3, label: "3. IPRS/PPL Societies", icon: Percent },
            { step: 4, label: "4. Cue Sheet Export", icon: Download },
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
          {/* STEP 1: Fingerprint & Log */}
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
                <Headphones size={20} color="#d4af61" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Automated Audio Fingerprinting &amp; SMPTE Timecode Ingest
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Detects all original score themes, diegetic source music, and vocal songs in the final 5.1/Atmos audio mix. Synchronizes in/out timecodes automatically.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                  MOTION PICTURE SOUNDTRACK TITLE
                </label>
                <input
                  type="text"
                  value={soundtrackTitle}
                  onChange={(e) => {
                    setSoundtrackTitle(e.target.value);
                    handleSaveDraft(e.target.value);
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
                    TOTAL SCORE DURATION
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    {totalMusicDurationMinutes} Mins
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    DETECTED CUES
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {totalCueCount} Cues
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    FINGERPRINT CONFIDENCE
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    {acousticFingerprintConfidence}% Match
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
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Review Cues &amp; Writer Shares</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Cues & Writers */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(16, 185, 129, 0.06)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <FileSpreadsheet size={20} color="#10b981" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Standard SMPTE Cue Sheet Breakdown Table
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Itemized cue sheet containing composer, publisher, usage category (Visual Vocal, Background Instrumental, Source), and split percentages.
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
                  gap: "10px",
                }}
              >
                {sampleCues.map((cue, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "11px", color: "#d4af61", fontFamily: "monospace", fontWeight: 700 }}>
                          {cue.id}
                        </span>
                        <span style={{ fontSize: "13px", color: "#ffffff", fontWeight: 600 }}>{cue.title}</span>
                      </div>
                      <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>
                        {cue.usage} • Duration: {cue.duration} • Composer: {cue.composer}
                      </p>
                    </div>
                    <span style={{ fontSize: "11px", color: "#4ade80", fontFamily: "monospace", fontWeight: 600 }}>
                      {cue.share}
                    </span>
                  </div>
                ))}
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
                  <span>Verify IPRS &amp; PPL Societies</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: IPRS/PPL Societies */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(59, 130, 246, 0.06)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Percent size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Statutory Royalty Collection Societies Clearance
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Guarantees compliant performance royalty clearance with IPRS (Indian Performing Right Society) and international reciprocal societies (ASCAP, BMI, PRS).
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    IPRS INDIA STATUS
                  </label>
                  <input
                    type="text"
                    value={iprsLicensingStatus}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(74, 222, 128, 0.3)",
                      color: "#4ade80",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    PPL INDIA PUBLIC PERFORMANCE CLEARANCE
                  </label>
                  <input
                    type="text"
                    value={pplPublicPerformanceClearance}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#60a5fa",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
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
                  <span>Export Official Cue Sheet</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Cue Sheet Export */}
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
                    Official Music Cue Sheet Ready for Delivery
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Itemized cue timings, writer affiliations, and publisher shares have been certified. Ready for Netflix, Prime Video, and theatrical DCI distribution ingest.
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
                  // OFFICIAL IPRS MUSIC CUE SHEET SPECIFICATION
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>SOUNDTRACK: {soundtrackTitle} ({totalMusicDurationMinutes} mins total music)</div>
                <div>CUES: {totalCueCount} separate background &amp; source cues cataloged</div>
                <div>SOCIETY CERTIFICATION: IPRS India Cleared &amp; ASCAP/BMI Compatible</div>
                <div>STATUS: 100% INGEST READY FOR BROADCAST &amp; STREAMING</div>
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
                  onClick={handleExportCueSheet}
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
                  <span>{isExporting ? "Compiling..." : "Export IPRS Music Cue Sheet (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
