"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Trophy,
  Star,
  Users,
  Award,
  Download,
  Sparkles,
  Flame,
} from "lucide-react";

interface SpotlightArenaModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function SpotlightArenaModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: SpotlightArenaModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [votedId, setVotedId] = useState<string | null>("c1");

  if (!isOpen) return null;

  const contestants = [
    {
      id: "c1",
      name: "Tanya Deshmukh",
      city: "Mumbai (FTII)",
      votes: 14280,
      rank: 1,
      theme: "The Queen's Defiance (Scene 4)",
      badge: "Director's Pick ★",
    },
    {
      id: "c2",
      name: "Ishan Verma",
      city: "Delhi (NSD)",
      votes: 12940,
      rank: 2,
      theme: "Rebel Leader Confrontation",
      badge: "Audience Choice 🔥",
    },
    {
      id: "c3",
      name: "Devendra Rathore",
      city: "Jaipur",
      votes: 9810,
      rank: 3,
      theme: "Desert Fort Monologue",
      badge: "Regional Master",
    },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "780px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(234, 179, 8, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(234,179,8,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #eab308 30%, #fef08a 50%, #eab308 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(234,179,8,0.2) 0%, rgba(234,179,8,0.05) 100%)",
                border: "1px solid rgba(234,179,8,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#eab308",
                boxShadow: "0 0 20px rgba(234,179,8,0.15)",
                flexShrink: 0,
              }}
            >
              <Trophy size={24} />
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
                  color: "#eab308",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M050</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>PUBLIC CHOICE ARENA</span>
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
                Rangmanch Spotlight Arena
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                National talent hunt arena with verified casting director critiques and public audience applause.
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
            { num: 1, label: "Weekly Showdown" },
            { num: 2, label: "Industry Jury" },
            { num: 3, label: "Leaderboard" },
            { num: 4, label: "Spotlight Pass" },
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
                background: activeStep === st.num ? "rgba(234,179,8,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #eab308" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#eab308" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: WEEKLY SHOWDOWN */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(234,179,8,0.08)",
                  border: "1px solid rgba(234,179,8,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#eab308", fontFamily: "monospace" }}>
                  ✦ Week 42 Theme: 1857 Historical Dramatic Soliloquy
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                  Performers submit 90-second unedited dramatic monologues. Verified casting directors score technical delivery while viewers vote for emotional resonance.
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {contestants.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setVotedId(c.id)}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "14px",
                      backgroundColor: votedId === c.id ? "rgba(234,179,8,0.1)" : "#0d0d16",
                      border: votedId === c.id ? "1px solid rgba(234,179,8,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>{c.name}</span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            padding: "2px 8px",
                            borderRadius: "999px",
                            backgroundColor: "rgba(234,179,8,0.15)",
                            color: "#fef08a",
                          }}
                        >
                          {c.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "4px" }}>
                        {c.city} • Monologue: &ldquo;{c.theme}&rdquo;
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "16px", fontWeight: 800, fontFamily: "monospace", color: "#eab308" }}>
                        {c.votes.toLocaleString()}
                      </div>
                      <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#606070" }}>
                        {votedId === c.id ? "YOUR VOTE CAST ✓" : "TAP TO VOTE"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: INDUSTRY JURY */}
          {activeStep === 2 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Verified industry jury critiques from top casting directors:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>Imtiaz Ali (Director Panel)</span>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#eab308" }}>★ 9.8 / 10</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", lineHeight: 1.5 }}>
                    &ldquo;Tanya brings startling vulnerability to Scene 4. Her cadence avoids the artificial theatricality common in period pieces.&rdquo;
                  </div>
                </div>

                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>Mukesh Chhabra Casting (Jury Member)</span>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#eab308" }}>★ 9.6 / 10</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", lineHeight: 1.5 }}>
                    &ldquo;Ishan Verma has undeniable physical gravitas. Perfect vocal projection and eye-line discipline.&rdquo;
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: LEADERBOARD */}
          {activeStep === 3 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(234,179,8,0.3)" }}>
                  <div style={{ fontSize: "10px", color: "#eab308", fontFamily: "monospace" }}>#1 NATIONAL RANK</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Tanya Deshmukh</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "2px" }}>14,280 Verified Votes</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#8a8a9a", fontFamily: "monospace" }}>#2 NATIONAL RANK</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Ishan Verma</div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>12,940 Verified Votes</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#8a8a9a", fontFamily: "monospace" }}>#3 NATIONAL RANK</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Devendra Rathore</div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>9,810 Verified Votes</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: SPOTLIGHT PASS */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(234,179,8,0.15)",
                  border: "1px solid rgba(234,179,8,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#eab308",
                  margin: "0 auto 16px auto",
                }}
              >
                <Award size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Spotlight Arena Winner Pass
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Top 3 performers earn guaranteed feature film look-tests with Starlight Casting Co. and a direct mentorship session.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH SPOTLIGHT ARENA CERTIFICATE\nShowdown Theme: 1857 Historical Dramatic Soliloquy\nWinner: Tanya Deshmukh (#1 Rank - 14,280 Votes)\nJury Citation: Certified by Director Imtiaz Ali & Mukesh Chhabra Panel\nSpotlight Pass ID: #SPOTLIGHT-42-WINNER`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Spotlight_Arena_Certificate_Week42.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD SPOTLIGHT CERTIFICATE
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
            Step {activeStep} of 4 • Talent Hunt Arena
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
                CLOSE ARENA ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
