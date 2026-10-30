"use client";

import { useState } from "react";
import {
  X,
  FileSignature,
  ShieldCheck,
  CheckCircle2,
  Download,
  AlertCircle,
  Clock,
  Coins,
  ChevronRight,
  Stamp,
  Lock,
} from "lucide-react";

interface ContractGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ContractGeneratorModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ContractGeneratorModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [performerName, setPerformerName] = useState("Tanya Deshmukh");
  const [guildId, setGuildId] = useState("CINTAA-94812");
  const [remunerationType, setRemunerationType] = useState<"daily" | "lumpsum">("daily");
  const [dailyRate, setDailyRate] = useState("₹75,000");
  const [shootDays, setShootDays] = useState("24 Days");
  const [overtimeRate, setOvertimeRate] = useState("1.5x (after 12 hrs)");
  const [restPeriod, setRestPeriod] = useState("12 Hours minimum turnaround");
  const [creditPosition, setCreditPosition] = useState("Main Title Card (Single Card)");
  const [clausesAccepted, setClausesAccepted] = useState<string[]>([
    "cintaa_arbitration",
    "prompt_escrow_disbursement",
    "moral_conduct",
  ]);
  const [isSigned, setIsSigned] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  if (!isOpen) return null;

  const toggleClause = (id: string) => {
    setClausesAccepted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Trim */}
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
              }}
            >
              <FileSignature size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#d4af61",
                  textTransform: "uppercase",
                }}
              >
                MODULE M052 • FEATURE 52
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
                Standard Digital Actor Contract &amp; CINTAA Stamp
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#d4af61", fontWeight: 600 }}>{defaultProject}</span> • Standard Guild Performer Legal Agreement
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
            { step: 1, label: "Remuneration Terms" },
            { step: 2, label: "CINTAA Guild Riders" },
            { step: 3, label: "Aadhaar eSign & Stamp" },
            { step: 4, label: "Executed Legal Vault" },
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
                    ? "rgba(212,175,97,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(212,175,97,0.3)"
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
                    activeStep === item.step ? "#d4af61" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: REMUNERATION TERMS */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(212,175,97,0.05)",
                  border: "1px solid rgba(212,175,97,0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <ShieldCheck size={20} color="#d4af61" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "12px", color: "#c0c0d0", lineHeight: 1.6 }}>
                  Standard CINTAA / WICA Model Performer Agreement for feature films and accredited OTT originals. Remuneration is backed by 100% Rangmanch Smart Escrow.
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Lead Performer Name
                  </label>
                  <input
                    type="text"
                    value={performerName}
                    onChange={(e) => setPerformerName(e.target.value)}
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
                    CINTAA Guild Membership ID
                  </label>
                  <input
                    type="text"
                    value={guildId}
                    onChange={(e) => setGuildId(e.target.value)}
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Compensation Model
                  </label>
                  <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                    <button
                      onClick={() => setRemunerationType("daily")}
                      style={{
                        flex: 1,
                        padding: "8px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        backgroundColor: remunerationType === "daily" ? "#d4af61" : "rgba(255,255,255,0.05)",
                        color: remunerationType === "daily" ? "#000" : "#fff",
                        border: "none",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Daily Rate
                    </button>
                    <button
                      onClick={() => setRemunerationType("lumpsum")}
                      style={{
                        flex: 1,
                        padding: "8px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        backgroundColor: remunerationType === "lumpsum" ? "#d4af61" : "rgba(255,255,255,0.05)",
                        color: remunerationType === "lumpsum" ? "#000" : "#fff",
                        border: "none",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Lump Sum
                    </button>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Agreed Scale
                  </label>
                  <input
                    type="text"
                    value={dailyRate}
                    onChange={(e) => setDailyRate(e.target.value)}
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
                    Shoot Window Duration
                  </label>
                  <input
                    type="text"
                    value={shootDays}
                    onChange={(e) => setShootDays(e.target.value)}
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

              <div
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
                  <div style={{ fontSize: "12px", color: "#8a8a9a" }}>Total Estimated Escrow Commitment:</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#d4af61", fontFamily: "monospace", marginTop: "2px" }}>
                    ₹18,00,000 INR
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", borderRadius: "6px", background: "rgba(52,211,153,0.1)" }}>
                    ● 100% ESCROW ALLOCATED
                  </div>
                  <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>Disbursement via Milestone Trigger</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CINTAA GUILD RIDERS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select and customize standard mandatory actor rider provisions protected under the Cine &amp; TV Artists Association (CINTAA) charter.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Overtime Multiplier Rule
                  </label>
                  <input
                    type="text"
                    value={overtimeRate}
                    onChange={(e) => setOvertimeRate(e.target.value)}
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
                    Mandatory Rest Turnaround
                  </label>
                  <input
                    type="text"
                    value={restPeriod}
                    onChange={(e) => setRestPeriod(e.target.value)}
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
                  Screen Credit Guarantee Placement
                </label>
                <input
                  type="text"
                  value={creditPosition}
                  onChange={(e) => setCreditPosition(e.target.value)}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Mandatory Standard Protective Clauses
                </label>

                {[
                  {
                    id: "cintaa_arbitration",
                    title: "Joint Dispute Settlement via CINTAA Dispute Committee",
                    desc: "Any scheduling conflict or breach will be resolved within 14 days under binding industry tribunal.",
                  },
                  {
                    id: "prompt_escrow_disbursement",
                    title: "Daily Overtime & Per Diem Same-Day UPI Escrow Payout",
                    desc: "Overtime payments release automatically within 4 hours of director wrap log timecode.",
                  },
                  {
                    id: "moral_conduct",
                    title: "Zero Harassment & POSH Compliance Policy",
                    desc: "Strict adherence to Prevention of Sexual Harassment on all studio floors and outstation sets.",
                  },
                  {
                    id: "dubbing_option",
                    title: "First Right of Refusal on Performer Voiceover Dubbing",
                    desc: "The performer retains first right to dub their character across Hindi, Telugu, and Tamil cuts.",
                  },
                ].map((clause) => (
                  <div
                    key={clause.id}
                    onClick={() => toggleClause(clause.id)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "10px",
                      backgroundColor: clausesAccepted.includes(clause.id)
                        ? "rgba(212,175,97,0.08)"
                        : "rgba(255,255,255,0.02)",
                      border: clausesAccepted.includes(clause.id)
                        ? "1px solid rgba(212,175,97,0.3)"
                        : "1px solid rgba(255,255,255,0.06)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={clausesAccepted.includes(clause.id)}
                      readOnly
                      style={{ marginTop: "3px", accentColor: "#d4af61" }}
                    />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                        {clause.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                        {clause.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: AADHAAR ESIGN & DIGITAL STAMP */}
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
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <Stamp size={28} color="#34d399" />
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                      Maharashtra NeSL e-Stamp #ST-2026-9041A
                    </div>
                    <div style={{ fontSize: "11px", color: "#8a8a9a" }}>
                      Duty Paid: ₹500 INR • Legal Non-Judicial Stamp Authenticated
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "4px 8px", background: "rgba(52,211,153,0.15)", color: "#34d399", borderRadius: "6px" }}>
                  VERIFIED STAMP
                </span>
              </div>

              <div
                style={{
                  padding: "20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                    Aadhaar OTP e-Sign Gateway (UIDAI Encrypted)
                  </div>
                  <Lock size={16} color="#d4af61" />
                </div>

                <div style={{ fontSize: "12px", color: "#8a8a9a", lineHeight: 1.6 }}>
                  A verification code has been dispatched to the performer registered mobile number ending with <strong style={{ color: "#ffffff" }}>•••• •••• 8412</strong>.
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontSize: "14px",
                      letterSpacing: "0.2em",
                      fontFamily: "monospace",
                    }}
                  />
                  <button
                    onClick={() => {
                      if (otpCode.length >= 4) {
                        setOtpVerified(true);
                        setIsSigned(true);
                      }
                    }}
                    className="btn-cinema-gold"
                    style={{ padding: "0 20px", fontSize: "12px", height: "42px" }}
                  >
                    VERIFY &amp; EXECUTE
                  </button>
                </div>

                {otpVerified && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#34d399", fontSize: "12px", fontWeight: 600 }}>
                    <CheckCircle2 size={16} /> Digital Signature Affixed: Tanya Deshmukh (Aadhaar Ref: UID-****-8412)
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: EXECUTED LEGAL VAULT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(212,175,97,0.15)",
                  border: "1px solid rgba(212,175,97,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af61",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                CINTAA Actor Agreement Legally Executed
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Contract #RGM-CTR-90214 has been cryptographically signed, timestamped on the Rangmanch legal ledger, and synchronized with Production Escrow.
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
                <div><strong>Production:</strong> {defaultProject}</div>
                <div><strong>Performer:</strong> {performerName} ({guildId})</div>
                <div><strong>Rate:</strong> {dailyRate} ({shootDays})</div>
                <div><strong>Riders:</strong> {overtimeRate} • {restPeriod}</div>
                <div><strong>Credit:</strong> {creditPosition}</div>
                <div><strong>Stamp Docket:</strong> NeSL #ST-2026-9041A (Verified)</div>
              </div>

              <button
                onClick={() => {
                  const content = `RANGMANCH STANDARD ACTOR AGREEMENT\nDocket ID: #RGM-CTR-90214\nProject: ${defaultProject}\nPerformer: ${performerName}\nGuild ID: ${guildId}\nCompensation: ${dailyRate} for ${shootDays}\nOvertime Terms: ${overtimeRate}\nRest Turnaround: ${restPeriod}\nCredit Placement: ${creditPosition}\nClauses: ${clausesAccepted.join(", ")}\nStamp Paper: NeSL #ST-2026-9041A\nSignature Status: Aadhaar eSign UID-****-8412\nDate: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Actor_Agreement_${performerName.replace(/\s+/g, "_")}_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD EXECUTED CONTRACT (PDF / TEXT)
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
            Step {activeStep} of 4 • CINTAA Performer Contract Suite
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
                COMPLETE CONTRACT ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

