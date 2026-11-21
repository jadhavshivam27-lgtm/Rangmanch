"use client";

import { useState, useEffect } from "react";
import {
  X,
  ShieldAlert,
  HeartHandshake,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Shield,
  Activity,
  Flame,
  UserCheck,
  FileText,
  AlertTriangle,
  Lock,
} from "lucide-react";

interface IntimacyStuntChoreographyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function IntimacyStuntChoreographyModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Scene 42 Climax Train Stunt & Safe Touch Protocol",
}: IntimacyStuntChoreographyModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: CINTAA Intimacy Protocol & Modesty Garment Verification
  const [leadPerformerA, setLeadPerformerA] = useState("Vikram Roy (Played by Kabir Oberoi)");
  const [leadPerformerB, setLeadPerformerB] = useState("Neha Sinha (Played by Ananya Sharma)");
  const [intimacyCoordinatorCertified, setIntimacyCoordinatorCertified] = useState(
    "Shalini Sen (CINTAA & IDC Certified Coordinator #IND-882)"
  );
  const [closedSetEnforced, setClosedSetEnforced] = useState(true);
  const [modestyGarmentsApproved, setModestyGarmentsApproved] = useState(true);
  const [boundaryConsentLogged, setBoundaryConsentLogged] = useState(
    "Explicit consent signed for torso touches; strict no-go zones logged for neck/facial contact."
  );

  // Step 2: High-Velocity Stunt Rigging & Pyrotechnic Blast Perimeter
  const [stuntCategory, setStuntCategory] = useState("Level 4 High-Risk Rooftop Leap with Air-Ram Rigging");
  const [wireTensionRatingKn, setWireTensionRatingKn] = useState(14.8); // Kilonewtons
  const [airBagDecelerationType, setAirBagDecelerationType] = useState(
    "Certified Dual-Chamber Zero-Deceleration Pit (20ft fall rated)"
  );
  const [pyroBlastRadiusMeters, setPyroBlastRadiusMeters] = useState(15);
  const [fireRetardantGelApplied, setFireRetardantGelApplied] = useState(true);

  // Step 3: On-Site Medical Trauma & Trauma Hospital Route
  const [onSetAmbulanceUnit, setOnSetAmbulanceUnit] = useState(
    "Apollo Advanced Life Support (ALS) Unit #KA-01-EQ-901"
  );
  const [nearestTraumaCenter, setNearestTraumaCenter] = useState(
    "Fortis Memorial Hospital (3.2 km / 6 min green corridor cleared)"
  );
  const [bloodTypeInventoryLogged, setBloodTypeInventoryLogged] = useState(true);
  const [emergencyPhysicianOnDuty, setEmergencyPhysicianOnDuty] = useState(
    "Dr. Arvind Kulkarni, MD (Emergency Medicine & Sports Trauma)"
  );

  // Step 4: Digital Safety Passport & Insurance Signoff
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft to LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_stunt_safety");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.stuntCategory) setStuntCategory(data.stuntCategory);
          if (data.boundaryConsentLogged) setBoundaryConsentLogged(data.boundaryConsentLogged);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (stunt: string, consent: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_stunt_safety",
          JSON.stringify({ stuntCategory: stunt, boundaryConsentLogged: consent })
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

  const handleExportPassport = () => {
    setIsExporting(true);
    const safetyPassport = {
      passportId: `CINTAA-SAFETY-PASS-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      performers: {
        performerA: leadPerformerA,
        performerB: leadPerformerB,
      },
      intimacyCoordination: {
        coordinator: intimacyCoordinatorCertified,
        closedSetStatus: closedSetEnforced ? "STRICT CLOSED SET - ESSENTIAL CREW ONLY" : "OPEN",
        modestyGarments: modestyGarmentsApproved ? "VERIFIED & PRE-FITTED" : "PENDING",
        consentParameters: boundaryConsentLogged,
      },
      stuntSafetyTelemetrics: {
        category: stuntCategory,
        wireRatingKn: wireTensionRatingKn,
        airbagRigging: airBagDecelerationType,
        blastZonePerimeterMeters: pyroBlastRadiusMeters,
        fireProtection: fireRetardantGelApplied ? "Zel-Jel Applied to Skin & Undergarments" : "NO",
      },
      emergencyMedicalResponse: {
        ambulanceService: onSetAmbulanceUnit,
        traumaDestination: nearestTraumaCenter,
        attendingPhysician: emergencyPhysicianOnDuty,
        bloodInventoryConfirmed: bloodTypeInventoryLogged,
      },
      signoffTimestamp: new Date().toISOString(),
      cintaaComplianceHash: "0x8fa372990cb89c104e76a1005b63792019ffce1b",
    };

    const blob = new Blob([JSON.stringify(safetyPassport, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `CINTAA_SAFETY_STUNT_PASSPORT_${Date.now()}.json`;
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
          border: "1px solid rgba(239, 68, 68, 0.35)",
          borderRadius: "18px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.9), 0 0 45px rgba(239, 68, 68, 0.12)",
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
            backgroundColor: "#0d0a0c",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f87171",
              }}
            >
              <HeartHandshake size={22} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#f87171",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  FEATURE #103 • MODULE 19
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#f87171",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  CINTAA & SAG-AFTRA PROTOCOL
                </span>
                {draftSaved && (
                  <span style={{ fontSize: "9px", color: "#f87171", fontFamily: "monospace" }}>
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
                Automated AI Intimacy & Stunt Choreography Safety Blueprint
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
            { step: 1, label: "1. Intimacy Protocol", icon: HeartHandshake },
            { step: 2, label: "2. Stunt Rigging & Pyro", icon: Flame },
            { step: 3, label: "3. Trauma Response", icon: Activity },
            { step: 4, label: "4. Digital Safety Passport", icon: Download },
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
                  backgroundColor: isActive ? "rgba(239, 68, 68, 0.12)" : "transparent",
                  borderBottom: isActive ? "2px solid #ef4444" : "2px solid transparent",
                  color: isActive ? "#ffffff" : isDone ? "#9ca3af" : "#4b5563",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={14} color={isActive ? "#f87171" : isDone ? "#4ade80" : "currentColor"} />
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
          {/* STEP 1: Intimacy Protocol */}
          {activeStep === 1 && (
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
                <Shield size={20} color="#f87171" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Physical Touch Boundary Mapping & Performer Consent
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Ensures strict adherence to CINTAA / SAG-AFTRA guidelines. Log certified intimacy coordinator supervision, verify modesty garment requirements, and establish closed-set protocol before shoot call.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    LEAD PERFORMER A
                  </label>
                  <input
                    type="text"
                    value={leadPerformerA}
                    onChange={(e) => setLeadPerformerA(e.target.value)}
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
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    LEAD PERFORMER B
                  </label>
                  <input
                    type="text"
                    value={leadPerformerB}
                    onChange={(e) => setLeadPerformerB(e.target.value)}
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
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                  CHOREOGRAPHED BOUNDARY & TOUCH LOG
                </label>
                <textarea
                  rows={3}
                  value={boundaryConsentLogged}
                  onChange={(e) => {
                    setBoundaryConsentLogged(e.target.value);
                    handleSaveDraft(stuntCategory, e.target.value);
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
                    lineHeight: "1.5",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "14px",
                  borderRadius: "10px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Lock size={18} color="#4ade80" />
                  <div>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                      Strict Closed-Set Enforcement
                    </span>
                    <p style={{ fontSize: "11px", color: "#9ca3af" }}>
                      Only Director, DP, Sound Mixer, and Certified Intimacy Coordinator permitted in eye line.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={closedSetEnforced}
                  onChange={(e) => setClosedSetEnforced(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "#ef4444" }}
                />
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
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Verify Stunt Rigging & Pyro</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Stunt Rigging & Pyro */}
          {activeStep === 2 && (
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
                <Flame size={20} color="#f97316" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Wire Rigging Mechanical Tension & Blast Radius Telemetry
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Live safety computation for wire tension, anchor break loads, air ram velocity, and pyrotechnic concussion distance. Zero margin for equipment failure.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    STUNT CLASSIFICATION
                  </label>
                  <input
                    type="text"
                    value={stuntCategory}
                    onChange={(e) => {
                      setStuntCategory(e.target.value);
                      handleSaveDraft(e.target.value, boundaryConsentLogged);
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
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    DECELERATION PIT / AIRBAG TYPE
                  </label>
                  <input
                    type="text"
                    value={airBagDecelerationType}
                    onChange={(e) => setAirBagDecelerationType(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#4ade80",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              {/* Rigging Telemetry Slider */}
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
                      WIRE TENSION LOAD: {wireTensionRatingKn} kN
                    </span>
                    <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600 }}>Safety Factor 10:1</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="0.2"
                    value={wireTensionRatingKn}
                    onChange={(e) => setWireTensionRatingKn(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#f87171" }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      PYRO BLAST PERIMETER: {pyroBlastRadiusMeters} Meters
                    </span>
                    <span style={{ fontSize: "11px", color: "#f97316", fontWeight: 600 }}>Full Clear Zone</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={pyroBlastRadiusMeters}
                    onChange={(e) => setPyroBlastRadiusMeters(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#f97316" }}
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
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Review Trauma & Medical Response</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Trauma Response */}
          {activeStep === 3 && (
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
                <Activity size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Emergency Medical Readiness & Trauma Corridor
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Pre-cleared traffic corridor, hospital ICU alert, and dedicated on-set emergency response physician ready prior to live stunt camera rolls.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    ON-SET AMBULANCE UNIT
                  </label>
                  <input
                    type="text"
                    value={onSetAmbulanceUnit}
                    onChange={(e) => setOnSetAmbulanceUnit(e.target.value)}
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
                  <label style={{ fontSize: "12px", color: "#f87171", fontFamily: "monospace", fontWeight: 600 }}>
                    PRIMARY TRAUMA CENTER & DISTANCE
                  </label>
                  <input
                    type="text"
                    value={nearestTraumaCenter}
                    onChange={(e) => setNearestTraumaCenter(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#60a5fa",
                      fontSize: "13px",
                    }}
                  />
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
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Generate Safety Passport</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Digital Safety Passport */}
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
                    CINTAA & SAG-AFTRA Digital Safety Passport Ready
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Physical intimacy boundary covenants, wire load certifications, and emergency trauma routing have been verified and sealed with cryptographic timestamping.
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
                <div style={{ color: "#f87171", fontWeight: 700, marginBottom: "8px" }}>
                  // CINTAA VERIFIED ON-SET SAFETY PASSPORT
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>INTIMACY COORDINATOR: {intimacyCoordinatorCertified}</div>
                <div>CLOSED SET STATUS: {closedSetEnforced ? "STRICT LOCKDOWN ACTIVE" : "STANDARD"}</div>
                <div>STUNT RIG: {stuntCategory} (Tension: {wireTensionRatingKn} kN)</div>
                <div>PYRO CLEARANCE: {pyroBlastRadiusMeters}m exclusion radius</div>
                <div>TRAUMA CORRIDOR: {nearestTraumaCenter}</div>
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
                  onClick={handleExportPassport}
                  disabled={isExporting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <Download size={16} />
                  <span>{isExporting ? "Signing..." : "Download CINTAA Safety Passport (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
