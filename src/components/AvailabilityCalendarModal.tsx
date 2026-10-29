"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  AlertTriangle,
  Lock,
  Download,
  Shield,
} from "lucide-react";

interface AvailabilityCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function AvailabilityCalendarModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: AvailabilityCalendarModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedHold, setSelectedHold] = useState("hold-1");

  if (!isOpen) return null;

  const holds = [
    {
      id: "hold-1",
      project: "Antim Prahar",
      studio: "Starlight Casting Co.",
      dates: "Nov 14 – Nov 28, 2024",
      status: "1st Option Confirmed",
      type: "Shoot Days (Rajasthan Leg)",
      color: "#10b981",
    },
    {
      id: "hold-2",
      project: "Dhoop Ki Deewar",
      studio: "Empress Motion Pictures",
      dates: "Dec 05 – Dec 12, 2024",
      status: "Pending Performer Approval",
      type: "Dubbing & Promo Hold",
      color: "#f59e0b",
    },
    {
      id: "hold-3",
      project: "Personal Blackout",
      studio: "National Theatre Festival",
      dates: "Dec 18 – Dec 22, 2024",
      status: "Blackout Locked",
      type: "Stage Play (Delhi NSD)",
      color: "#60a5fa",
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
            background:
              "linear-gradient(90deg, transparent, #10b981 30%, #a7f3d0 50%, #10b981 70%, transparent)",
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
              <Calendar size={24} />
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
                <span>✦ MODULE M048</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>AVAILABILITY &amp; 1ST OPTION HOLDS</span>
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
                Actor Live Availability Calendar
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Production shoot schedules, 1st option studio holds, and conflict prevention.
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
            { num: 1, label: "Live Shoot Grid" },
            { num: 2, label: "1st Option Holds" },
            { num: 3, label: "Conflict Guard" },
            { num: 4, label: "Export Holds" },
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
          {/* STEP 1: LIVE SHOOT GRID */}
          {activeStep === 1 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>CONFIRMED SHOOT DAYS</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#10b981", marginTop: "4px" }}>14 Days</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>1ST OPTION PENDING</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#f59e0b", marginTop: "4px" }}>7 Days</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>OPEN DATES AVAILABLE</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>19 Days</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {holds.map((h) => (
                  <div
                    key={h.id}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: "#0d0d16",
                      border: `1px solid ${h.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{h.project}</span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            padding: "2px 8px",
                            borderRadius: "999px",
                            backgroundColor: `${h.color}20`,
                            color: h.color,
                          }}
                        >
                          {h.status}
                        </span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "4px" }}>
                        {h.studio} • {h.type}
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", fontFamily: "monospace", color: "#d4af61", fontWeight: 700 }}>
                      {h.dates}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: 1ST OPTION HOLDS */}
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
                  ✦ CINTAA 1st Option Hold Protocol
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                  Producers holding 1st option have a mandatory 48-hour challenge window if a 2nd production house requests the same dates.
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>1st Option Right Holder</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Starlight Casting Co. (Antim Prahar)</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Hold Expiration Window</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#f59e0b" }}>48h Challenge Notice</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Overlapping Shoot Penalty Guard</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Active under Section 9 CINTAA</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CONFLICT GUARD */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                Automated calendar conflict detection telemetry:
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(52,211,153,0.08)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <CheckCircle2 size={24} color="#34d399" />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#34d399" }}>
                    Zero Schedule Conflicts Detected
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                    Antim Prahar shoot schedule (Nov 14–28) does not clash with your December National Theatre festival appearances.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: EXPORT HOLDS */}
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
                Availability Schedule Synced
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Export your verified production schedule as a digital calendar hold feed for your agent, manager, and casting directors.
              </p>

              <button
                onClick={() => {
                  const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Rangmanch//Availability Calendar//EN\nBEGIN:VEVENT\nSUMMARY:Antim Prahar Shoot Leg (1st Option)\nDTSTART:20241114T090000Z\nDTEND:20241128T180000Z\nLOCATION:Rajasthan Heritage Forts\nEND:VEVENT\nEND:VCALENDAR`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/calendar;charset=utf-8," + encodeURIComponent(icsContent));
                  dl.setAttribute("download", `Actor_Availability_${defaultProject.replace(/\s+/g, "_")}.ics`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD .ICS CALENDAR HOLDS
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
            Step {activeStep} of 4 • Performer Availability Suite
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
                CLOSE CALENDAR ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
