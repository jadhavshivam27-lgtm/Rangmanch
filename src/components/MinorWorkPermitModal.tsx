"use client";

import { useState } from "react";
import {
  X,
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Download,
  AlertCircle,
  Clock,
  UserCheck,
  Calendar,
} from "lucide-react";

interface MinorWorkPermitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function MinorWorkPermitModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: MinorWorkPermitModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [childName, setChildName] = useState("Aarav Sharma");
  const [childAge, setChildAge] = useState("10 Years");
  const [guardianName, setGuardianName] = useState("Sunita Sharma (Mother & Legal Guardian)");
  const [guardianAadhaar, setGuardianAadhaar] = useState("UID-****-9014");
  const [schoolNoc, setSchoolNoc] = useState("Bombay Scottish School, Mahim (NOC #SCH-8412)");
  const [shiftHours, setShiftHours] = useState("4 Hours 30 Mins (Max 5.0h Limit)");
  const [tutorSession, setTutorSession] = useState("1 Hour CBSE Curriculum on set (Completed)");
  const [curfewStatus, setCurfewStatus] = useState("Wrap scheduled at 05:30 PM (Prior to 07:00 PM statutory curfew)");
  const [trustFundAllocation, setTrustFundAllocation] = useState("50% (₹40,000 to Minor Fixed Escrow Trust)");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(56, 189, 248, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Cyan Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #38bdf8 25%, #bae6fd 50%, #38bdf8 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0.05) 100%)",
                border: "1px solid rgba(56,189,248,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
              }}
            >
              <ShieldCheck size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#38bdf8",
                  textTransform: "uppercase",
                }}
              >
                MODULE M055 • FEATURE 55
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
                Minor Performer Legal Guardian &amp; Education Compliance
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#38bdf8", fontWeight: 600 }}>{defaultProject}</span> • Statutory Child Labour Regulations (Amendment) Act
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
            { step: 1, label: "Guardian & School NOC" },
            { step: 2, label: "5-Hour Shift & Tutor" },
            { step: 3, label: "Child Welfare Sign-Off" },
            { step: 4, label: "50% Trust Account" },
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
                    ? "rgba(56,189,248,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(56,189,248,0.3)"
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
                    activeStep === item.step ? "#38bdf8" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: GUARDIAN & SCHOOL NOC */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(56,189,248,0.05)",
                  border: "1px solid rgba(56,189,248,0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <ShieldCheck size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "12px", color: "#c0c0d0", lineHeight: 1.6 }}>
                  Strict verification under the Child and Adolescent Labour (Prohibition and Regulation) Act. Every child artist must have authenticated guardian consent and school permissions.
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Minor Performer Name
                  </label>
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
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
                    Verified Age / DOB
                  </label>
                  <input
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
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
                  Legal Guardian Name &amp; Relationship
                </label>
                <input
                  type="text"
                  value={guardianName}
                  onChange={(e) => setGuardianName(e.target.value)}
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
                    Guardian Aadhaar KYC
                  </label>
                  <input
                    type="text"
                    value={guardianAadhaar}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#34d399",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    School Leave NOC Certificate
                  </label>
                  <input
                    type="text"
                    value={schoolNoc}
                    readOnly
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#38bdf8",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: 5-HOUR SHIFT & TUTOR */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Statutory working hour telemetry enforced on studio set. Real-time timer ensures minor does not exceed statutory threshold.
              </div>

              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Maximum Allowed Shift Window:</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#38bdf8", fontFamily: "monospace", marginTop: "2px" }}>
                    {shiftHours}
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "4px 8px", background: "rgba(56,189,248,0.15)", color: "#38bdf8", borderRadius: "6px" }}>
                  ● COMPLIANT TIMER ACTIVE
                </span>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <GraduationCap size={24} color="#d4af61" />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                    Mandatory On-Set Private Tutor Hour
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    {tutorSession}
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Clock size={24} color="#f59e0b" />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                    Evening Night Curfew Check
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    {curfewStatus}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CHILD WELFARE SIGN-OFF */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(52,211,153,0.05)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    Certified Child Psychologist On-Set Audit
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Dr. Ananya Sen (CINTAA Certified Minor Welfare Supervisor)
                  </div>
                </div>
                <span style={{ fontSize: "11px", color: "#34d399", padding: "4px 10px", borderRadius: "6px", background: "rgba(52,211,153,0.15)", fontWeight: 600 }}>
                  ✓ WELFARE CERTIFIED
                </span>
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
                  fontSize: "12px",
                  color: "#a0a0b0",
                }}
              >
                <div>• Zero adult intimidation or distressing content during filming.</div>
                <div>• Dedicated soundproof rest room with child recreational amenities.</div>
                <div>• Physical presence of legal guardian (Sunita Sharma) verified on monitor floor.</div>
                <div>• Medical officer standby with paediatric first-aid kit confirmed.</div>
              </div>
            </div>
          )}

          {/* STEP 4: 50% TRUST ACCOUNT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(56,189,248,0.15)",
                  border: "1px solid rgba(56,189,248,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Minor Protection Compliance Certified
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Permit #MNR-2026-8914. Statutory labour compliance verified and 50% escrow trust allocation locked for Aarav Sharma.
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
                <div><strong>Minor Performer:</strong> {childName} ({childAge})</div>
                <div><strong>Guardian:</strong> {guardianName} ({guardianAadhaar})</div>
                <div><strong>School Authorization:</strong> {schoolNoc}</div>
                <div><strong>Juvenile Escrow Trust Allocation:</strong> {trustFundAllocation}</div>
              </div>

              <button
                onClick={() => {
                  const content = `RANGMANCH MINOR PERFORMER STATUTORY WORK PERMIT\nPermit Docket: #MNR-2026-8914\nProject: ${defaultProject}\nChild Performer: ${childName} (Age: ${childAge})\nLegal Guardian: ${guardianName} (KYC: ${guardianAadhaar})\nSchool NOC: ${schoolNoc}\nShift Cap: ${shiftHours}\nCurfew Check: ${curfewStatus}\nTrust Fund Lock: ${trustFundAllocation}\nCertified by: Dr. Ananya Sen (Child Welfare Supervisor)\nDate: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Minor_Work_Permit_${childName.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD STATUTORY PERMIT CERTIFICATE
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
            Step {activeStep} of 4 • Minor Performer Welfare
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
                CLOSE PERMIT ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
