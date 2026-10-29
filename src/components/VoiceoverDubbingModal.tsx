"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Mic,
  Radio,
  Sliders,
  Play,
  Pause,
  Download,
  Volume2,
  Sparkles,
  Award,
} from "lucide-react";

interface VoiceoverDubbingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function VoiceoverDubbingModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: VoiceoverDubbingModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedLang, setSelectedLang] = useState("Hindi (Awadhi)");
  const [isPlaying, setIsPlaying] = useState(false);
  const [wordCount, setWordCount] = useState(850);

  if (!isOpen) return null;

  const languages = [
    { name: "Hindi (Awadhi)", region: "North India", demand: "High", sample: "01:14" },
    { name: "Tamil (Madurai)", region: "South India", demand: "Very High", sample: "00:58" },
    { name: "Telugu (Coastal)", region: "South India", demand: "High", sample: "01:05" },
    { name: "Bengali (Kolkata)", region: "East India", demand: "Medium", sample: "01:20" },
    { name: "Marathi (Puneri)", region: "West India", demand: "High", sample: "00:45" },
    { name: "Urdu (Standard)", region: "Pan-India", demand: "Very High", sample: "01:30" },
  ];

  const estimatedFee = (wordCount * 18).toLocaleString("en-IN");

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "780px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(14, 165, 233, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(14,165,233,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #0ea5e9 30%, #7dd3fc 50%, #0ea5e9 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(14,165,233,0.05) 100%)",
                border: "1px solid rgba(14,165,233,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0ea5e9",
                boxShadow: "0 0 20px rgba(14,165,233,0.15)",
                flexShrink: 0,
              }}
            >
              <Mic size={24} />
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
                  color: "#0ea5e9",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M051</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>VOICEOVER &amp; DUBBING HUB</span>
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
                Voiceover, Dubbing &amp; Dialect Studio
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                22 Scheduled regional languages, vocal texture matching &amp; broadcast-ready 48kHz audio validation.
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
            { num: 1, label: "Regional Dialects" },
            { num: 2, label: "Timbre Analysis" },
            { num: 3, label: "Waveform Check" },
            { num: 4, label: "Rate Card Master" },
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
                background: activeStep === st.num ? "rgba(14,165,233,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #0ea5e9" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#0ea5e9" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: REGIONAL DIALECTS */}
          {activeStep === 1 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Select target regional language or dialect profile:
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {languages.map((l) => (
                  <div
                    key={l.name}
                    onClick={() => setSelectedLang(l.name)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      backgroundColor: selectedLang === l.name ? "rgba(14,165,233,0.12)" : "#0d0d16",
                      border: selectedLang === l.name ? "1px solid #0ea5e9" : "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>{l.name}</div>
                      <div style={{ fontSize: "11px", color: "#8a8a9a" }}>{l.region} • Sample: {l.sample}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "9px",
                        fontFamily: "monospace",
                        padding: "2px 6px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(14,165,233,0.15)",
                        color: "#7dd3fc",
                      }}
                    >
                      {l.demand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: TIMBRE ANALYSIS */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0ea5e9", fontFamily: "monospace" }}>
                  ✦ Performer Vocal Timbre Profile: Baritone / Resonant
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                  Analyzed fundamental vocal frequency: 112 Hz (Deep chest resonance, zero sibilance distortion).
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>PITCH STABILITY</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#34d399", marginTop: "4px" }}>98.2% Accurate</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>SIBILANCE CONTROL</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>-48 dB De-Esser</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>DYNAMIC RANGE</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#0ea5e9", marginTop: "4px" }}>24-bit / 48 kHz</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: WAVEFORM CHECK */}
          {activeStep === 3 && (
            <div>
              <div
                style={{
                  backgroundColor: "#070c12",
                  border: "1px solid rgba(14,165,233,0.3)",
                  borderRadius: "14px",
                  padding: "20px",
                  marginBottom: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", height: "60px", marginBottom: "14px" }}>
                  {[24, 45, 68, 30, 85, 95, 42, 60, 75, 33, 90, 100, 78, 55, 30, 65, 88, 40].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: "6px",
                        height: isPlaying ? `${Math.min(h + Math.random() * 20, 100)}%` : `${h}%`,
                        backgroundColor: i % 2 === 0 ? "#0ea5e9" : "#38bdf8",
                        borderRadius: "999px",
                        transition: "height 0.1s ease",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 20px",
                    borderRadius: "8px",
                    backgroundColor: isPlaying ? "rgba(239,68,68,0.2)" : "rgba(14,165,233,0.2)",
                    border: isPlaying ? "1px solid #ef4444" : "1px solid #0ea5e9",
                    color: isPlaying ? "#ef4444" : "#0ea5e9",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    cursor: "pointer",
                  }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />} {isPlaying ? "PAUSE SAMPLE" : "AUDITION 48KHZ WAV"}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RATE CARD MASTER */}
          {activeStep === 4 && (
            <div>
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff", fontWeight: 600 }}>Script Script Word Count: {wordCount} Words</span>
                  <span style={{ fontSize: "14px", fontFamily: "monospace", color: "#d4af61", fontWeight: 700 }}>₹{estimatedFee} (Standard Rate)</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#0ea5e9", cursor: "pointer" }}
                />
              </div>

              <div style={{ textAlign: "center", paddingTop: "14px" }}>
                <button
                  onClick={() => {
                    const content = `VOICEOVER DUBBING RATE CARD\nDialect: ${selectedLang}\nStandard Fee: ₹18 / Word\nWord Count: ${wordCount}\nTotal Estimate: ₹${estimatedFee}\nAudio Format: 48 kHz / 24-bit WAV\nVerified: Rangmanch Voice Vault`;
                    const dl = document.createElement("a");
                    dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                    dl.setAttribute("download", `Voiceover_RateCard_${selectedLang.replace(/\s+/g, "_")}.txt`);
                    dl.click();
                  }}
                  className="btn-cinema-gold"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
                >
                  <Download size={14} /> DOWNLOAD CERTIFIED DUBBING RATE CARD
                </button>
              </div>
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
            Step {activeStep} of 4 • Voiceover &amp; Dubbing Studio
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
                COMPLETE SESSION ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

