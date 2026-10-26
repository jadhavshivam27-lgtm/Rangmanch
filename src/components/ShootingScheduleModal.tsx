"use client";

import React, { useState } from "react";
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Plane,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Download,
  Car,
  Hotel,
} from "lucide-react";

interface ShootingScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ShootingScheduleModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ShootingScheduleModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Shoot Schedule Legs (Timeline, Cities & Outdoor Dates)
  // Step 2: Location Logistics (Sets, Heritage Forts & Night Shifts)
  // Step 3: Travel & Hospitality (Business Flights, 5-Star Stay & Per Diems)
  // Step 4: Export Schedule (Download Callsheet & .ICS Calendar Hold)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedProject] = useState(defaultProject);

  const [legs] = useState([
    {
      id: "leg-1",
      name: "Leg 1: Mumbai Studio Interior",
      dates: "Nov 20 – Dec 05, 2026",
      city: "Mumbai, Maharashtra",
      venue: "Famous Studios Stage 4B / Film City",
      type: "Soundstage Interiors",
      nightShifts: 4,
      stuntLevel: "Medium — Interrogation sequence",
    },
    {
      id: "leg-2",
      name: "Leg 2: Rajasthan Heritage Fort",
      dates: "Dec 10 – Dec 28, 2026",
      city: "Jodhpur & Jaisalmer, Rajasthan",
      venue: "Mehrangarh Fort & Sand Dunes",
      type: "High-Scale Outdoor Action",
      nightShifts: 7,
      stuntLevel: "High — Horse riding & sword battle",
    },
    {
      id: "leg-3",
      name: "Leg 3: London Post-Climax Schedule",
      dates: "Jan 08 – Jan 18, 2027",
      city: "London, United Kingdom",
      venue: "Westminster & Greenwich Docklands",
      type: "International Outdoor & Embassy Sets",
      nightShifts: 2,
      stuntLevel: "Low — Dramatic dialogue & chase",
    },
  ]);

  if (!isOpen) return null;

  const handleDownloadCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rangmanch Production Logistics//EN
