"use client";

import { useState } from "react";
import {
  X,
  Flame,
  ShieldAlert,
  Ambulance,
  CheckCircle2,
  Download,
  AlertCircle,
  FileCheck,
  HeartPulse,
} from "lucide-react";

interface StuntSafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function StuntSafetyModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: StuntSafetyModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [sequenceTitle, setSequenceTitle] = useState("Scene 54 - High-Velocity Rooftop Wirework Leap");
  const [actionDirector, setActionDirector] = useState("Sham Kaushal (National Award Action Master)");
  const [hazardTier, setHazardTier] = useState<"tier1" | "tier2" | "tier3">("tier2");
  const [stuntDoubleName, setStuntDoubleName] = useState("Rohan 'Tiger' Sawant (Movie Stunt Artists Association #ST-891)");
  const [leadPerformerConsent, setLeadPerformerConsent] = useState(true);
  const [harnessInspection, setHarnessInspection] = useState("500kg Load Tested & Rigged with Dual Carabiners");
  const [paramedicStatus, setParamedicStatus] = useState("Advanced Life Support Ambulance on Set (Dr. Roy Standby)");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(251, 146, 60, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(251, 146, 60, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Orange Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #fb923c 25%, #fed7aa 50%, #fb923c 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(251,146,60,0.2) 0%, rgba(251,146,60,0.05) 100%)",
                border: "1px solid rgba(251,146,60,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fb923c",
              }}
            >
              <Flame size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#fb923c",
                  textTransform: "uppercase",
                }}
              >
                MODULE M060 • FEATURE 60
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
                Stunt &amp; Action Scene Hazard Risk Assessment
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#fb923c", fontWeight: 600 }}>{defaultProject}</span> • Action Director &amp; Stunt Guild Insurance Verification
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
            { step: 1, label: "Hazard Classification" },
            { step: 2, label: "Stunt Double & Rigging" },
            { step: 3, label: "Paramedic Protocols" },
            { step: 4, label: "Action Clearance" },
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
                    ? "rgba(251,146,60,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(251,146,60,0.3)"
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
                    activeStep === item.step ? "#fb923c" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: HAZARD CLASSIFICATION */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(251,146,60,0.05)",
                  border: "1px solid rgba(251,146,60,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <ShieldAlert size={24} color="#fb923c" />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    Action Master Review: {actionDirector}
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Movie Stunt Artists Association &amp; Film Guild Approved Risk Matrix
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Action Sequence Title &amp; Scene
                </label>
                <input
                  type="text"
                  value={sequenceTitle}
                  onChange={(e) => setSequenceTitle(e.target.value)}
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
                  Hazard Risk Classification Tier
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "8px" }}>
                  {[
                    { id: "tier1", label: "Tier 1: Low / Moderate", sub: "Stage combat, hand-to-hand, falls under 6 ft" },
                    { id: "tier2", label: "Tier 2: Elevated / Wirework", sub: "Deceleration harnesses, rooftop leaps, squibs" },
                    { id: "tier3", label: "Tier 3: Extreme Danger", sub: "Full body fire burn, vehicle rollover, high fall 30ft+" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setHazardTier(t.id as any)}
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        backgroundColor: hazardTier === t.id ? "rgba(251,146,60,0.12)" : "rgba(255,255,255,0.03)",
                        border: hazardTier === t.id ? "1px solid rgba(251,146,60,0.4)" : "1px solid rgba(255,255,255,0.08)",
                        color: hazardTier === t.id ? "#ffffff" : "#8a8a9a",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontSize: "13px", fontWeight: 600 }}>{t.label}</div>
                      <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: STUNT DOUBLE & RIGGING */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Verify stunt performer credentials, load testing certificates, and deceleration fall protection rigs.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Designated Stunt Double
                  </label>
                  <input
                    type="text"
                    value={stuntDoubleName}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fb923c",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Lead Actor Close-Up Opt-In
                  </label>
                  <div
                    style={{
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(52,211,153,0.05)",
                      border: "1px solid rgba(52,211,153,0.2)",
                      color: "#34d399",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CheckCircle2 size={16} /> Performer Signed Controlled Stunt Rider
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Wire Harness &amp; Rigging Load Test Status
                </label>
                <input
                  type="text"
                  value={harnessInspection}
                  readOnly
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
          )}

          {/* STEP 3: PARAMEDIC PROTOCOLS */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(239,68,68,0.05)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Ambulance size={28} color="#f87171" />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    On-Set Paramedic Standby (Mandatory for Tier 2/3)
                  </div>
                  <div style={{ fontSize: "12px", color: "#fca5a5", marginTop: "2px" }}>
                    {paramedicStatus}
                  </div>
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
                  gap: "8px",
                  fontSize: "12px",
                  color: "#a0a0b0",
                }}
              >
                <div>• Dedicated emergency green corridor route to Kokilaben Dhirubhai Ambani Hospital (12 mins).</div>
                <div>• Emergency burn blankets, cervical collars, and portable defibrillator verified on stage.</div>
                <div>• Film Guild Special Risk Group Insurance Policy active: ₹1,00,00,000 per performer coverage.</div>
              </div>
            </div>
          )}

          {/* STEP 4: ACTION CLEARANCE */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(251,146,60,0.15)",
                  border: "1px solid rgba(251,146,60,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fb923c",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Stunt &amp; Action Sequence Cleared for Filming
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Clearance Dossier #STUNT-2026-904. Signed by Action Master Sham Kaushal, Stunt Double, and Production Health &amp; Safety Officer.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH STUNT & ACTION SAFETY CLEARANCE\nDocket ID: #STUNT-2026-904\nProject: ${defaultProject}\nAction Sequence: ${sequenceTitle}\nAction Director: ${actionDirector}\nHazard Tier: ${hazardTier.toUpperCase()}\nStunt Double: ${stuntDoubleName}\nLead Actor Consent: Signed & Insured\nRigging Status: ${harnessInspection}\nMedical Standby: ${paramedicStatus}\nInsurance: ₹1,00,00,000 Special Risk Coverage\nClearance Time: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Stunt_Clearance_${defaultProject.replace(/\s+/g, "_")}_Scene54.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD ACTION SAFETY CLEARANCE CERTIFICATE
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
            Step {activeStep} of 4 • Action &amp; Stunt Safety Suite
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
                APPROVE STUNT SEQUENCE ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
