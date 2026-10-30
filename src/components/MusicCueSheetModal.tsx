"use client";

import { useState } from "react";
import {
  X,
  Music2,
  Radio,
  Clock,
  Coins,
  CheckCircle2,
  Download,
  AlertCircle,
  FileText,
  Volume2,
} from "lucide-react";

interface MusicCueSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function MusicCueSheetModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: MusicCueSheetModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [composerName, setComposerName] = useState("Amit Trivedi");
  const [lyricistName, setLyricistName] = useState("Swanand Kirkire");
  const [totalCues, setTotalCues] = useState("38 Score Cues + 4 Original Songs");
  const [iprsNumber, setIprsNumber] = useState("IPRS-IND-94812");

  if (!isOpen) return null;

  const sampleCues = [
    {
      cueNumber: "M01",
      title: "Title Montage - Mumbai Monsoons",
      tcIn: "00:01:14:08",
      tcOut: "00:03:42:12",
      duration: "02:28",
      usage: "Visual Vocal Song (Theme Song)",
      rights: "100% Cleared (T-Series / Rangmanch Master)",
    },
    {
      cueNumber: "M07",
      title: "The Interrogation - Dark Cello Drone",
      tcIn: "00:24:10:00",
      tcOut: "00:27:18:15",
      duration: "03:08",
      usage: "Background Instrumental Score",
      rights: "Original Composition Work-For-Hire",
    },
    {
      cueNumber: "M19",
      title: "Rooftop Stunt Chase - Orchestral Percussion",
      tcIn: "01:14:02:00",
      tcOut: "01:18:45:00",
      duration: "04:43",
      usage: "Action High Tempo Score",
      rights: "Original Composition Work-For-Hire",
    },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(236, 72, 153, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(236, 72, 153, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Pink Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #ec4899 25%, #fbcfe8 50%, #ec4899 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0.05) 100%)",
                border: "1px solid rgba(236,72,153,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ec4899",
              }}
            >
              <Music2 size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#ec4899",
                  textTransform: "uppercase",
                }}
              >
                MODULE M066 • FEATURE 66
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
                Music &amp; Score Cue Sheet Synchronization
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#ec4899", fontWeight: 600 }}>{defaultProject}</span> • IPRS &amp; PPL Guild Standard Sync Clearance
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
            { step: 1, label: "Timecode Cues" },
            { step: 2, label: "Sync & Master Rights" },
            { step: 3, label: "IPRS Royalty Splits" },
            { step: 4, label: "Manifest Export" },
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
                    ? "rgba(236,72,153,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(236,72,153,0.3)"
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
                    activeStep === item.step ? "#ec4899" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: TIMECODE CUES */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Frame-accurate timecode cue logging for all original score pieces and lyrical musical numbers.
              </div>

              {sampleCues.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#ec4899", fontFamily: "monospace" }}>
                        {c.cueNumber}
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginLeft: "10px" }}>
                        {c.title}
                      </span>
                    </div>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#d4af61" }}>
                      {c.duration} Duration
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "16px", marginTop: "8px", fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a" }}>
                    <span>IN: <strong style={{ color: "#ffffff" }}>{c.tcIn}</strong></span>
                    <span>OUT: <strong style={{ color: "#ffffff" }}>{c.tcOut}</strong></span>
                    <span>USAGE: <strong style={{ color: "#34d399" }}>{c.usage}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: SYNC & MASTER RIGHTS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Composer / Music Director
                  </label>
                  <input
                    type="text"
                    value={composerName}
                    onChange={(e) => setComposerName(e.target.value)}
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
                    Lyricist
                  </label>
                  <input
                    type="text"
                    value={lyricistName}
                    onChange={(e) => setLyricistName(e.target.value)}
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
                  <div style={{ fontSize: "12px", color: "#8a8a9a" }}>Sync Rights Status:</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#34d399", marginTop: "2px" }}>
                    ✓ World Theatrical + Global OTT SVOD Perpetual Sync
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#ec4899", padding: "4px 8px", background: "rgba(236,72,153,0.1)", borderRadius: "6px" }}>
                  T-SERIES CO-LICENSED
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: IPRS ROYALTY SPLITS */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(236,72,153,0.05)",
                  border: "1px solid rgba(236,72,153,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>IPRS Guild Standard Statutory Split:</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#ec4899", fontFamily: "monospace", marginTop: "2px" }}>
                    50% Composer • 50% Lyricist
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "4px 8px", background: "rgba(236,72,153,0.15)", color: "#ec4899", borderRadius: "6px" }}>
                  {iprsNumber}
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: MANIFEST EXPORT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(236,72,153,0.15)",
                  border: "1px solid rgba(236,72,153,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ec4899",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Music Cue Sheet Manifest Certified
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Ready for CBFC Censor submission, OTT platform ingestion, and IPRS statutory filing.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH OFFICIAL MUSIC CUE SHEET\nProject: ${defaultProject}\nComposer: ${composerName}\nLyricist: ${lyricistName}\nIPRS Reg: ${iprsNumber}\nTotal Cues Logged: ${totalCues}\n\nCUE LIST:\n${sampleCues.map(c => `[${c.cueNumber}] ${c.title} | ${c.tcIn} -> ${c.tcOut} (${c.duration}) | Usage: ${c.usage}`).join("\n")}\n\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Music_Cue_Sheet_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD CBFC &amp; IPRS CUE SHEET MANIFEST
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
            Step {activeStep} of 4 • Music Synchronization Suite
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
                CLOSE CUE SHEET ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

