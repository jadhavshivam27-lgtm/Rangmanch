"use client";

import { useState } from "react";
import {
  X,
  Mic2,
  Volume2,
  Play,
  RotateCcw,
  CheckCircle2,
  Download,
  AlertCircle,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

interface AdrStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function AdrStudioModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: AdrStudioModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [cueLine, setCueLine] = useState("Scene 42 • Cue 18: 'Ye file commissioner tak nahi pahuchegi!'");
  const [actorName, setActorName] = useState("Shivam Jadhav (ACP Vikram)");
  const [syncAccuracy, setSyncAccuracy] = useState(98.6);
  const [isRecording, setIsRecording] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(59, 130, 246, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(59, 130, 246, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Blue Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #3b82f6 25%, #bfdbfe 50%, #3b82f6 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 100%)",
                border: "1px solid rgba(59,130,246,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3b82f6",
              }}
            >
              <Mic2 size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#3b82f6",
                  textTransform: "uppercase",
                }}
              >
                MODULE M069 • FEATURE 69
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "2px 0 0 0",
                  letterSpacing: "0.02em",
                }}
              >
                Foley &amp; ADR Dialogue Replacement Studio
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#3b82f6", fontWeight: 600 }}>{defaultProject}</span> • Automated Dialogue Replacement (ADR) Bay
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "8px",
              color: "#8a8a9a",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Stepper Bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "14px 32px",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            { step: 1, label: "Guide Track Cue" },
            { step: 2, label: "3-Beep Countdown" },
            { step: 3, label: "Waveform Alignment" },
            { step: 4, label: "AAF Session Export" },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "8px",
                backgroundColor:
                  activeStep === item.step
                    ? "rgba(59,130,246,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(59,130,246,0.3)"
                    : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  backgroundColor:
                    activeStep === item.step ? "#3b82f6" : "rgba(255,255,255,0.1)",
                  color: activeStep === item.step ? "#0a0a0f" : "#8a8a9a",
                }}
              >
                {item.step}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: activeStep === item.step ? 600 : 400,
                  color: activeStep === item.step ? "#ffffff" : "#606070",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", maxHeight: "580px", overflowY: "auto" }}>
          {/* STEP 1: GUIDE TRACK CUE */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#3b82f6", textTransform: "uppercase" }}>
                  Selected ADR Cue
                </div>
                <div style={{ fontSize: "16px", color: "#ffffff", fontWeight: 600, marginTop: "6px" }}>
                  {cueLine}
                </div>
                <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "4px" }}>
                  Performer: <strong style={{ color: "#d4af61" }}>{actorName}</strong> • Reason: On-set generator noise floor on boom mic (-24dB SNR)
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: 3-BEEP COUNTDOWN */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Studio 1kHz 3-Pip audio countdown guides performer to hit exact frame-boundary lip-sync.
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "16px 0" }}>
                {[1, 2, 3].map((b) => (
                  <div
                    key={b}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(59,130,246,0.15)",
                      border: "2px solid #3b82f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#ffffff",
                      fontFamily: "monospace",
                    }}
                  >
                    BEEP {b}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsRecording(!isRecording)}
                style={{
                  margin: "0 auto",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  backgroundColor: isRecording ? "#ef4444" : "#3b82f6",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {isRecording ? "RECORDING TAKE 03..." : "ARM TAKE 03 & RECORD"}
              </button>
            </div>
          )}

          {/* STEP 3: WAVEFORM ALIGNMENT */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(59,130,246,0.05)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Elastic Audio Match Accuracy:</div>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#3b82f6", fontFamily: "monospace", marginTop: "2px" }}>
                    {syncAccuracy}%
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.15)", borderRadius: "6px" }}>
                  PERFECT LIP-SYNC
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: AAF SESSION EXPORT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3b82f6",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                ADR Multi-Track Session Exported
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Exported in Avid Pro Tools &amp; Steinberg Nuendo AAF format with Neumann U87 vocal takes, room impulse responses, and Foley tracks.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH ADR & FOLEY SESSION LOG\nProject: ${defaultProject}\nCue: ${cueLine}\nActor: ${actorName}\nMic Model: Neumann U87 Ai via Grace Design Preamp\nSample Rate: 96kHz / 24-bit Broadcast WAV\nSync Score: ${syncAccuracy}%\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `ADR_Session_${defaultProject.replace(/\s+/g, "_")}_Cue18.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD ADR PRO TOOLS AAF SESSION LOG
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0d0d14",
          }}
        >
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#606070" }}>
            Step {activeStep} of 4 • ADR &amp; Foley Suite
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {activeStep > 1 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                BACK
              </button>
            )}
            {activeStep < 4 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                CONTINUE →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                FINISH ADR TAKE ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

