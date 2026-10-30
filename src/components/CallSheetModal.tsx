"use client";

import { useState } from "react";
import {
  X,
  Clock,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Download,
  Send,
  AlertCircle,
  Truck,
  Sun,
  Eye,
} from "lucide-react";

interface CallSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function CallSheetModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: CallSheetModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [shootDate, setShootDate] = useState("Saturday, 31 October 2026");
  const [dayNumber, setDayNumber] = useState("Day 14 of 42");
  const [generalCall, setGeneralCall] = useState("06:30 AM");
  const [shootingCall, setShootingCall] = useState("08:00 AM");
  const [locationStage, setLocationStage] = useState("Stage 4, Film City, Goregaon East, Mumbai");
  const [weatherCondition, setWeatherCondition] = useState("28°C • Clear Sky • Sunrise 06:14 AM");
  const [nearestHospital, setNearestHospital] = useState("Lifeline Speciality Hospital, Goregaon (8 mins)");

  const [talentSchedule, setTalentSchedule] = useState([
    {
      actor: "Shivam Jadhav",
      character: "ACP Vikram Rathore",
      pickup: "05:45 AM",
      hmup: "06:45 AM",
      onSet: "08:00 AM",
      vanity: "Van #01 (Front Lot)",
      acknowledged: true,
    },
    {
      actor: "Tanya Deshmukh",
      character: "Dr. Alisha Roy",
      pickup: "06:15 AM",
      hmup: "07:15 AM",
      onSet: "08:30 AM",
      vanity: "Van #03 (Front Lot)",
      acknowledged: true,
    },
    {
      actor: "Rajeshwar Rao",
      character: "Minister Shinde",
      pickup: "08:00 AM",
      hmup: "09:00 AM",
      onSet: "10:15 AM",
      vanity: "Van #02 (VIP Bay)",
      acknowledged: false,
    },
  ]);

  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(52, 211, 153, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(52, 211, 153, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Emerald Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #34d399 25%, #a7f3d0 50%, #34d399 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(52,211,153,0.2) 0%, rgba(52,211,153,0.05) 100%)",
                border: "1px solid rgba(52,211,153,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#34d399",
              }}
            >
              <Clock size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#34d399",
                  textTransform: "uppercase",
                }}
              >
                MODULE M053 • FEATURE 53
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
                Daily Call-Sheet &amp; Call-Time Telemetry
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#34d399", fontWeight: 600 }}>{defaultProject}</span> • Real-Time Digital Call Distribution
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
            { step: 1, label: "Set & Weather" },
            { step: 2, label: "Actor Call-Times" },
            { step: 3, label: "Scenes & Sides" },
            { step: 4, label: "Read-Receipts" },
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
                    ? "rgba(52,211,153,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(52,211,153,0.3)"
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
                    activeStep === item.step ? "#34d399" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: SET & WEATHER OVERVIEW */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Production Date
                  </label>
                  <input
                    type="text"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
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
                    Schedule Progress
                  </label>
                  <input
                    type="text"
                    value={dayNumber}
                    onChange={(e) => setDayNumber(e.target.value)}
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Crew General Call
                  </label>
                  <input
                    type="text"
                    value={generalCall}
                    onChange={(e) => setGeneralCall(e.target.value)}
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
                    First Camera Roll (Shooting Call)
                  </label>
                  <input
                    type="text"
                    value={shootingCall}
                    onChange={(e) => setShootingCall(e.target.value)}
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
                  Studio Floor / Location Stage
                </label>
                <input
                  type="text"
                  value={locationStage}
                  onChange={(e) => setLocationStage(e.target.value)}
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
                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#34d399" }}>
                    <Sun size={16} /> Weather &amp; Solar Telemetry
                  </div>
                  <div style={{ fontSize: "12px", color: "#ffffff", marginTop: "4px" }}>
                    {weatherCondition}
                  </div>
                </div>

                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#f87171" }}>
                    <AlertCircle size={16} /> Standby Emergency Hospital
                  </div>
                  <div style={{ fontSize: "12px", color: "#ffffff", marginTop: "4px" }}>
                    {nearestHospital}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ACTOR CALL-TIMES & VANITY VANS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Actor individual pickup timings, vanity van slots, and hair/makeup readiness markers.
              </div>

              {talentSchedule.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                        {t.actor}
                      </span>
                      <span style={{ fontSize: "11px", color: "#34d399", padding: "2px 8px", borderRadius: "4px", background: "rgba(52,211,153,0.1)" }}>
                        as {t.character}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "16px", marginTop: "8px", fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a" }}>
                      <span>PICKUP: <strong style={{ color: "#ffffff" }}>{t.pickup}</strong></span>
                      <span>H/MUP: <strong style={{ color: "#ffffff" }}>{t.hmup}</strong></span>
                      <span>ON-SET: <strong style={{ color: "#ffffff" }}>{t.onSet}</strong></span>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "11px", color: "#d4af61", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Truck size={14} /> {t.vanity}
                    </div>
                    <div style={{ fontSize: "10px", marginTop: "6px", color: t.acknowledged ? "#34d399" : "#f59e0b" }}>
                      {t.acknowledged ? "✓ READ RECEIPT CONFIRMED" : "⌛ PENDING WHATSAPP READ"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: SCENES & SIDES BREAKDOWN */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Shooting sequence order, scene descriptions, and dialogue sides scheduled for today.
              </div>

              {[
                {
                  scene: "Scene 42A",
                  intExt: "INT. POLICE INTERROGATION ROOM - DAY",
                  pages: "2 4/8 Pages",
                  cast: "ACP Vikram, Dr. Alisha",
                  desc: "Vikram questions Alisha regarding the encrypted ledger found in the hospital server room.",
                },
                {
                  scene: "Scene 43",
                  intExt: "INT. CORRIDOR - DAY",
                  pages: "1 2/8 Pages",
                  cast: "ACP Vikram, Minister Shinde",
                  desc: "Confrontation outside the commissioner office before media briefing.",
                },
                {
                  scene: "Scene 47B",
                  intExt: "EXT. FILM CITY ROAD - NIGHT",
                  pages: "3 1/8 Pages",
                  cast: "ACP Vikram, Stunt Squad",
                  desc: "Car chase sequence near gate 2. Precision stunt driving and tactical weapon draw.",
                },
              ].map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "#34d399", fontFamily: "monospace" }}>
                        {s.scene}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        {s.intExt}
                      </span>
                    </div>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a" }}>
                      {s.pages}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "8px 0 6px 0" }}>
                    {s.desc}
                  </p>
                  <div style={{ fontSize: "11px", color: "#d4af61", fontFamily: "monospace" }}>
                    Cast Required: {s.cast}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: READ-RECEIPTS & DISPATCH */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(52,211,153,0.15)",
                  border: "1px solid rgba(52,211,153,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#34d399",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Digital Call-Sheet Dispatched to Cast &amp; Crew
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Sent via WhatsApp Business API &amp; Rangmanch Actor Mobile App. Real-time delivery and read-receipt telemetry active.
              </p>

              <div
                style={{
                  maxWidth: "500px",
                  margin: "0 auto 20px auto",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "left",
                  fontSize: "12px",
                  color: "#a0a0b0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div><strong>Production:</strong> {defaultProject} ({dayNumber})</div>
                <div><strong>Date &amp; General Call:</strong> {shootDate} • {generalCall}</div>
                <div><strong>Shooting Location:</strong> {locationStage}</div>
                <div><strong>Delivery Status:</strong> 24/24 Cast &amp; Crew Delivered (92% Acknowledged)</div>
              </div>

              <button
                onClick={() => {
                  const content = `RANGMANCH DAILY PRODUCTION CALL SHEET\nProject: ${defaultProject}\nDate: ${shootDate}\nProgress: ${dayNumber}\nGeneral Call: ${generalCall}\nShooting Call: ${shootingCall}\nLocation: ${locationStage}\nWeather: ${weatherCondition}\nEmergency Hospital: ${nearestHospital}\n\nACTOR CALL SCHEDULE:\n${talentSchedule.map(t => `${t.actor} (${t.character}) | Pickup: ${t.pickup} | HMUP: ${t.hmup} | OnSet: ${t.onSet} | ${t.vanity}`).join("\n")}\n\nDispatched: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `CallSheet_${defaultProject.replace(/\s+/g, "_")}_Day14.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD CALL-SHEET PDF / TEXT
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
            Step {activeStep} of 4 • Production Logistics Suite
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
                DISMISS CALL-SHEET ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

