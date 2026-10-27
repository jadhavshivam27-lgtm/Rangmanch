"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  PieChart,
  BarChart3,
  Globe,
  Download,
  Users,
  Award,
} from "lucide-react";

interface DiversityAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function DiversityAnalyticsModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: DiversityAnalyticsModalProps) {
  const [activeStep, setActiveStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(236, 72, 153, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(236,72,153,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #ec4899 30%, #fbcfe8 50%, #ec4899 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0.05) 100%)",
                border: "1px solid rgba(236,72,153,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ec4899",
                boxShadow: "0 0 20px rgba(236,72,153,0.15)",
                flexShrink: 0,
              }}
            >
              <PieChart size={24} />
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
                  color: "#ec4899",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M040</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>EQUITY &amp; DEMOGRAPHICS</span>
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
                Casting Diversity &amp; Regional Analytics
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Project: {defaultProject} • Pan-India talent representation metrics.
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
            { num: 1, label: "Regional Origin" },
            { num: 2, label: "Training Credentials" },
            { num: 3, label: "Gender & Demographics" },
            { num: 4, label: "Inclusion Audit" },
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
                background: activeStep === st.num ? "rgba(236,72,153,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #ec4899" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#ec4899" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: REGIONAL ORIGIN */}
          {activeStep === 1 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Talent origin geographic split across verified self-tape submissions (N = 642 Applicants):
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { region: "North India (Delhi, UP, Punjab, Haryana)", percent: 34, color: "#60a5fa" },
                  { region: "West India (Mumbai, Pune, Gujarat)", percent: 28, color: "#f59e0b" },
                  { region: "South India (Bengaluru, Hyderabad, Chennai)", percent: 22, color: "#10b981" },
                  { region: "East & North-East (Kolkata, Assam, Bihar)", percent: 16, color: "#ec4899" },
                ].map((item) => (
                  <div
                    key={item.region}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{item.region}</span>
                      <span style={{ fontSize: "13px", fontWeight: 700, fontFamily: "monospace", color: item.color }}>
                        {item.percent}%
                      </span>
                    </div>
                    <div style={{ height: "6px", width: "100%", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
                      <div style={{ width: `${item.percent}%`, height: "100%", backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: TRAINING CREDENTIALS */}
          {activeStep === 2 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>ACADEMIC THEATRE</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#ec4899", marginTop: "4px" }}>38%</div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>NSD, FTII, BNA Alumni</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>STREET &amp; INDEPENDENT</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#38bdf8", marginTop: "4px" }}>44%</div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Regional Theatre Troupes</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>SCREEN VETERANS</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#10b981", marginTop: "4px" }}>18%</div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Past OTT / Film Credits</div>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(236,72,153,0.08)",
                  border: "1px solid rgba(236,72,153,0.25)",
                  fontSize: "12px",
                  color: "#d0d0e0",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#ec4899" }}>Guild Standard Compliance:</strong> The applicant pool demonstrates a healthy 82% grassroots theatre ratio, ensuring high discipline and vocal stamina required for period drama outdoor schedules.
              </div>
            </div>
          )}

          {/* STEP 3: GENDER & DEMOGRAPHICS */}
          {activeStep === 3 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", marginBottom: "8px" }}>
                    GENDER RATIO BALANCE
                  </div>
                  <div style={{ fontSize: "13px", color: "#ffffff", marginBottom: "6px" }}>Female Leads: <strong>48%</strong></div>
                  <div style={{ fontSize: "13px", color: "#ffffff", marginBottom: "6px" }}>Male Leads: <strong>50%</strong></div>
                  <div style={{ fontSize: "13px", color: "#ffffff" }}>Non-Binary / Day Players: <strong>2%</strong></div>
                </div>

                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", marginBottom: "8px" }}>
                    AGE BRACKET DISTRIBUTION
                  </div>
                  <div style={{ fontSize: "13px", color: "#ffffff", marginBottom: "6px" }}>18–25 yrs (Youth Leads): <strong>42%</strong></div>
                  <div style={{ fontSize: "13px", color: "#ffffff", marginBottom: "6px" }}>26–40 yrs (Prime Antagonists): <strong>36%</strong></div>
                  <div style={{ fontSize: "13px", color: "#ffffff" }}>40+ yrs (Patriarchs / Mentors): <strong>22%</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: INCLUSION AUDIT */}
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
                Diversity &amp; Equity Audit Certified
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Production passes Ministry of Information &amp; Broadcasting and Guild Pan-India casting equity guidelines.
              </p>

              <button
                onClick={() => {
                  const content = `CASTING DIVERSITY & REGIONAL RATIO REPORT\nProject: ${defaultProject}\nTotal Sample: 642 Applicants\nNorth: 34% | West: 28% | South: 22% | East: 16%\nTheatre Alumni: 82%\nGender Balance: 48% F / 50% M / 2% NB\nStatus: Guild Certified Inclusive`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Diversity_Audit_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", fontSize: "11px" }}
              >
                <Download size={14} /> EXPORT INCLUSION CERTIFICATE
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
            Step {activeStep} of 4 • Inclusion &amp; Diversity Telemetry
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
                CLOSE AUDIT ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
