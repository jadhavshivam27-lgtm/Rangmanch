"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  Star,
  Film,
  Building,
  MapPin,
  Clock,
  Download,
} from "lucide-react";

interface RoleRecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function RoleRecommendationModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: RoleRecommendationModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("r1");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const roles = [
    {
      id: "r1",
      title: "Neha Sinha — Female Lead",
      project: "Antim Prahar",
      studio: "Starlight Casting Co.",
      matchScore: 97,
      dialect: "Awadhi / Hindustani",
      location: "Mumbai & Rajasthan",
      budget: "₹85 Lakh – ₹1.2 Cr",
      reasons: ["98% dialect phonetic match", "NSD classical training preference", "Age bracket 22-28 alignment"],
    },
    {
      id: "r2",
      title: "Razia — Underground Poet",
      project: "Dhoop Ki Deewar",
      studio: "Empress Motion Pictures",
      matchScore: 94,
      dialect: "Urdu (Poetic/Fluent)",
      location: "Lucknow & Delhi",
      budget: "₹45 – ₹60 Lakh",
      reasons: ["Vocal texture match (Alto)", "Verified period drama credits", "Availability aligns with shoot schedule"],
    },
    {
      id: "r3",
      title: "Ananya — Investigative Journalist",
      project: "Metropolis Noir",
      studio: "Apex OTT Studios",
      matchScore: 89,
      dialect: "English / Hindi",
      location: "Mumbai",
      budget: "₹35 – ₹50 Lakh",
      reasons: ["Screen presence score 4.8", "Fast dialogue pacing competence", "Look-test compatibility 91%"],
    },
  ];

  const currentRole = roles.find((r) => r.id === selectedRole) || roles[0];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "780px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(139, 92, 246, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(139,92,246,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #8b5cf6 30%, #c4b5fd 50%, #8b5cf6 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)",
                border: "1px solid rgba(139,92,246,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8b5cf6",
                boxShadow: "0 0 20px rgba(139,92,246,0.15)",
                flexShrink: 0,
              }}
            >
              <Sparkles size={24} />
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
                  color: "#8b5cf6",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M047</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>AI ROLE MATCH FEED</span>
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
                AI-Powered Role Recommendation Feed
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Algorithmic multi-vector match comparing actor phonetic voice, age, and dialect against active calls.
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
            { num: 1, label: "Top Role Matches" },
            { num: 2, label: "Vector Synergy" },
            { num: 3, label: "Fast-Track Tape" },
            { num: 4, label: "Submission Lock" },
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
                background: activeStep === st.num ? "rgba(139,92,246,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #8b5cf6" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#8b5cf6" : "rgba(255,255,255,0.08)",
                  color: activeStep === st.num ? "#ffffff" : "#8a8a9a",
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
          {/* STEP 1: TOP ROLE MATCHES */}
          {activeStep === 1 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                AI recommendation algorithm identified 3 high-affinity casting matches for your profile:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {roles.map((r) => {
                  const isSelected = selectedRole === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRole(r.id)}
                      style={{
                        padding: "18px 20px",
                        borderRadius: "14px",
                        backgroundColor: isSelected ? "rgba(139,92,246,0.12)" : "#0d0d16",
                        border: isSelected ? "1px solid rgba(139,92,246,0.45)" : "1px solid rgba(255,255,255,0.06)",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                        <div>
                          <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>{r.title}</span>
                          <div style={{ fontSize: "11px", color: "#8a8a9a" }}>{r.project} • {r.studio}</div>
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontFamily: "monospace",
                            fontWeight: 800,
                            color: r.matchScore >= 95 ? "#34d399" : "#8b5cf6",
                            padding: "4px 10px",
                            borderRadius: "999px",
                            backgroundColor: r.matchScore >= 95 ? "rgba(52,211,153,0.12)" : "rgba(139,92,246,0.15)",
                            border: `1px solid ${r.matchScore >= 95 ? "rgba(52,211,153,0.3)" : "rgba(139,92,246,0.3)"}`,
                          }}
                        >
                          {r.matchScore}% MATCH
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "16px", fontSize: "11px", fontFamily: "monospace", color: "#606070" }}>
                        <span>Dialect: {r.dialect}</span>
                        <span>Location: {r.location}</span>
                        <span style={{ color: "#d4af61" }}>Fee: {r.budget}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: VECTOR SYNERGY */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  padding: "18px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#8b5cf6", fontFamily: "monospace" }}>
                  Selected: {currentRole.title} ({currentRole.project})
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "4px" }}>
                  Composite Compatibility Index: <strong style={{ color: "#34d399" }}>{currentRole.matchScore}%</strong>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {currentRole.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <CheckCircle2 size={16} color="#34d399" />
                    <span style={{ fontSize: "13px", color: "#ffffff" }}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: FAST-TRACK TAPE */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Fast-track 1-tap submission dossier package:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Digital Comp Card (4-Angles)</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Attached ✓</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Verified Monologue Self-Tape (02:45)</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Attached ✓</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>CINTAA Guild Membership Card</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Verified ✓</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: SUBMISSION LOCK */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(139,92,246,0.15)",
                  border: "1px solid rgba(139,92,246,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8b5cf6",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {isSubmitted ? "Fast-Track Application Dispatched!" : "Ready to Dispatch to Casting Director"}
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                {isSubmitted
                  ? `Your application for ${currentRole.title} was submitted with 97% compatibility priority tag directly to Director Imtiaz Ali's review desk.`
                  : `Submit your verified audition tape for ${currentRole.title} with priority review status.`}
              </p>

              {!isSubmitted ? (
                <button
                  onClick={() => setIsSubmitted(true)}
                  className="btn-cinema-gold"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
                >
                  <Send size={14} /> DISPATCH AUDITION DOSSIER
                </button>
              ) : (
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(52, 211, 153, 0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    fontFamily: "monospace",
                    fontSize: "11px",
                  }}
                >
                  APPLICATION DOCKET #MATCH-9921 CONFIRMED
                </span>
              )}
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
            Step {activeStep} of 4 • AI Casting Recommendation
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
                CLOSE FEED ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

