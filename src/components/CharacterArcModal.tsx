"use client";

import { useState } from "react";
import {
  X,
  GitMerge,
  Network,
  Users,
  TrendingUp,
  CheckCircle2,
  Download,
  AlertCircle,
  Zap,
  Heart,
  ShieldAlert,
} from "lucide-react";

interface CharacterArcModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function CharacterArcModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: CharacterArcModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState("vikram");

  if (!isOpen) return null;

  const characters = [
    {
      id: "vikram",
      name: "ACP Vikram Rathore",
      archetype: "Disillusioned Lawman / Tragic Hero",
      arc: "Duty vs Conscience: Begins rigid, descends into moral gray, finds redemption through sacrifice.",
      conflict: "Bitter philosophical clash with corrupt political establishment.",
      screentime: "64% Screen Presence",
    },
    {
      id: "alisha",
      name: "Dr. Alisha Roy",
      archetype: "Objective Truth-Seeker / Moral Anchor",
      arc: "Cold Academic to Courageous Whistleblower: Reluctantly uncovers systemic medical conspiracy.",
      conflict: "Under surveillance; emotional romantic tension with Vikram.",
      screentime: "42% Screen Presence",
    },
    {
      id: "shinde",
      name: "Minister Rajeshwar Shinde",
      archetype: "Pragmatic Tyrant / Machiavellian Patron",
      arc: "Unshakable Power to Paranoia: Loses control as whistleblowers breach his inner sanctum.",
      conflict: "Considers Vikram an ungrateful ward whom he personally promoted.",
      screentime: "28% Screen Presence",
    },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(139, 92, 246, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(139, 92, 246, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Purple Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #8b5cf6 25%, #c4b5fd 50%, #8b5cf6 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)",
                border: "1px solid rgba(139,92,246,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8b5cf6",
              }}
            >
              <GitMerge size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#8b5cf6",
                  textTransform: "uppercase",
                }}
              >
                MODULE M064 • FEATURE 64
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
                Character Relationship Web &amp; Arc Visualizer
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#8b5cf6", fontWeight: 600 }}>{defaultProject}</span> • Narrative Tension &amp; Loyalty Matrix
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
            { step: 1, label: "Character Archetypes" },
            { step: 2, label: "Tension Matrix" },
            { step: 3, label: "Act-by-Act Intensity" },
            { step: 4, label: "Bible Export" },
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
                    ? "rgba(139,92,246,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(139,92,246,0.3)"
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
                    activeStep === item.step ? "#8b5cf6" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: CHARACTER ARCHETYPES */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Ensemble character psychological profiles, internal conflicts, and screen presence distribution.
              </div>

              {characters.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCharacter(c.id)}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: selectedCharacter === c.id ? "rgba(139,92,246,0.08)" : "rgba(255,255,255,0.02)",
                    border: selectedCharacter === c.id ? "1px solid rgba(139,92,246,0.4)" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                        {c.name}
                      </span>
                      <span style={{ fontSize: "11px", color: "#8b5cf6", marginLeft: "10px", padding: "2px 8px", borderRadius: "4px", background: "rgba(139,92,246,0.1)" }}>
                        {c.archetype}
                      </span>
                    </div>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#d4af61" }}>
                      {c.screentime}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "8px 0 4px 0", lineHeight: 1.5 }}>
                    {c.arc}
                  </p>
                  <div style={{ fontSize: "11px", color: "#ef4444" }}>
                    Primary Conflict: {c.conflict}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: TENSION MATRIX */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Inter-character dynamic loyalty vectors, hidden motives, and conflict probability index.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "14px",
                    backgroundColor: "#0d0d14",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ef4444", fontSize: "13px", fontWeight: 700 }}>
                    <ShieldAlert size={16} /> Vikram ⟷ Shinde
                  </div>
                  <div style={{ fontSize: "11px", color: "#d4af61", marginTop: "4px" }}>
                    Relationship: High Lethal Antagonism
                  </div>
                  <p style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "8px", lineHeight: 1.5 }}>
                    Tension Rating: <strong>96% (Climax confrontation inevitable)</strong>. Vikram discovered Shinde signed off on his father&apos;s wrongful suspension 18 years ago.
                  </p>
                </div>

                <div
                  style={{
                    padding: "16px",
                    borderRadius: "14px",
                    backgroundColor: "#0d0d14",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f472b6", fontSize: "13px", fontWeight: 700 }}>
                    <Heart size={16} /> Vikram ⟷ Dr. Alisha
                  </div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "4px" }}>
                    Relationship: Covert Allies with Unspoken Bond
                  </div>
                  <p style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "8px", lineHeight: 1.5 }}>
                    Tension Rating: <strong>78% (Romantic &amp; Professional risk)</strong>. Mutual respect built under fire; Alisha risks career to feed classified forensic logs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: ACT-BY-ACT INTENSITY */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Three-Act narrative curve tracing emotional stakes and dramatic beats across the 128-page screenplay.
              </div>

              {[
                { act: "Act I (Pages 1 - 32)", tension: "45% - Inciting Incident", beat: "Suspicious hospital murder; Vikram tasked to conduct clean-up inquiry under political pressure." },
                { act: "Act II Midpoint (Pages 33 - 75)", tension: "78% - Point of No Return", beat: "Alisha discovers government cyanide in victim; Vikram defies direct transfer order." },
                { act: "Act II Climax (Pages 76 - 104)", tension: "92% - The Dark Night of the Soul", beat: "Vikram framed for treason; safehouse raided; Alisha taken into custody." },
                { act: "Act III Resolution (Pages 105 - 128)", tension: "98% - Final Reckoning", beat: "Rooftop showdown at Mantralaya; live digital broadcast of evidence." },
              ].map((a, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{a.act}</div>
                    <span style={{ fontSize: "11px", color: "#8b5cf6", fontFamily: "monospace", fontWeight: 600 }}>
                      {a.tension}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "6px 0 0 0" }}>
                    {a.beat}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: BIBLE EXPORT */}
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
                Character Bible &amp; Emotional Map Ready
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Complete Narrative Character Dossier compiled for Director, Screenwriter, and Lead Cast character preparation.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH CHARACTER RELATIONSHIP BIBLE\nProject: ${defaultProject}\nLead Cast Nodes:\n${characters.map(c => `${c.name} (${c.archetype}) | ${c.screentime}\nArc: ${c.arc}\nConflict: ${c.conflict}`).join("\n\n")}\n\nKey Tension Vectors:\nVikram <-> Shinde (96% Antagonism)\nVikram <-> Dr. Alisha (78% Covert Romance / Ally)\n\nNarrative Trajectory: 3-Act Classical Tragedy / Redemption\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Character_Bible_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD CHARACTER BIBLE &amp; TENSION MAP
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
            Step {activeStep} of 4 • Character Relationship Suite
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
                CLOSE CHARACTER BIBLE ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

