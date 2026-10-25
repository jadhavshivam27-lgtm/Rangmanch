"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Video,
  Send,
  FileText,
  CheckCircle2,
  Users,
  Download,
  AlertCircle,
  Sparkles,
  Building,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Lock,
} from "lucide-react";
import Image from "next/image";

interface CallbackDispatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function CallbackDispatcherModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: CallbackDispatcherModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Format & Venue (In-Person Studio vs Virtual HD)
  // Step 2: Slot Scheduling (Date, Start Time & Duration)
  // Step 3: Sides & Prep Notes (Encrypted Script Directives)
  // Step 4: Dispatch Invites (Batch Confirmation & .ICS Calendar)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [callbackMode, setCallbackMode] = useState<"in_person" | "virtual">("in_person");
  const [callbackDate, setCallbackDate] = useState("2026-11-04");
  const [startTime, setStartTime] = useState("11:00");
  const [slotDuration, setSlotDuration] = useState(20);
  const [venue, setVenue] = useState(
    "Famous Studios, Studio 4B, Dr. E Moses Rd, Mahalakshmi, Mumbai"
  );
  const [scriptSides, setScriptSides] = useState(
    "Antim_Prahar_Scene_44_Interrogation_Sides.pdf"
  );
  const [directorInstructions, setDirectorInstructions] = useState(
    "Please prepare the interrogation scene sides attached. Arrive 15 minutes before your slot. Dress in clean neutral attire with minimal makeup for live screen lighting test."
  );

  const [candidates, setCandidates] = useState([
    {
      id: "c1",
      name: "Ananya Sharma",
      role: "Neha Sinha — Female Lead",
      photo: "/photos/real_01.png",
      selected: true,
      timeSlot: "11:00 AM – 11:20 AM",
      status: "pending",
    },
    {
      id: "c2",
      name: "Shivam Jadhav",
      role: "Dev — Protagonist / Inspector",
      photo: "/photos/real_03.jpg",
      selected: true,
      timeSlot: "11:20 AM – 11:40 AM",
      status: "pending",
    },
    {
      id: "c3",
      name: "Meera Nair",
      role: "Razia — Supporting Lead",
      photo: "/photos/real_02.png",
      selected: true,
      timeSlot: "11:40 AM – 12:00 PM",
      status: "pending",
    },
    {
      id: "c4",
      name: "Rohan Kapoor",
      role: "Vikram Rao — Antagonist",
      photo: "/photos/real_07.jpg",
      selected: true,
      timeSlot: "12:00 PM – 12:20 PM",
      status: "pending",
    },
  ]);

  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  const toggleCandidate = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
    );
  };

  const handleDispatch = () => {
    setDispatched(true);
    setCandidates((prev) =>
      prev.map((c) => (c.selected ? { ...c, status: "dispatched" } : c))
    );
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rangmanch Audition System//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:callback-${Date.now()}@rangmanch.in
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:20261104T053000Z
DTEND:20261104T070000Z
SUMMARY:Audition Callback: ${selectedProject}
LOCATION:${callbackMode === "in_person" ? venue : "Rangmanch Virtual HD Studio Room #941"}
DESCRIPTION:Round-2 Audition Callback for ${selectedProject}. Sides attached: ${scriptSides}. Instructions: ${directorInstructions}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Callback_${selectedProject.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedCount = candidates.filter((c) => c.selected).length;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "740px",
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
              "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(212,175,97,0.2) 0%, rgba(212,175,97,0.05) 100%)",
                border: "1px solid rgba(212,175,97,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
                boxShadow: "0 0 20px rgba(212,175,97,0.15)",
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
                  color: "#d4af61",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M029</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>CALLBACK DISPATCHER</span>
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
                Audition Callback Dispatcher &amp; Slot Scheduler
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
              { n: 1, label: "Format & Venue", sub: "Studio / Virtual" },
              { n: 2, label: "Slot Scheduling", sub: "Interval & Timing" },
              { n: 3, label: "Sides & Directives", sub: "Script Sides" },
              { n: 4, label: "Dispatch & Sync", sub: ".ICS Calendar" },
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
                          ? "rgba(212,175,97,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #d4af61"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#f4e2b8" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(212,175,97,0.4)" : "none",
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
                          color: isCurrent ? "#d4af61" : "#4a4a58",
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
          {/* STEP 1: Format & Venue */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Highlight Banner */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
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
                      color: "#d4af61",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    ROUND-2 CALLBACK AUDITIONS
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Screen Test Invitations
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#f4e2b8",
                    border: "1px solid rgba(212,175,97,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  MANDATORY SLOTTING
                </span>
              </div>

              {/* Format Toggle Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={() => setCallbackMode("in_person")}
                  style={{
                    padding: "18px",
                    borderRadius: "14px",
                    backgroundColor: callbackMode === "in_person" ? "#161626" : "#101018",
                    border:
                      callbackMode === "in_person"
                        ? "2px solid #d4af61"
                        : "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <MapPin size={18} color="#d4af61" />
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      In-Person Physical Studio
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                    Famous Studios Stage 4B, Mumbai. Live lighting tests and director interaction.
                  </p>
                </div>

                <div
                  onClick={() => setCallbackMode("virtual")}
                  style={{
                    padding: "18px",
                    borderRadius: "14px",
                    backgroundColor: callbackMode === "virtual" ? "#161626" : "#101018",
                    border:
                      callbackMode === "virtual"
                        ? "2px solid #d4af61"
                        : "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Video size={18} color="#34d399" />
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      Virtual HD Studio Suite
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                    End-to-end encrypted Rangmanch room with virtual green room lobby and direct side-by-side feed.
                  </p>
                </div>
              </div>

              {/* Venue Address Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  {callbackMode === "in_person" ? "STUDIO LOCATION & STAGE" : "VIRTUAL ROOM IDENTIFIER"}
                </label>
                <div
                  style={{
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    padding: "2px 14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {callbackMode === "in_person" ? (
                    <MapPin size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                  ) : (
                    <Video size={16} color="#34d399" style={{ marginRight: "10px", flexShrink: 0 }} />
                  )}
                  <input
                    type="text"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              {/* Statutory Legal Notice Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.06) 0%, rgba(14,14,20,0.6) 100%)",
                  border: "1px solid rgba(212,175,97,0.22)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#d4af61",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    <Lock size={14} />
                    <span>Studio Safety &amp; Audition Protocol (CINTAA Rider 14B)</span>
                  </div>
                  <span
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(212,175,97,0.15)",
                      color: "#f4e2b8",
                      border: "1px solid rgba(212,175,97,0.3)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    SAFE AUDITION CODE
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                  Under CINTAA Code of Conduct, performers may not be requested to execute unrehearsed stunts or unannounced intimate scenes without 48 hours prior notice and a certified intimacy coordinator present.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Slot Scheduling */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
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
                      color: "#d4af61",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    SLOT INTERVAL &amp; CALENDAR TIMING
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    4 Audition Slots Generated ({slotDuration} Min Intervals)
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(52,211,153,0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  AUTO-SEQUENCED
                </span>
              </div>

              {/* Form Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#9a9aa8",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    CALLBACK DATE
                  </label>
                  <div
                    style={{
                      backgroundColor: "#14141e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Calendar size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <input
                      type="date"
                      value={callbackDate}
                      onChange={(e) => setCallbackDate(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#9a9aa8",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    START TIME
                  </label>
                  <div
                    style={{
                      backgroundColor: "#14141e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Clock size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#9a9aa8",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    SLOT DURATION
                  </label>
                  <div
                    style={{
                      backgroundColor: "#14141e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "12px",
                      padding: "2px 14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <select
                      value={slotDuration}
                      onChange={(e) => setSlotDuration(Number(e.target.value))}
                      style={{
                        width: "100%",
                        padding: "10px 0",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        fontSize: "13px",
                      }}
                    >
                      <option value={15} style={{ backgroundColor: "#14141e" }}>15 Minutes</option>
                      <option value={20} style={{ backgroundColor: "#14141e" }}>20 Minutes</option>
                      <option value={30} style={{ backgroundColor: "#14141e" }}>30 Minutes</option>
                      <option value={45} style={{ backgroundColor: "#14141e" }}>45 Minutes</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Slot Roster Table */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {candidates.map((c, i) => (
                  <div
                    key={c.id}
                    onClick={() => toggleCandidate(c.id)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      backgroundColor: c.selected ? "#141422" : "#0d0d14",
                      border: c.selected
                        ? "1px solid rgba(212,175,97,0.3)"
                        : "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "6px",
                          backgroundColor: c.selected ? "#d4af61" : "transparent",
                          border: c.selected ? "1px solid #d4af61" : "1px solid rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#000",
                        }}
                      >
                        {c.selected && <Check size={12} strokeWidth={3} />}
                      </div>

                      <div
                        style={{
                          position: "relative",
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <Image src={c.photo} alt={c.name} fill className="object-cover" />
                      </div>

                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>{c.name}</div>
                        <div style={{ fontSize: "11px", color: "#8e8e98" }}>{c.role}</div>
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "monospace",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          backgroundColor: "rgba(212,175,97,0.15)",
                          color: "#f4e2b8",
                          border: "1px solid rgba(212,175,97,0.3)",
                        }}
                      >
                        {c.timeSlot}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Sides & Directives */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
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
                      color: "#d4af61",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    ATTACHED SCRIPT SIDES &amp; DIRECTOR DIRECTIVES
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    Encrypted Scene Sides Distribution
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(52,211,153,0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  AES-256 ENCRYPTED
                </span>
              </div>

              {/* Script Sides File Card */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  ATTACHED PDF SIDES
                </label>
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <FileText size={20} color="#d4af61" />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        {scriptSides}
                      </div>
                      <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                        2.4 MB • 4 Pages • Watermarked with performer Aadhaar hash
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(52,211,153,0.1)",
                      color: "#34d399",
                      border: "1px solid rgba(52,211,153,0.3)",
                    }}
                  >
                    ATTACHED
                  </span>
                </div>
              </div>

              {/* Director Preparation Instructions */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  DIRECTOR PREPARATION INSTRUCTIONS
                </label>
                <textarea
                  value={directorInstructions}
                  onChange={(e) => setDirectorInstructions(e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "12px",
                    lineHeight: 1.6,
                    outline: "none",
                  }}
                />
              </div>

              {/* Copyright Notice Card */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Shield size={16} color="#d4af61" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                  Script sides contain dynamic tamper-evident digital watermarks protected under the Indian Copyright Act 1957.
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Dispatch & Sync */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(52,211,153,0.3)",
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
                    {dispatched ? "ALL CALLBACK INVITES DISPATCHED" : "READY FOR AUDITION DISPATCH"}
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    {selectedProject} — Round-2 Callbacks
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    {selectedCount} performers • {callbackDate} • {callbackMode === "in_person" ? "Famous Studios Stage 4B" : "Virtual HD Room"}
                  </div>
                </div>
              </div>

              {/* Actions Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  onClick={handleDispatch}
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: dispatched ? "rgba(52,211,153,0.1)" : "#141422",
                    border: dispatched
                      ? "1px solid #10b981"
                      : "1px solid rgba(212,175,97,0.3)",
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
                      backgroundColor: dispatched
                        ? "rgba(52,211,153,0.2)"
                        : "rgba(212,175,97,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: dispatched ? "#34d399" : "#d4af61",
                    }}
                  >
                    {dispatched ? <Check size={22} /> : <Send size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      {dispatched ? "Callbacks Dispatched!" : "Dispatch All Callback Invites"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Sends SMS, WhatsApp, and Rangmanch notices
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleDownloadICS}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1b1b2e";
                    e.currentTarget.style.borderColor = "#d4af61";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#141422";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
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
                    <Download size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      Save to Calendar (.ICS)
                    </div>
                    <div style={{ fontSize: "11px", color: "#8e8e98", marginTop: "2px" }}>
                      Sync slots to Apple, Google &amp; Outlook
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
            <Shield size={14} color="#d4af61" />
            <span>256-BIT ENCRYPTED AUDITION PIPELINE</span>
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
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
                {step === 1 && "PROCEED TO SLOT SCHEDULING"}
                {step === 2 && "PROCEED TO SIDES & DIRECTIVES"}
                {step === 3 && "CONFIRM & DISPATCH CALLBACKS"}
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
                CLOSE DISPATCHER
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
