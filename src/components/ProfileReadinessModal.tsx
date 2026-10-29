"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  TrendingUp,
  AlertCircle,
  FileText,
  Camera,
  Mic,
  Award,
  ArrowRight,
  Download,
} from "lucide-react";

interface ProfileReadinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ProfileReadinessModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ProfileReadinessModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedItems, setCompletedItems] = useState<string[]>([
    "headshot",
    "filmography",
    "physical_specs",
  ]);

  if (!isOpen) return null;

  const checklist = [
    { id: "headshot", label: "4-Angle High-Res Headshots (4K)", weight: 25, status: "completed", icon: Camera },
    { id: "filmography", label: "Verified Filmography & Guild ID", weight: 25, status: "completed", icon: Award },
    { id: "physical_specs", label: "Precise Physical Measurements & Eye Color", weight: 20, status: "completed", icon: FileText },
    { id: "voice_reel", label: "48kHz Voice Monologue (Regional Dialect)", weight: 15, status: "pending", icon: Mic },
    { id: "turnaround", label: "360° Video Profile Turnaround", weight: 15, status: "pending", icon: Sparkles },
  ];

  const currentScore = checklist
    .filter((c) => completedItems.includes(c.id))
    .reduce((acc, c) => acc + c.weight, 0);

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
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
                background: "linear-gradient(135deg, rgba(212,175,97,0.2) 0%, rgba(212,175,97,0.05) 100%)",
                border: "1px solid rgba(212,175,97,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
                boxShadow: "0 0 20px rgba(212,175,97,0.15)",
                flexShrink: 0,
              }}
            >
              <TrendingUp size={24} />
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
                  color: "#d4af61",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M046</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>PROFILE READINESS GAUGE</span>
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
                Talent Profile Readiness Gauge
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Algorithmic audition discoverability index &amp; verification health.
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
            { num: 1, label: "Readiness Index" },
            { num: 2, label: "Asset Checklist" },
            { num: 3, label: "Search Boost" },
            { num: 4, label: "Certify Profile" },
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
                background: activeStep === st.num ? "rgba(212,175,97,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #d4af61" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#d4af61" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: READINESS INDEX */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 20px",
                  backgroundColor: "#0d0d16",
                  border: "1px solid rgba(212,175,97,0.35)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#d4af61", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  CURRENT PROFILE SCORE
                </div>
                <div
                  style={{
                    fontSize: "52px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    color: currentScore >= 90 ? "#34d399" : currentScore >= 70 ? "#d4af61" : "#f59e0b",
                    margin: "4px 0",
                  }}
                >
                  {currentScore}%
                </div>
                <div style={{ fontSize: "12px", color: "#8a8a9a" }}>
                  {currentScore >= 90
                    ? "★ Certified Production Ready • Top 5% in Director Searches"
                    : "Good baseline, but missing voice samples and 360 turnaround."}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>SEARCH VISIBILITY</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                    {currentScore >= 90 ? "4.2x Boost" : "2.1x Normal"}
                  </div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>DIRECTOR SHORTLISTS</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#34d399", marginTop: "4px" }}>
                    +38% Priority
                  </div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>CINTAA BADGE</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    Verified Tier
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ASSET CHECKLIST */}
          {activeStep === 2 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Complete all 5 core portfolio components to achieve 100% casting readiness:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {checklist.map((item) => {
                  const isChecked = completedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      style={{
                        padding: "14px 18px",
                        borderRadius: "12px",
                        backgroundColor: isChecked ? "rgba(212,175,97,0.08)" : "#0d0d16",
                        border: isChecked ? "1px solid rgba(212,175,97,0.35)" : "1px solid rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          style={{ accentColor: "#d4af61", cursor: "pointer" }}
                        />
                        <item.icon size={18} color={isChecked ? "#d4af61" : "#8a8a9a"} />
                        <span style={{ fontSize: "13px", fontWeight: 600, color: isChecked ? "#ffffff" : "#a0a0b0" }}>
                          {item.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "monospace",
                          color: isChecked ? "#34d399" : "#606070",
                        }}
                      >
                        +{item.weight}% {isChecked ? "✓" : "MISSING"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: SEARCH BOOST */}
          {activeStep === 3 && (
            <div>
              <div
                style={{
                  padding: "18px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(212,175,97,0.08)",
                  border: "1px solid rgba(212,175,97,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#d4af61", fontFamily: "monospace" }}>
                  ✦ Algorithmic Casting Search Multiplier
                </div>
                <div style={{ fontSize: "12px", color: "#c0c0d0", marginTop: "4px", lineHeight: 1.6 }}>
                  Casting Directors filtering by verified talent see profiles with 100% readiness badges highlighted at the top of their discovery feed, yielding an average of 4.2x more self-tape audition requests.
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Director Search Priority Placement</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Top 3 Grid Results</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Automated Look-Test Eligibility</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Unlocked</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Fast-Track Callback Invitations</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Enabled</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CERTIFY PROFILE */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(212,175,97,0.15)",
                  border: "1px solid rgba(212,175,97,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af61",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Profile Readiness Certified: {currentScore}%
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Your verified talent dossier is optimized for casting director discovery across feature films, OTT series, and commercial calls.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH TALENT READINESS CERTIFICATE\nPerformer Score: ${currentScore}%\nVerification Status: CINTAA Industry Standard\nAsset Breakdown: ${completedItems.join(", ")}\nCertified on: ${new Date().toLocaleDateString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Talent_Readiness_Certificate_${currentScore}pct.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD READINESS CERTIFICATE
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
            Step {activeStep} of 4 • Profile Readiness Suite
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
                COMPLETE READINESS ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

