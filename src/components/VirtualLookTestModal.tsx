"use client";

import { useState } from "react";
import {
  X,
  Sparkles,
  Camera,
  Shirt,
  SunMedium,
  CheckCircle2,
  Download,
  AlertCircle,
  Eye,
  Palette,
} from "lucide-react";

interface VirtualLookTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function VirtualLookTestModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: VirtualLookTestModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedEra, setSelectedEra] = useState("retro_70s");
  const [lightingPreset, setLightingPreset] = useState("rembrandt");
  const [prostheticsMode, setProstheticsMode] = useState("subtle_scar");

  if (!isOpen) return null;

  const presets = [
    {
      id: "retro_70s",
      title: "1970s Bollywood Retro",
      wardrobe: "Wide-collar silk shirt, tinted aviators, bell-bottom slacks, vintage leather belt",
      palette: "Warm Sepia, Kodak 5247 Film Grain",
    },
    {
      id: "mughal_royal",
      title: "Mughal / Rajput Period Royal",
      wardrobe: "Hand-embroidered Zari Angarkha, pearl necklace, brocade turban with Kalgi",
      palette: "Deep Crimson & Gold, Regal Candlewash",
    },
    {
      id: "tactical_cop",
      title: "Modern Tactical Anti-Terror Unit",
      wardrobe: "Matte-black tactical vest, sidearm holster, radio harness, combat boots",
      palette: "Cool Cyan & Desaturated Steel Grey",
    },
    {
      id: "rural_noir",
      title: "Heartland Gritty Noir (Chambal / Bundelkhand)",
      wardrobe: "Khadi Kurta, checked Gamcha, dusty trench overcoat, weathered leather shoes",
      palette: "High Contrast Ochre & Harsh Sunlight",
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
          border: "1px solid rgba(244, 63, 94, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(244, 63, 94, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Rose Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #f43f5e 25%, #fecdd3 50%, #f43f5e 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(244,63,94,0.2) 0%, rgba(244,63,94,0.05) 100%)",
                border: "1px solid rgba(244,63,94,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f43f5e",
              }}
            >
              <Sparkles size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#f43f5e",
                  textTransform: "uppercase",
                }}
              >
                MODULE M057 • FEATURE 57
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
                AI Virtual Look-Test &amp; Period Costume Simulator
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#f43f5e", fontWeight: 600 }}>{defaultProject}</span> • Neural Wardrobe &amp; Era Prosthetics Pre-Viz
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
            { step: 1, label: "Physique & Mesh" },
            { step: 2, label: "Era Wardrobe" },
            { step: 3, label: "Lighting & Grade" },
            { step: 4, label: "Look-Test Dossier" },
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
                    ? "rgba(244,63,94,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(244,63,94,0.3)"
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
                    activeStep === item.step ? "#f43f5e" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: PHYSIQUE & MESH */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(244,63,94,0.05)",
                  border: "1px solid rgba(244,63,94,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Camera size={24} color="#f43f5e" />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    3D Face &amp; Body Mesh Ingested: Tanya Deshmukh
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Captured from 4K comp card • 468 Facial Landmarks mapped for photorealistic cloth deformation
                  </div>
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
                    Physical Specs Profile
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "12px", color: "#ffffff", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div>Height: <strong>5&apos;7&quot; (170 cm)</strong></div>
                    <div>Build: <strong>Athletic / Toned</strong></div>
                    <div>Skin Tone: <strong>Warm Olive</strong></div>
                    <div>Hair: <strong>Dark Wavy, Shoulder Length</strong></div>
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
                    Prosthetic Modification Preset
                  </div>
                  <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {[
                      { id: "natural", label: "Natural Clean Look (No Prosthetics)" },
                      { id: "subtle_scar", label: "Right Cheek Battle Scar (Combat)" },
                      { id: "aged_15yrs", label: "15-Year Age Progression (Grey Temple)" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProstheticsMode(p.id)}
                        style={{
                          padding: "6px 10px",
                          borderRadius: "6px",
                          fontSize: "11px",
                          textAlign: "left",
                          backgroundColor: prostheticsMode === p.id ? "rgba(244,63,94,0.15)" : "transparent",
                          border: prostheticsMode === p.id ? "1px solid #f43f5e" : "1px solid transparent",
                          color: prostheticsMode === p.id ? "#ffffff" : "#8a8a9a",
                          cursor: "pointer",
                        }}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ERA WARDROBE PRESETS */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select an era wardrobe package. Rangmanch AI renders fabric drape, tailoring texture, and period-authentic accessories.
              </div>

              {presets.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedEra(p.id)}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: selectedEra === p.id ? "rgba(244,63,94,0.08)" : "rgba(255,255,255,0.02)",
                    border: selectedEra === p.id ? "1px solid rgba(244,63,94,0.4)" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      {p.title}
                    </div>
                    {selectedEra === p.id && (
                      <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#f43f5e", padding: "2px 8px", background: "rgba(244,63,94,0.15)", borderRadius: "4px" }}>
                        SELECTED LOOK
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "6px" }}>
                    {p.wardrobe}
                  </div>
                  <div style={{ fontSize: "11px", color: "#d4af61", marginTop: "4px", fontFamily: "monospace" }}>
                    Film Stock / Palette: {p.palette}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: LIGHTING & GRADE */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Test the performer under various cinematographer key-light rigs and master color grades.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  {
                    id: "rembrandt",
                    title: "Classic Rembrandt Key Light",
                    desc: "Dramatic 45° key light with signature nose shadow triangle. Ideal for psychological confrontation scenes.",
                  },
                  {
                    id: "golden_hour",
                    title: "Sunset Golden Hour Exterior",
                    desc: "Warm rim light with diffused golden bounce. Perfect for emotional climax and romance sequences.",
                  },
                  {
                    id: "neon_noir",
                    title: "Mumbai Night Neon Noir",
                    desc: "Dual contrast cyan & magenta practical street neon glow with high moody contrast.",
                  },
                  {
                    id: "sterile_fluorescent",
                    title: "Hospital / Lab Overhead Fluorescent",
                    desc: "Clinical high-CRI white light with crisp shadows for interrogation and forensic drama.",
                  },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLightingPreset(l.id)}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: lightingPreset === l.id ? "rgba(244,63,94,0.12)" : "rgba(255,255,255,0.03)",
                      border: lightingPreset === l.id ? "1px solid rgba(244,63,94,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      color: lightingPreset === l.id ? "#ffffff" : "#8a8a9a",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 600 }}>{l.title}</div>
                    <div style={{ fontSize: "11px", color: "#606070", marginTop: "6px", lineHeight: 1.5 }}>{l.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: LOOK-TEST DOSSIER */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(244,63,94,0.15)",
                  border: "1px solid rgba(244,63,94,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f43f5e",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Look-Test Rendered &amp; Production Ready
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Dossier #LT-2026-904. Includes multi-angle 4K pre-viz stills, fabric texture breakdown, and lighting setups for the director and costume designer.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH VIRTUAL LOOK-TEST DOSSIER\nProject: ${defaultProject}\nPerformer: Tanya Deshmukh\nSelected Look: ${presets.find(p => p.id === selectedEra)?.title}\nWardrobe Breakdown: ${presets.find(p => p.id === selectedEra)?.wardrobe}\nLighting Rig: ${lightingPreset.toUpperCase()}\nProsthetics: ${prostheticsMode}\nResolution: 4K OpenEXR / 16-bit TIFF\nRendered on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `LookTest_${defaultProject.replace(/\s+/g, "_")}_Tanya.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD DIRECTOR LOOK-TEST DOSSIER
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
            Step {activeStep} of 4 • AI Look-Test Suite
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
                FINISH LOOK-TEST ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

