"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Clock,
  Users,
  Bell,
  Sparkles,
  Video,
  Mic,
  ShieldCheck,
  DoorOpen,
} from "lucide-react";

interface WaitingLobbyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function WaitingLobbyModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: WaitingLobbyModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isReady, setIsReady] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(234, 179, 8, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(234,179,8,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #eab308 30%, #fef08a 50%, #eab308 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(234,179,8,0.2) 0%, rgba(234,179,8,0.05) 100%)",
                border: "1px solid rgba(234,179,8,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#eab308",
                boxShadow: "0 0 20px rgba(234,179,8,0.15)",
                flexShrink: 0,
              }}
            >
              <Clock size={24} />
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
                  color: "#eab308",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M042</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>GREEN ROOM QUEUE</span>
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
                Automated Audition Waiting Lobby
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Production: {defaultProject} • Live Callback Green Room System
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
            { num: 1, label: "Queue Position" },
            { num: 2, label: "Live Countdown" },
            { num: 3, label: "Green Room Check" },
            { num: 4, label: "Director Chime" },
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
                background: activeStep === st.num ? "rgba(234,179,8,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #eab308" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#eab308" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: QUEUE POSITION */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 20px",
                  backgroundColor: "#0d0d16",
                  border: "1px solid rgba(234,179,8,0.35)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#eab308", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  CURRENT GREEN ROOM STATUS
                </div>
                <div style={{ fontSize: "44px", fontWeight: 800, fontFamily: "monospace", color: "#ffffff", margin: "6px 0" }}>
                  Position #3
                </div>
                <div style={{ fontSize: "12px", color: "#8a8a9a" }}>
                  2 candidates ahead of you on live director call • Average audition slot: 8 mins
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { pos: "1", name: "Rohan V. (On Stage Now)", status: "In Audition Room", color: "#34d399" },
                  { pos: "2", name: "Pooja H. (Up Next)", status: "Audio Warming Up", color: "#60a5fa" },
                  { pos: "3", name: "You (Tanya D.)", status: "In Waiting Lobby", color: "#eab308" },
                ].map((item) => (
                  <div
                    key={item.pos}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "10px",
                      backgroundColor: item.pos === "3" ? "rgba(234,179,8,0.1)" : "#0d0d16",
                      border: item.pos === "3" ? "1px solid rgba(234,179,8,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: "monospace", color: item.color }}>
                        #{item.pos}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{item.name}</span>
                    </div>
                    <span style={{ fontSize: "10px", fontFamily: "monospace", color: item.color }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: LIVE COUNTDOWN */}
          {activeStep === 2 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  fontSize: "52px",
                  fontWeight: 800,
                  fontFamily: "monospace",
                  color: "#eab308",
                  letterSpacing: "-0.02em",
                }}
              >
                07:42
              </div>
              <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                ESTIMATED TIME UNTIL ADMISSION
              </div>
              <p style={{ fontSize: "13px", color: "#a0a0b0", maxWidth: "440px", margin: "14px auto 0 auto" }}>
                Please remain in the tab. You will receive an audio chime and automatic room redirect when Director Imtiaz Ali buzzes you in.
              </p>
            </div>
          )}

          {/* STEP 3: GREEN ROOM CHECK */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Pre-audition technical verification checklist:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Frontal Lighting", desc: "No backlighting or window glare detected on face", status: "Pass" },
                  { label: "Eye-Line Framing", desc: "Head and shoulders centered in 16:9 frame", status: "Pass" },
                  { label: "Background Acoustics", desc: "Reverb & echo suppressed under 12%", status: "Pass" },
                  { label: "Sides Script Downloaded", desc: "Scene 4 dialogue cached locally", status: "Pass" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{item.label}</div>
                      <div style={{ fontSize: "11px", color: "#7a7a8a" }}>{item.desc}</div>
                    </div>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>✓ {item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: DIRECTOR CHIME */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(234,179,8,0.15)",
                  border: "1px solid rgba(234,179,8,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#eab308",
                  margin: "0 auto 16px auto",
                }}
              >
                <Bell size={28} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Director Room Ready
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Director Imtiaz Ali has opened the audition stage for your Scene 4 reading. Click below to enter the live room.
              </p>

              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <CheckCircle2 size={14} /> ADMIT TO STAGE NOW
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
            Step {activeStep} of 4 • Digital Green Room
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
                ENTER STAGE ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
