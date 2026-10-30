"use client";

import { useState } from "react";
import {
  X,
  Tv2,
  Lock,
  Shield,
  Eye,
  CheckCircle2,
  Download,
  AlertCircle,
  Play,
  Pause,
  KeyRound,
  Users,
} from "lucide-react";

interface ScreeningRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ScreeningRoomModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ScreeningRoomModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [roomPasscode, setRoomPasscode] = useState("RANGM-9024-VIP");
  const [viewerName, setViewerName] = useState("Karan Johar (Producer Screening)");
  const [viewerIp, setViewerIp] = useState("103.21.244.18 (Mumbai High-Speed Fiber)");
  const [watermarkOpacity, setWatermarkOpacity] = useState("35%");
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(99, 102, 241, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(99, 102, 241, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Indigo Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #6366f1 25%, #c7d2fe 50%, #6366f1 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)",
                border: "1px solid rgba(99,102,241,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6366f1",
              }}
            >
              <Tv2 size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#6366f1",
                  textTransform: "uppercase",
                }}
              >
                MODULE M071 • FEATURE 71
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
                Secure Executive Screening Room &amp; DRM
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#6366f1", fontWeight: 600 }}>{defaultProject}</span> • Forensic Watermarked Executive Screener
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
            { step: 1, label: "VIP Passcode" },
            { step: 2, label: "Forensic Watermark" },
            { step: 3, label: "DRM Shield" },
            { step: 4, label: "Screening Theater" },
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
                    ? "rgba(99,102,241,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(99,102,241,0.3)"
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
                    activeStep === item.step ? "#6366f1" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: VIP PASSCODE */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Authorized Executive Viewer
                  </label>
                  <input
                    type="text"
                    value={viewerName}
                    onChange={(e) => setViewerName(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Single-Use VIP Passcode
                  </label>
                  <input
                    type="text"
                    value={roomPasscode}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#6366f1",
                      fontSize: "13px",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Detected Executive IP &amp; Geolocation:</div>
                  <div style={{ fontSize: "13px", color: "#ffffff", fontFamily: "monospace", marginTop: "2px" }}>
                    {viewerIp}
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "6px" }}>
                  TLS 1.3 ENCRYPTED
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: FORENSIC WATERMARK */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Real-time dynamic watermark floats across video player, burning viewer identity and timestamp into video feed to prevent cinema leaks.
              </div>

              <div
                style={{
                  height: "160px",
                  borderRadius: "14px",
                  backgroundColor: "#050508",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <div style={{ color: "#404050", fontSize: "14px", fontWeight: 600 }}>
                  [ SECURE SCREENER VIDEO STREAM PREVIEW ]
                </div>
                <div
                  style={{
                    position: "absolute",
                    transform: "rotate(-20deg)",
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "13px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    pointerEvents: "none",
                  }}
                >
                  PROPERTY OF DHARMA / ANTIM PRAHAR • {viewerName} • {viewerIp} • {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DRM SHIELD */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(99,102,241,0.05)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    Hardware HDCP 2.2 Anti-Capture Guard
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Screen recording software (OBS, QuickTime, HDMI capture cards) automatically blacks out
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.15)", borderRadius: "6px" }}>
                  ACTIVE SHIELD
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: SCREENING THEATER */}
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
                Executive Screener Ready for Playback
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Screening Room #SCR-VIP-902. Session logged with studio anti-piracy operations. Valid for 24 hours.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH EXECUTIVE SCREENING ROOM PASS\nProject: ${defaultProject}\nVIP Viewer: ${viewerName}\nAccess Code: ${roomPasscode}\nForensic Watermark: Enabled\nIP Log: ${viewerIp}\nSession Token: #SES-DRM-2026-90412\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Screening_Pass_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD VIP SCREENING PASS &amp; AUDIT LOG
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
            Step {activeStep} of 4 • Executive Screening Suite
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
                ENTER SCREENING ROOM ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

