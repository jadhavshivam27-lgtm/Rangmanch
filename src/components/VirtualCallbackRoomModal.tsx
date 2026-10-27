"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Radio,
  FileText,
  Clock,
  Download,
  Sparkles,
  User,
} from "lucide-react";

interface VirtualCallbackRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function VirtualCallbackRoomModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: VirtualCallbackRoomModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isRecording, setIsRecording] = useState(true);

  if (!isOpen) return null;

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
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(6,182,212,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #06b6d4 30%, #a5f3fc 50%, #06b6d4 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 100%)",
                border: "1px solid rgba(6,182,212,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#06b6d4",
                boxShadow: "0 0 20px rgba(6,182,212,0.15)",
                flexShrink: 0,
              }}
            >
              <Video size={24} />
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
                  color: "#06b6d4",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M041</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>WEBRTC LIVE CALLBACK</span>
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
                Virtual Live Callback Audition Room
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Production: <span style={{ color: "#d4af61", fontWeight: 600 }}>{defaultProject}</span> • 1080p WebRTC Session
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
            { num: 1, label: "A/V Diagnostics" },
            { num: 2, label: "Live Audition Stage" },
            { num: 3, label: "Director Directives" },
            { num: 4, label: "Session Recording" },
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
                background: activeStep === st.num ? "rgba(6,182,212,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #06b6d4" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#06b6d4" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: A/V DIAGNOSTICS */}
          {activeStep === 1 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px" }}>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", fontFamily: "monospace", marginBottom: "6px" }}>CAMERA INPUT</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>Sony A7 IV (Elgato Cam Link 4K)</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "4px" }}>● 1080p @ 60 FPS • Optimal Framing</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px" }}>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", fontFamily: "monospace", marginBottom: "6px" }}>MICROPHONE INPUT</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>Sennheiser MKH 416 Shotgun</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "4px" }}>● 48 kHz / 24-bit • Ambient -42dB</div>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#06b6d4", fontFamily: "monospace" }}>
                    WebRTC Low Latency Ping: 18ms
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                    Direct peer connection established via Mumbai AWS edge relays.
                  </div>
                </div>
                <Radio size={20} color="#06b6d4" />
              </div>
            </div>
          )}

          {/* STEP 2: LIVE AUDITION STAGE */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  backgroundColor: "#07070b",
                  border: "1px solid rgba(6,182,212,0.3)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                {/* Simulated Video Stage */}
                <div
                  style={{
                    height: "220px",
                    background: "radial-gradient(circle at 50% 50%, #151525 0%, #06060c 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(6,182,212,0.2)",
                        border: "2px solid #06b6d4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#06b6d4",
                        margin: "0 auto 8px auto",
                      }}
                    >
                      <User size={30} />
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>Tanya Deshmukh (Live)</div>
                    <div style={{ fontSize: "11px", color: "#06b6d4", fontFamily: "monospace" }}>Reading: Scene 4 Confrontation</div>
                  </div>

                  {/* Watermark overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "12px",
                      fontSize: "9px",
                      fontFamily: "monospace",
                      color: "rgba(255,255,255,0.4)",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    REC ● 00:04:12 • ENCRYPTED LIVE STREAM
                  </div>
                </div>

                {/* Director Stage Controls */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    padding: "12px",
                    backgroundColor: "#0d0d16",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <button
                    onClick={() => setIsMicOn(!isMicOn)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      backgroundColor: isMicOn ? "rgba(255,255,255,0.08)" : "rgba(239,68,68,0.2)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: isMicOn ? "#ffffff" : "#ef4444",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      cursor: "pointer",
                    }}
                  >
                    {isMicOn ? <Mic size={14} /> : <MicOff size={14} />} {isMicOn ? "DIRECTOR MIC ON" : "MUTED"}
                  </button>
                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      backgroundColor: isVideoOn ? "rgba(255,255,255,0.08)" : "rgba(239,68,68,0.2)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: isVideoOn ? "#ffffff" : "#ef4444",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      cursor: "pointer",
                    }}
                  >
                    {isVideoOn ? <Video size={14} /> : <VideoOff size={14} />} {isVideoOn ? "CAMERA ON" : "CAMERA OFF"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DIRECTOR DIRECTIVES */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Send live teleprompter audio/text cues to the performer&apos;s earpiece monitor:
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                {[
                  "Take it again with more suppressed fury on line 3",
                  "Hold eye contact into lens for 3 full seconds at wrap",
                  "Deliver monologue as a confidential whisper",
                  "Pick up pacing by 15% during the climax exchange",
                ].map((directive, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(6,182,212,0.25)",
                      fontSize: "12px",
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    &ldquo;{directive}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: SESSION RECORDING */}
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
                Live Callback Session Mastered
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                1080p ProRes master video with separate vocal stem recorded and synced with CINTAA timecode stamps.
              </p>

              <button
                onClick={() => {
                  const content = `LIVE CALLBACK SESSION LOG\nProject: ${defaultProject}\nCandidate: Tanya Deshmukh\nDuration: 00:14:28\nQuality: 1080p ProRes 422\nDirector Markers: 4 Cues Logged\nCINTAA Timecode: TC-09412-MUMBAI`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Callback_Session_${defaultProject}_Tanya.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", fontSize: "11px" }}
              >
                <Download size={14} /> EXPORT CALLBACK AUDITION MASTER
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
            Step {activeStep} of 4 • WebRTC Audition Room
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
                END CALLBACK SESSION ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
