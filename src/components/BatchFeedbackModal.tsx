"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Send,
  MessageSquare,
  Users,
  Smartphone,
  Mail,
  ShieldCheck,
  Download,
  Sparkles,
} from "lucide-react";

interface BatchFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function BatchFeedbackModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: BatchFeedbackModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>(["c1", "c2", "c3"]);
  const [channels, setChannels] = useState({ whatsapp: true, email: true, sms: false });
  const [feedbackTone, setFeedbackTone] = useState("constructive");
  const [isDispatched, setIsDispatched] = useState(false);

  const candidates = [
    { id: "c1", name: "Aarav Sharma", role: "Day Player", status: "Pass with Feedback", strengths: "Strong eye contact, confident voice" },
    { id: "c2", name: "Pooja Hegde (Regional)", role: "Supporting", status: "Hold for Round 2", strengths: "Authentic Awadhi accent, good pacing" },
    { id: "c3", name: "Rohan Mukherjee", role: "Rebel Soldier", status: "Pass with Feedback", strengths: "High physical agility, emotional grit" },
    { id: "c4", name: "Simran Kaur", role: "Courtesan Lead", status: "Pass with Feedback", strengths: "Classical posture, poetic Urdu diction" },
  ];

  if (!isOpen) return null;

  const toggleSelect = (id: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
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
          border: "1px solid rgba(16, 185, 129, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(16,185,129,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #10b981 30%, #a7f3d0 50%, #10b981 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)",
                border: "1px solid rgba(16,185,129,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                boxShadow: "0 0 20px rgba(16,185,129,0.15)",
                flexShrink: 0,
              }}
            >
              <Send size={24} />
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
                  color: "#10b981",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M038</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>NO-GHOSTING FEEDBACK DISPATCHER</span>
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
                Batch Shortlist &amp; Constructive Feedback
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Fair-Play Industry Charter: Automated constructive evaluation for all non-selected talent.
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
            { num: 1, label: "Batch Selection" },
            { num: 2, label: "Constructive Template" },
            { num: 3, label: "Dispatch Routing" },
            { num: 4, label: "Broadcast Audit" },
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
                background: activeStep === st.num ? "rgba(16,185,129,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #10b981" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#10b981" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: BATCH SELECTION */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#8a8a9a", fontFamily: "monospace" }}>
                  Selected {selectedCandidates.length} of {candidates.length} Applicants
                </span>
                <button
                  onClick={() =>
                    setSelectedCandidates(
                      selectedCandidates.length === candidates.length ? [] : candidates.map((c) => c.id)
                    )
                  }
                  style={{
                    fontSize: "11px",
                    fontFamily: "monospace",
                    color: "#10b981",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {selectedCandidates.length === candidates.length ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {candidates.map((c) => {
                  const isChecked = selectedCandidates.includes(c.id);
                  return (
                    <div
                      key={c.id}
                      onClick={() => toggleSelect(c.id)}
                      style={{
                        padding: "14px 18px",
                        borderRadius: "12px",
                        backgroundColor: isChecked ? "rgba(16,185,129,0.08)" : "#0d0d16",
                        border: isChecked ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          style={{ accentColor: "#10b981", cursor: "pointer" }}
                        />
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{c.name}</div>
                          <div style={{ fontSize: "11px", color: "#8a8a9a" }}>{c.role} • Strength: {c.strengths}</div>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          padding: "3px 8px",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255,255,255,0.05)",
                          color: "#c0c0d0",
                        }}
                      >
                        {c.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: CONSTRUCTIVE TEMPLATE */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#10b981", fontFamily: "monospace" }}>
                  ✦ AI-Enhanced Constructive Feedback Engine
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                  Instead of generic rejections, performers receive encouraging, professional feedback highlighting specific strengths and future casting suitability.
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "11px", color: "#8a8a9a", fontFamily: "monospace", display: "block", marginBottom: "8px" }}>
                  FEEDBACK TONE &amp; STYLE
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                  {[
                    { id: "constructive", label: "Constructive & Warm", desc: "Praises vocal clarity + encourages next audition" },
                    { id: "technical", label: "Technical Precision", desc: "Notes lighting, eye-line framing, and pacing" },
                    { id: "archive", label: "Archived for Upcoming Leads", desc: "Retains profile for direct future callback" },
                  ].map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setFeedbackTone(t.id)}
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        backgroundColor: feedbackTone === t.id ? "rgba(16,185,129,0.15)" : "#0d0d16",
                        border: feedbackTone === t.id ? "1px solid #10b981" : "1px solid rgba(255,255,255,0.08)",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontSize: "12px", fontWeight: 700, color: feedbackTone === t.id ? "#10b981" : "#ffffff" }}>
                        {t.label}
                      </div>
                      <div style={{ fontSize: "10px", color: "#8a8a9a", marginTop: "3px" }}>{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#07070b",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "16px",
                  fontSize: "12px",
                  color: "#c0c0d0",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#10b981" }}>Preview Notice Sent to Performer:</strong>
                <p style={{ margin: "8px 0 0 0", color: "#9a9aa8" }}>
                  &ldquo;Dear [Performer Name], thank you for self-taping for {defaultProject}. The Director noted your exceptional eye-contact and natural dialogue delivery. While this specific character required a slightly different regional dialect age-bracket, your tape is shortlisted in our studio archival roster for upcoming feature productions.&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: DISPATCH ROUTING */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Select verified channels to broadcast notification to the {selectedCandidates.length} performers:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { key: "whatsapp", label: "WhatsApp Official Casting Bot", icon: Smartphone, desc: "Instant high-open rate with embedded comp-card link" },
                  { key: "email", label: "Registered Email Dossier", icon: Mail, desc: "Detailed formal production letter with studio letterhead" },
                  { key: "sms", label: "Direct SMS Alert", icon: MessageSquare, desc: "Fast text ping with personalized portal sign-in link" },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() =>
                      setChannels({
                        ...channels,
                        [item.key]: !(channels as any)[item.key],
                      })
                    }
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      backgroundColor: (channels as any)[item.key] ? "rgba(16,185,129,0.1)" : "#0d0d16",
                      border: (channels as any)[item.key] ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <item.icon size={20} color={(channels as any)[item.key] ? "#10b981" : "#8a8a9a"} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>{item.label}</div>
                        <div style={{ fontSize: "11px", color: "#7a7a8a" }}>{item.desc}</div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "monospace",
                        color: (channels as any)[item.key] ? "#10b981" : "#606070",
                      }}
                    >
                      {(channels as any)[item.key] ? "ENABLED ✓" : "DISABLED"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: BROADCAST AUDIT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {isDispatched ? "Broadcast Successfully Dispatched" : "Ready to Dispatch Feedback"}
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                {isDispatched
                  ? `Notifications sent to ${selectedCandidates.length} performers across WhatsApp & Email with zero ghosting.`
                  : `You are about to notify ${selectedCandidates.length} candidates with positive constructive feedback.`}
              </p>

              {!isDispatched ? (
                <button
                  onClick={() => setIsDispatched(true)}
                  className="btn-cinema-gold"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
                >
                  <Send size={14} /> TRIGGER LIVE BATCH DISPATCH
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
                  AUDIT LOG #DISPATCH-7821 CONFIRMED
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
            Step {activeStep} of 4 • Fair-Play Feedback Suite
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
                CLOSE DISPATCHER ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
