"use client";

import { useState } from "react";
import {
  X,
  TrendingUp,
  BarChart3,
  PieChart,
  Globe2,
  CheckCircle2,
  Download,
  AlertCircle,
  Award,
  Zap,
} from "lucide-react";

interface StarPowerAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function StarPowerAnalyticsModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: StarPowerAnalyticsModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [performerName, setPerformerName] = useState("Shivam Jadhav");
  const [bankabilityScore, setBankabilityScore] = useState(88.4);
  const [openingDayPotential, setOpeningDayPotential] = useState("₹12.5 - ₹16.0 Cr Day 1");
  const [ottFirstWeekend, setOttFirstWeekend] = useState("8.2 Million Unique Viewers");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(232, 121, 249, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(232, 121, 249, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Fuchsia Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #e879f9 25%, #f5d0fe 50%, #e879f9 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(232,121,249,0.2) 0%, rgba(232,121,249,0.05) 100%)",
                border: "1px solid rgba(232,121,249,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e879f9",
              }}
            >
              <TrendingUp size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#e879f9",
                  textTransform: "uppercase",
                }}
              >
                MODULE M061 • FEATURE 61
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
                Box Office &amp; OTT Star-Power Intelligence
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#e879f9", fontWeight: 600 }}>{defaultProject}</span> • Performer Bankability &amp; Pan-India Audience Analytics
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
            { step: 1, label: "Bankability Index" },
            { step: 2, label: "Demographic Reach" },
            { step: 3, label: "Genre Affinity" },
            { step: 4, label: "Investor Deck" },
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
                    ? "rgba(232,121,249,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(232,121,249,0.3)"
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
                    activeStep === item.step ? "#e879f9" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: BANKABILITY INDEX */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(232,121,249,0.05)",
                  border: "1px solid rgba(232,121,249,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Composite Bankability Quotient:</div>
                  <div style={{ fontSize: "32px", fontWeight: 700, color: "#e879f9", fontFamily: "monospace", marginTop: "2px" }}>
                    {bankabilityScore} / 100
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "4px 8px", background: "rgba(232,121,249,0.15)", color: "#e879f9", borderRadius: "6px" }}>
                    A-TIER HEADLINER
                  </span>
                  <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>High Theatrical Pre-Sales Conversion</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#0d0d14",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Domestic Box Office Opening Projection
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "6px" }}>
                    {openingDayPotential}
                  </div>
                  <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>
                    Based on 3,400 screen wide Pan-India release model
                  </div>
                </div>

                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#0d0d14",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    OTT Launch Weekend Ingestion
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "6px" }}>
                    {ottFirstWeekend}
                  </div>
                  <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>
                    Top 3 Trending Guaranteed on SVOD Catalog
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DEMOGRAPHIC REACH */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Territorial audience penetration across Indian theatrical circuits and OTT streaming hubs.
              </div>

              {[
                { territory: "North & NCR Circuit (Delhi, Punjab, UP)", share: "38%", rating: "Exceptional" },
                { territory: "Western Circuit (Mumbai, Gujarat, Pune)", share: "34%", rating: "Anchor Market" },
                { territory: "South Pan-India Dub (Telugu, Tamil, Kannada)", share: "18%", rating: "Rapid Growth" },
                { territory: "Eastern Circuit (Bengal, Bihar, Odisha)", share: "10%", rating: "Strong Mass Appeal" },
              ].map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{t.territory}</div>
                    <div style={{ fontSize: "11px", color: "#e879f9", marginTop: "2px" }}>{t.rating}</div>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", fontFamily: "monospace" }}>
                    {t.share}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: GENRE AFFINITY */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Audience retention index mapped against top commercial Bollywood / OTT genres.
              </div>

              {[
                { genre: "Action Thriller / Cop Universe", score: 96, verdict: "Highest ROI" },
                { genre: "Courtroom & Psychological Drama", score: 91, verdict: "Critical Acclaim" },
                { genre: "Epic Historical / Mythological Period", score: 84, verdict: "High Visual Resonance" },
                { genre: "Romantic Noir & Melodrama", score: 79, verdict: "Strong Youth Demographic" },
              ].map((g, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{g.genre}</div>
                    <div style={{ fontSize: "11px", color: "#34d399", marginTop: "2px" }}>{g.verdict}</div>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#e879f9", fontFamily: "monospace" }}>
                    {g.score}%
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: INVESTOR DECK */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(232,121,249,0.15)",
                  border: "1px solid rgba(232,121,249,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e879f9",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Casting Pitch &amp; Bankability Deck Ready
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Comprehensive investor pack with Ormax analytics, social sentiment tracking, and ROI multipliers for studio greenlighting.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH STAR-POWER & BANKABILITY DOSSIER\nProject: ${defaultProject}\nPerformer: ${performerName}\nBankability Score: ${bankabilityScore}/100\nOpening Potential: ${openingDayPotential}\nOTT Weekend Traction: ${ottFirstWeekend}\nTop Genre: Action Thriller (96% Resonance)\nAnchor Market: North & NCR (38%) + West (34%)\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `StarPower_Dossier_${performerName.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD INVESTOR CASTING PITCH DECK
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
            Step {activeStep} of 4 • Star-Power Intelligence
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
                CLOSE ANALYTICS ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

