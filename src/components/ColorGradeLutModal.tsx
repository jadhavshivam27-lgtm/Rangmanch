"use client";

import { useState } from "react";
import {
  X,
  Palette,
  Layers,
  SunMedium,
  CheckCircle2,
  Download,
  AlertCircle,
  Eye,
  Sliders,
} from "lucide-react";

interface ColorGradeLutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ColorGradeLutModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ColorGradeLutModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [colorSpace, setColorSpace] = useState("aces_cc");
  const [selectedLut, setSelectedLut] = useState("kodak_2383");
  const [targetGamut, setTargetGamut] = useState("dci_p3");

  if (!isOpen) return null;

  const lutPresets = [
    {
      id: "kodak_2383",
      name: "Kodak 2383 D65 Film Print Emulation",
      density: "Rich deep blacks, warm midtones, signature Hollywood skin roll-off",
      temp: "5600K Daylight",
    },
    {
      id: "fuji_eterna",
      name: "Fujifilm Eterna 500T Soft Pastel",
      density: "Subdued saturation, soft emerald shadows, elegant vintage skin tone",
      temp: "3200K Tungsten",
    },
    {
      id: "bleach_bypass",
      name: "Silver Halide Bleach Bypass Noir",
      density: "High silver grain retention, 200% contrast, hyper-desaturated colors",
      temp: "Chilly Monochrome Bias",
    },
    {
      id: "mumbai_monsoon",
      name: "Mumbai Monsoon High-Contrast Teal & Gold",
      density: "Deep wet asphalt blacks, neon amber reflections, moody rain grade",
      temp: "Dual Tone Spectrum",
    },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(249, 115, 22, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(249, 115, 22, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Orange Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #f97316 25%, #fed7aa 50%, #f97316 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0.05) 100%)",
                border: "1px solid rgba(249,115,22,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f97316",
              }}
            >
              <Palette size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#f97316",
                  textTransform: "uppercase",
                }}
              >
                MODULE M068 • FEATURE 68
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
                Color Grading LUT &amp; ACEScc Pipeline
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#f97316", fontWeight: 600 }}>{defaultProject}</span> • 3D 65-Point Cinema LUT Calibration
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
            { step: 1, label: "Color Space (ACES)" },
            { step: 2, label: "Film Stock LUTs" },
            { step: 3, label: "Gamut Check" },
            { step: 4, label: "LUT & CDL Export" },
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
                    ? "rgba(249,115,22,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(249,115,22,0.3)"
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
                    activeStep === item.step ? "#f97316" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: COLOR SPACE */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select the scene-linear Academy Color Encoding System (ACES) color science transform to ensure multi-camera color consistency.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { id: "aces_cc", name: "ACEScc (AP1 Log Metric)", desc: "Standard for DaVinci Resolve color grading wheels with smooth logarithmic response." },
                  { id: "aces_cct", name: "ACEScct (Toe Quasi-Log)", desc: "Preserves toe contrast for low-light noir and shadow detail adjustments." },
                  { id: "arri_logc4", name: "ARRI LogC4 Native Wide Gamut", desc: "Native sensor transform for modern Alexa 35 footage." },
                  { id: "red_ipp2", name: "REDWideGamutRGB / Log3G10", desc: "Full dynamic range preservation for V-Raptor 8K cameras." },
                ].map((cs) => (
                  <button
                    key={cs.id}
                    onClick={() => setColorSpace(cs.id)}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: colorSpace === cs.id ? "rgba(249,115,22,0.12)" : "rgba(255,255,255,0.03)",
                      border: colorSpace === cs.id ? "1px solid rgba(249,115,22,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      color: colorSpace === cs.id ? "#ffffff" : "#8a8a9a",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>{cs.name}</div>
                    <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>{cs.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: FILM STOCK LUTS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select a cinema film print emulation LUT. Generates 65-point 3D precision color response.
              </div>

              {lutPresets.map((l) => (
                <div
                  key={l.id}
                  onClick={() => setSelectedLut(l.id)}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: selectedLut === l.id ? "rgba(249,115,22,0.08)" : "rgba(255,255,255,0.02)",
                    border: selectedLut === l.id ? "1px solid rgba(249,115,22,0.4)" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{l.name}</div>
                    <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#f97316" }}>{l.temp}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "4px" }}>{l.density}</div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: GAMUT CHECK */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(52,211,153,0.05)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    DCI-P3 Theatrical Projector Compliance
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    0% Gamut Clipping • Rec.709 OTT Trim pass calibrated for Netflix 4K HDR delivery
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.15)", borderRadius: "6px" }}>
                  PASSED
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: LUT & CDL EXPORT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(249,115,22,0.15)",
                  border: "1px solid rgba(249,115,22,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f97316",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                3D LUT &amp; CDL Package Built
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                65x65x65 .CUBE File ready for DaVinci Resolve, Baselight, and on-set SmallHD monitors.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH 3D LUT & COLOR DECISION LIST (CDL)\nProject: ${defaultProject}\nColor Pipeline: ${colorSpace.toUpperCase()}\nEmulation: ${lutPresets.find(l => l.id === selectedLut)?.name}\nTarget Gamut: DCI-P3 & Rec.709\nLUT Size: 65x65x65 Point Precision\nCDL Slope: 1.042 / Offset: -0.012 / Power: 0.984 / Saturation: 1.08\nCreated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Cinema_LUT_${selectedLut}_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD 3D .CUBE LUT &amp; CDL MANIFEST
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
            Step {activeStep} of 4 • Color Science Suite
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
                APPLY LUT PREVIEW ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

