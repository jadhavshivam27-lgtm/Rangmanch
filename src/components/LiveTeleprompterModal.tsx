"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  FileText,
  Play,
  Pause,
  Sliders,
  RotateCcw,
  Sparkles,
  Download,
  Eye,
} from "lucide-react";

interface LiveTeleprompterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function LiveTeleprompterModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: LiveTeleprompterModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [wpm, setWpm] = useState(160);
  const [fontSize, setFontSize] = useState(24);
  const [isMirror, setIsMirror] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "780px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(99, 102, 241, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(99,102,241,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #6366f1 30%, #c7d2fe 50%, #6366f1 70%, transparent)",
          }}
        />

        {/* Header */}
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
                background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)",
                border: "1px solid rgba(99,102,241,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6366f1",
                boxShadow: "0 0 20px rgba(99,102,241,0.15)",
                flexShrink: 0,
              }}
            >
              <FileText size={24} />
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
                  color: "#6366f1",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M043</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>LIVE SCRIPT TELEPROMPTER</span>
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                In-Audition Studio Teleprompter
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Production: {defaultProject} • Real-time synchronized dialogue feed with WPM pacing.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a0a0b0",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Stepper Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#08080d",
          }}
        >
          {[
            { num: 1, label: "Script Sides" },
            { num: 2, label: "WPM Pacing" },
            { num: 3, label: "Mirror Display" },
            { num: 4, label: "Director Sync" },
          ].map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(st.num)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 10px",
                border: "none",
                background: activeStep === st.num ? "rgba(99,102,241,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #6366f1" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#6366f1" : "rgba(255,255,255,0.08)",
                  color: activeStep === st.num ? "#040406" : "#8a8a9a",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {activeStep > st.num ? "✓" : st.num}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: activeStep === st.num ? 700 : 500,
                  color: activeStep === st.num ? "#ffffff" : "#606070",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {st.label}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", maxHeight: "65vh", overflowY: "auto" }}>
          {/* STEP 1: SCRIPT SIDES */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  backgroundColor: "#06060a",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "14px",
                  padding: "20px",
                  minHeight: "200px",
                  maxHeight: "240px",
                  overflowY: "auto",
                  transform: isMirror ? "scaleX(-1)" : "none",
                }}
              >
                <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#6366f1", marginBottom: "8px" }}>
                  SCENE 4 — HAVELI COURTYARD • NIGHT
                </div>
                <div style={{ fontSize: `${fontSize}px`, color: "#ffffff", lineHeight: 1.6, fontWeight: 500 }}>
                  <span style={{ color: "#d4af61", fontWeight: 700 }}>NEHA:</span> (stepping forward into lantern light)
                  &ldquo;Aap samajhte hain ki khamoshi hamari kamzori hai, Thakur Sahab? Khamoshi to bas toofan se pehle ka thehraav hai. Jab subah aayegi, to na yeh deewarein bachengi, aur na aapka yeh ghamand!&rdquo;
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: WPM PACING */}
          {activeStep === 2 && (
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Scrolling Speed: {wpm} Words Per Minute
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a" }}>
                    Standard dramatic monologue speed: 140–180 WPM
                  </div>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    backgroundColor: isPlaying ? "rgba(239,68,68,0.2)" : "rgba(99,102,241,0.2)",
                    border: isPlaying ? "1px solid #ef4444" : "1px solid #6366f1",
                    color: isPlaying ? "#ef4444" : "#6366f1",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    cursor: "pointer",
                  }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />} {isPlaying ? "PAUSE PROMPTER" : "START SCROLL"}
                </button>
              </div>

              <input
                type="range"
                min="100"
                max="300"
                step="10"
                value={wpm}
                onChange={(e) => setWpm(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
              />
            </div>
          )}

          {/* STEP 3: MIRROR DISPLAY */}
          {activeStep === 3 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div
                  onClick={() => setIsMirror(!isMirror)}
                  style={{
                    padding: "16px",
                    borderRadius: "14px",
                    backgroundColor: isMirror ? "rgba(99,102,241,0.15)" : "#0d0d16",
                    border: isMirror ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                    Horizontal Mirror Mode
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>
                    Inverts text horizontally for reflection in beam-splitter teleprompter glass rigs.
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "11px", fontFamily: "monospace", color: isMirror ? "#6366f1" : "#606070" }}>
                    {isMirror ? "MIRROR FLIP ACTIVE ✓" : "STANDARD DISPLAY"}
                  </div>
                </div>

                <div style={{ padding: "16px", borderRadius: "14px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                    Font Size: {fontSize}px
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="36"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: DIRECTOR SYNC */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6366f1",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Teleprompter Synced to Audition Stage
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Director has remote override controls to pause, jump back 5 lines, or match performer speech tempo in real time.
              </p>

              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <CheckCircle2 size={14} /> ENGAGE PROMPTER IN AUDITION
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
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
            Step {activeStep} of 4 • Teleprompter Suite
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
                CLOSE PROMPTER ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
