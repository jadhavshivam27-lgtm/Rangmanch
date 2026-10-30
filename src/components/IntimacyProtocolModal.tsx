"use client";

import { useState } from "react";
import {
  X,
  Lock,
  Shield,
  HeartHandshake,
  CheckCircle2,
  Download,
  AlertCircle,
  Users,
  EyeOff,
  FileCheck,
} from "lucide-react";

interface IntimacyProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function IntimacyProtocolModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: IntimacyProtocolModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [sceneNumber, setSceneNumber] = useState("Scene 28 - Bedroom Revelation Sequence");
  const [coordinatorName, setCoordinatorName] = useState("Aashita Mehra (Certified Intimacy Professionals Association)");
  const [performerA, setPerformerA] = useState("Shivam Jadhav (Actor 1)");
  const [performerB, setPerformerB] = useState("Tanya Deshmukh (Actor 2)");
  const [touchAgreed, setTouchAgreed] = useState<string[]>([
    "upper_back",
    "shoulders",
    "hands_forearms",
  ]);
  const [modestyGarments, setModestyGarments] = useState("Seamless barrier pads, silicone barriers, flesh-tone tape");
  const [whitelistedCrew, setWhitelistedCrew] = useState([
    { role: "Director", name: "Vikramaditya Motwane" },
    { role: "Director of Photography", name: "Swapnil Sonawane" },
    { role: "Sound Mixer / Boom Operator", name: "Amrit Pritam" },
    { role: "Certified Intimacy Coordinator", name: "Aashita Mehra" },
  ]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(251, 113, 133, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(251, 113, 133, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Coral Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #fb7185 25%, #fecdd3 50%, #fb7185 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(251,113,133,0.2) 0%, rgba(251,113,133,0.05) 100%)",
                border: "1px solid rgba(251,113,133,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fb7185",
              }}
            >
              <Lock size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#fb7185",
                  textTransform: "uppercase",
                }}
              >
                MODULE M058 • FEATURE 58
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
                Intimacy Coordinator &amp; Sensitive Scene Protocols
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#fb7185", fontWeight: 600 }}>{defaultProject}</span> • Closed-Set Governance &amp; Performer Safe-Space Charter
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
            { step: 1, label: "Touch-Point Mapping" },
            { step: 2, label: "Consent & Modesty" },
            { step: 3, label: "Closed-Set Whitelist" },
            { step: 4, label: "Safety Certification" },
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
                    ? "rgba(251,113,133,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(251,113,133,0.3)"
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
                    activeStep === item.step ? "#fb7185" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: TOUCH-POINT MAPPING */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(251,113,133,0.05)",
                  border: "1px solid rgba(251,113,133,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <HeartHandshake size={24} color="#fb7185" />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    Choreographed Physical Contact Agreement
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Supervised by: {coordinatorName}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Scheduled Scene Identifier
                </label>
                <input
                  type="text"
                  value={sceneNumber}
                  onChange={(e) => setSceneNumber(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "13px",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Lead Actor 1
                  </label>
                  <input
                    type="text"
                    value={performerA}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Lead Actor 2
                  </label>
                  <input
                    type="text"
                    value={performerB}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Permitted Physical Touch Zones (Mutual Agreement)
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "8px" }}>
                  {[
                    { id: "upper_back", label: "Upper Back & Shoulder Blades" },
                    { id: "hands_forearms", label: "Hands, Wrists & Forearms" },
                    { id: "shoulders", label: "Shoulders & Neckline (Collarbone)" },
                    { id: "waist_sides", label: "Outer Waistline (Over Wardrobe Only)" },
                  ].map((z) => (
                    <div
                      key={z.id}
                      style={{
                        padding: "10px 14px",
                        borderRadius: "8px",
                        backgroundColor: touchAgreed.includes(z.id) ? "rgba(251,113,133,0.1)" : "rgba(255,255,255,0.02)",
                        border: touchAgreed.includes(z.id) ? "1px solid rgba(251,113,133,0.3)" : "1px solid rgba(255,255,255,0.06)",
                        fontSize: "12px",
                        color: touchAgreed.includes(z.id) ? "#ffffff" : "#606070",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <CheckCircle2 size={16} color={touchAgreed.includes(z.id) ? "#fb7185" : "#606070"} />
                      {z.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CONSENT & MODESTY */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Pre-filming modesty riders, physical barrier garments, and explicit emergency safe-word protocols.
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Mandatory Modesty Barrier Garments
                </label>
                <input
                  type="text"
                  value={modestyGarments}
                  onChange={(e) => setModestyGarments(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "13px",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                  Tap-Out Safe-Word &amp; Pause Protocol
                </div>
                <div style={{ fontSize: "12px", color: "#8a8a9a", lineHeight: 1.6 }}>
                  Either performer or the Intimacy Coordinator may say <strong style={{ color: "#fb7185" }}>&ldquo;HOLD&rdquo;</strong> or tap twice physically at any moment. Cameras and monitors immediately cut with zero penalty or retaliation.
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CLOSED-SET WHITELIST */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Strict closed-set policy: all extraneous crew members are evacuated. All cellular devices, personal monitors, and video transmitters must be surrendered.
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  color: "#fca5a5",
                }}
              >
                <EyeOff size={18} color="#ef4444" />
                <span>NO CELL PHONES / RECORDING DEVICES • MONITORS BLACKED OUT OUTSIDE STAGE</span>
              </div>

              {whitelistedCrew.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{c.name}</div>
                    <div style={{ fontSize: "11px", color: "#8a8a9a" }}>{c.role}</div>
                  </div>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "3px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "4px" }}>
                    PASSPORT WHITELISTED
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: SAFETY CERTIFICATION */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(251,113,133,0.15)",
                  border: "1px solid rgba(251,113,133,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fb7185",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Intimacy Protocol Executed &amp; Locked
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Protocol Docket #INT-2026-9412. Signed by both performers, director, and certified intimacy coordinator under CINTAA safe-space standards.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH INTIMACY PROTOCOL & SAFE-SET CERTIFICATE\nDocket ID: #INT-2026-9412\nProject: ${defaultProject}\nScene: ${sceneNumber}\nIntimacy Coordinator: ${coordinatorName}\nActor 1: ${performerA}\nActor 2: ${performerB}\nPermitted Touch Zones: ${touchAgreed.join(", ")}\nModesty Barriers: ${modestyGarments}\nClosed-Set Crew Whitelist: ${whitelistedCrew.map(c => `${c.name} (${c.role})`).join("; ")}\nSafe-Word: HOLD (Immediate Cut)\nTimestamp: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Intimacy_Protocol_${defaultProject.replace(/\s+/g, "_")}_Scene28.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD SAFE-SET PROTOCOL CERTIFICATE
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
            Step {activeStep} of 4 • Safe-Set Intimacy Suite
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
                SEAL PROTOCOL ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
