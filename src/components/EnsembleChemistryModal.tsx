"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Users,
  Sparkles,
  Scale,
  Video,
  Download,
  Eye,
  ArrowRight,
} from "lucide-react";

interface EnsembleChemistryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function EnsembleChemistryModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: EnsembleChemistryModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [leadMale, setLeadMale] = useState("Ishan Verma");
  const [leadFemale, setLeadFemale] = useState("Tanya Deshmukh");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "780px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(168, 85, 247, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(168,85,247,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #a855f7 30%, #e9d5ff 50%, #a855f7 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0.05) 100%)",
                border: "1px solid rgba(168,85,247,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a855f7",
                boxShadow: "0 0 20px rgba(168,85,247,0.15)",
                flexShrink: 0,
              }}
            >
              <Users size={24} />
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
                  color: "#a855f7",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M039</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>AI ENSEMBLE SYNERGY</span>
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
                Lead Chemistry &amp; Ensemble Matcher
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Side-by-side computer vision &amp; vocal resonance comparator for co-lead casting.
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
            { num: 1, label: "Pair Selection" },
            { num: 2, label: "Physical & Vocal" },
            { num: 3, label: "AI Chemistry Index" },
            { num: 4, label: "Pairing Dossier" },
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
                background: activeStep === st.num ? "rgba(168,85,247,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #a855f7" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#a855f7" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: PAIR SELECTION */}
          {activeStep === 1 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {/* Male Candidate */}
                <div
                  style={{
                    backgroundColor: "#0d0d16",
                    border: "1px solid rgba(168,85,247,0.3)",
                    borderRadius: "16px",
                    padding: "20px",
                  }}
                >
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#a855f7", textTransform: "uppercase" }}>
                    CANDIDATE A • MALE LEAD
                  </span>
                  <div style={{ margin: "12px 0 16px 0" }}>
                    <select
                      value={leadMale}
                      onChange={(e) => setLeadMale(e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "#141422",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    >
                      <option value="Ishan Verma">Ishan Verma (Age 27, 6&apos;1&quot;)</option>
                      <option value="Devendra Rathore">Devendra Rathore (Age 31, 5&apos;11&quot;)</option>
                      <option value="Samir Kulkarni">Samir Kulkarni (Age 29, 6&apos;0&quot;)</option>
                    </select>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", lineHeight: 1.5 }}>
                    Role: <strong style={{ color: "#ffffff" }}>Vikram Rao / Rebel Leader</strong>
                    <br />
                    Training: National School of Drama (NSD)
                    <br />
                    Dialect: Awadhi / Hindi (Fluent)
                  </div>
                </div>

                {/* Female Candidate */}
                <div
                  style={{
                    backgroundColor: "#0d0d16",
                    border: "1px solid rgba(168,85,247,0.3)",
                    borderRadius: "16px",
                    padding: "20px",
                  }}
                >
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#a855f7", textTransform: "uppercase" }}>
                    CANDIDATE B • FEMALE LEAD
                  </span>
                  <div style={{ margin: "12px 0 16px 0" }}>
                    <select
                      value={leadFemale}
                      onChange={(e) => setLeadFemale(e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "#141422",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    >
                      <option value="Tanya Deshmukh">Tanya Deshmukh (Age 24, 5&apos;6&quot;)</option>
                      <option value="Meera Sen">Meera Sen (Age 23, 5&apos;5&quot;)</option>
                      <option value="Simran Kaur">Simran Kaur (Age 26, 5&apos;7&quot;)</option>
                    </select>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", lineHeight: 1.5 }}>
                    Role: <strong style={{ color: "#ffffff" }}>Neha Sinha / Underground Poet</strong>
                    <br />
                    Training: FTII Pune
                    <br />
                    Dialect: Hindustani / Urdu (Fluent)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PHYSICAL & VOCAL */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>HEIGHT DIFFERENTIAL</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>+ 7 Inches Delta</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "2px" }}>✓ Optimal Cinema Standard</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>VOCAL FREQUENCY</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Baritone ↔ Alto</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "2px" }}>✓ High Dynamic Range</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>AGE HARMONY</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>27 yrs ↔ 24 yrs</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "2px" }}>✓ Character Accurate</div>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  fontSize: "12px",
                  color: "#d0d0e0",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#a855f7" }}>Acoustic Synergy Assessment:</strong> Ishan&apos;s deep chest voice provides grounding resonance that offsets Tanya&apos;s crisp, melodic high-register dialogue. Neither actor overpowers the other during rapid banter dialogue tests.
              </div>
            </div>
          )}

          {/* STEP 3: AI CHEMISTRY INDEX */}
          {activeStep === 3 && (
            <div>
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 20px",
                  backgroundColor: "#0d0d16",
                  border: "1px solid rgba(168,85,247,0.35)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "44px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    color: "#a855f7",
                    letterSpacing: "-0.03em",
                  }}
                >
                  94.8%
                </div>
                <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#34d399", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  ★ HIGH CINEMATIC RESONANCE MATCH
                </div>
                <p style={{ fontSize: "12px", color: "#8a8a9a", maxWidth: "420px", margin: "10px auto 0 auto" }}>
                  Analyzed across 14,000 frames of audition self-tapes measuring eye contact synchronization, posture mirrored angles, and shared beat pauses.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: PAIRING DOSSIER */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(168,85,247,0.15)",
                  border: "1px solid rgba(168,85,247,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a855f7",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Ensemble Pairing Verified
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Pairing of <strong style={{ color: "#ffffff" }}>{leadMale}</strong> &amp; <strong style={{ color: "#ffffff" }}>{leadFemale}</strong> recorded with 94.8% chemistry rating. Ready for in-person look-test.
              </p>

              <button
                onClick={() => {
                  const content = `ENSEMBLE CHEMISTRY DOSSIER\nProject: ${defaultProject}\nLead A: ${leadMale}\nLead B: ${leadFemale}\nSynergy Index: 94.8%\nHeight Delta: +7 Inches\nAcoustic Match: Baritone / Alto Balanced`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Ensemble_Pairing_${leadMale.replace(/\s+/g, "_")}_${leadFemale.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", fontSize: "11px" }}
              >
                <Download size={14} /> EXPORT LEAD CHEMISTRY DOSSIER
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
            Step {activeStep} of 4 • AI Ensemble Matcher
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
                CONFIRM PAIRING ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
