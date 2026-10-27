"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Star,
  MessageSquare,
  Lock,
  Download,
  Sliders,
  Sparkles,
  Clock,
  FileText,
  User,
} from "lucide-react";

interface DirectorRatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function DirectorRatingModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: DirectorRatingModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [ratings, setRatings] = useState({
    presence: 5,
    diction: 4,
    emotionalRange: 5,
    scriptAdherence: 4,
    chemistryAlignment: 5,
  });

  const [notes, setNotes] = useState([
    { timestamp: "00:45", text: "Exceptional eye contact during opening beat", type: "positive" },
    { timestamp: "01:30", text: "Awadhi dialect cadence very natural; no forced inflection", type: "positive" },
    { timestamp: "02:15", text: "Slight drop in volume on climax whisper — easily mic-compensated", type: "note" },
  ]);

  const [newNote, setNewNote] = useState("");
  const [verdict, setVerdict] = useState<"callback" | "shortlist" | "hold" | "pass">("callback");
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const averageRating = (
    (ratings.presence +
      ratings.diction +
      ratings.emotionalRange +
      ratings.scriptAdherence +
      ratings.chemistryAlignment) /
    5
  ).toFixed(1);

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    setNotes([...notes, { timestamp: "02:45", text: newNote, type: "note" }]);
    setNewNote("");
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(245, 158, 11, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(245,158,11,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Amber Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #f59e0b 30%, #fde68a 50%, #f59e0b 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)",
                border: "1px solid rgba(245,158,11,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f59e0b",
                boxShadow: "0 0 20px rgba(245,158,11,0.15)",
                flexShrink: 0,
              }}
            >
              <Star size={24} />
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
                  color: "#f59e0b",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M037</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>DIRECTOR RATING STUDIO</span>
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
                Casting Director Rating & Notes
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Candidate: <span style={{ color: "#ffffff", fontWeight: 600 }}>Tanya Deshmukh</span> • Project: {defaultProject}
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
            { num: 1, label: "Performance Vectors" },
            { num: 2, label: "Timestamped Notes" },
            { num: 3, label: "Confidential Verdict" },
            { num: 4, label: "Scorecard Vault" },
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
                background: activeStep === st.num ? "rgba(245,158,11,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #f59e0b" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#f59e0b" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: PERFORMANCE VECTORS */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  backgroundColor: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  borderRadius: "14px",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#f59e0b", fontFamily: "monospace" }}>
                    Composite Score: ★ {averageRating} / 5.0
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                    Multi-criteria rating benchmarks required by guild casting agreements.
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(52, 211, 153, 0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                  }}
                >
                  HIGH CALL-BACK VALUE
                </div>
              </div>

              {/* Sliders */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { key: "presence", label: "Screen Presence & Charisma", desc: "Command of frame and lens engagement" },
                  { key: "diction", label: "Dialogue Delivery & Diction", desc: "Clarity, pacing, and regional dialect accuracy" },
                  { key: "emotionalRange", label: "Emotional Vulnerability", desc: "Subtlety in transition from calm to rage" },
                  { key: "scriptAdherence", label: "Script Adherence", desc: "Memory retention and punctuation rhythm" },
                  { key: "chemistryAlignment", label: "Lead Chemistry Potential", desc: "Energy compatibility with co-stars" },
                ].map((item) => (
                  <div
                    key={item.key}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                      <div>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{item.label}</span>
                        <div style={{ fontSize: "11px", color: "#606070" }}>{item.desc}</div>
                      </div>
                      <div style={{ display: "flex", gap: "4px" }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() =>
                              setRatings({
                                ...ratings,
                                [item.key]: star,
                              })
                            }
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "2px",
                              color: star <= (ratings as any)[item.key] ? "#f59e0b" : "#303040",
                              fontSize: "16px",
                            }}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: TIMESTAMPED NOTES */}
          {activeStep === 2 && (
            <div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "12px", color: "#c0c0d0", fontFamily: "monospace", display: "block", marginBottom: "8px" }}>
                  ADD TIMESTAMPED PLAYBACK NOTE
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="e.g. 01:45 Incredible subtlety in the pause before delivering line 14..."
                    style={{
                      flex: 1,
                      backgroundColor: "#08080e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={handleAddNote}
                    style={{
                      padding: "0 18px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(245,158,11,0.2)",
                      border: "1px solid rgba(245,158,11,0.4)",
                      color: "#f59e0b",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    ADD NOTE +
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {notes.map((n, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "10px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "6px",
                        backgroundColor: "rgba(245,158,11,0.15)",
                        color: "#f59e0b",
                        fontFamily: "monospace",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {n.timestamp}
                    </span>
                    <span style={{ fontSize: "13px", color: "#d0d0dc", flex: 1 }}>{n.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: CONFIDENTIAL VERDICT */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Cast Director final ruling. Locked under AES-256 and only visible to Lead Producer &amp; Director.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "20px" }}>
                {[
                  { id: "callback", label: "Priority Callback", color: "#34d399", desc: "Advance directly to Live WebRTC callback room." },
                  { id: "shortlist", label: "Shortlisted", color: "#60a5fa", desc: "Retain on standby list for second round review." },
                  { id: "hold", label: "First Option Hold", color: "#f59e0b", desc: "Request dates availability hold from performer agency." },
                  { id: "pass", label: "Respectful Pass", color: "#ef4444", desc: "Send constructive automated feedback notice." },
                ].map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setVerdict(v.id as any)}
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      backgroundColor: verdict === v.id ? `${v.color}15` : "#0d0d16",
                      border: verdict === v.id ? `2px solid ${v.color}` : "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: v.color }}>{v.label}</span>
                      {verdict === v.id && <span style={{ color: v.color, fontSize: "12px" }}>● SELECTED</span>}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8a8a9a", lineHeight: 1.5 }}>{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: SCORECARD VAULT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f59e0b",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Scorecard Certified &amp; Locked
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Director rating of <strong style={{ color: "#f59e0b" }}>★ {averageRating}/5.0</strong> with verdict &ldquo;<span style={{ color: "#34d399", textTransform: "uppercase" }}>{verdict}</span>&rdquo; is archived to production cloud.
              </p>

              <button
                onClick={() => {
                  const content = `DIRECTOR SCORECARD\nProject: ${defaultProject}\nCandidate: Tanya Deshmukh\nComposite Rating: ${averageRating}/5.0\nVerdict: ${verdict.toUpperCase()}\nDate: ${new Date().toLocaleDateString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Scorecard_Tanya_Deshmukh_${defaultProject}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", fontSize: "11px" }}
              >
                <Download size={14} /> DOWNLOAD CERTIFIED EVALUATION SHEET
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
            Step {activeStep} of 4 • Director Evaluation Suite
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
                FINISH EVALUATION ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