BEGIN:VEVENT
SUMMARY:Principal Photography Leg 1: ${selectedProject}
LOCATION:Famous Studios Mumbai
DTSTART:20261120T033000Z
DTEND:20261205T153000Z
DESCRIPTION:Official shoot dates for ${selectedProject} Leg 1.
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
SUMMARY:Principal Photography Leg 2: Rajasthan Outdoor — ${selectedProject}
LOCATION:Mehrangarh Fort, Jodhpur
DTSTART:20261210T033000Z
DTEND:20261228T153000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Schedule_${selectedProject.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Gradient Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #10b981 25%, #34d399 50%, #10b981 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)",
                border: "1px solid rgba(16,185,129,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                boxShadow: "0 0 20px rgba(16,185,129,0.15)",
                flexShrink: 0,
              }}
            >
              <MapPin size={24} />
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
                <span>✦ MODULE M034</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>LOCATION &amp; SCHEDULE</span>
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Location &amp; Shooting Schedule Logistics Suite
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#9a9aa8",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "#9a9aa8";
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Interactive Visual Stepper */}
        <div
          style={{
            padding: "16px 32px",
            backgroundColor: "#07070c",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
            {[
              { n: 1, label: "Shoot Cities", sub: "3-Leg Timeline" },
              { n: 2, label: "Location Logistics", sub: "Sets & Outdoors" },
              { n: 3, label: "Travel & Hospitality", sub: "Flights & 5-Star Stay" },
              { n: 4, label: "Export Schedule", sub: "Callsheet & .ICS" },
            ].map((s, idx, arr) => {
              const isCurrent = step === s.n;
              const isDone = step > s.n;
              return (
                <div
                  key={s.n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flex: idx === arr.length - 1 ? "0 0 auto" : 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        backgroundColor: isDone
                          ? "#059669"
                          : isCurrent
                          ? "rgba(16,185,129,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #10b981"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#a7f3d0" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(16,185,129,0.4)" : "none",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      {isDone ? <Check size={14} /> : s.n}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: isCurrent ? 700 : 500,
                          color: isDone ? "#34d399" : isCurrent ? "#ffffff" : "#606070",
                          lineHeight: 1.2,
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: isCurrent ? "#10b981" : "#4a4a58",
                          fontFamily: "monospace",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {idx < arr.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: "2px",
                        margin: "0 14px",
                        backgroundColor: isDone ? "#10b981" : "rgba(255,255,255,0.08)",
                        transition: "background-color 0.3s ease",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div
          className="modal-body"
          style={{
            padding: "28px 32px",
            maxHeight: "58vh",
            overflowY: "auto",
            backgroundColor: "#0d0d14",
          }}
        >
          {/* STEP 1: Shoot Schedule Legs */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      letterSpacing: "0.15em",
                      color: "#10b981",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    42-DAY PRINCIPAL PHOTOGRAPHY
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — 3 Production Schedule Legs
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(16,185,129,0.15)",
                    color: "#a7f3d0",
                    border: "1px solid rgba(16,185,129,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  FEATURE #34
                </span>
              </div>

              {/* Legs Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {legs.map((leg) => (
                  <div
                    key={leg.id}
                    style={{
                      padding: "16px 18px",
                      borderRadius: "14px",
                      backgroundColor: "#141422",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                        {leg.name}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "monospace",
                          color: "#10b981",
                          fontWeight: 700,
                        }}
                      >
                        {leg.dates}
                      </span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#d4af61", display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={13} /> {leg.venue} ({leg.city})
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Type: {leg.type} • Night Shifts: {leg.nightShifts} Days • Stunts: {leg.stuntLevel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Location Logistics */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Sets, Heritage Locations &amp; Night Shift Safety
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Detailed stipulations for outdoor weather, night shifts, and terrain safety.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(16,185,129,0.15)",
                    color: "#a7f3d0",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  SAFETY PROTOCOLS
                </span>
              </div>

              {/* Logistics Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { title: "Night Shift Allowance", desc: "1.5x hourly overtime scale for shifts extending past 10:00 PM as per CINTAA Clause 8." },
                  { title: "Desert Terrain Gear", desc: "Thermal heat protection, certified eye goggles, and hydration stations provided on set." },
                  { title: "Medical On-Standby", desc: "Dedicated ICU ambulance, certified doctor, and trauma paramedic stationed at Mehrangarh Fort." },
                  { title: "Insurance Cover", desc: "₹2.5 Cr Group Production Accidental Cover policy underwritten by New India Assurance." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      backgroundColor: "#12121c",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Travel & Hospitality */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Travel, 5-Star Stay &amp; Per Diem Allowances
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Guaranteed production hospitality package for cast members.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#f4e2b8",
                    border: "1px solid rgba(212,175,97,0.3)",
                  }}
                >
                  HOSPITALITY RIDER
                </span>
              </div>

              {/* Hospitality Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { icon: Plane, title: "Air Travel Class", desc: "Business Class Flights for Mumbai ⇄ Jaipur ⇄ London legs on Air India / British Airways." },
                  { icon: Hotel, title: "5-Star Accommodation", desc: "Private Deluxe Suite at Umaid Bhawan / Taj Lake Palace (Rajasthan) & The Landmark Hotel (London)." },
                  { icon: Car, title: "Dedicated Set Chauffeur", desc: "Personal AC SUV transport from hotel suite directly to base camp / vanity line." },
                  { icon: Clock, title: "Daily Per Diem", desc: "₹4,500 / day in India and £85 / day in the UK, disbursed weekly via escrow advance." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        padding: "14px 18px",
                        borderRadius: "12px",
                        backgroundColor: "#12121c",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(16,185,129,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#10b981",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: "11px", color: "#8e8e98" }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Export Schedule */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      letterSpacing: "0.15em",
                      color: "#34d399",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <CheckCircle2 size={12} color="#34d399" />
                    SHOOTING SCHEDULE VERIFIED
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Official Master Schedule
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    3 Schedule Legs • 42 Shooting Days • Nov 20, 2026 – Jan 18, 2027.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={handleDownloadCalendar}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: "#141422",
                    border: "1px solid rgba(16,185,129,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(16,185,129,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10b981",
                    }}
                  >
                    <Download size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      Save Schedule to Calendar (.ICS)
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Syncs shoot dates to Apple, Google &amp; Outlook
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => window.print()}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: "#141422",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a0a0b2",
                    }}
                  >
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      Print Master Callsheet
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Formatted high-res PDF for production binders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "20px 32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#8e8e98",
            }}
          >
            <Shield size={14} color="#10b981" />
            <span>CINTAA LOCATION &amp; TRAVEL RIDER 2024 COMPLIANT</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                style={{
                  height: "44px",
                  padding: "0 20px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#d0d0dc",
                  borderRadius: "999px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s",
                }}
              >
                <ArrowLeft size={14} /> BACK
              </button>
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev + 1) as any)}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                {step === 1 && "PROCEED TO LOCATION LOGISTICS"}
                {step === 2 && "PROCEED TO TRAVEL & STAY"}
                {step === 3 && "REVIEW & EXPORT SCHEDULE"}
                <ArrowRight size={14} />
              </button>
            )}

            {step === 4 && (
              <button
                type="button"
                onClick={onClose}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                CLOSE SCHEDULE SUITE
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
