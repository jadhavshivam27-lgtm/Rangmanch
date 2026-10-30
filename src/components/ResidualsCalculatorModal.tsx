"use client";

import { useState } from "react";
import {
  X,
  Coins,
  Tv,
  Globe,
  TrendingUp,
  CheckCircle2,
  Download,
  AlertCircle,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

interface ResidualsCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ResidualsCalculatorModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ResidualsCalculatorModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [platform, setPlatform] = useState<"svod" | "satellite" | "avod">("svod");
  const [performerRole, setPerformerRole] = useState("lead");
  const [streamHours, setStreamHours] = useState("18.4 Million Hours");
  const [quarterPeriod, setQuarterPeriod] = useState("Q3 FY26 (Jul - Sep 2026)");
  const [grossRoyaltyPool, setGrossRoyaltyPool] = useState("₹45,00,000");
  const [performerSharePct, setPerformerSharePct] = useState("6.5%");
  const [netDisbursement, setNetDisbursement] = useState("₹2,92,500");
  const [tdsDeduction, setTdsDeduction] = useState("₹29,250 (10% Sec 194J)");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(167, 139, 250, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(167, 139, 250, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Violet Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #a78bfa 25%, #ddd6fe 50%, #a78bfa 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(167,139,250,0.05) 100%)",
                border: "1px solid rgba(167,139,250,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a78bfa",
              }}
            >
              <Coins size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#a78bfa",
                  textTransform: "uppercase",
                }}
              >
                MODULE M056 • FEATURE 56
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
                Secondary Royalties &amp; OTT Residuals Calculator
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#a78bfa", fontWeight: 600 }}>{defaultProject}</span> • Transparent Streaming Syndication Ledger
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
            { step: 1, label: "Platform & Territory" },
            { step: 2, label: "Streaming Telemetry" },
            { step: 3, label: "Performer Royalty Split" },
            { step: 4, label: "Quarterly Statement" },
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
                    ? "rgba(167,139,250,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(167,139,250,0.3)"
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
                    activeStep === item.step ? "#a78bfa" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: PLATFORM & TERRITORY */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select the distribution syndicate platform and territorial rights window governing secondary residual computations.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {[
                  {
                    id: "svod",
                    label: "SVOD Global (Netflix / Prime)",
                    sub: "Direct subscriber stream meter",
                    icon: Globe,
                  },
                  {
                    id: "satellite",
                    label: "Satellite Broadcast (Zee / Star)",
                    sub: "TRP rating & prime syndication",
                    icon: Tv,
                  },
                  {
                    id: "avod",
                    label: "AVOD & Regional Dubs (Jio)",
                    sub: "Ad revenue sharing ratio",
                    icon: TrendingUp,
                  },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id as any)}
                      style={{
                        padding: "16px",
                        borderRadius: "14px",
                        backgroundColor: platform === p.id ? "rgba(167,139,250,0.12)" : "rgba(255,255,255,0.03)",
                        border: platform === p.id ? "1px solid rgba(167,139,250,0.4)" : "1px solid rgba(255,255,255,0.08)",
                        color: platform === p.id ? "#ffffff" : "#8a8a9a",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <Icon size={20} color={platform === p.id ? "#a78bfa" : "#8a8a9a"} />
                      <div style={{ fontSize: "13px", fontWeight: 600, marginTop: "8px" }}>{p.label}</div>
                      <div style={{ fontSize: "11px", color: "#606070", marginTop: "2px" }}>{p.sub}</div>
                    </button>
                  );
                })}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Performer Billing Tier
                  </label>
                  <select
                    value={performerRole}
                    onChange={(e) => setPerformerRole(e.target.value)}
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
                  >
                    <option value="lead" style={{ background: "#101018" }}>Lead Cast Tier (6.5% - 8.0%)</option>
                    <option value="supporting" style={{ background: "#101018" }}>Key Supporting Tier (2.5% - 4.0%)</option>
                    <option value="character" style={{ background: "#101018" }}>Character &amp; Recurring Tier (1.0% - 2.0%)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Settlement Quarter
                  </label>
                  <input
                    type="text"
                    value={quarterPeriod}
                    onChange={(e) => setQuarterPeriod(e.target.value)}
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
            </div>
          )}

          {/* STEP 2: STREAMING TELEMETRY */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(167,139,250,0.05)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Quarterly Audited Stream Hours:</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#a78bfa", fontFamily: "monospace", marginTop: "2px" }}>
                    {streamHours}
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "4px 8px", background: "rgba(167,139,250,0.15)", color: "#a78bfa", borderRadius: "6px" }}>
                  BARC / ORMAX VERIFIED
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
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Gross Platform Licensing Base:</span>
                  <strong style={{ color: "#ffffff" }}>₹4,50,00,000 INR</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Total Talent Royalty Pool (10% standard):</span>
                  <strong style={{ color: "#a78bfa" }}>{grossRoyaltyPool}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Completion Factor:</span>
                  <strong style={{ color: "#34d399" }}>88.4% (Episodes 1 - 8)</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PERFORMER ROYALTY SPLIT */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Calculated Performer Royalty Share:</div>
                    <div style={{ fontSize: "22px", fontWeight: 700, color: "#a78bfa", fontFamily: "monospace", marginTop: "2px" }}>
                      {netDisbursement} INR
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "11px", color: "#8a8a9a" }}>TDS Deduction:</div>
                    <div style={{ fontSize: "13px", color: "#f87171", fontFamily: "monospace", marginTop: "4px" }}>
                      {tdsDeduction}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px", fontSize: "12px", color: "#a0a0b0" }}>
                  Net Pay Credited to Escrow Account: <strong style={{ color: "#34d399", fontFamily: "monospace" }}>₹2,63,250 INR</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: QUARTERLY STATEMENT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(167,139,250,0.15)",
                  border: "1px solid rgba(167,139,250,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a78bfa",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Secondary Residual Statement Ready
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Statement #RSD-2026-Q3. Certified by Ormax Media Audits &amp; CINTAA Royalty Division. Ready for bank disbursement.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH SECONDARY ROYALTIES & RESIDUALS STATEMENT\nDocket ID: #RSD-2026-Q3\nProject: ${defaultProject}\nPlatform: ${platform.toUpperCase()} Syndication\nPeriod: ${quarterPeriod}\nStream Metric: ${streamHours}\nGross Royalty Pool: ${grossRoyaltyPool}\nPerformer Share: ${performerSharePct} (${netDisbursement})\nTDS (Sec 194J): ${tdsDeduction}\nNet Payable: ₹2,63,250 INR\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Residuals_Statement_${defaultProject.replace(/\s+/g, "_")}_Q3.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD RESIDUAL STATEMENT &amp; TDS BREAKDOWN
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
            Step {activeStep} of 4 • Streaming Syndication Suite
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
                COMPLETE CALCULATION ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
