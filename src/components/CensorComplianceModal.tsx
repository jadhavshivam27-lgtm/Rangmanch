"use client";

import { useState } from "react";
import {
  X,
  Stamp,
  FileCheck2,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Download,
  AlertCircle,
  Clock,
  Film,
} from "lucide-react";

interface CensorComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function CensorComplianceModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: CensorComplianceModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [targetCertification, setTargetCertification] = useState<"U" | "UA_13" | "UA_16" | "A">("UA_16");
  const [runtimeMinutes, setRuntimeMinutes] = useState("142 Minutes (02:22:15)");
  const [cutsRequired, setCutsRequired] = useState("2 Audio Mutes + 1 Visual Trim (4.2 seconds total)");
  const [disclaimerConfirmed, setDisclaimerConfirmed] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(239, 68, 68, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(239, 68, 68, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Red Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #ef4444 25%, #fca5a5 50%, #ef4444 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.05) 100%)",
                border: "1px solid rgba(239,68,68,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ef4444",
              }}
            >
              <Stamp size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#ef4444",
                  textTransform: "uppercase",
                }}
              >
                MODULE M070 • FEATURE 70
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
                CBFC Censor Certification &amp; Cut Tracker
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#ef4444", fontWeight: 600 }}>{defaultProject}</span> • Central Board of Film Certification (Statutory India)
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
            { step: 1, label: "Statutory Rating" },
            { step: 2, label: "Tobacco Disclaimers" },
            { step: 3, label: "Cut & Mute Ledger" },
            { step: 4, label: "Form VIII Submission" },
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
                    ? "rgba(239,68,68,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(239,68,68,0.3)"
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
                    activeStep === item.step ? "#ef4444" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: STATUTORY RATING */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select target certification under Cinematograph (Amendment) Act 2023. Automated sensitivity scanner checks dialogue and violence markers.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>
                {[
                  { id: "U", label: "U (Universal)", desc: "Unrestricted Public Exhibition" },
                  { id: "UA_13", label: "UA 13+", desc: "Parental Guidance under 13" },
                  { id: "UA_16", label: "UA 16+", desc: "Parental Guidance under 16" },
                  { id: "A", label: "A (Adults Only)", desc: "Strictly 18+ Exhibition" },
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setTargetCertification(r.id as any)}
                    style={{
                      padding: "16px 12px",
                      borderRadius: "12px",
                      backgroundColor: targetCertification === r.id ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.03)",
                      border: targetCertification === r.id ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.08)",
                      color: targetCertification === r.id ? "#ffffff" : "#8a8a9a",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: 800, color: targetCertification === r.id ? "#ef4444" : "#ffffff" }}>
                      {r.label}
                    </div>
                    <div style={{ fontSize: "10px", color: "#606070", marginTop: "4px" }}>{r.desc}</div>
                  </button>
                ))}
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
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Theatrical Cut Runtime:</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", fontFamily: "monospace" }}>
                    {runtimeMinutes}
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "6px" }}>
                  DCI CINEMA DCP 24FPS
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: TOBACCO DISCLAIMERS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(239,68,68,0.05)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                    Mandatory Anti-Smoking Slate &amp; Running Crawler
                  </div>
                  <div style={{ fontSize: "11px", color: "#fca5a5", marginTop: "2px" }}>
                    COTPA Act 2003: 100mm Static Slate at Beginning + Running Crawler during Scene 14 &amp; 38
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "6px" }}>
                  BURNED IN
                </span>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#d4af61",
                }}
              >
                &ldquo;तंबाकू से कैंसर होता है। Tobacco causes cancer. Cigarette smoking is injurious to health.&rdquo;
              </div>
            </div>
          )}

          {/* STEP 3: CUT & MUTE LEDGER */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Examining Committee suggested minor modifications to secure target UA 16+ rating without commercial audience loss.
              </div>

              {[
                { timecode: "00:34:12:08", type: "Audio Mute", note: "Mute single profanity during heated hospital argument. Replaced with ambient police siren." },
                { timecode: "01:14:02:18", type: "Visual Trim (2.1s)", note: "Shorten extreme blood splatter close-up during knife confrontation." },
                { timecode: "01:58:22:00", type: "Statutory Crawler", note: "Insert alcohol consumption disclaimer during private cocktail club meeting." },
              ].map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#ef4444", fontFamily: "monospace" }}>
                      {c.timecode}
                    </span>
                    <span style={{ fontSize: "11px", color: "#d4af61", fontWeight: 600 }}>
                      {c.type}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "4px" }}>
                    {c.note}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: FORM VIII SUBMISSION */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ef4444",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                CBFC Censor Application Form VIII Ready
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Complete statutory filing pack with title clearance, lyric sheets, dialogue script with cut markers, and anti-smoking disclaimer verification.
              </p>

              <button
                onClick={() => {
                  const content = `CENTRAL BOARD OF FILM CERTIFICATION (CBFC) FORM VIII\nProject: ${defaultProject}\nTarget Rating: ${targetCertification}\nTotal Runtime: ${runtimeMinutes}\nTotal Cuts / Mutes: ${cutsRequired}\nAnti-Smoking Disclaimers: Fully Compliant (COTPA 2003)\nApplication Ref: #CBFC-MUM-2026-90412\nSubmitted on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `CBFC_Censor_Dossier_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD CBFC FORM VIII DOSSIER
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
            Step {activeStep} of 4 • CBFC Censor Suite
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
                SEAL CBFC DOSSIER ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

