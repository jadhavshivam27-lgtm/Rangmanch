"use client";

import { useState } from "react";
import {
  X,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  FileText,
  Star,
  Download,
  Send,
  Building2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export interface FeedbackNotice {
  id: string;
  projectTitle: string;
  roleName: string;
  productionHouse: string;
  directorName: string;
  date: string;
  decisionStatus: "shortlisted" | "callback" | "archived_with_honor" | "under_review";
  decisionTitle: string;
  directorFeedback: string;
  talentPoolStatus: string;
  scorecard: {
    screenPresence: number;
    dialogueDelivery: number;
    characterInterpretation: number;
    cameraEyeline: number;
  };
  keyStrengths: string[];
  recommendationNote: string;
}

interface FeedbackNoticeModalProps {
  notice: FeedbackNotice | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackNoticeModal({
  notice,
  isOpen,
  onClose,
}: FeedbackNoticeModalProps) {
  const [acknowledged, setAcknowledged] = useState(false);
  const [customReply, setCustomReply] = useState("");
  const [replySent, setReplySent] = useState(false);

  if (!isOpen || !notice) return null;

  const handleSendAcknowledgement = () => {
    setReplySent(true);
    setTimeout(() => {
      setReplySent(false);
      setAcknowledged(true);
    }, 800);
  };

  const getStatusBadge = () => {
    switch (notice.decisionStatus) {
      case "shortlisted":
        return {
          bg: "rgba(212, 175, 97, 0.15)",
          border: "rgba(212, 175, 97, 0.4)",
          text: "#d4af61",
          label: "SHORTLISTED FOR NEXT ROUND",
        };
      case "callback":
        return {
          bg: "rgba(52, 211, 153, 0.15)",
          border: "rgba(52, 211, 153, 0.4)",
          text: "#34d399",
          label: "OFFICIAL CALLBACK CONFIRMED",
        };
      case "archived_with_honor":
        return {
          bg: "rgba(129, 140, 248, 0.15)",
          border: "rgba(129, 140, 248, 0.4)",
          text: "#818cf8",
          label: "HONORABLY RETAINED IN STUDIO TALENT POOL",
        };
      default:
        return {
          bg: "rgba(251, 191, 36, 0.15)",
          border: "rgba(251, 191, 36, 0.4)",
          text: "#fbbf24",
          label: "AUDITION UNDER ACTIVE REVIEW",
        };
    }
  };

  const badge = getStatusBadge();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "#09090f",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "20px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(212, 175, 97, 0.12)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "fadeIn 0.25s ease-out",
        }}
      >
        {/* Header Ribbon */}
        <div
          style={{
            padding: "20px 28px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "#0d0d16",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "rgba(212, 175, 97, 0.12)",
                border: "1px solid rgba(212, 175, 97, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
              }}
            >
              <FileText size={18} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#d4af61",
                  fontWeight: 700,
                }}
              >
                FEATURE #27 • OFFICIAL CASTING NOTICE
              </div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                  fontFamily: "Playfair Display, Georgia, serif",
                }}
              >
                Audition Status &amp; Director Feedback
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#8a8a9a",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8a9a")}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div
          style={{
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxHeight: "75vh",
            overflowY: "auto",
          }}
        >
          {/* Project & Decision Banner */}
          <div
            style={{
              padding: "20px 24px",
              borderRadius: "14px",
              backgroundColor: badge.bg,
              border: `1px solid ${badge.border}`,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 800,
                  color: badge.text,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                ✦ {badge.label}
              </span>
              <span style={{ fontSize: "11px", color: "#8a8a9a", fontFamily: "monospace" }}>
                DISPATCHED: {notice.date}
              </span>
            </div>

            <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", fontFamily: "Playfair Display, serif" }}>
              {notice.projectTitle}
            </div>
            <div style={{ fontSize: "13px", color: "#d0d0e0" }}>
              Role: <strong style={{ color: "#ffffff" }}>{notice.roleName}</strong> • Studio: <span style={{ color: "#d4af61" }}>{notice.productionHouse}</span>
            </div>
          </div>

          {/* Director's Written Assessment */}
          <div
            style={{
              padding: "20px",
              borderRadius: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d4af61" }}>
              <Sparkles size={16} />
              <span style={{ fontSize: "11px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Director's Constructive Review ({notice.directorName})
              </span>
            </div>
            <p style={{ fontSize: "13.5px", color: "#f0f0f5", lineHeight: "1.65", margin: 0, fontStyle: "italic" }}>
              "{notice.directorFeedback}"
            </p>
          </div>

          {/* Quantitative Director Scorecard */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#8a8a9a",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Award size={14} color="#d4af61" />
              <span>Casting Evaluation Metrics (Audition Scorecard)</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <MetricItem label="Screen Presence & Aura" score={notice.scorecard.screenPresence} />
              <MetricItem label="Diction & Dialect Delivery" score={notice.scorecard.dialogueDelivery} />
              <MetricItem label="Emotional Interpretation" score={notice.scorecard.characterInterpretation} />
              <MetricItem label="Camera Discipline & Marks" score={notice.scorecard.cameraEyeline} />
            </div>
          </div>

          {/* Retained Talent Pool Guarantee */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              backgroundColor: "rgba(52, 211, 153, 0.06)",
              border: "1px solid rgba(52, 211, 153, 0.2)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <ShieldCheck size={26} color="#34d399" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#34d399", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {notice.talentPoolStatus}
              </div>
              <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                {notice.recommendationNote}
              </div>
            </div>
          </div>

          {/* Key Actor Strengths Identified */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#8a8a9a",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "8px",
              }}
            >
              Noted Performer Strengths
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {notice.keyStrengths.map((str, i) => (
                <span
                  key={i}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "9999px",
                    fontSize: "11px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                  }}
                >
                  ✓ {str}
                </span>
              ))}
            </div>
          </div>

          {/* Direct Response Acknowledgement */}
          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ fontSize: "12px", color: "#9a9aa8" }}>
              Send an official acknowledgement or note to {notice.productionHouse}:
            </div>

            {acknowledged ? (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(52, 211, 153, 0.1)",
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                  color: "#34d399",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CheckCircle2 size={16} />
                <span>Acknowledgement note delivered to the Casting Office ledger.</span>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  placeholder="e.g. Thank you for the thoughtful feedback. Looking forward to future collaborations!"
                  value={customReply}
                  onChange={(e) => setCustomReply(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "12px",
                    color: "#ffffff",
                    outline: "none",
                  }}
                />
                <button
                  onClick={handleSendAcknowledgement}
                  style={{
                    padding: "0 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #d4af61 0%, #b89242 100%)",
                    border: "none",
                    color: "#040406",
                    fontWeight: 700,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Send size={12} />
                  <span>{replySent ? "Sending..." : "Acknowledge"}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "16px 28px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "#0d0d16",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => alert(`Notice #${notice.id} verified and exported to certified PDF format.`)}
            style={{
              background: "none",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "#d0d0e0",
              fontSize: "11px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Download size={13} />
            <span>Download Certified PDF</span>
          </button>

          <button
            onClick={onClose}
            className="btn-cinema-gold"
            style={{
              padding: "8px 24px",
              fontSize: "11px",
              letterSpacing: "0.1em",
              borderRadius: "8px",
            }}
          >
            CLOSE NOTICE
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricItem({ label, score }: { label: string; score: number }) {
  const percentage = (score / 5) * 100;
  return (
    <div
      style={{
        padding: "12px 14px",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: "#9a9aa8" }}>{label}</span>
        <span style={{ fontSize: "12px", fontWeight: 800, color: "#d4af61", fontFamily: "monospace" }}>
          {score.toFixed(1)} / 5.0
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#d4af61",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
}
