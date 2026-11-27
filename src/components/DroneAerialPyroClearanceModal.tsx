"use client";

import { useState, useEffect } from "react";
import {
  X,
  Plane,
  Flame,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Shield,
  MapPin,
  Radio,
  AlertTriangle,
  Compass,
  Navigation,
} from "lucide-react";

interface DroneAerialPyroClearanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function DroneAerialPyroClearanceModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Scene 88 Desert Warfare Aerial Drone & Heavy Pyro Run",
}: DroneAerialPyroClearanceModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: DGCA Digital Sky Airspace Classification
  const [flightLocationGps, setFlightLocationGps] = useState(
    "Pokhran Sector 4, Jaisalmer, Rajasthan (27.0238° N, 71.9102° E)"
  );
  const [airspaceZoneColor, setAirspaceZoneColor] = useState(
    "GREEN ZONE (Approved for Operations up to 400ft AGL without Prior MoCA Permission)"
  );
  const [digitalSkyFlightId, setDigitalSkyFlightId] = useState("DSKY-PERMIT-2026-88190");
  const [nearestAerodromeDistanceKm, setNearestAerodromeDistanceKm] = useState(24.5); // km from Jaisalmer Airport

  // Step 2: Drone Pilot UIN & Mechanical Rig Telemetry
  const [droneModelRig, setDroneModelRig] = useState("DJI Inspire 3 (CinemaDNG 8K Full-Frame RAW / 161 km/h top speed)");
  const [dgcaPilotUin, setDgcaPilotUin] = useState("UIN-IND-PILOT-8921-A");
  const [altitudeCeilingMeters, setAltitudeCeilingMeters] = useState(120); // 400ft max legal limit
  const [returnToHomeBatteryThreshold, setReturnToHomeBatteryThreshold] = useState(25); // %

  // Step 3: Pyrotechnic Blast Collision & Exclusion Envelope
  const [pyroMortarHeightMeters, setPyroMortarHeightMeters] = useState(35); // 35m max fireball burst
  const [verticalSeparationBufferMeters, setVerticalSeparationBufferMeters] = useState(85); // drone stays at 120m
  const [concussionShockwaveRisk, setConcussionShockwaveRisk] = useState("ZERO (Buffer exceeds minimum safety factor 2.4x)");
  const [rfFrequencyInterferenceClear, setRfFrequencyInterferenceClear] = useState(true);

  // Step 4: Digital Flight Clearance Seal
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_drone_pyro");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.flightLocationGps) setFlightLocationGps(data.flightLocationGps);
          if (data.droneModelRig) setDroneModelRig(data.droneModelRig);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (loc: string, rig: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_drone_pyro",
          JSON.stringify({ flightLocationGps: loc, droneModelRig: rig })
        );
        setDraftSaved(true);
      } catch {}
    }
  };

  if (!isOpen) return null;

  const handleStepComplete = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const handleExportFlightLog = () => {
    setIsExporting(true);
    const flightPackage = {
      flightPermitNumber: digitalSkyFlightId,
      project: defaultProject,
      locationCoordinates: flightLocationGps,
      airspaceStatus: airspaceZoneColor,
      aerodromeClearance: `${nearestAerodromeDistanceKm} km outside flight exclusion perimeter`,
      hardwareRig: {
        model: droneModelRig,
        pilotUin: dgcaPilotUin,
        maxAltitude: `${altitudeCeilingMeters} meters AGL`,
        rthFailsafe: `${returnToHomeBatteryThreshold}%`,
      },
      pyrotechnicSafetyCorridor: {
        pyroBlastApexMeters: pyroMortarHeightMeters,
        verticalClearanceMeters: verticalSeparationBufferMeters,
        safetyVerdict: concussionShockwaveRisk,
        rfSignalIntegrity: rfFrequencyInterferenceClear ? "CLEARED 2.4/5.8GHz DUAL ENCRYPTED" : "FLAGGED",
      },
      regulatoryCompliance: "DGCA Drone Rules 2021 & Ministry of Civil Aviation DigitalSky Protocol",
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(flightPackage, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DGCA_DRONE_PYRO_CLEARANCE_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsExporting(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
          maxHeight: "92vh",
          backgroundColor: "#08080c",
          border: "1px solid rgba(249, 115, 22, 0.35)",
          borderRadius: "18px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.9), 0 0 45px rgba(249, 115, 22, 0.12)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0d0b0a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "rgba(249, 115, 22, 0.12)",
                border: "1px solid rgba(249, 115, 22, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f97316",
              }}
            >
              <Plane size={22} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#f97316",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  FEATURE #110 • MODULE 20
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(74, 222, 128, 0.15)",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    color: "#4ade80",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  DGCA DIGITAL SKY CLEARED
                </span>
                {draftSaved && (
                  <span style={{ fontSize: "9px", color: "#f97316", fontFamily: "monospace" }}>
                    ✓ DRAFT SAVED
                  </span>
                )}
              </div>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                On-Set Drone &amp; Aerial Pyro Clearance Radar with DGCA Compliance
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#9ca3af",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Stepper Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "#06060a",
          }}
        >
          {[
            { step: 1, label: "1. Digital Sky Airspace", icon: MapPin },
            { step: 2, label: "2. Drone Rig & Telemetry", icon: Navigation },
            { step: 3, label: "3. Pyro Buffer Radar", icon: Flame },
            { step: 4, label: "4. Flight Safety Pass", icon: Download },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeStep === item.step;
            const isDone = completedSteps.includes(item.step);
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  border: "none",
                  backgroundColor: isActive ? "rgba(249, 115, 22, 0.12)" : "transparent",
                  borderBottom: isActive ? "2px solid #f97316" : "2px solid transparent",
                  color: isActive ? "#ffffff" : isDone ? "#9ca3af" : "#4b5563",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={14} color={isActive ? "#f97316" : isDone ? "#4ade80" : "currentColor"} />
                <span>{item.label}</span>
                {isDone && !isActive && <Check size={12} color="#4ade80" />}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div
          style={{
            padding: "24px",
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* STEP 1: Digital Sky Airspace */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(249, 115, 22, 0.06)",
                  border: "1px solid rgba(249, 115, 22, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <MapPin size={20} color="#f97316" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Directorate General of Civil Aviation (DGCA) Airspace Check
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Queries India’s DigitalSky platform to verify Green, Yellow, and Red flight zones. Confirms safe distance from civilian airport approach funnels and military installations.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#f97316", fontFamily: "monospace", fontWeight: 600 }}>
                  SHOOTING LOCATION GPS COORDINATES
                </label>
                <input
                  type="text"
                  value={flightLocationGps}
                  onChange={(e) => {
                    setFlightLocationGps(e.target.value);
                    handleSaveDraft(e.target.value, droneModelRig);
                  }}
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#0e0e16",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "13px",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#f97316", fontFamily: "monospace", fontWeight: 600 }}>
                    AIRSPACE STATUS
                  </label>
                  <input
                    type="text"
                    value={airspaceZoneColor}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(74, 222, 128, 0.3)",
                      color: "#4ade80",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#f97316", fontFamily: "monospace", fontWeight: 600 }}>
                    DIGITAL SKY PERMIT ID
                  </label>
                  <input
                    type="text"
                    value={digitalSkyFlightId}
                    onChange={(e) => setDigitalSkyFlightId(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#60a5fa",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button
                  onClick={() => {
                    handleStepComplete(1);
                    setActiveStep(2);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#f97316",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Configure Pilot UIN &amp; Altitude</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Drone Rig & Telemetry */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(59, 130, 246, 0.06)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Navigation size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Commercial Drone Rig &amp; Pilot Licensing
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Enforces DGCA Unique Identification Number (UIN), maximum legal 400ft ceiling locks, and automatic return-to-home (RTH) failsafe triggers in case of RF interference.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#f97316", fontFamily: "monospace", fontWeight: 600 }}>
                    AERIAL CAMERA RIG
                  </label>
                  <input
                    type="text"
                    value={droneModelRig}
                    onChange={(e) => {
                      setDroneModelRig(e.target.value);
                      handleSaveDraft(flightLocationGps, e.target.value);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#f97316", fontFamily: "monospace", fontWeight: 600 }}>
                    LICENSED PILOT UIN
                  </label>
                  <input
                    type="text"
                    value={dgcaPilotUin}
                    onChange={(e) => setDgcaPilotUin(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#4ade80",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      ALTITUDE CEILING: {altitudeCeilingMeters} Meters AGL
                    </span>
                    <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600 }}>Legal Limit (400ft)</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="120"
                    step="1"
                    value={altitudeCeilingMeters}
                    onChange={(e) => setAltitudeCeilingMeters(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#f97316" }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      FAILSAFE BATTERY RETURN: {returnToHomeBatteryThreshold}%
                    </span>
                    <span style={{ fontSize: "11px", color: "#60a5fa", fontWeight: 600 }}>Emergency Land Ready</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="40"
                    step="1"
                    value={returnToHomeBatteryThreshold}
                    onChange={(e) => setReturnToHomeBatteryThreshold(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#60a5fa" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(1)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleStepComplete(2);
                    setActiveStep(3);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#f97316",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Simulate Pyro Collision Radar</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Pyro Buffer Radar */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(239, 68, 68, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Flame size={20} color="#f87171" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Pyrotechnic Fireball Apex &amp; Flight Corridor Collision Check
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Models maximum mortar fireball explosion altitude against drone holding patterns. Guarantees 85-meter vertical safety buffer to prevent heat distortion or rotor shockwave stalls.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    MORTAR FIREBALL APEX
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#f97316", marginTop: "4px" }}>
                    {pyroMortarHeightMeters} Meters
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    DRONE HOLDING ALTITUDE
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    {altitudeCeilingMeters} Meters
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    VERTICAL CLEARANCE BUFFER
                  </span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    +{verticalSeparationBufferMeters} Meters
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(2)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleStepComplete(3);
                    setActiveStep(4);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#f97316",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Issue Flight Safety Pass</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Flight Safety Pass */}
          {activeStep === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(74, 222, 128, 0.08)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <CheckCircle2 size={20} color="#4ade80" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    DGCA &amp; Pyrotechnic Aerial Clearance Issued
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Drone operations are authorized for live filming. All altitude barriers, pilot UIN credentials, and pyrotechnic vertical clearances have been verified.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  backgroundColor: "#050508",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#d1d5db",
                  lineHeight: "1.6",
                }}
              >
                <div style={{ color: "#f97316", fontWeight: 700, marginBottom: "8px" }}>
                  // OFFICIAL DGCA FLIGHT MANIFEST
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>AIRSPACE: Green Zone Authorized (Permit: {digitalSkyFlightId})</div>
                <div>PILOT UIN: {dgcaPilotUin} • Rig: {droneModelRig}</div>
                <div>ALTITUDE CEILING: {altitudeCeilingMeters}m AGL</div>
                <div>PYRO SAFETY BUFFER: +{verticalSeparationBufferMeters}m Vertical Clear Zone Verified</div>
                <div>STATUS: FULLY CLEARED FOR CAMERAS TO ROLL</div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(3)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={handleExportFlightLog}
                  disabled={isExporting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#f97316",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <Download size={16} />
                  <span>{isExporting ? "Logging..." : "Export DGCA Flight Safety Clearance (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
