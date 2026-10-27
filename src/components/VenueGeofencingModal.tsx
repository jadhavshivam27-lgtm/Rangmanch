"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  MapPin,
  Shield,
  ShieldAlert,
  Building,
  AlertTriangle,
  Download,
  Lock,
} from "lucide-react";

interface VenueGeofencingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function VenueGeofencingModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: VenueGeofencingModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [geofenceRadius, setGeofenceRadius] = useState(150);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(239, 68, 68, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, #ef4444 30%, #fca5a5 50%, #ef4444 70%, transparent)",
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
                background: "linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.05) 100%)",
                border: "1px solid rgba(239,68,68,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ef4444",
                boxShadow: "0 0 20px rgba(239,68,68,0.15)",
                flexShrink: 0,
              }}
            >
              <ShieldAlert size={24} />
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
                  color: "#ef4444",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M044</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>ANTI-CASTING COUCH GEOFENCE</span>
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
                Commercial Venue Geofence Shield
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Mandatory CINTAA Compliance: Auditions restricted strictly to certified commercial studios.
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
            { num: 1, label: "Commercial Verification" },
            { num: 2, label: "GPS Geofence Radius" },
            { num: 3, label: "Performer Check-In" },
            { num: 4, label: "Safety Seal" },
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
                background: activeStep === st.num ? "rgba(239,68,68,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #ef4444" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#ef4444" : "rgba(255,255,255,0.08)",
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
          {/* STEP 1: COMMERCIAL VERIFICATION */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#ef4444", fontFamily: "monospace" }}>
                  ✦ Zero-Tolerance Commercial Venue Policy
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                  Auditions in private residences, hotels, or unverified locations are prohibited and flagged immediately under CINTAA safety protocol.
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>STUDIO VENUE NAME</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Famous Studios, Mahalaxmi</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "4px" }}>✓ Certified Commercial Complex</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>BMC TRADE LICENSE</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>LIC-MH-2024-89104</div>
                  <div style={{ fontSize: "11px", color: "#34d399", marginTop: "4px" }}>✓ Verified with Municipal Records</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: GPS GEOFENCE RADIUS */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 20px",
                  backgroundColor: "#0d0d16",
                  border: "1px solid rgba(239,68,68,0.35)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#ef4444", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  GPS ACTIVE GEOFENCE BOUNDARY
                </div>
                <div style={{ fontSize: "40px", fontWeight: 800, fontFamily: "monospace", color: "#ffffff", margin: "6px 0" }}>
                  {geofenceRadius}m Perimeter
                </div>
                <div style={{ fontSize: "12px", color: "#8a8a9a" }}>
                  Lat: 18.9926° N, Long: 72.8258° E (Studio Floor 2, Famous Studios)
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="300"
                step="25"
                value={geofenceRadius}
                onChange={(e) => setGeofenceRadius(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#ef4444", cursor: "pointer" }}
              />
            </div>
          )}

          {/* STEP 3: PERFORMER CHECK-IN */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Audition safety check-in mechanism:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>1. GPS Arrive Ping</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Within Geofence (12m) ✓</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>2. Front Desk QR Scan</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Reception Verified ✓</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>3. Emergency Contact Ping</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>SMS Dispatch Active ✓</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: SAFETY SEAL */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ef4444",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Venue Certified Fair-Play &amp; Geofenced
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Production location is cryptographically bound to verified commercial studio premises with CINTAA Safety Seal #CS-8921.
              </p>

              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <CheckCircle2 size={14} /> ACTIVATE GEOFENCE PROTECTION
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
            Step {activeStep} of 4 • Safe Venue Protocol
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
                CONFIRM GEOFENCE ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
