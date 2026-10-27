"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  ChevronRight,
  Kanban,
  ArrowRight,
  Filter,
  User,
  Star,
  Download,
  Eye,
  Clock,
  Sparkles,
} from "lucide-react";

interface KanbanPipelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

interface Candidate {
  id: string;
  name: string;
  role: string;
  stage: "submitted" | "review" | "shortlisted" | "callback" | "selected";
  score: number;
  city: string;
  avatar: string;
  experience: string;
  videoDuration: string;
}

export default function KanbanPipelineModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: KanbanPipelineModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [filterRole, setFilterRole] = useState("all");
  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: "c1",
      name: "Ishan Verma",
      role: "Vikram Rao (Antagonist)",
      stage: "shortlisted",
      score: 94,
      city: "Delhi (NSD)",
      avatar: "/photos/real_06.jpg",
      experience: "8 Yrs Theatre",
      videoDuration: "02:45",
    },
    {
      id: "c2",
      name: "Tanya Deshmukh",
      role: "Neha Sinha (Female Lead)",
      stage: "callback",
      score: 97,
      city: "Mumbai",
      avatar: "/photos/real_03.jpg",
      experience: "FTII Graduate",
      videoDuration: "03:10",
    },
    {
      id: "c3",
      name: "Devendra Rathore",
      role: "Thakur Suraj Singh",
      stage: "review",
      score: 88,
      city: "Jaipur",
      avatar: "/photos/real_13.jpg",
      experience: "5 Yrs Screen",
      videoDuration: "02:15",
    },
    {
      id: "c4",
      name: "Meera Sen",
      role: "Pratibha (Supporting)",
      stage: "submitted",
      score: 82,
      city: "Kolkata",
      avatar: "/photos/real_15.jpg",
      experience: "Regional Drama",
      videoDuration: "01:50",
    },
    {
      id: "c5",
      name: "Samir Kulkarni",
      role: "Vikram Rao (Antagonist)",
      stage: "selected",
      score: 99,
      city: "Pune",
      avatar: "/photos/real_08.jpg",
      experience: "Award Winning",
      videoDuration: "04:00",
    },
  ]);

  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  if (!isOpen) return null;

  const stages = [
    { id: "submitted", label: "1. Submitted", color: "#60a5fa", count: candidates.filter((c) => c.stage === "submitted").length },
    { id: "review", label: "2. Under Review", color: "#f59e0b", count: candidates.filter((c) => c.stage === "review").length },
    { id: "shortlisted", label: "3. Shortlisted", color: "#a855f7", count: candidates.filter((c) => c.stage === "shortlisted").length },
    { id: "callback", label: "4. Director Callback", color: "#06b6d4", count: candidates.filter((c) => c.stage === "callback").length },
    { id: "selected", label: "5. Final Cast", color: "#10b981", count: candidates.filter((c) => c.stage === "selected").length },
  ];

  const handleAdvance = (candId: string) => {
    const stageOrder: Candidate["stage"][] = ["submitted", "review", "shortlisted", "callback", "selected"];
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === candId) {
          const currIdx = stageOrder.indexOf(c.stage);
          const nextIdx = Math.min(currIdx + 1, stageOrder.length - 1);
          return { ...c, stage: stageOrder[nextIdx] };
        }
        return c;
      })
    );
  };

  const handleRegress = (candId: string) => {
    const stageOrder: Candidate["stage"][] = ["submitted", "review", "shortlisted", "callback", "selected"];
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === candId) {
          const currIdx = stageOrder.indexOf(c.stage);
          const prevIdx = Math.max(currIdx - 1, 0);
          return { ...c, stage: stageOrder[prevIdx] };
        }
        return c;
      })
    );
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "840px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(56,189,248,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #38bdf8 30%, #93c5fd 50%, #38bdf8 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0.05) 100%)",
                border: "1px solid rgba(56,189,248,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
                boxShadow: "0 0 20px rgba(56,189,248,0.15)",
                flexShrink: 0,
              }}
            >
              <Kanban size={24} />
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
                  color: "#38bdf8",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M036</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>APPLICANT KANBAN</span>
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
                5-Stage Casting Pipeline
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Production: <span style={{ color: "#d4af61", fontWeight: 600 }}>{defaultProject}</span> • Live Audition Board
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
            { num: 1, label: "Live Kanban Board" },
            { num: 2, label: "Stage Progression" },
            { num: 3, label: "Applicant Dossier" },
            { num: 4, label: "Pipeline Export" },
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
                background: activeStep === st.num ? "rgba(56,189,248,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #38bdf8" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#38bdf8" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: LIVE KANBAN BOARD */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Filter size={14} color="#8a8a9a" />
                  <span style={{ fontSize: "12px", color: "#8a8a9a", fontFamily: "monospace" }}>Filter Role:</span>
                  {["all", "Lead", "Antagonist", "Supporting"].map((r) => (
                    <button
                      key={r}
                      onClick={() => setFilterRole(r)}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        border: filterRole === r ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.1)",
                        backgroundColor: filterRole === r ? "rgba(56,189,248,0.15)" : "transparent",
                        color: filterRole === r ? "#38bdf8" : "#8a8a9a",
                        cursor: "pointer",
                      }}
                    >
                      {r.toUpperCase()}
                    </button>
                  ))}
                </div>
                <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>
                  ● 5 Active Audition Stages
                </span>
              </div>

              {/* 5 Kanban Columns */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "12px",
                  overflowX: "auto",
                }}
              >
                {stages.map((stage) => {
                  const stageCandidates = candidates.filter((c) => c.stage === stage.id);
                  return (
                    <div
                      key={stage.id}
                      style={{
                        backgroundColor: "#0d0d16",
                        border: `1px solid ${stage.color}25`,
                        borderRadius: "14px",
                        padding: "12px",
                        minHeight: "280px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingBottom: "8px",
                          borderBottom: `1px solid ${stage.color}20`,
                          marginBottom: "10px",
                        }}
                      >
                        <span style={{ fontSize: "10px", fontFamily: "monospace", fontWeight: 700, color: stage.color }}>
                          {stage.label}
                        </span>
                        <span
                          style={{
                            fontSize: "9px",
                            fontFamily: "monospace",
                            padding: "2px 6px",
                            borderRadius: "10px",
                            backgroundColor: `${stage.color}20`,
                            color: stage.color,
                          }}
                        >
                          {stageCandidates.length}
                        </span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                        {stageCandidates.length === 0 ? (
                          <div
                            style={{
                              fontSize: "11px",
                              color: "#404050",
                              textAlign: "center",
                              marginTop: "40px",
                              fontFamily: "monospace",
                            }}
                          >
                            No candidates
                          </div>
                        ) : (
                          stageCandidates.map((cand) => (
                            <div
                              key={cand.id}
                              onClick={() => setSelectedCandidate(cand)}
                              style={{
                                backgroundColor: "#12121e",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "10px",
                                padding: "10px",
                                cursor: "pointer",
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = stage.color;
                                e.currentTarget.style.transform = "translateY(-1px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                e.currentTarget.style.transform = "translateY(0)";
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff" }}>
                                  {cand.name}
                                </span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "monospace",
                                    color: "#d4af61",
                                    fontWeight: 700,
                                  }}
                                >
                                  ★ {cand.score}
                                </span>
                              </div>
                              <div style={{ fontSize: "10px", color: "#8a8a9a", margin: "3px 0 6px 0" }}>
                                {cand.role}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  fontSize: "9px",
                                  fontFamily: "monospace",
                                  color: "#606070",
                                }}
                              >
                                <span>{cand.city}</span>
                                <span style={{ color: stage.color }}>Tape: {cand.videoDuration}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: STAGE PROGRESSION */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.25)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#38bdf8", fontFamily: "monospace" }}>
                    Casting Director Stage Controls
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                    Advance or regress performers through the 5 standard guild stages with automated audit history.
                  </div>
                </div>
                <Sparkles size={20} color="#38bdf8" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {candidates.map((cand) => (
                  <div
                    key={cand.id}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "12px",
                      backgroundColor: "#0d0d16",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{cand.name}</span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            padding: "2px 8px",
                            borderRadius: "999px",
                            backgroundColor: "rgba(56,189,248,0.12)",
                            color: "#38bdf8",
                            border: "1px solid rgba(56,189,248,0.3)",
                          }}
                        >
                          {cand.stage.toUpperCase()}
                        </span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "4px" }}>
                        {cand.role} • {cand.experience} • AI Score: <strong style={{ color: "#d4af61" }}>{cand.score}%</strong>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => handleRegress(cand.id)}
                        disabled={cand.stage === "submitted"}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "8px",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          border: "1px solid rgba(255,255,255,0.1)",
                          backgroundColor: "#14141e",
                          color: cand.stage === "submitted" ? "#404050" : "#c0c0d0",
                          cursor: cand.stage === "submitted" ? "not-allowed" : "pointer",
                        }}
                      >
                        ← REGRESS
                      </button>
                      <button
                        onClick={() => handleAdvance(cand.id)}
                        disabled={cand.stage === "selected"}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "8px",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          border: "1px solid rgba(56,189,248,0.4)",
                          backgroundColor: cand.stage === "selected" ? "#14141e" : "rgba(56,189,248,0.2)",
                          color: cand.stage === "selected" ? "#404050" : "#38bdf8",
                          cursor: cand.stage === "selected" ? "not-allowed" : "pointer",
                        }}
                      >
                        ADVANCE STAGE →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: APPLICANT DOSSIER */}
          {activeStep === 3 && (
            <div>
              <div
                style={{
                  backgroundColor: "#0d0d16",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "16px",
                      backgroundColor: "rgba(56,189,248,0.15)",
                      border: "1px solid rgba(56,189,248,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    IV
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                      Ishan Verma — Audition Dossier
                    </h3>
                    <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "4px" }}>
                      Auditioning for: <span style={{ color: "#d4af61" }}>Vikram Rao (Antagonist)</span> • Pipeline: Shortlisted
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ backgroundColor: "#12121e", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>VERIFIED TRAINING</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>National School of Drama (NSD)</div>
                  </div>
                  <div style={{ backgroundColor: "#12121e", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>AUDIO ACCENT MATCH</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#34d399", marginTop: "2px" }}>98.4% (Awadhi / Hindi)</div>
                  </div>
                  <div style={{ backgroundColor: "#12121e", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>PHYSICAL STATS</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>6&apos;1&quot; • Lean Athletic</div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#07070b",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(56,189,248,0.2)",
                    fontSize: "12px",
                    color: "#a0a0b0",
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "#ffffff" }}>Director Screening Notes:</strong> &ldquo;Superb emotional restraint in Scene 4 confrontation monologue. Voice modulation is commanding without slipping into melodrama. Recommended for direct live callback with Lead Actress.&rdquo;
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PIPELINE EXPORT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(56,189,248,0.15)",
                  border: "1px solid rgba(56,189,248,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Kanban Pipeline Ready for Production Export
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "480px", margin: "8px auto 24px auto" }}>
                Generate a timestamped Producer Status Report detailing current applicant progression across all 5 stages.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
                <button
                  onClick={() => {
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(candidates, null, 2));
                    const dl = document.createElement("a");
                    dl.setAttribute("href", dataStr);
                    dl.setAttribute("download", `Casting_Pipeline_${defaultProject.replace(/\s+/g, "_")}.json`);
                    dl.click();
                  }}
                  className="btn-cinema-gold"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
                >
                  <Download size={14} /> EXPORT KANBAN STATUS REPORT
                </button>
              </div>
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
            Step {activeStep} of 4 • Production Audition Pipeline
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
                CLOSE BOARD ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
