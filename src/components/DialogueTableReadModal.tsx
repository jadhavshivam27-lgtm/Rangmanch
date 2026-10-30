"use client";

import { useState } from "react";
import {
  X,
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  CheckCircle2,
  Download,
  AlertCircle,
  Users,
  Activity,
  Sliders,
} from "lucide-react";

interface DialogueTableReadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function DialogueTableReadModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: DialogueTableReadModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState("1.0x");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  if (!isOpen) return null;

  const scriptCast = [
    { name: "Narrator", voice: "Neural Baritone (Deep & Cinematic)", pitch: "Low", role: "Scene Direction" },
    { name: "ACP Vikram", voice: "Gravelly Intense (Shivam Model)", pitch: "Mid-Low", role: "Lead Cop" },
    { name: "Dr. Alisha", voice: "Sharp Articulate (Tanya Model)", pitch: "Mid-High", role: "Lead Forensic" },
    { name: "Minister Shinde", voice: "Raspy Authoritative", pitch: "Low", role: "Antagonist" },
  ];

  const dialogueLines = [
    { speaker: "Narrator", line: "INT. MUMBAI CRIME BRANCH - NIGHT. Rain lashes against the frosted glass." },
    { speaker: "ACP Vikram", line: "Humein do ghante pehle file band karne ka order mila tha. Lekin forensic report kuch aur bol rahi hai." },
    { speaker: "Dr. Alisha", line: "Vikram, ballistics match nahi kar rahi. Bullet unke standard service revolver se nahi chali." },
    { speaker: "Minister Shinde", line: "Police commissioner ko phone milao. Ye case yahin khatam hota hai." },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(6, 182, 212, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(6, 182, 212, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Cyan Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #06b6d4 25%, #a5f3fc 50%, #06b6d4 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 100%)",
                border: "1px solid rgba(6,182,212,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#06b6d4",
              }}
            >
              <Headphones size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#06b6d4",
                  textTransform: "uppercase",
                }}
              >
                MODULE M063 • FEATURE 63
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
                AI Dialogue Table-Read &amp; Multi-Voice Synthesizer
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#06b6d4", fontWeight: 600 }}>{defaultProject}</span> • Automated Script Cast Table-Read Simulator
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
            { step: 1, label: "Character Voices" },
            { step: 2, label: "Pacing Controls" },
            { step: 3, label: "Live Table-Read" },
            { step: 4, label: "Podcast Master" },
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
                    ? "rgba(6,182,212,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(6,182,212,0.3)"
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
                    activeStep === item.step ? "#06b6d4" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: CHARACTER VOICES */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Script automatically parsed into 4 distinct vocal roles. Assign custom neural timbre, pitch, and accent pacing.
              </div>

              {scriptCast.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                        {c.name}
                      </span>
                      <span style={{ fontSize: "11px", color: "#06b6d4", padding: "2px 8px", borderRadius: "4px", background: "rgba(6,182,212,0.1)" }}>
                        {c.role}
                      </span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "4px" }}>
                      Voice Model: <strong style={{ color: "#d4af61" }}>{c.voice}</strong>
                    </div>
                  </div>

                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "6px" }}>
                    SYNTHESIZED
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: PACING CONTROLS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Adjust table-read dialogue speed, dramatic silence pause duration, and emotion modulation.
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Global Playback Speed
                </label>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  {["0.85x (Dramatic)", "1.0x (Standard)", "1.25x (Fast Read)", "1.5x (Speed Pass)"].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setPlaybackSpeed(speed.split(" ")[0])}
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        backgroundColor: playbackSpeed === speed.split(" ")[0] ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.03)",
                        border: playbackSpeed === speed.split(" ")[0] ? "1px solid #06b6d4" : "1px solid rgba(255,255,255,0.08)",
                        color: playbackSpeed === speed.split(" ")[0] ? "#ffffff" : "#8a8a9a",
                        cursor: "pointer",
                      }}
                    >
                      {speed}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ fontSize: "12px", color: "#ffffff", fontWeight: 600 }}>
                  Dramatic Breath &amp; Pause Settings
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#8a8a9a" }}>
                  <span>Sentence End Pause:</span>
                  <strong style={{ color: "#06b6d4" }}>450 ms</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#8a8a9a" }}>
                  <span>Character Turnaround Pause:</span>
                  <strong style={{ color: "#06b6d4" }}>600 ms</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#8a8a9a" }}>
                  <span>Action Description Ducking Volume:</span>
                  <strong style={{ color: "#34d399" }}>-6.0 dB</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: LIVE TABLE-READ */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#06b6d4",
                      border: "none",
                      color: "#0a0a0f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    {isPlaying ? <Pause size={22} /> : <Play size={22} />}
                  </button>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      Act II Scene 18: Crime Branch Office
                    </div>
                    <div style={{ fontSize: "11px", color: "#8a8a9a", fontFamily: "monospace" }}>
                      Speed: {playbackSpeed} • Time: 00:03:42 / 00:08:15
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => setCurrentLineIndex((prev) => (prev + 1) % dialogueLines.length)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    NEXT LINE →
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {dialogueLines.map((d, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "10px",
                      backgroundColor: currentLineIndex === idx ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.02)",
                      border: currentLineIndex === idx ? "1px solid rgba(6,182,212,0.4)" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div style={{ fontSize: "11px", fontFamily: "monospace", color: currentLineIndex === idx ? "#06b6d4" : "#8a8a9a", fontWeight: 700 }}>
                      {d.speaker.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "13px", color: "#ffffff", marginTop: "4px", lineHeight: 1.5 }}>
                      {d.line}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: PODCAST MASTER */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(6,182,212,0.15)",
                  border: "1px solid rgba(6,182,212,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#06b6d4",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Table-Read Audio Master Synthesized
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Complete 4-Character Audio Session generated at 48kHz / 24-bit WAV. Includes actor character tracks for independent rehearsal study.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH DIALOGUE TABLE-READ MASTER LOG\nProject: ${defaultProject}\nAct/Scene: Act II Scene 18\nCast Assigned:\n${scriptCast.map(c => `- ${c.name} (${c.role}): ${c.voice}`).join("\n")}\nDialogue Transcript:\n${dialogueLines.map(d => `[${d.speaker}]: ${d.line}`).join("\n")}\nSpeed: ${playbackSpeed}\nSynthesized on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `TableRead_AudioMaster_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD TABLE-READ AUDIO LOG &amp; PODCAST SCRIPT
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
            Step {activeStep} of 4 • AI Table-Read Studio
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
                CLOSE TABLE-READ ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

