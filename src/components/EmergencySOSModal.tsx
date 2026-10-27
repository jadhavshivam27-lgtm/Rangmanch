"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  PhoneCall,
  ShieldAlert,
  Lock,
  Download,
  AlertTriangle,
  Radio,
  FileText,
} from "lucide-react";

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function EmergencySOSModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: EmergencySOSModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [sosTriggered, setSosTriggered] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #180d10 0%, #0a0a0f 100%)",
          border: "1px solid rgba(244, 63, 94, 0.45)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(244,63,94,0.18)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #f43f5e 30%, #fecdd3 50%, #f43f5e 70%, transparent)",
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
            backgroundColor: "#12080c",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(244,63,94,0.25) 0%, rgba(244,63,94,0.08) 100%)",
                border: "1px solid rgba(244,63,94,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f43f5e",
                boxShadow: "0 0 20px rgba(244,63,94,0.25)",
                flexShrink: 0,
              }}
            >
              <PhoneCall size={24} />
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
                  color: "#f43f5e",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M045</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>EMERGENCY SOS &amp; ESCROW FREEZE</span>
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
                CINTAA 24/7 SOS &amp; Escrow Shield
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Instant Legal Intervention &amp; Automatic Production Escrow Freeze.
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
            backgroundColor: "#0d0608",
          }}
        >
          {[
            { num: 1, label: "1-Tap SOS Dispatch" },
            { num: 2, label: "Encrypted Evidence" },
            { num: 3, label: "Escrow Freeze" },
            { num: 4, label: "Legal Case File" },
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
                background: activeStep === st.num ? "rgba(244,63,94,0.1)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #f43f5e" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#f43f5e" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: 1-TAP SOS DISPATCH */}
          {activeStep === 1 && (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div
                onClick={() => setSosTriggered(true)}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: sosTriggered
                    ? "radial-gradient(circle, #f43f5e 0%, #be123c 100%)"
                    : "radial-gradient(circle, #ef4444 0%, #991b1b 100%)",
                  boxShadow: "0 0 40px rgba(244,63,94,0.5), inset 0 0 20px rgba(255,255,255,0.4)",
                  border: "4px solid #ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                  margin: "0 auto 20px auto",
                  transition: "transform 0.15s ease",
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <ShieldAlert size={36} />
                <span style={{ fontSize: "12px", fontWeight: 800, fontFamily: "monospace", marginTop: "4px" }}>
                  {sosTriggered ? "ACTIVATED" : "HOLD SOS"}
                </span>
              </div>

              <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                {sosTriggered ? "🚨 EMERGENCY ALERT BROADCAST ACTIVE" : "Press & Hold for Instant Police & CINTAA Dispatch"}
              </div>
              <p style={{ fontSize: "12px", color: "#a0a0b0", maxWidth: "420px", margin: "0 auto" }}>
                Dispatches GPS coordinates, studio details, and production house identity to CINTAA Legal Counsel &amp; Mumbai Police Helpline (1090).
              </p>
            </div>
          )}

          {/* STEP 2: ENCRYPTED EVIDENCE */}
          {activeStep === 2 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Automatic forensic vault telemetry triggered upon SOS activation:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#140a0e", border: "1px solid rgba(244,63,94,0.2)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>1. High-Resolution Audio Stem</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>AES-256 Encrypted ● 60s Buffer</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#140a0e", border: "1px solid rgba(244,63,94,0.2)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>2. Geolocation Triangulation</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Locked (Famous Studios, Floor 2)</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#140a0e", border: "1px solid rgba(244,63,94,0.2)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>3. Production House MCA Identity</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>CIN U92100MH2021PTC38419 Verified</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: ESCROW FREEZE */}
          {activeStep === 3 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(244,63,94,0.15)",
                  border: "1px solid rgba(244,63,94,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f43f5e",
                  margin: "0 auto 16px auto",
                }}
              >
                <Lock size={28} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                100% Production Escrow Frozen
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                ₹1.20 Crore locked in ICICI escrow account under RBI guidelines. Funds cannot be withdrawn until CINTAA dispute mediation clearance.
              </p>
            </div>
          )}

          {/* STEP 4: LEGAL CASE FILE */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(244,63,94,0.15)",
                  border: "1px solid rgba(244,63,94,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f43f5e",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Emergency Docket #SOS-90142 Generated
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Full dossier delivered to CINTAA Emergency Desk, Mumbai Police Commissionerate, and your designated emergency guardian.
              </p>

              <button
                onClick={() => {
                  const content = `CINTAA EMERGENCY SOS INCIDENT DOSSIER\nDocket: #SOS-90142\nProject: ${defaultProject}\nStatus: ESCROW FROZEN (100%)\nLocation: Famous Studios, Mahalaxmi\nCINTAA Legal Hotline: 022-2637-2704\nPolice Intervention Ping: Logged at ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `CINTAA_SOS_Dossier_SOS_90142.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", fontSize: "11px" }}
              >
                <Download size={14} /> DOWNLOAD CERTIFIED INCIDENT REPORT
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
            backgroundColor: "#12080c",
          }}
        >
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#606070" }}>
            Step {activeStep} of 4 • Performer Safety Shield
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
                CLOSE SOS SHIELD ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
